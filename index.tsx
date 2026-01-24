import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// --- Components ---

const Button = ({ 
  children, 
  primary = false, 
  gold = false,
  className = "", 
  onClick 
}: { 
  children?: React.ReactNode, 
  primary?: boolean, 
  gold?: boolean,
  className?: string, 
  onClick?: () => void 
}) => {
  // Doodle Button Styles
  let baseClass = "px-8 py-3 text-xl transition-all duration-300 transform active:scale-95 relative overflow-hidden group border-2 border-white rounded-lg font-display tracking-widest";
  
  let colorClass = "bg-transparent hover:bg-white/10 text-white doodle-shadow";
  
  if (primary) {
    colorClass = "bg-brand-cyan text-black border-black doodle-shadow-cyan hover:rotate-1";
    baseClass += " font-bold";
  }
  
  if (gold) {
    colorClass = "bg-brand-yellow text-black border-black doodle-shadow-gold hover:-rotate-1";
    baseClass += " font-bold";
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${colorClass} ${className}`}>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: string, title: string, desc: string, delay: string }) => (
  <div className={`doodle-border bg-[#222] p-8 transition-all duration-500 hover:-translate-y-2 group ${delay} relative hover:rotate-1`}>
    {/* Scribble in background */}
    <div className="absolute inset-0 bg-scribble opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="w-16 h-16 mb-6 relative">
       {/* Hand drawn circle for icon */}
       <svg className="absolute inset-0 w-full h-full text-brand-cyan animate-spin-slow" viewBox="0 0 100 100">
         <path d="M50 10 C 20 10 10 40 10 50 C 10 80 40 90 50 90 C 80 90 90 60 90 50 C 90 20 60 10 50 10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
       </svg>
       <div className="absolute inset-0 flex items-center justify-center">
         <i className={`${icon} text-3xl text-white group-hover:scale-110 transition-transform`}></i>
       </div>
    </div>

    <h3 className="text-2xl font-display mb-3 text-brand-chalk relative z-10">{title}</h3>
    <p className="text-gray-300 text-lg leading-relaxed relative z-10">{desc}</p>
  </div>
);

const ComparisonTable = () => (
  <div className="mt-20 relative z-10 w-full">
    {/* Card Container matches width of parent, internal scroll for table */}
    <div className="doodle-border bg-[#1a1a1a] p-4 sm:p-8 relative w-full overflow-hidden">
       {/* Chalk smudge */}
       <div className="absolute top-10 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

       <h3 className="text-2xl sm:text-3xl font-display text-center mb-8 text-white relative z-10">
         The <span className="text-brand-yellow underline decoration-wavy">Math</span> Doesn't Lie
       </h3>
       
       <div className="overflow-x-auto pb-4">
         <table className="w-full text-left border-collapse relative z-10 min-w-[600px]">
          <thead>
            <tr className="border-b-4 border-white/20 border-dashed">
              <th className="p-4 sm:p-6 text-xl sm:text-2xl font-display text-gray-400 w-1/3">Feature</th>
              <th className="p-4 sm:p-6 text-xl sm:text-2xl font-display text-gray-500 w-1/3">Spotify / Others</th>
              <th className="p-4 sm:p-6 text-xl sm:text-2xl font-display text-brand-cyan w-1/3 bg-white/5 rounded-t-lg border-x-2 border-t-2 border-white/10">Audify</th>
            </tr>
          </thead>
          <tbody className="font-sans text-lg sm:text-xl">
            <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
              <td className="p-4 sm:p-6 text-white font-bold">Yearly Cost</td>
              <td className="p-4 sm:p-6 text-red-400 font-bold decoration-2 line-through decoration-red-500">$119.88</td>
              <td className="p-4 sm:p-6 text-brand-yellow font-black text-2xl sm:text-3xl bg-white/5 border-x-2 border-white/10">$FREE</td>
            </tr>
            <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
              <td className="p-4 sm:p-6 text-white">Ad-Free Experience</td>
              <td className="p-4 sm:p-6 text-gray-400">Subscription Only</td>
              <td className="p-4 sm:p-6 text-brand-cyan font-bold bg-white/5 border-x-2 border-white/10">Lifetime Included</td>
            </tr>
             <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
              <td className="p-4 sm:p-6 text-white">Social Jam</td>
              <td className="p-4 sm:p-6 text-gray-400">Standard</td>
              <td className="p-4 sm:p-6 text-brand-cyan font-bold bg-white/5 border-x-2 border-white/10">Enhanced + Live</td>
            </tr>
            <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
              <td className="p-4 sm:p-6 text-white">Friend Activity</td>
              <td className="p-4 sm:p-6 text-gray-400">Desktop Only</td>
              <td className="p-4 sm:p-6 text-brand-cyan font-bold bg-white/5 border-x-2 border-white/10">Mobile & Desktop</td>
            </tr>
            <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
              <td className="p-4 sm:p-6 text-white">Cost over 5 Years</td>
              <td className="p-4 sm:p-6 text-red-500 font-black text-xl sm:text-2xl">~$600.00</td>
              <td className="p-4 sm:p-6 text-brand-cyan font-black text-xl sm:text-2xl bg-white/5 border-x-2 border-white/10">$FREE</td>
            </tr>
            <tr>
              <td className="p-4 sm:p-6 text-white font-display">Verdict</td>
              <td className="p-4 sm:p-6 text-gray-500 italic">"Rent forever"</td>
              <td className="p-4 sm:p-6 text-brand-yellow font-display text-xl sm:text-2xl bg-white/5 border-x-2 border-b-2 border-white/10 rounded-b-lg">"Own it"</td>
            </tr>
          </tbody>
        </table>
       </div>
    </div>
  </div>
);

const FriendStatus = ({ name, song, status, avatar }: { name: string, song?: string, status: 'online' | 'offline' | 'jamming', avatar: string }) => {
  return (
    <div className="flex items-center justify-between p-3 mb-3 doodle-border-thin bg-[#111] hover:bg-[#1a1a1a] transition-colors cursor-default group relative">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full border-2 border-white/50 grayscale group-hover:grayscale-0 transition-all" />
          {status !== 'offline' && (
             <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-black ${status === 'online' ? 'bg-brand-cyan' : 'bg-brand-pink animate-bounce'}`}></div>
          )}
        </div>
        <div>
          <h4 className="font-display text-lg text-white">{name}</h4>
          <p className="text-sm font-bold tracking-wide text-gray-400 flex items-center gap-2">
            {status === 'jamming' && <span className="text-brand-pink flex items-center gap-1"><i className="fas fa-music"></i> JAMMING</span>}
            {status === 'online' && <span className="text-brand-cyan">ONLINE</span>}
            {status === 'offline' && <span>2H AGO</span>}
          </p>
        </div>
      </div>
      {song && (
        <div className="text-right hidden sm:block">
          <div className="text-xs text-gray-500 font-bold mb-1">LISTENING TO</div>
          <div className="text-sm text-brand-yellow font-display truncate max-w-[120px]">{song}</div>
        </div>
      )}
    </div>
  );
};

const TestimonialCard = ({ name, handle, text, avatar }: { name: string, handle: string, text: string, avatar: string }) => (
  <div className="doodle-border bg-[#222] p-6 relative group hover:rotate-2 transition-transform duration-300">
    {/* Tape at top */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/20 -rotate-2 backdrop-blur-sm z-10" style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'}}></div>

    <div className="flex items-center gap-4 mb-4">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full border-2 border-white bg-black" />
      <div>
        <h4 className="font-display text-xl text-white">{name}</h4>
        <p className="text-sm text-brand-cyan font-bold">{handle}</p>
      </div>
      <div className="ml-auto text-brand-yellow text-sm flex gap-1">
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
      </div>
    </div>
    <p className="text-xl text-gray-300 leading-relaxed font-sans italic">"{text}"</p>
  </div>
);

const Marquee = () => {
  return (
    <div className="relative py-4 bg-brand-yellow -rotate-1 scale-105 z-20 my-16 overflow-hidden border-y-4 border-black">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4 select-none">
             <span className="text-3xl font-display text-black uppercase tracking-widest">
               Vibe Together
             </span>
             <span className="text-2xl text-black"><i className="fas fa-bolt"></i></span>
             <span className="text-3xl font-display text-black uppercase tracking-widest decoration-wavy underline">
               No Ads
             </span>
             <span className="text-2xl text-black"><i className="fas fa-fire"></i></span>
             <span className="text-4xl font-display font-black text-black">
               $FREE
             </span>
             <span className="text-2xl text-black"><i className="fas fa-music"></i></span>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Main Application ---

const App = () => {
  const [friends, setFriends] = useState<{
    id: number;
    name: string;
    song: string;
    status: 'online' | 'offline' | 'jamming';
    avatar: string;
  }[]>([
    { id: 1, name: "Alex Chen", song: "Midnight City", status: 'online', avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
    { id: 2, name: "Sarah Jones", song: "Levitating", status: 'jamming', avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { id: 3, name: "Mike Ross", song: "", status: 'offline', avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
    { id: 4, name: "Emma Wilson", song: "Heat Waves", status: 'online', avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  ]);

  const handleGetApp = () => {
    window.location.href = "https://audify-blue.vercel.app/app-release.apk";
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setFriends(prev => prev.map(friend => {
        if (Math.random() > 0.7) {
          const songs = ["As It Was", "Stay", "Good 4 U", "Peaches", "Anti-Hero", "Flowers"];
          const newSong = songs[Math.floor(Math.random() * songs.length)];
          const statuses: ('online' | 'offline' | 'jamming')[] = ['online', 'jamming', 'online']; 
          const newStatus = Math.random() > 0.8 ? 'offline' : statuses[Math.floor(Math.random() * statuses.length)];
          
          return {
            ...friend,
            song: newStatus === 'offline' ? "" : newSong,
            status: newStatus
          };
        }
        return friend;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-pink selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-6 py-4 bg-[#1a1a1a]/95 border-b-2 border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer hover:rotate-2 transition-transform">
            <div className="w-10 h-10 border-2 border-white rounded flex items-center justify-center bg-black">
              <i className="fas fa-wave-square text-brand-cyan text-lg"></i>
            </div>
            <span className="text-2xl font-display text-white mt-1">Audify</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-xl font-medium text-gray-400 font-sans">
            <a href="#features" className="hover:text-brand-yellow transition-colors hover:underline decoration-wavy underline-offset-4">Features</a>
            <a href="#vibe" className="hover:text-brand-pink transition-colors hover:underline decoration-wavy underline-offset-4">Live Demo</a>
            <a href="#pricing" className="hover:text-brand-cyan transition-colors hover:underline decoration-wavy underline-offset-4">Pricing</a>
          </div>
          
          <Button primary className="!px-3 !py-1 text-xs md:text-sm shadow-none" onClick={handleGetApp}>
            GET APP • $FREE
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="vibe" className="relative pt-32 pb-12 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Chalk dust effects */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          
          {/* Hero Content */}
          <div className="text-left space-y-8 relative">
             {/* Badge */}
            <div className="inline-block transform -rotate-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 border-2 border-brand-pink rounded-full bg-black">
                <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
                <span className="text-sm font-bold tracking-widest uppercase text-brand-pink font-sans">Launch Sale</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-display text-white leading-[0.85] chalk-text">
              VIBE<br />
              <span className="text-brand-cyan underline decoration-wavy decoration-4 decoration-brand-purple">TOGETHER</span>
            </h1>
            
            <div className="space-y-6">
               <p className="text-2xl text-gray-300 max-w-lg font-sans leading-relaxed">
                The <span className="text-brand-yellow font-bold bg-white/10 px-1">anti-subscription</span> music app. 
                One payment. No ads. Just vibes.
              </p>
              
              <div className="flex items-center gap-4 py-2 transform rotate-1">
                <span className="text-6xl font-display text-brand-yellow underline decoration-double">$FREE</span>
                <div className="flex flex-col">
                  <span className="text-xl text-gray-500 line-through decoration-red-500 decoration-2 font-display">$4.99</span>
                  <span className="text-sm font-bold text-white uppercase tracking-widest bg-brand-pink text-black px-2 py-1 transform -rotate-2">Lifetime Access</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button primary className="flex items-center gap-3 !py-4 !px-8 text-xl" onClick={handleGetApp}>
                <i className="fab fa-google-play text-2xl"></i>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[12px] uppercase opacity-80 font-sans">Get it on</span>
                  <span className="font-display">Google Play</span>
                </div>
              </Button>
            </div>

            <div className="text-sm text-gray-500 pt-4 flex items-center gap-2 font-sans opacity-70">
               <svg width="20" height="20" viewBox="0 0 100 100" className="text-gray-400 shrink-0">
                 <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="5"/>
               </svg>
               <span className="flex-1 break-words">Secure payment via Play Store</span>
            </div>
          </div>

          {/* Hero Visual Mockup - Doodle Phone */}
          <div className="relative animate-wiggle lg:h-[600px] flex items-center justify-center p-4">
            
            {/* Phone Body - Hand Drawn Rect */}
            <div className="w-full max-w-[300px] sm:max-w-[340px] h-[580px] sm:h-[660px] doodle-border bg-[#111] relative z-10 p-4 mx-auto">
               {/* Speaker Grill */}
               <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#333] rounded-full"></div>
               
               {/* Screen Area */}
               <div className="w-full h-full border-2 border-white/20 rounded-sm overflow-hidden flex flex-col relative bg-[#151515]">
                  
                  {/* Status Bar */}
                  <div className="h-8 w-full flex justify-between items-center px-4 text-xs text-gray-400 font-sans mt-2">
                     <span>9:41</span>
                     <div className="flex gap-1">
                       <i className="fas fa-signal"></i>
                       <i className="fas fa-wifi"></i>
                       <i className="fas fa-battery-full"></i>
                     </div>
                  </div>

                  {/* App Header */}
                  <div className="px-4 py-4 flex justify-between items-end border-b-2 border-white/10 border-dashed pb-4">
                     <h2 className="text-3xl font-display text-white">My Crew</h2>
                     <button className="w-10 h-10 border-2 border-brand-cyan text-brand-cyan rounded-full hover:bg-brand-cyan hover:text-black transition-colors flex items-center justify-center text-xl">
                       <i className="fas fa-plus"></i>
                     </button>
                  </div>

                  {/* Friend List */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                      {friends.map((f) => (
                        <FriendStatus key={f.id} {...f} />
                      ))}
                      
                      {/* Empty slots drawing */}
                      <div className="border-2 border-dashed border-white/10 rounded-xl p-4 flex items-center justify-center text-gray-600 font-display">
                        Invite more friends...
                      </div>
                  </div>

                  {/* Player Control - Doodle Style */}
                  <div className="p-4 border-t-2 border-white/20 bg-[#1a1a1a]">
                     <div className="doodle-border-thin p-3 bg-black flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                           <div className="w-12 h-12 bg-brand-yellow border-2 border-black flex items-center justify-center">
                              <i className="fas fa-music text-black text-xl animate-bounce"></i>
                           </div>
                           <div className="overflow-hidden">
                              <div className="text-xs text-brand-cyan font-bold tracking-widest">NOW PLAYING</div>
                              <div className="text-white font-display truncate">Midnight City</div>
                           </div>
                        </div>
                        
                        {/* Progress Bar - Hand Drawn Line */}
                        <div className="w-full h-2 bg-gray-700 rounded-full relative overflow-hidden">
                           <div className="absolute top-0 left-0 h-full w-2/3 bg-brand-cyan"></div>
                        </div>
                        
                        <div className="flex justify-between items-center text-2xl px-4 text-white">
                           <i className="fas fa-backward step-backward hover:text-brand-pink cursor-pointer"></i>
                           <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors">
                              <i className="fas fa-pause"></i>
                           </div>
                           <i className="fas fa-forward step-forward hover:text-brand-pink cursor-pointer"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 -right-10 text-brand-yellow text-6xl animate-pulse opacity-50 font-display rotate-12">?</div>
            <div className="absolute bottom-10 -left-10 text-brand-pink text-6xl animate-bounce opacity-50 font-display -rotate-12">!</div>
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <Marquee />

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl text-white/5 font-display select-none whitespace-nowrap">Why Audify?</span>
            <h2 className="text-5xl md:text-7xl font-display mb-6 text-white relative z-10">Features you <span className="text-brand-cyan underline decoration-wavy">actually</span> want.</h2>
            <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">We stripped away the corporate bloat and kept the vibe. Pure music, social connection, zero ads.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="fas fa-ban" 
              title="Zero Ads. Ever." 
              desc="We don't sell your attention. Pay once and enjoy an uninterrupted flow state forever."
              delay=""
            />
            <FeatureCard 
              icon="fas fa-users" 
              title="Sync & Jam" 
              desc="Drop into a room with friends. Your music syncs perfectly to the millisecond."
              delay="delay-100"
            />
            <FeatureCard 
              icon="fas fa-bolt" 
              title="Live Activity" 
              desc="See who's online and what they're playing instantly. No refreshing required."
              delay="delay-200"
            />
            <FeatureCard 
              icon="fas fa-fire" 
              title="Hype Reactions" 
              desc="Spam fire emojis when the beat drops. Chat and react directly in the player."
              delay="delay-300"
            />
            <FeatureCard 
              icon="fas fa-lock" 
              title="Privacy First" 
              desc="No data selling. Your listening habits are yours (and your friends') alone."
              delay="delay-400" 
            />
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display text-white mb-6">The Anti-Subscription</h2>
            <div className="w-32 h-2 bg-brand-pink mx-auto rotate-1 rounded-full"></div>
            <p className="text-xl text-gray-400 mt-4 font-sans max-w-2xl mx-auto">Why pay monthly rent for music when you can own access forever?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Competitor Card - Boring */}
            <div className="border-4 border-dashed border-gray-700 p-8 rounded-xl flex flex-col opacity-70 hover:opacity-100 transition-opacity rotate-1">
               <h3 className="text-3xl font-display text-gray-500 mb-2">Standard Premium Apps</h3>
               <div className="text-4xl font-sans font-bold text-gray-500 mb-2 line-through decoration-red-500 decoration-4">$119.88<span className="text-lg font-normal">/year</span></div>
               <p className="text-sm text-red-500 font-bold mb-6 font-sans uppercase tracking-widest">💸 Total Rip-off</p>
               
               <ul className="space-y-4 text-gray-500 mb-8 flex-1 font-sans text-lg">
                 <li className="flex items-center gap-3"><i className="fas fa-times text-red-500"></i> You're just renting music</li>
                 <li className="flex items-center gap-3"><i className="fas fa-times text-red-500"></i> Stop paying? Ads come back.</li>
                 <li className="flex items-center gap-3"><i className="fas fa-times text-red-500"></i> $10.99 drain every month</li>
               </ul>
               
               <button className="w-full py-4 rounded-xl border-2 border-gray-700 text-gray-500 font-display text-xl cursor-not-allowed uppercase">Keep Paying $120/yr</button>
            </div>

            {/* Audify Card (Premium) - Highlight */}
            <div className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-300 scale-105">
               {/* Background blob */}
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-xl transform scale-110"></div>
              
              <div className="doodle-border bg-[#111] p-8 flex flex-col relative z-10">
                 
                 <div className="absolute -top-6 -right-6 bg-brand-cyan text-black font-display text-lg px-4 py-2 rotate-12 doodle-shadow">
                    SAVE $119/YEAR
                 </div>

                 <h3 className="text-4xl font-display text-white mb-2 flex items-center gap-2">
                   Audify <i className="fas fa-crown text-brand-yellow animate-bounce"></i>
                 </h3>
                 <p className="text-xl text-gray-400 font-sans mb-6">Lifetime Premium</p>
                 
                 <div className="flex items-baseline gap-2 mb-2 border-b-2 border-white/10 pb-6 border-dashed">
                   <span className="text-7xl font-display text-brand-cyan">$FREE</span>
                   <span className="text-2xl text-gray-400 font-sans">once.</span>
                 </div>
                 <p className="text-brand-yellow font-sans font-bold text-lg mb-6 animate-pulse">
                    Cheaper than a pack of gum. Just try it.
                 </p>
                 
                 <ul className="space-y-4 text-white mb-10 flex-1 font-sans text-xl">
                   <li className="flex items-center gap-3"><i className="fas fa-check text-brand-cyan"></i> <strong>Save $100+ every year</strong></li>
                   <li className="flex items-center gap-3"><i className="fas fa-check text-brand-cyan"></i> Own it forever. No monthly bills.</li>
                   <li className="flex items-center gap-3"><i className="fas fa-check text-brand-cyan"></i> Same premium features.</li>
                 </ul>
                 
                 <Button primary className="w-full text-2xl py-4" onClick={handleGetApp}>
                    TRY IT FOR $FREE
                 </Button>
                 <p className="text-center text-sm text-gray-500 mt-4 font-sans font-bold">Risk: $FREE | Reward: Lifetime of Music</p>
              </div>
            </div>

          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative border-t-2 border-white/10 border-dashed">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display text-center mb-20 text-white">
              The internet is <span className="text-brand-pink underline decoration-wavy">obsessed</span>.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Sarah Jenkins" 
                handle="@sarah_jams" 
                text="I was paying $120/year for spotify. Switched to Audify for 43 cents. Literally the same app but better social features." 
                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah2" 
              />
              <TestimonialCard 
                name="Davide Russo" 
                handle="@drusso_beats" 
                text="The 'Jam' feature is seamless. Me and my friends use it every night to sync up. Zero lag." 
                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Davide" 
              />
               <TestimonialCard 
                name="Jessica Lee" 
                handle="@jess_vibe" 
                text="At first I thought $FREE was a joke. It's not. It's actually the best music player I've used. Best investment ever." 
                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Jess" 
              />
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-black bg-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-white flex items-center justify-center bg-black rounded">
              <i className="fas fa-wave-square text-white text-xs"></i>
            </div>
            <span className="text-2xl font-display text-gray-400">Audify</span>
          </div>
          <div className="flex gap-6">
             <a href="https://twitter.com/mohitdebian" target="_blank" className="text-3xl text-gray-500 hover:text-brand-cyan transition-colors transform hover:-translate-y-1 hover:rotate-6">
                <i className="fab fa-twitter"></i>
             </a>
             <a href="https://twitter.com/mohitdebian" target="_blank" className="text-3xl text-gray-500 hover:text-brand-pink transition-colors transform hover:-translate-y-1 hover:-rotate-6">
                <i className="fab fa-instagram"></i>
             </a>
              <a href="https://twitter.com/mohitdebian" target="_blank" className="text-3xl text-gray-500 hover:text-brand-purple transition-colors transform hover:-translate-y-1 hover:rotate-6">
                <i className="fab fa-discord"></i>
             </a>
          </div>
          <p className="text-gray-500 font-sans font-bold">© 2024 Audify Inc.</p>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
