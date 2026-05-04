import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  if (errInfo.error.includes("Missing or insufficient permissions")) {
    console.error("Firestore Permission Denied! Because you are using your own Firebase project (dub-hub-9cc39), you need to update your Security Rules in the Firebase Console. Go to Firebase Console -> Firestore Database -> Rules and temporarily set: allow read, write: if true;");
  }
}

export function useFirebaseCollectionSync<T extends {id: number|string}>(colName: string): [T[], React.Dispatch<React.SetStateAction<T[]>>] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, colName), (snap) => {
      setData(snap.docs.map(d => d.data() as T).sort((a, b) => Number(a.id) - Number(b.id)));
    }, (error) => handleFirestoreError(error, OperationType.GET, colName));
    return () => unsub();
  }, [colName]);

  const setServerData = (action: React.SetStateAction<T[]>) => {
    setData((prev) => {
      const next = typeof action === 'function' ? (action as any)(prev) : action;
      
      const prevIds = new Set(prev.map(i => String(i.id)));
      const nextIds = new Set(next.map(i => String(i.id)));
      
      for (const p of prev) {
         if (!nextIds.has(String(p.id))) {
           deleteDoc(doc(db, colName, String(p.id))).catch(e => handleFirestoreError(e, OperationType.DELETE, `${colName}/${p.id}`));
         }
      }
      for (const n of next) {
         setDoc(doc(db, colName, String(n.id)), n).catch(e => handleFirestoreError(e, OperationType.WRITE, `${colName}/${n.id}`));
      }
      return next;
    });
  };

  return [data, setServerData];
}

export function useFirebaseDocSync<T>(docPath: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [col, id] = docPath.split('/');
  const [state, setState] = useState<T>(initialValue);

  const isPrimitive = typeof initialValue !== 'object' || initialValue === null;

  useEffect(() => {
    const unsub = onSnapshot(doc(db, col, id), (d) => {
      if (d.exists()) {
        const data = d.data();
        if (isPrimitive) {
          setState((data && data.value !== undefined ? data.value : initialValue) as T);
        } else {
          setState({ ...initialValue, ...(data as T) });
        }
      } else {
        // If it doesn't exist, push the initial value
        setDoc(doc(db, col, id), isPrimitive ? { value: initialValue } : initialValue).catch(e => console.warn("Failed initial setDoc", e));
      }
    }, (error) => handleFirestoreError(error, OperationType.GET, docPath));
    return () => unsub();
  }, [col, id]); // Intentionally leaving out initialValue mapping so it doesn't re-run in loop

  const setServerState = (action: React.SetStateAction<T>) => {
    setState(prev => {
      const next = typeof action === 'function' ? (action as any)(prev) : action;
      setDoc(doc(db, col, id), isPrimitive ? { value: next } : next).catch(e => handleFirestoreError(e, OperationType.WRITE, docPath));
      return next;
    });
  };
  return [state, setServerState];
}
