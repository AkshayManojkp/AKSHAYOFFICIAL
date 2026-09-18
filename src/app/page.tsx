cat << 'EOF' > src/app/page.tsx 'use client'; import 
React, { useState } from 'react'; import {
  Terminal, Cpu, Shield, Globe, Mail, ExternalLink, 
  Layers, Database, Zap, Activity, Code, Award, Radio
} from 'lucide-react';
export default function CommandCenter() { const 
  [terminalMessage, setTerminalMessage] = useState(''); 
  const [sentStatus, setSentStatus] = useState(false); 
  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault(); if (!terminalMessage.trim()) 
    return; setSentStatus(true); setTimeout(() => {
      setTerminalMessage(''); setSentStatus(false);
    }, 3000);
  };
  return ( <div className="min-h-screen bg-[#07090e] 
    text-[#e2e8f0] font-mono selection:bg-[#00f0ff]/25 
    selection:text-[#00f0ff] relative overflow-hidden">
      <div className="absolute inset-0 
      bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] 
      bg-[size:4rem_4rem] pointer-events-none" /> <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[1000px] h-[350px] bg-gradient-to-b 
      from-[#00f0ff]/10 via-[#7000ff]/5 to-transparent 
      blur-[120px] pointer-events-none" /> {/* SYSTEM 
      STATUS BAR */} <header className="sticky top-0 z-50 
      backdrop-blur-xl bg-[#07090e]/80 border-b 
      border-[#1f293d]/50 px-6 py-4 flex flex-wrap 
      justify-between items-center text-xs">
        <div className="flex items-center space-x-3"> 
          <span className="inline-block w-2.5 h-2.5 
          rounded-full bg-[#00f0ff] animate-pulse 
          shadow-[0_0_10px_#00f0ff]" /> <span 
          className="font-bold tracking-widest 
          text-[#00f0ff]">SYS.ONLINE // MESH ACTIVE</span> 
          <span className="hidden sm:inline 
          text-slate-500">|</span> <span className="hidden 
          sm:inline text-slate-400">DUBAI, UAE</span>
        </div> <nav className="flex space-x-6 
        text-slate-300 font-semibold">
          <a href="#core" className="hover:text-[#00f0ff] 
          transition-colors">[SYS.01 // CORE]</a> <a 
          href="#deployments" 
          className="hover:text-[#00f0ff] 
          transition-colors">[SYS.02 // DEPLOY]</a> <a 
          href="#research" className="hover:text-[#00f0ff] 
          transition-colors">[SYS.03 // R&D]</a> <a 
          href="#transmit" className="hover:text-[#00f0ff] 
          transition-colors">[SYS.04 // TRANSMIT]</a>
        </nav> </header> <main className="max-w-6xl 
      mx-auto px-6 py-16 relative z-10 space-y-24">
        {/* HERO INITIALIZATION */} <section id="core" 
        className="space-y-8 pt-6">
          <div className="inline-flex items-center 
          space-x-2 px-3 py-1 rounded bg-[#00f0ff]/10 
          border border-[#00f0ff]/30 text-[#00f0ff] 
          text-xs">
            <Radio className="w-3.5 h-3.5 animate-pulse" 
            /> <span>CREATOR // SYSTEMS ARCHITECT // 
            TERAMYST 🌿</span>
          </div> <div className="space-y-4"> <h1 
            className="text-4xl md:text-6xl font-extrabold 
            tracking-tight text-white">
              AKSHAY MANOJ K P </h1> <p className="text-lg 
            md:text-xl text-slate-400 max-w-2xl 
            leading-relaxed">
              Bridging precision mechanical engineering, 
              technical sales growth, and next-gen AI 
              system architectures across the United Arab 
              Emirates.
            </p> </div> </section> {/* SECTOR DELTA: 
        SIGNAL TRANSMISSION */} <section id="transmit" 
        className="space-y-8 pb-12">
          <div className="flex items-center space-x-3 
          border-b border-[#1f293d] pb-4">
            <Terminal className="w-5 h-5 text-[#00f0ff]" 
            /> <h2 className="text-xl font-bold 
            tracking-wider text-white">SIGNAL TRANSMISSION 
            TERMINAL</h2>
          </div> <div className="grid grid-cols-1 
          lg:grid-cols-2 gap-8">
            <div className="space-y-4"> <p 
              className="text-slate-400 text-sm">Establish 
              direct uplink across professional 
              networks:</p> <div className="grid 
              grid-cols-2 gap-3 text-sm">
                <a 
                href="https://www.linkedin.com/in/akshay-manoj-kp-prof-cnct" 
                target="_blank" rel="noreferrer" 
                className="p-3 rounded bg-[#0b101b] border 
                border-[#1f293d] hover:border-[#00f0ff] 
                flex items-center justify-between 
                transition-colors">
                  <span>LinkedIn</span> <ExternalLink 
                  className="w-4 h-4 text-slate-500" />
                </a> <a 
                href="https://github.com/AkshayManojkp" 
                target="_blank" rel="noreferrer" 
                className="p-3 rounded bg-[#0b101b] border 
                border-[#1f293d] hover:border-[#00f0ff] 
                flex items-center justify-between 
                transition-colors">
                  <span>GitHub</span> <ExternalLink 
                  className="w-4 h-4 text-slate-500" />
                </a> </div> <div className="pt-2"> <a 
                href="mailto:akshaymanojkp@outlook.com" 
                className="inline-flex items-center 
                space-x-2 text-[#00f0ff] text-sm 
                hover:underline">
                  <Mail className="w-4 h-4" /> 
                  <span>akshaymanojkp@outlook.com</span>
                </a>
   
</div> </div> <form onSubmit={handleTransmit} 
            className="p-6 rounded-xl bg-[#0b101b] 
            border border-[#1f293d] space-y-4">
              <div className="flex items-center 
              space-x-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full 
                bg-[#00ff88]" /> <span>SECURE UPLINK 
                CHAT</span>
              </div> <textarea rows={4} 
                value={terminalMessage} onChange={(e) 
                => setTerminalMessage(e.target.value)} 
                placeholder="Type your transmission 
                message here..." className="w-full 
                bg-[#07090e] border border-[#1f293d] 
                rounded p-3 text-white text-sm 
                focus:outline-none 
                focus:border-[#00f0ff] resize-none" 
                required
              /> <button type="submit" 
              className="w-full py-3 rounded 
              bg-[#00f0ff] text-[#07090e] font-bold 
              text-xs uppercase tracking-widest 
              hover:bg-[#00f0ff]/90 transition-colors">
                {sentStatus ? 'TRANSMISSION SENT 
                SUCCESSFULLY...' : 'TRANSMIT SIGNAL'}
              </button> </form> </div> </section> 
      </main> <footer className="border-t 
      border-[#1f293d]/50 bg-[#05070a] py-8 px-6 
      text-center text-xs text-slate-500 space-y-2">
        <div>© 2026 Akshay Manoj K P. All rights 
        reserved.</div> <div className="text-slate-400 
        font-medium">
          prompted ideas Combines, Build With presicion 
          Intelligence of ' GEMINI AI ' ♊
        </div> </footer> </div> );
}
EOF

