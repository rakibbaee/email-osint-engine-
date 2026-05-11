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

    // 😈 Adsterra Trap: প্রথম ক্লিকে অ্যাড ওপেন হবে!
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
      setResult(data);
    } catch (error) {
      setResult({ error: "Failed to connect to secure OSINT server." });
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-green-500 font-mono">
      <div className="bg-gray-900/80 p-8 rounded-xl shadow-2xl border border-green-500/50 max-w-2xl w-full relative overflow-hidden">
        
        {/* হ্যাকার ফিল আনার জন্য ব্যাকগ্রাউন্ড ইফেক্ট */}
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20 animate-pulse"></div>

        <h1 className="text-3xl font-extrabold mb-1 text-center text-green-400 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
          Email OSINT Engine
        </h1>
        <p className="text-xs text-center text-green-600 mb-8 font-bold uppercase tracking-wider">Deep Web Reconnaissance Tool</p>

        <form onSubmit={handleSearch} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Enter target email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-black border border-green-700 rounded-md text-green-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all placeholder-green-800 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-black font-extrabold py-4 rounded-md transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(21,128,61,0.6)] uppercase tracking-widest"
          >
            {loading ? "Extracting Target Data..." : (!adClicked ? "Initialize Deep Scan" : "Bypass Security & Scan")}
          </button>
        </form>

        {!adClicked && email && (
          <p className="text-xs text-yellow-500 mt-5 text-center animate-pulse font-bold">
            ⚠️ FIREWALL DETECTED: Click 'Initialize Deep Scan' to bypass.
          </p>
        )}

        {result && (
          <div className="mt-8 p-5 bg-black border border-green-600/50 rounded-md overflow-hidden relative">
            <h2 className="text-lg font-bold mb-4 border-b border-green-800 pb-2 text-green-300">Target Database Match:</h2>
            <pre className="text-xs text-green-400 whitespace-pre-wrap overflow-x-auto font-mono leading-relaxed">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
      <footer className="mt-10 text-green-900 text-[10px] font-bold tracking-widest uppercase">
        Engineered by Rakib bae ⚡️
      </footer>
    </main>
  );
}
