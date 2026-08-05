'use client';
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  const goLive = async () => {
        await fetch("/api/goLive", {
            method: "POST",
        });
        window.location.reload();
    };

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 1);
    target.setHours(0, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const distance = target.getTime() - now.getTime();

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative flex min-h-screen py-10 items-center justify-center overflow-hidden bg-[#030712] px-6">

      {/* Background Glow */}
      <div className="absolute -top-60 h-[600px] w-[600px] rounded-full bg-gray-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gray-500/20 blur-3xl" />

      {/* Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div className="relative z-10 max-w-4xl text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur">
          Launching
        </div>

        <h1 className="mt-8 text-6xl font-black tracking-tight text-white md:text-8xl">
          FLUMIX
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          AI, Data & Engineering solutions built for ambitious businesses.
          Our new digital experience.
        </p>

        {/* <div className="mt-14 flex justify-center gap-6">

          {[
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="w-28 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="text-5xl font-bold text-white">
                {String(item.value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-sm uppercase tracking-widest text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div> */}

        <span className="text-white text-5xl font-bold mt-8 block">
          Comming Soon
        </span>

        <button
            onClick={goLive}
            className="mt-8 rounded-lg bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 shadow-sm backdrop-blur hover:bg-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
            Go Live
        </button>

        <p className="mt-12 text-sm text-slate-500">
          © 2026 Flumix. All rights reserved.
        </p>

      </div>
    </main>
  );
}