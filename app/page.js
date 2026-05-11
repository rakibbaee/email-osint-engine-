"use client";
import { useState } from "react";

export default function EmailOsint() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [adClicked, setAdClicked] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!email) return;

    // 😈 Adsterra Trap
    if (!adClicked) {
      window.open("https://www.profitablecpmratenetwork.com/c3dcxsi7?key=67dbb94dc35d4254093fe341ceeee0fb", "_blank");
      setAdClicked(true);
      return; 
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/osint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setResult({
        ...data,
        targetEmail: email,
        domain: email.split("@")[1],
        username: email.split("@")[0]
      });
    } catch (error) {
      setResult({ error: "Failed to connect to secure OSINT server." });
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-green-500 font-mono relative overflow-hidden">
      
      {/* ম্যাট্রিক্স স্টাইল ব্যাকগ্রাউন্ড ইফেক্ট */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="bg-gray-900/90 p-8 rounded-xl shadow-[0_0_40px_rgba(34,197,94,0.2)] border border-green-500/50 max-w-2xl w-full z-10">
        
        <div className="flex justify-between items-center mb-6 border-b border-green-800 pb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-green-400 tracking-widest uppercase drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">
            OSINT // ENGINE
          </h1>
          <span className="text-xs bg-green-900/50 text-green-300 px-3 py-1 rounded border border-green-700 animate-pulse">
            SYSTEM ONLINE
          </span>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col gap-5">
          <div className="relative">
            <span className="absolute left-4 top-4 text-green-700 font-bold">{">"}</span>
            <input
              type="email"
              placeholder="Target_Email_Address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 pl-10 bg-black border border-green-700 rounded text-green-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all placeholder-green-800 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-black font-extrabold py-4 rounded transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(21,128,61,0.6)] uppercase tracking-widest"
          >
            {loading ? "BRUTE-FORCING DATABASES..." : (!adClicked ? "INITIALIZE DEEP SCAN" : "BYPASS FIREWALL & EXECUTE")}
          </button>
        </form>

        {!adClicked && email && (
          <div className="mt-5 p-3 bg-yellow-900/20 border border-yellow-600/50 rounded">
            <p className="text-xs text-yellow-500 text-center animate-pulse font-bold uppercase tracking-wider">
              ⚠️ Warning: Firewall Detected. Click initialize to run bypass script.
            </p>
          </div>
        )}

        {result && !result.error && (
          <div className="mt-8 bg-black border border-green-600/50 rounded p-6 shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold mb-4 text-white border-b border-green-800 pb-2">
              TARGET INTEL ACQUIRED
            </h2>
            
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-green-700">TARGET ID:</span>
                <span className="text-green-300 font-bold">{result.targetEmail}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-green-700">USERNAME EXTRACTED:</span>
                <span className="text-green-400">{result.username}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-green-700">DOMAIN TRACE:</span>
                <span className="text-green-400">@{result.domain}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-green-700">THREAT LEVEL:</span>
                <span className={result.disposable ? "text-red-500 font-bold" : "text-green-500 font-bold"}>
                  {result.disposable ? "HIGH (DISPOSABLE/FAKE)" : "LOW (LEGITIMATE)"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-green-700">DARK WEB FOOTPRINT:</span>
                <span className="text-green-400 animate-pulse">Scanning... Secure</span>
              </div>
            </div>
          </div>
        )}

        {result && result.error && (
          <div className="mt-8 p-4 bg-red-900/20 border border-red-500 rounded text-center text-red-500 text-sm font-bold animate-pulse">
            [!] FATAL ERROR: {result.error}
          </div>
        )}

      </div>
      <footer className="mt-12 text-green-900 text-xs font-bold tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-opacity">
        Engineered by Rakib bae ⚡️
      </footer>
    </main>
  );
}
