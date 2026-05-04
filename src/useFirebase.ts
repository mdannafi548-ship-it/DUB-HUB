import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, doc, onSnapshot, setDoc, deleteDoc } from 'firebase/firestore';

export function useFirebaseCollection<T extends { id: number | string }>(collectionName: string) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, collectionName), (snapshot) => {
      setData(snapshot.docs.map(doc => ({ ...doc.data() } as T)));
    }, (error) => {
      console.error("Firebase Snapshot Error:", error);
    });
    return () => unsub();
  }, [collectionName]);

  const add = async (item: T) => {
    try {
      await setDoc(doc(db, collectionName, String(item.id)), item);
    } catch (e) {
      console.error(e);
      alert("Error saving: " + e);
    }
  };

  const remove = async (id: number | string) => {
    try {
      await deleteDoc(doc(db, collectionName, String(id)));
    } catch (e) {
      console.error(e);
      alert("Error deleting: " + e);
    }
  };

  const updateList = async (newList: T[]) => {
    // This is primarily for things where we replace the list
    // or re-map. For this app, normally we edit one document at a time.
    for (const item of newList) {
      add(item);
    }
  };

  return [data, add, remove, updateList] as const;
}

export function useFirebaseDoc<T>(collectionName: string, docId: string, initialValue: T) {
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, collectionName, docId), (doc) => {
      if (doc.exists()) {
        setData({ ...initialValue, ...doc.data() });
      }
    });
    return () => unsub();
  }, [collectionName, docId]); // initialValue is stable

  const update = async (val: T) => {
    try {
      await setDoc(doc(db, collectionName, docId), val, { merge: true });
    } catch(e) {
      console.error(e);
    }
  };

  return [data, update] as const;
}
