import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Link as LinkIcon, X, Check, LogOut, Settings, Users, Key, Monitor, Edit, Play, Search, Maximize, RotateCcw, FastForward, Rewind, Pause, Tv, Menu, Download, Volume2, VolumeX } from 'lucide-react';

type AppData = { id: number; name: string; email: string; fb: string; hobby: string; image?: string };
type Member = AppData & { rank: string; special: boolean };
type Follower = { id: number; name: string; fb: string; image?: string };

type Clip = { id: number; title: string; thumbSrc: string; videoSrc: string; };
type Episode = { id: number; animeName: string; season: string; title: string; thumbSrc: string; videoSrc: string; };

const rankData: Record<string, string> = {
  "Moderator": "#ff4d6d",
  "Unknown": "#1e90ff",
  "C": "#ff8c00",
  "B": "#cd7f32",
  "A": "#9b59b6",
  "S": "#c0c0c0",
  "Immortal/SS": "#ffd700"
};

const rankOrder = ["Immortal/SS", "S", "A", "B", "C", "Unknown"];

import { useFirebaseCollectionSync, useFirebaseDocSync } from './useFirebaseSync';
import { storage } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function App() {
  const [recruitmentApps, setRecruitmentApps] = useFirebaseCollectionSync<AppData>('recruitment');
  const [members, setMembers] = useFirebaseCollectionSync<Member>('members');
  const [followers, setFollowers] = useFirebaseCollectionSync<Follower>('followers');
  const [followerApps, setFollowerApps] = useFirebaseCollectionSync<Follower>('followerApps');
  const [socials, setSocials] = useFirebaseCollectionSync<{id: string, name: string, url: string}>('socials');
  const [footerLinks, setFooterLinks] = useFirebaseCollectionSync<{id: number; name: string, url: string}>('footerLinks');
  const [linkForm, setLinkForm] = useState({name: '', url: ''});
  
  const [clips, setClips] = useFirebaseCollectionSync<Clip>('clips');
  const [episodes, setEpisodes] = useFirebaseCollectionSync<Episode>('episodes');

  const [adminPass, setAdminPass] = useFirebaseDocSync('config/adminPass', "NAFIJR.01");
  const [isLogged, setIsLogged] = useState(false);
  const [modal, setModal] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [stats, setStats] = useFirebaseDocSync('stats/dub-hub-stats', {
    projects: "60+",
    artists: "65+",
    members: "8K+"
  });

  const [webConfig, setWebConfig] = useFirebaseDocSync('config/webParams', {
    title: "BRINGING\nANIME\nTO LIFE",
    desc: "Professional Bengali dubbing. Quality meets passion.",
    about: "DUB HUB is a leading Bengali Anime Dubbing platform where passion meets creativity.",
    adminName: "N A F I",
    adminBio: "Founder & Director",
    adminColor: "admin-multiple",
    adminImage: "/logo.png"
  });

  const [newPassForm, setNewPassForm] = useState("");
  const [loginPass, setLoginPass] = useState("");
  
  const [joinForm, setJoinForm] = useState({ name: '', email: '', fb: '', hobby: '', image: '' });
  
  const [followerForm, setFollowerForm] = useState({ name: '', fb: '', image: '' });

  const [socialForm, setSocialForm] = useState({ name: '', url: '' });

  // Admin Video Forms
  const [clipForm, setClipForm] = useState({ title: '', thumbSrc: '', videoSrc: '' });
  const [epiForm, setEpiForm] = useState({ animeName: '', season: '', title: '', thumbSrc: '', videoSrc: '' });

  // Admin Dashboard State
  const [teamSearch, setTeamSearch] = useState("");
  const [followerListSearch, setFollowerListSearch] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginStep, setLoginStep] = useState(1);

  // Viewing State
  const [viewRoute, setViewRoute] = useState<'home' | 'clips' | 'anime'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Player State
  const [activeVideo, setActiveVideo] = useState<{ type: 'clip'|'episode', id: number } | null>(null);

  const [showAllClips, setShowAllClips] = useState(false);
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);

  const handleLogin = () => {
    if (loginPass === adminPass) {
      setIsLogged(true);
      setModal('dashboard');
      setLoginPass("");
      setLoginStep(1);
      setLoginEmail("");
    } else {
      alert("Wrong Password!");
    }
  };

  const handleVerifyAdmin = () => {
    const isMasterAdmin = loginEmail.toLowerCase() === 'admin' || loginEmail.toLowerCase() === webConfig.adminName.toLowerCase();
    const isTeamAdmin = members.some(m => (m.email.toLowerCase() === loginEmail.toLowerCase() || m.name.toLowerCase() === loginEmail.toLowerCase()) && m.rank === "Admin");
    
    if (isMasterAdmin || isTeamAdmin) {
      setLoginStep(2);
    } else {
      alert("Verification Failed. You are not an Admin!");
    }
  };

  const submitApp = () => {
    if (!joinForm.name || !joinForm.email || !joinForm.fb || !joinForm.hobby) {
      return alert("Bhai, sob gulo thik moto puron koro!");
    }
    setRecruitmentApps([...recruitmentApps, { id: Date.now(), ...joinForm, image: joinForm.image || "/logo.png" }]);
    alert("Application Sent!");
    setModal(null);
    setJoinForm({ name: '', email: '', fb: '', hobby: '', image: '' });
  };

  const submitFollower = () => {
    if (!followerForm.name || !followerForm.fb) {
      return alert("Please fill all details!");
    }
    setFollowerApps([...followerApps, { id: Date.now(), ...followerForm, image: followerForm.image || "/logo.png" }]);
    alert("Application to join as follower sent!");
    setModal(null);
    setFollowerForm({ name: '', fb: '', image: '' });
  };

  const acceptFollower = (id: number) => {
    const app = followerApps.find(a => a.id === id);
    if (app) {
      setFollowers([...followers, app]);
      setFollowerApps(followerApps.filter(a => a.id !== id));
    }
  };

  const rejectFollower = (id: number) => {
    setFollowerApps(followerApps.filter(a => a.id !== id));
  };

  const removeFollower = (id: number) => {
    if (confirm("Are you sure you want to remove this follower?")) {
      setFollowers(followers.filter(f => f.id !== id));
    }
  };

  const acceptMember = (id: number) => {
    const app = recruitmentApps.find(a => a.id === id);
    if (app) {
      setMembers([...members, { ...app, rank: "Unknown", special: false }]);
      setRecruitmentApps(recruitmentApps.filter(a => a.id !== id));
    }
  };

  const handleAddClip = () => {
    if (!clipForm.title || !clipForm.thumbSrc || !clipForm.videoSrc) return alert('Please fill all fields');
    const newClip: Clip = {
      id: Date.now(),
      title: clipForm.title,
      thumbSrc: clipForm.thumbSrc,
      videoSrc: clipForm.videoSrc
    };
    setClips([...clips, newClip]);
    setClipForm({ title: '', thumbSrc: '', videoSrc: '' });
    alert('Clip Added!');
  };

  const handleAddEpisode = () => {
    if (!epiForm.animeName || !epiForm.season || !epiForm.title || !epiForm.thumbSrc || !epiForm.videoSrc) return alert('Please fill all fields');
    const newEpi: Episode = {
      id: Date.now(),
      animeName: epiForm.animeName,
      season: epiForm.season,
      title: epiForm.title,
      thumbSrc: epiForm.thumbSrc,
      videoSrc: epiForm.videoSrc
    };
    setEpisodes([...episodes, newEpi]);
    setEpiForm({ animeName: '', season: '', title: '', thumbSrc: '', videoSrc: '' });
    alert('Episode Added!');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Show uploading indication
    setter("Uploading...");

    const fileRef = ref(storage, `uploads/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setter(`Uploading... ${progress}%`);
      },
      (error) => {
        console.error("Upload failed", error);
        alert("Firebase Storage Permission Denied!\n\nBecause you are using your own Firebase project, you need to update your Storage Security Rules.\n\nGo to Firebase Console -> Storage -> Rules and temporarily set:\nallow read, write: if true;");
        setter("");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setter(downloadURL);
        });
      }
    );
  };

  const siteAdmins = members.filter(m => m.rank === "Admin");
  const moderators = members.filter(m => m.rank === "Moderator");
  const restMembers = members.filter(m => m.rank !== "Moderator" && m.rank !== "Admin").sort((a, b) => {
    return rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank);
  });

  const goHome = () => {
    setViewRoute('home');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-20 pointer-events-none" src="/dubhub_intro_video.mp4"></video>

      <header className="flex justify-between items-center py-4 md:py-5 px-[5%] max-w-[1400px] w-full mx-auto bg-[#0b0e14]/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        <div onClick={goHome} className="text-[22px] md:text-[26px] font-bold rainbow-text uppercase cursor-pointer hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(138,43,226,0.6)] shrink-0">DUB HUB</div>
        
        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-6 items-center">
          <button onClick={goHome} className="text-white hover:text-[#00ced1] transition-colors font-medium text-sm">HOME</button>
          <a href="#team-section" className="text-white hover:text-[#00ced1] transition-colors font-medium text-sm">TEAM</a>
          <button onClick={() => setModal('join')} className="text-white hover:text-[#00ced1] transition-colors font-medium text-sm">JOIN TEAM</button>
          <button onClick={() => setModal('join-follower')} className="text-[#e85a71] hover:text-[#ff7b90] transition-colors font-medium text-sm">JOIN AS FOLLOWER</button>
          <button onClick={() => setModal('meet-followers')} className="text-[#e85a71] hover:text-[#ff7b90] transition-colors font-medium text-sm">MEET FOLLOWERS</button>
          
          <button onClick={() => setModal('login')} className="text-white hover:text-[#00ced1] transition-colors font-medium relative text-sm">
            ADMIN PANEL
            {recruitmentApps.length > 0 && (
              <span className="absolute -top-2.5 -right-3.5 bg-red-600 text-white text-[10px] py-[2px] px-[6px] rounded-full">
                {recruitmentApps.length}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="xl:hidden text-white hover:text-[#00ced1] relative p-1 transition-colors">
          <Menu size={28} />
          {recruitmentApps.length > 0 && <span className="absolute top-1 right-1 bg-red-600 w-2.5 h-2.5 rounded-full border border-[#0b0e14]"></span>}
        </button>
      </header>

      {/* MOBILE MENU MODAL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0b0e14] z-[8000] flex flex-col pt-20 px-8 overflow-y-auto pb-10 animate-in slide-in-from-right-8 duration-300">
           <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-300 hover:text-red-500 bg-white/5 p-2 rounded-full">
             <X size={28} />
           </button>
           
           <div className="flex flex-col gap-6 mt-8">
              <button onClick={() => { setIsMobileMenuOpen(false); goHome(); }} className="text-left text-2xl font-bold text-white hover:text-[#00ced1] uppercase transition-colors">Home</button>
              <a href="#team-section" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-2xl font-bold text-white hover:text-[#00ced1] uppercase transition-colors">Team</a>
              <button onClick={() => { setIsMobileMenuOpen(false); setModal('join'); }} className="text-left text-2xl font-bold text-white hover:text-[#00ced1] uppercase transition-colors">Join Team</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setModal('join-follower'); }} className="text-left text-2xl font-bold text-[#e85a71] hover:text-[#ff7b90] uppercase transition-colors">Join as Follower</button>
              <button onClick={() => { setIsMobileMenuOpen(false); setModal('meet-followers'); }} className="text-left text-2xl font-bold text-[#e85a71] hover:text-[#ff7b90] uppercase transition-colors">Meet Followers</button>
              <div className="h-[1px] w-full bg-white/10 my-2"></div>
              <button onClick={() => { setIsMobileMenuOpen(false); setModal('login'); }} className="text-left text-2xl font-bold text-[#8a2be2] hover:text-[#00ced1] uppercase transition-colors flex items-center justify-between">
                 <span>Admin Panel</span>
                 {recruitmentApps.length > 0 && <span className="text-sm bg-red-600 text-white px-3 py-1 rounded-full">{recruitmentApps.length} pending</span>}
              </button>
           </div>
        </div>
      )}

      {socials.length > 0 && (
        <div className="flex justify-center flex-wrap gap-5 p-4 bg-white/5 backdrop-blur-sm">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-[#00ced1] hover:scale-110 transition-all text-sm font-medium">
              {s.name.toLowerCase().includes('facebook') ? <Facebook size={20} className="text-[#00ced1]" /> : <LinkIcon size={20} className="text-[#00ced1]" />}
              {s.name}
            </a>
          ))}
        </div>
      )}

      {viewRoute === 'home' && (
        <>
          <section className="py-[60px] px-[5%] flex flex-col md:flex-row justify-between items-center min-h-[60vh]">
            <div className="max-w-xl z-10">
              <h1 className="text-[38px] sm:text-5xl md:text-[55px] leading-[1.1] mb-5 font-bold whitespace-pre-line">{webConfig.title}</h1>
              <p className="text-[#b1b1b1] mb-8 text-lg font-medium">{webConfig.desc}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                 <button onClick={() => setViewRoute('clips')} className="watch-btn px-6 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
                   <Play size={20} className="text-[#00ced1]"/> Watch Dubbing Clip with DUB HUB
                 </button>
                 <button onClick={() => setViewRoute('anime')} className="watch-btn px-6 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
                   <Tv size={20} className="text-[#00ced1]"/> Watch Bangla Anime With DUB HUB
                 </button>
              </div>

            </div>
            <div className="mt-12 md:mt-0 z-10 hidden md:block">
              <img src="/logo.png" alt="Logo" className="w-[350px] h-[350px] object-cover rounded-[20px] shadow-[0_0_30px_rgba(138,43,226,0.6)] float-anim" />
            </div>
          </section>

          <div className="flex flex-col md:flex-row justify-around p-8 bg-[#161b22]/80 backdrop-blur-md rounded-[20px] mx-[5%] max-w-5xl xl:mx-auto border border-[#333] mb-16 gap-8 relative z-10">
            <div className="text-center">
              <h2 className="text-[35px] text-[#00ced1] font-bold m-0">{stats?.projects || "0"}</h2>
              <p className="text-[#b1b1b1] font-medium mt-2 tracking-wider text-sm">PROJECTS</p>
            </div>
            <div className="text-center">
              <h2 className="text-[35px] text-[#00ced1] font-bold m-0">{stats?.artists || "0"}</h2>
              <p className="text-[#b1b1b1] font-medium mt-2 tracking-wider text-sm">ARTISTS</p>
            </div>
            <div className="text-center">
              <h2 className="text-[35px] text-[#00ced1] font-bold m-0">{stats?.members || "0"}</h2>
              <p className="text-[#b1b1b1] font-medium mt-2 tracking-wider text-sm">MEMBERS</p>
            </div>
          </div>

          <h2 id="team-section" className="text-center text-[35px] font-bold my-[60px] tracking-wide relative z-10">LEGENDARY TEAM</h2>
          
          <div className="relative z-10">
            {/* Admin Level */}
            <div className="flex justify-center flex-wrap gap-8 mb-10 px-[5%] max-w-5xl mx-auto">
              <div className={`bg-[#161b22] p-[25px] rounded-[15px] text-center w-[250px] relative ${webConfig.adminColor}`}>
                <span className="text-[11px] py-1 px-3 rounded-[20px] font-bold text-white bg-black">Rank-ADMIN</span><br/><br/>
                <img src={webConfig.adminImage || "/logo.png"} className="w-[100px] h-[100px] rounded-full mb-[15px] border-4 border-white object-cover mx-auto" />
                <h3 className="font-bold text-xl">{webConfig.adminName}</h3>
                <p className="text-sm mt-1">{webConfig.adminBio}</p>
              </div>

              {siteAdmins.map(m => (
                 <div key={m.id} className={`bg-[#161b22] p-[25px] rounded-[15px] text-center w-[220px] transition-all relative border-b-4 border-[#8a2be2] shadow-[0_4px_15px_rgba(138,43,226,0.2)] ${m.special ? 'float-special' : 'float-anim'}`}>
                   <span className="text-[11px] py-1 px-3 rounded-[20px] font-bold text-white bg-[#8a2be2]">Rank-Admin</span><br/><br/>
                   <img src={m.image || "/logo.png"} className="w-[100px] h-[100px] rounded-full mb-[15px] border-2 border-white object-cover mx-auto" />
                   <h3 className="font-bold text-lg">{m.name}</h3>
                   <p className="text-xs text-[#b1b1b1] mt-2">{m.hobby}</p>
                 </div>
              ))}
            </div>

            {/* Moderator Level */}
            {moderators.length > 0 && (
              <div className="flex justify-center flex-wrap gap-8 mb-12 px-[5%] max-w-3xl mx-auto">
                {moderators.map(m => (
                   <div key={m.id} className={`bg-[#161b22] p-[25px] rounded-[15px] text-center w-[220px] transition-all relative border-b-4 border-[#ff4d6d] shadow-[0_4px_15px_rgba(255,77,109,0.2)] ${m.special ? 'float-special' : 'float-anim'}`}>
                     <span className="text-[11px] py-1 px-3 rounded-[20px] font-bold text-white bg-[#ff4d6d]">Rank-Moderator</span><br/><br/>
                     <img src={m.image || "/logo.png"} className="w-[100px] h-[100px] rounded-full mb-[15px] border-2 border-white object-cover mx-auto" />
                     <h3 className="font-bold text-lg">{m.name}</h3>
                     <p className="text-xs text-[#b1b1b1] mt-2">{m.hobby}</p>
                   </div>
                ))}
              </div>
            )}

            {/* Rest of the team - 2 items per row max */}
            <div className="grid grid-cols-2 gap-8 px-[5%] pb-[100px] max-w-3xl mx-auto">
              {restMembers.map(m => {
                const color = rankData[m.rank] || rankData["Unknown"];
                return (
                  <div key={m.id} className={`bg-[#161b22]/90 p-[20px] sm:p-[25px] rounded-[15px] text-center transition-all relative border-b-4 ${m.special ? 'float-special' : 'float-anim'}`} style={{ borderColor: color }}>
                    <span className="text-[10px] sm:text-[11px] py-1 px-2 sm:px-3 rounded-[20px] font-bold text-black" style={{ background: color }}>Rank-{m.rank}</span><br/><br/>
                    <img src={m.image || "/logo.png"} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full mb-[15px] border-2 border-white object-cover mx-auto" />
                    <h3 className="font-bold text-base sm:text-lg">{m.name}</h3>
                    <p className="text-[10px] sm:text-xs text-[#b1b1b1] mt-2 line-clamp-2">{m.hobby}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}

      {/* WATCH CLIPS VIEW */}
      {viewRoute === 'clips' && (
        <div className="min-h-screen pt-10 px-[5%] relative z-10 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#00ced1] clip-text">DUBBING CLIPS</h2>
            <div className="relative mb-10 w-full max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
              <input type="text" placeholder="Search clips..." value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}
                className="w-full bg-[#161b22] border border-[#333] rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#00ced1] shadow-[0_0_15px_rgba(0,206,209,0.1)] transition-all" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clips.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())).map(c => (
                <div key={c.id} onClick={() => setActiveVideo({type: 'clip', id: c.id})} className="bg-[#161b22] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform border border-[#333] hover:border-[#00ced1] group relative">
                  <div className="aspect-video relative bg-[#0b0e14]">
                    <img src={c.thumbSrc} alt={c.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Play className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" size={48}/>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{c.title}</h3>
                  </div>
                </div>
              ))}
              {clips.length === 0 && <p className="text-center text-gray-400 col-span-2 py-10">No clips available yet. Check back later!</p>}
            </div>
          </div>
        </div>
      )}

      {/* WATCH ANIME VIEW */}
      {viewRoute === 'anime' && (
        <div className="min-h-screen pt-10 px-[5%] relative z-10 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#ff4d6d] clip-text uppercase">Bangla Anime Episodes</h2>
            <div className="relative mb-10 w-full max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
              <input type="text" placeholder="Search anime or episodes..." value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}
                className="w-full bg-[#161b22] border border-[#333] rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#ff4d6d] shadow-[0_0_15px_rgba(255,77,109,0.1)] transition-all" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {episodes.filter(e => e.animeName.toLowerCase().includes(searchQuery.toLowerCase()) || e.title.toLowerCase().includes(searchQuery.toLowerCase())).map(e => (
                <div key={e.id} onClick={() => setActiveVideo({type: 'episode', id: e.id})} className="bg-[#161b22] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform border border-[#333] hover:border-[#ff4d6d] group relative">
                  <div className="aspect-video relative bg-[#0b0e14]">
                    <img src={e.thumbSrc} alt={e.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Play className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" size={48}/>
                    </div>
                    <div className="absolute top-2 left-2 bg-[#ff4d6d] text-white text-xs font-bold px-2 py-1 rounded">
                      {e.season}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-[#00ced1] text-xs font-bold uppercase mb-1">{e.animeName}</p>
                    <h3 className="font-bold text-lg leading-tight">{e.title}</h3>
                  </div>
                </div>
              ))}
              {episodes.length === 0 && <p className="text-center text-gray-400 col-span-2 py-10">No anime episodes available yet. Check back later!</p>}
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#06080a] py-[60px] px-[5%] text-center relative z-10 border-t border-white/10">
        <div className="max-w-[700px] mx-auto mb-6 text-[#b1b1b1] text-sm leading-[1.6]" dangerouslySetInnerHTML={{ __html: webConfig.about }}>
        </div>

        {footerLinks.length > 0 && (
          <div className="flex justify-center gap-4 flex-wrap my-8">
            {footerLinks.map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="rainbow-text text-lg md:text-xl font-bold uppercase transition-transform hover:scale-105">
                {link.name}
              </a>
            ))}
          </div>
        )}

        <p className="text-sm font-medium text-gray-400">Created by <a href="https://www.facebook.com/md.an.nafi.1212" target="_blank" rel="noreferrer" className="rainbow-text font-bold text-base tracking-widest cursor-pointer ml-1">N A F I</a></p>
      </footer>

      {/* VIDEO PLAYER MODAL */}
      {activeVideo && (
        <VideoPlayerModal 
          activeVideo={activeVideo} 
          onClose={() => setActiveVideo(null)} 
          allClips={clips} 
          allEpisodes={episodes} 
          setActiveVideo={setActiveVideo} 
        />
      )}

      {/* OTHER MODALS */}
      {modal && modal !== 'dashboard' && (
        <div className="fixed inset-0 bg-black/85 z-[3000] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#161b22] p-[30px] rounded-[20px] shadow-2xl w-full max-w-[450px] border border-[#8a2be2]/50 max-h-[85vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200">
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={20}/></button>
            
            {modal === 'login' && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#00ced1] uppercase">Admin Access</h2>
                {loginStep === 1 ? (
                  <>
                    <p className="text-center text-sm text-gray-400 mb-6">Enter your email or admin name to verify identity.</p>
                    <input 
                      type="text" placeholder="Admin Name or Email Address" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
                      className="w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"
                    />
                    <button onClick={handleVerifyAdmin} className="w-full py-3 rounded-lg font-semibold text-black bg-[#00ced1] hover:bg-[#00ced1]/90 shadow-[0_0_15px_rgba(0,206,209,0.3)] transition-all">
                      Verify Identity
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-center text-sm text-[#00ced1] mb-6">Identity Verified. Please enter password.</p>
                    <input 
                      type="password" placeholder="Enter Dashboard Password" value={loginPass} onChange={e => setLoginPass(e.target.value)}
                      className="w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none"
                    />
                    <button onClick={handleLogin} className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#8a2be2] to-[#00ced1] hover:opacity-90">
                      Login
                    </button>
                  </>
                )}
              </>
            )}

            {modal === 'join' && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Join Team</h2>
                <div className="mb-4">
                  <label className="text-xs text-[#00ced1] uppercase font-bold mb-1 block">Profile Picture (Optional)</label>
                  <input type="file" accept="image/*" onChange={e => handleFileUpload(e, val => setJoinForm(prev => ({...prev, image: val})))} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00ced1]/20 file:text-[#00ced1] hover:file:bg-[#00ced1]/30 mb-2" />
                  {joinForm.image.startsWith('Uploading...') && <p className="text-[#00ced1] text-xs font-bold">{joinForm.image}</p>}
                  <p className="text-xs text-gray-500 mt-1">Leave empty to use default logo. Upload progress may take a moment.</p>
                </div>
                <input type="text" placeholder="Full Name" value={joinForm.name} onChange={e=>setJoinForm({...joinForm, name:e.target.value})} className="w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none" />
                <input type="email" placeholder="Email Address" value={joinForm.email} onChange={e=>setJoinForm({...joinForm, email:e.target.value})} className="w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none" />
                <input type="text" placeholder="Facebook Profile URL" value={joinForm.fb} onChange={e=>setJoinForm({...joinForm, fb:e.target.value})} className="w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none" />
                <input type="text" placeholder="Hobby / Skills" value={joinForm.hobby} onChange={e=>setJoinForm({...joinForm, hobby:e.target.value})} className="w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#00ced1] outline-none" />
                <button onClick={submitApp} disabled={joinForm.image.startsWith('Uploading...')} className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#8a2be2] to-[#00ced1] hover:opacity-90 disabled:opacity-50">
                  Submit Application
                </button>
              </>
            )}

            {modal === 'join-follower' && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#e85a71]">Join as Follower</h2>
                <div className="mb-4">
                  <label className="text-xs text-[#e85a71] uppercase font-bold mb-1 block">Profile Picture (Optional)</label>
                  <input type="file" accept="image/*" onChange={e => handleFileUpload(e, val => setFollowerForm(prev => ({...prev, image: val})))} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#e85a71]/20 file:text-[#e85a71] hover:file:bg-[#e85a71]/30 mb-2" />
                  {followerForm.image.startsWith('Uploading...') && <p className="text-[#e85a71] text-xs font-bold">{followerForm.image}</p>}
                  <p className="text-xs text-gray-500 mt-1">Leave empty to use default logo. Upload progress may take a moment.</p>
                </div>
                <input type="text" placeholder="Full Name" value={followerForm.name} onChange={e=>setFollowerForm({...followerForm, name:e.target.value})} className="w-full p-3 mb-3 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#e85a71] outline-none" />
                <input type="text" placeholder="Facebook Profile URL" value={followerForm.fb} onChange={e=>setFollowerForm({...followerForm, fb:e.target.value})} className="w-full p-3 mb-6 bg-[#0b0e14] border border-[#333] text-white rounded-lg focus:border-[#e85a71] outline-none" />
                <button onClick={submitFollower} disabled={followerForm.image.startsWith('Uploading...')} className="w-full py-3 rounded-lg font-semibold text-white bg-[#e85a71] hover:bg-[#d6415a] disabled:opacity-50">
                  Join Now
                </button>
              </>
            )}

            {modal === 'meet-followers' && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#e85a71]">Our Followers</h2>
                {followers.length === 0 ? <p className="text-center text-gray-400">No followers yet. Be the first!</p> : (
                  <div className="grid grid-cols-2 gap-4">
                    {followers.map(f => (
                       <div key={f.id} className="bg-[#e85a71]/10 border border-[#e85a71]/30 p-4 rounded-xl text-center float-follower flex flex-col items-center">
                         <div className="relative w-[50px] h-[50px] bg-[#2a2a3e] rounded-full border-2 border-[#e85a71] mb-2 flex items-center justify-center text-lg font-bold text-white uppercase overflow-hidden">
                           {f.image && f.image !== "/logo.png" ? <img src={f.image} className="w-full h-full object-cover" /> : f.name[0] }
                         </div>
                         <h4 className="font-bold text-[#e85a71] truncate w-full text-sm">{f.name}</h4>
                         <a href={f.fb} target="_blank" rel="noreferrer" className="text-[10px] text-blue-400 hover:text-blue-300 mt-1">FB Profile</a>
                       </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* DASHBOARD SCREEN */}
      {modal === 'dashboard' && isLogged && (
        <div className="fixed inset-0 bg-[#0b0e14] z-[4000] p-4 md:p-8 overflow-y-auto w-full box-border">
          <div className="max-w-6xl mx-auto pb-20">
            <div className="flex justify-between items-center mb-10 sticky top-0 bg-[#0b0e14] py-4 z-10 border-b border-[#333]">
              <h1 className="text-2xl md:text-3xl font-bold clip-text uppercase">ADMIN DASHBOARD</h1>
              <button onClick={() => { setIsLogged(false); setModal(null); }} className="px-4 py-2 text-sm bg-[#e74c3c] text-white rounded-lg font-bold flex items-center gap-2 hover:bg-red-700 transition-colors">
                <LogOut size={16}/> <span className="hidden sm:inline">LOGOUT</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* VIDEO UPLOADS */}
              <div className="bg-[#161b22] p-6 rounded-2xl border border-[#00ced1] md:col-span-2 shadow-[0_0_15px_rgba(0,206,209,0.1)]">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-[#00ced1]"><Tv size={20}/> Content Upload Control</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Add Clip */}
                  <div className="bg-[#0b0e14] p-5 rounded-xl border border-[#333]">
                    <h4 className="font-bold text-lg mb-4 text-white">Add Dubbing Clip</h4>
                    <input type="text" placeholder="Clip Title" value={clipForm.title} onChange={e=>setClipForm({...clipForm, title:e.target.value})} className="w-full p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white" />
                    <div className="mb-3">
                      <label className="text-xs text-gray-400 mb-1 block">Thumbnail Banner</label>
                      <input type="file" accept="image/*" onChange={e => handleFileUpload(e, val => setClipForm(prev => ({...prev, thumbSrc: val})))} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00ced1]/20 file:text-[#00ced1] hover:file:bg-[#00ced1]/30 mb-2" />
                      {clipForm.thumbSrc.startsWith('Uploading...') && <p className="text-[#00ced1] text-xs font-bold">{clipForm.thumbSrc}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="text-xs text-gray-400 mb-1 block">Video File</label>
                      <input type="file" accept="video/*" onChange={e => handleFileUpload(e, val => setClipForm(prev => ({...prev, videoSrc: val})))} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8a2be2]/20 file:text-[#8a2be2] hover:file:bg-[#8a2be2]/30 mb-2" />
                      {clipForm.videoSrc.startsWith('Uploading...') && <p className="text-[#8a2be2] text-xs font-bold">{clipForm.videoSrc}</p>}
                    </div>
                    <button onClick={handleAddClip} disabled={clipForm.videoSrc.startsWith('Uploading...') || clipForm.thumbSrc.startsWith('Uploading...')} className="w-full py-3 rounded-lg bg-[#00ced1] text-black font-bold hover:bg-opacity-90 mb-4 disabled:opacity-50">Publish Clip</button>
                    
                    <button onClick={() => setShowAllClips(!showAllClips)} className="w-full py-2 border border-[#00ced1] text-[#00ced1] rounded-lg font-bold hover:bg-[#00ced1]/10 transition mb-4">
                      {showAllClips ? "Hide All Clips" : "See All Clips"}
                    </button>
                    {showAllClips && (
                      <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
                        <input type="text" placeholder="Search Clips..." className="w-full p-2 mb-2 bg-[#161b22] border border-[#333] rounded text-white text-sm" onChange={e => {
                          const val = e.target.value.toLowerCase();
                          setClips(clips => [...clips].map(c => ({...c, _hidden: !c.title.toLowerCase().includes(val)})));
                        }} />
                        {clips.filter((c: any) => !c._hidden).map((c: any) => (
                          <div key={c.id} className="flex justify-between items-center bg-[#161b22] p-2 rounded border border-[#333]">
                            <span className="text-white text-sm truncate max-w-[150px]">{c.title}</span>
                            <div className="flex gap-2">
                               <button onClick={() => setActiveVideo({type: 'clip', id: c.id})} className="text-[#00ced1] p-1 hover:bg-[#00ced1]/20 rounded"><Play size={16}/></button>
                               <button onClick={() => { if(confirm("Delete clip?")) setClips(prev => prev.filter(x => x.id !== c.id)) }} className="text-red-500 p-1 hover:bg-red-500/20 rounded"><X size={16}/></button>
                            </div>
                          </div>
                        ))}
                        {clips.length === 0 && <p className="text-gray-500 text-sm">No clips found.</p>}
                      </div>
                    )}
                  </div>

                  {/* Add Episode */}
                  <div className="bg-[#0b0e14] p-5 rounded-xl border border-[#333]">
                    <h4 className="font-bold text-lg mb-4 text-[#ff4d6d]">Add Anime Episode</h4>
                    <div className="flex gap-2">
                       <input type="text" placeholder="Anime Name" value={epiForm.animeName} onChange={e=>setEpiForm({...epiForm, animeName:e.target.value})} className="flex-[2] p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white" />
                       <input type="text" placeholder="Season" value={epiForm.season} onChange={e=>setEpiForm({...epiForm, season:e.target.value})} className="flex-1 p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white text-center" />
                    </div>
                    <input type="text" placeholder="Episode Title" value={epiForm.title} onChange={e=>setEpiForm({...epiForm, title:e.target.value})} className="w-full p-3 mb-3 bg-[#161b22] border border-[#333] rounded-lg text-white" />
                    <div className="mb-3">
                      <label className="text-xs text-gray-400 mb-1 block">Thumbnail Banner</label>
                      <input type="file" accept="image/*" onChange={e => handleFileUpload(e, val => setEpiForm(prev => ({...prev, thumbSrc: val})))} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ff4d6d]/20 file:text-[#ff4d6d] hover:file:bg-[#ff4d6d]/30 mb-2" />
                      {epiForm.thumbSrc.startsWith('Uploading...') && <p className="text-[#ff4d6d] text-xs font-bold">{epiForm.thumbSrc}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="text-xs text-gray-400 mb-1 block">Video File</label>
                      <input type="file" accept="video/*" onChange={e => handleFileUpload(e, val => setEpiForm(prev => ({...prev, videoSrc: val})))} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8a2be2]/20 file:text-[#8a2be2] hover:file:bg-[#8a2be2]/30 mb-2" />
                      {epiForm.videoSrc.startsWith('Uploading...') && <p className="text-[#8a2be2] text-xs font-bold">{epiForm.videoSrc}</p>}
                    </div>
                    <button onClick={handleAddEpisode} disabled={epiForm.videoSrc.startsWith('Uploading...') || epiForm.thumbSrc.startsWith('Uploading...')} className="w-full py-3 rounded-lg bg-[#ff4d6d] text-white font-bold hover:bg-opacity-90 mb-4 disabled:opacity-50">Publish Episode</button>

                    <button onClick={() => setShowAllEpisodes(!showAllEpisodes)} className="w-full py-2 border border-[#ff4d6d] text-[#ff4d6d] rounded-lg font-bold hover:bg-[#ff4d6d]/10 transition mb-4">
                      {showAllEpisodes ? "Hide All Episodes" : "See All Episodes"}
                    </button>
                    {showAllEpisodes && (
                      <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
                        <input type="text" placeholder="Search Episodes..." className="w-full p-2 mb-2 bg-[#161b22] border border-[#333] rounded text-white text-sm" onChange={e => {
                          const val = e.target.value.toLowerCase();
                          setEpisodes(episodes => [...episodes].map(ep => ({...ep, _hidden: !ep.title.toLowerCase().includes(val) && !ep.animeName.toLowerCase().includes(val)})));
                        }} />
                        {episodes.filter((e: any) => !e._hidden).map((e: any) => (
                          <div key={e.id} className="flex justify-between items-center bg-[#161b22] p-2 rounded border border-[#333]">
                            <span className="text-white text-sm truncate max-w-[150px]">{e.animeName} - {e.title}</span>
                            <div className="flex gap-2">
                               <button onClick={() => setActiveVideo({type: 'episode', id: e.id})} className="text-[#ff4d6d] p-1 hover:bg-[#ff4d6d]/20 rounded"><Play size={16}/></button>
                               <button onClick={() => { if(confirm("Delete episode?")) setEpisodes(prev => prev.filter(x => x.id !== e.id)) }} className="text-red-500 p-1 hover:bg-red-500/20 rounded"><X size={16}/></button>
                            </div>
                          </div>
                        ))}
                        {episodes.length === 0 && <p className="text-gray-500 text-sm">No episodes found.</p>}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#00ced1]"><Edit size={20}/> New Applications ({recruitmentApps.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recruitmentApps.map(a => (
                    <div key={a.id} className="bg-[#0b0e14] p-4 rounded-xl border border-[#333]">
                       <p className="mb-1"><span className="text-gray-400 text-xs">NAME:</span> {a.name}</p>
                       <p className="mb-1"><span className="text-gray-400 text-xs">EMAIL:</span> {a.email}</p>
                       <p className="mb-1"><span className="text-gray-400 text-xs">FB:</span> <a href={a.fb} target="_blank" className="text-[#00ced1] hover:underline">Link</a></p>
                       <p className="mb-4"><span className="text-gray-400 text-xs">HOBBY:</span> {a.hobby}</p>
                       <button onClick={() => acceptMember(a.id)} className="w-full py-2 bg-gradient-to-r from-[#8a2be2] to-[#00ced1] rounded-lg font-bold flex items-center justify-center gap-2 text-sm"><Check size={16}/> Approve</button>
                    </div>
                  ))}
                  {recruitmentApps.length === 0 && <p className="text-gray-500">No applications.</p>}
                </div>
              </div>

              {/* Follower requests */}
              <div className="bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#e85a71]"><Users size={20}/> Follower Requests ({followerApps.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {followerApps.map(a => (
                    <div key={`f-${a.id}`} className="bg-[#0b0e14] p-4 rounded-xl border border-[#333]">
                       <p className="mb-1"><span className="text-gray-400 text-xs">NAME:</span> {a.name}</p>
                       <p className="mb-4"><span className="text-gray-400 text-xs">FB:</span> <a href={a.fb} target="_blank" className="text-[#00ced1] hover:underline">Link</a></p>
                       <div className="flex gap-2">
                         <button onClick={() => acceptFollower(a.id)} className="flex-1 py-2 bg-[#e85a71] rounded-lg font-bold flex items-center justify-center gap-2 text-sm text-white hover:bg-opacity-90"><Check size={16}/> Approve</button>
                         <button onClick={() => rejectFollower(a.id)} className="flex-1 py-2 bg-red-600 rounded-lg font-bold flex items-center justify-center gap-2 text-sm text-white hover:bg-opacity-90"><X size={16}/> Reject</button>
                       </div>
                    </div>
                  ))}
                  {followerApps.length === 0 && <p className="text-gray-500">No follower requests.</p>}
                </div>
              </div>

              {/* Followers List Management */}
              <div className="bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-[#e85a71]"><Users size={20}/> Followers List ({followers.length})</h3>
                  <div className="relative w-full md:w-auto">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search Followers..." value={followerListSearch} onChange={e=>setFollowerListSearch(e.target.value)} className="w-full md:w-64 pl-9 p-2 bg-[#0b0e14] border border-[#333] rounded-lg text-white text-sm outline-none focus:border-[#e85a71]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {followers.filter(f => f.name.toLowerCase().includes(followerListSearch.toLowerCase())).map(f => (
                    <div key={f.id} className="bg-[#0b0e14] p-3 rounded-xl border border-[#333] flex flex-col items-center text-center">
                       <img src={f.image || "/logo.png"} className="w-12 h-12 rounded-full mb-2 object-cover border-2 border-[#e85a71]" />
                       <p className="font-bold text-white text-xs mb-1 truncate w-full">{f.name}</p>
                       <a href={f.fb} target="_blank" className="text-[#00ced1] text-[10px] hover:underline mb-2">FB Profile</a>
                       <button onClick={() => removeFollower(f.id)} className="w-full py-1 bg-red-600/20 text-red-500 rounded text-xs font-bold hover:bg-red-600 hover:text-white transition-colors">Remove</button>
                    </div>
                  ))}
                  {followers.length === 0 && <p className="text-gray-500 col-span-2">No followers yet.</p>}
                </div>
              </div>

              {/* Team Mgt */}
              <div className="bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-[#00ced1]"><Users size={20}/> Team Management ({members.length})</h3>
                  <div className="relative w-full md:w-auto">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search Team..." value={teamSearch} onChange={e=>setTeamSearch(e.target.value)} className="w-full md:w-64 pl-9 p-2 bg-[#0b0e14] border border-[#333] rounded-lg text-white text-sm outline-none focus:border-[#00ced1]" />
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                   <table className="w-full text-left min-w-[600px]">
                     <thead className="bg-[#0b0e14] text-xs uppercase text-gray-400"><tr><th className="p-3">Member</th><th className="p-3">Rank</th><th className="p-3">Special</th><th className="p-3 text-right">Delete</th></tr></thead>
                     <tbody>
                        {members.filter(m => m.name.toLowerCase().includes(teamSearch.toLowerCase()) || m.email.toLowerCase().includes(teamSearch.toLowerCase())).map(m => (
                          <tr key={m.id} className="border-b border-[#333] hover:bg-[#0b0e14]/50 transition-colors">
                            <td className="p-3">
                              <div className="flex items-center gap-3">
                                <img src={m.image || "/logo.png"} className="w-10 h-10 rounded-full object-cover border border-[#333]" />
                                <div>
                                  <p className="font-semibold text-sm">{m.name}</p>
                                  <p className="text-xs text-gray-500">{m.email}</p>
                                  <a href={m.fb} target="_blank" className="text-[10px] text-[#00ced1]">FB Link</a>
                                </div>
                              </div>
                            </td>
                            <td className="p-3">
                              <select value={m.rank} onChange={(e) => setMembers(members.map(x => x.id === m.id ? {...x, rank: e.target.value} : x))} className="bg-[#0b0e14] border border-[#555] rounded px-2 py-1 text-sm text-white">
                                {Object.keys(rankData).map(r => <option key={r} value={r}>{r}</option>)}
                                <option value="Admin">Admin</option>
                              </select>
                            </td>
                            <td className="p-3">
                              <label className="flex items-center gap-2 cursor-pointer text-sm">
                                <input type="checkbox" checked={m.special} onChange={(e) => setMembers(members.map(x => x.id === m.id ? {...x, special: e.target.checked} : x))} className="w-4 h-4 accent-[#00ced1]" />
                                FX
                              </label>
                            </td>
                            <td className="p-3 text-right">
                              <button onClick={() => { if(confirm("Remove member?")) setMembers(members.filter(x => x.id !== m.id)) }} className="text-red-500 hover:bg-red-600 hover:text-white p-1.5 rounded transition-colors"><X size={16}/></button>
                            </td>
                          </tr>
                        ))}
                     </tbody>
                   </table>
                </div>
              </div>
              
              {/* Other settings */}
              <div className="bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2">
                 <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#00ced1]"><Settings size={20}/> Configs</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-bold mb-2">Edit Status</h4>
                      <input type="text" placeholder="Projects (e.g. 60+)" value={stats?.projects || ""} onChange={e=>setStats({...stats, projects:e.target.value})} className="w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white" />
                      <input type="text" placeholder="Artists (e.g. 65+)" value={stats?.artists || ""} onChange={e=>setStats({...stats, artists:e.target.value})} className="w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white" />
                      <input type="text" placeholder="Members (e.g. 8K+)" value={stats?.members || ""} onChange={e=>setStats({...stats, members:e.target.value})} className="w-full p-2 mb-4 bg-[#0b0e14] border border-[#333] rounded text-white" />
                    </div>
                    
                    <div>
                      <h4 className="text-white font-bold mb-2">Admin Profile</h4>
                      <input type="file" accept="image/*" onChange={e => handleFileUpload(e, val => setWebConfig(prev => ({...prev, adminImage: val})))} className="w-full text-sm text-gray-400 mb-2 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#8a2be2]/20 file:text-[#8a2be2]" />
                      {webConfig.adminImage.startsWith('Uploading...') && <p className="text-[#8a2be2] text-xs font-bold mb-2">{webConfig.adminImage}</p>}
                      <input type="text" placeholder="Admin Name" value={webConfig.adminName} onChange={e=>setWebConfig({...webConfig, adminName:e.target.value})} className="w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white" />
                      <input type="text" placeholder="Admin Rank/Bio" value={webConfig.adminBio} onChange={e=>setWebConfig({...webConfig, adminBio:e.target.value})} className="w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white" />
                      <select value={webConfig.adminColor} onChange={e=>setWebConfig({...webConfig, adminColor:e.target.value})} className="w-full p-2 mb-4 bg-[#0b0e14] border border-[#333] rounded text-white outline-none">
                        <option value="admin-multiple">Rainbow Glow</option>
                        <option value="admin-vivid-orange-red">Vivid Orange Red</option>
                        <option value="admin-dark-green-grey">Dark Green Grey</option>
                        <option value="admin-frosty-blue-grey">Frosty Blue Grey</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="text-white font-bold mb-2">Edit About (HTML supported)</h4>
                      <textarea placeholder="About text (e.g. <h1>email: xyz</h1>)" value={webConfig.about} onChange={e=>setWebConfig({...webConfig, about:e.target.value})} className="w-full p-2 bg-[#0b0e14] border border-[#333] rounded text-white" rows={4}/>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="text-white font-bold mb-2">Change Password</h4>
                      <input type="text" placeholder="New Admin Pass" value={newPassForm} onChange={e=>setNewPassForm(e.target.value)} className="w-full p-2 mb-2 bg-[#0b0e14] border border-[#333] rounded text-white" />
                      <button onClick={() => { if(newPassForm){ setAdminPass(newPassForm); setNewPassForm(""); alert("Updated"); } }} className="px-4 py-2 bg-[#8a2be2] rounded text-sm font-bold text-white">Update Pass</button>
                    </div>
                 </div>
              </div>

              {/* Add Footer Links */}
              <div className="bg-[#161b22] p-6 rounded-2xl border border-[#333] md:col-span-2">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-[#ff00c8]"><LinkIcon size={20}/> Add Link</h3>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <input type="text" placeholder="Site Name" value={linkForm.name} onChange={e=>setLinkForm({...linkForm, name:e.target.value})} className="flex-1 p-3 bg-[#0b0e14] border border-[#333] rounded-lg text-white outline-none focus:border-[#ff00c8]" />
                  <input type="text" placeholder="URL / Link" value={linkForm.url} onChange={e=>setLinkForm({...linkForm, url:e.target.value})} className="flex-1 p-3 bg-[#0b0e14] border border-[#333] rounded-lg text-white outline-none focus:border-[#ff00c8]" />
                  <button onClick={() => {
                    if(!linkForm.name || !linkForm.url) return alert("Fill all fields");
                    setFooterLinks([...footerLinks, { id: Date.now(), ...linkForm }]);
                    setLinkForm({name: '', url: ''});
                  }} className="py-3 px-6 bg-[#ff00c8] font-bold text-white rounded-lg hover:bg-[#d600a9] transition-colors">Add Link</button>
                </div>
                
                {footerLinks.length > 0 && (
                  <div className="flex flex-col flex-wrap gap-2">
                    {footerLinks.map(link => (
                      <div key={link.id} className="flex justify-between items-center bg-[#0b0e14] p-3 rounded border border-[#333]">
                        <div>
                           <span className="font-bold text-white mr-2">{link.name}</span>
                           <a href={link.url} target="_blank" className="text-gray-400 text-xs hover:text-[#00ced1] break-all">{link.url}</a>
                        </div>
                        <button onClick={() => setFooterLinks(footerLinks.filter(l => l.id !== link.id))} className="text-red-500 hover:bg-red-500/20 p-2 rounded transition-colors"><X size={16}/></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

function VideoPlayerModal({ activeVideo, onClose, allClips, allEpisodes, setActiveVideo }: any) {
  const isClip = activeVideo.type === 'clip';
  const list = isClip ? allClips : allEpisodes;
  const currentIndex = list.findIndex((x:any) => x.id === activeVideo.id);
  const currentMedia = list[currentIndex];
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [quality, setQuality] = useState('420fps'); // mock quality
  const [watermark, setWatermark] = useState(false);
  
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const m = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const s = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if(videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
      setIsMuted(vol === 0);
    }
  };

  const toggleMute = () => {
    if(videoRef.current) {
       videoRef.current.muted = !isMuted;
       setIsMuted(!isMuted);
       if(isMuted && volume === 0) {
         setVolume(1);
         videoRef.current.volume = 1;
       }
    }
  };

  const handleDownload = () => {
    alert("Starting Download...\n\nDUB-HUB watermark will be automatically integrated during the download process!");
    const a = document.createElement('a');
    a.href = currentMedia.videoSrc;
    a.download = `${(currentMedia.title || "dubhub-content").replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);
      // Show watermark for 10 seconds every 3 minutes (180s)
      if (time > 0 && Math.floor(time) % 180 < 10) {
        setWatermark(true);
      } else {
        setWatermark(false);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      videoRef.current.play().then(()=>setIsPlaying(true)).catch(()=>setIsPlaying(false));
    }
  }, [currentMedia, speed]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!currentMedia) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const skip = (amount: number) => {
    if (videoRef.current) videoRef.current.currentTime += amount;
  };

  const toggleFullscreen = async () => {
     if (!document.fullscreenElement) {
       await containerRef.current?.requestFullscreen({ navigationUI: "hide" }).catch(err => {
         console.error(`Error attempting to enable fullscreen: ${err.message}`);
       });
       // Auto-rotate logic attempt using screen API if available on mobile
       try { if(screen.orientation && (screen.orientation as any).lock) await (screen.orientation as any).lock('landscape'); } catch(e) {}
     } else {
       await document.exitFullscreen();
       try { if(screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch(e) {}
     }
  };

  const goNext = () => { if(currentIndex < list.length - 1) setActiveVideo({type: activeVideo.type, id: list[currentIndex+1].id}); };
  const goPrev = () => { if(currentIndex > 0) setActiveVideo({type: activeVideo.type, id: list[currentIndex-1].id}); };

  return (
    <div className="fixed inset-0 bg-black/95 z-[5000] flex flex-col pt-10">
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-red-500 z-50 bg-black/50 p-2 rounded-full"><X size={24}/></button>
      
      <div className="max-w-5xl w-full mx-auto flex flex-col h-full px-4 pb-4">
        <div className="mb-4">
           {isClip ? (
             <h2 className="text-2xl font-bold text-white max-w-[80vw] truncate">{currentMedia.title}</h2>
           ) : (
             <h2 className="text-xl font-bold text-white max-w-[80vw] truncate"><span className="text-[#ff4d6d] mr-2">[{currentMedia.season}]</span> {currentMedia.title}</h2>
           )}
        </div>

        {/* Player Container */}
        <div ref={containerRef} className={`relative bg-black rounded-lg overflow-hidden flex-shrink-0 mx-auto w-full group flex items-center justify-center transition-all ${isFullscreen ? 'h-screen w-screen rounded-none max-h-none' : 'aspect-video max-h-[60vh] md:max-h-[75vh]'}`}>
           <video 
              ref={videoRef}
              src={currentMedia.videoSrc}
              className="w-full h-full object-contain"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => {setIsPlaying(false); goNext();}}
           />

           {watermark && (
             <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 pointer-events-none z-10 animate-in fade-in duration-500">
                <h1 className="rainbow-text text-base sm:text-lg md:text-xl font-black drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] opacity-90 tracking-widest uppercase">
                  DUB-HUB
                </h1>
             </div>
           )}

           {/* Controls Overlay */}
           <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-16 pb-2 px-3 sm:px-4 transition-opacity duration-300 z-20 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              
              {/* Progress Bar Container */}
              <div className="absolute top-4 left-3 right-3 sm:left-4 sm:right-4 h-1.5 sm:h-2 group/progress cursor-pointer flex items-center">
                <input 
                  type="range" 
                  min="0" 
                  max={duration || 0} 
                  value={currentTime} 
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-full bg-white/30 h-1 sm:h-1.5 rounded-full overflow-hidden relative group-hover/progress:h-1.5 sm:group-hover/progress:h-2 transition-all">
                  <div 
                    className="h-full rainbow-bg rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-100" 
                    style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                  />
                </div>
                {/* Playhead thumb (visual only) */}
                <div 
                  className="absolute h-3 w-3 sm:h-4 sm:w-4 rainbow-bg rounded-full shadow-[0_0_8px_rgba(255,255,255,1)] transform -translate-x-1/2 scale-0 group-hover/progress:scale-100 transition-transform pointer-events-none"
                  style={{ left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>

              <div className="flex items-center justify-between gap-4 mt-2">
                 <div className="flex items-center gap-2 sm:gap-4">
                   <button onClick={togglePlay} className="text-white hover:text-[#00ced1] transition-colors">{isPlaying ? <Pause size={28}/> : <Play size={28}/>}</button>
                   <button onClick={() => skip(-10)} className="text-white hover:text-[#00ced1] transition-colors"><Rewind size={20}/></button>
                   <button onClick={() => skip(10)} className="text-white hover:text-[#00ced1] transition-colors"><FastForward size={20}/></button>
                   
                   <div className="flex items-center gap-2 group/volume relative hidden sm:flex ml-2">
                     <button onClick={toggleMute} className="text-white hover:text-[#00ced1] transition-colors">
                       {isMuted || volume === 0 ? <VolumeX size={20}/> : <Volume2 size={20}/>}
                     </button>
                     <input 
                       type="range" 
                       min="0" 
                       max="1" 
                       step="0.05" 
                       value={isMuted ? 0 : volume} 
                       onChange={handleVolumeChange}
                       className="w-0 opacity-0 group-hover/volume:w-20 group-hover/volume:opacity-100 transition-all duration-300 origin-left accent-[#00ced1]"
                     />
                   </div>

                   <div className="text-white text-[10px] sm:text-xs font-medium tracking-wide font-mono ml-2">
                     {formatTime(currentTime)} <span className="text-gray-400 mx-1">/</span> {formatTime(duration)}
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-3 sm:gap-4">
                   <button onClick={handleDownload} className="text-white hover:text-[#ff4d6d] transition-colors" title="Download Video">
                     <Download size={22}/>
                   </button>
                   <select value={quality} onChange={e=>setQuality(e.target.value)} className="bg-black/50 text-white text-xs p-1 rounded outline-none border border-white/20">
                     <option value="420fps">420fps</option>
                     <option value="320fps">320fps</option>
                   </select>
                   <select value={speed} onChange={e=>setSpeed(Number(e.target.value))} className="bg-black/50 text-white text-xs p-1 rounded outline-none border border-white/20 hidden sm:block">
                     <option value={0.5}>0.5x</option>
                     <option value={1}>1x</option>
                     <option value={1.5}>1.5x</option>
                     <option value={2}>2x</option>
                   </select>
                   <button onClick={toggleFullscreen} className="text-white hover:text-[#00ced1] transition-colors flex items-center">
                     {isFullscreen ? <span className="text-xs font-bold mr-1 hidden sm:inline">Short Screen</span> : <span className="text-xs font-bold mr-1 hidden sm:inline">Full Screen</span>}
                     <Maximize size={20}/>
                   </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Navigation & Related */}
        {!isFullscreen && (
          <>
            <div className="flex justify-between items-center mt-6">
              <button onClick={goPrev} disabled={currentIndex === 0} className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm md:text-base ${currentIndex === 0 ? 'bg-gray-800 text-gray-600' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                 &larr; Previous
              </button>
              <button onClick={goNext} disabled={currentIndex === list.length - 1} className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm md:text-base ${currentIndex === list.length - 1 ? 'bg-gray-800 text-gray-600' : 'bg-[#00ced1] text-black hover:bg-opacity-90'}`}>
                 Next &rarr;
              </button>
            </div>

            {/* Related Episodes for Anime */}
            {!isClip && allEpisodes.filter((e: any) => e.animeName === currentMedia.animeName && e.season === currentMedia.season && e.id !== currentMedia.id).length > 0 && (
              <div className="mt-8 animate-in slide-in-from-bottom-5 duration-500 pb-10">
                 <h3 className="text-[#ff4d6d] font-bold text-xl mb-4 font-poppins">More from {currentMedia.animeName} <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded ml-2">{currentMedia.season}</span></h3>
                 <div className="flex gap-4 overflow-x-auto pb-4 hide-scroll">
                   {allEpisodes.filter((e: any) => e.animeName === currentMedia.animeName && e.season === currentMedia.season && e.id !== currentMedia.id).map((e: any) => (
                      <div key={e.id} onClick={() => setActiveVideo({type: 'episode', id: e.id})} className="w-[180px] sm:w-[220px] bg-[#161b22] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] hover:border-[#ff4d6d] border border-[#333] transition-all shrink-0">
                         <div className="aspect-video relative bg-[#0b0e14]">
                           <img src={e.thumbSrc} alt={e.title} className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-black/30 hover:bg-black/10 flex items-center justify-center transition-colors">
                             <Play size={32} className="text-white opacity-70" />
                           </div>
                         </div>
                         <div className="p-3">
                           <h4 className="font-bold text-sm leading-tight text-white line-clamp-2">{e.title}</h4>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
