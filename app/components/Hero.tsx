"use client";

import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main breathing circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Outermost glow */}
            <div className="absolute inset-0 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-400/15 via-cyan-400/12 to-purple-400/15 blur-[100px] animate-breathe-slow" />
            
            {/* Middle ring */}
            <div className="absolute inset-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-400/25 via-cyan-400/20 to-blue-400/25 blur-[80px] animate-breathe" style={{ animationDelay: "0.5s" }} />
            
            {/* Inner core */}
            <div className="absolute inset-0 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-400/35 via-cyan-400/30 to-purple-400/35 blur-[60px] animate-breathe" style={{ animationDelay: "1s" }} />
            
            {/* Center dot */}
            <div className="absolute inset-0 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-400/45 via-cyan-400/40 to-blue-400/45 blur-[40px] animate-breathe" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-[20%] left-[15%] w-40 h-40 rounded-full bg-gradient-to-br from-teal-400/8 to-cyan-400/8 blur-3xl animate-float" />
        <div className="absolute bottom-[25%] right-[20%] w-48 h-48 rounded-full bg-gradient-to-br from-purple-400/8 to-blue-400/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[35%] right-[25%] w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/8 to-teal-400/8 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-[40%] left-[30%] w-36 h-36 rounded-full bg-gradient-to-br from-blue-400/8 to-purple-400/8 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10 shadow-lg backdrop-blur-xl border border-white/10">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse-soft shadow-lg shadow-teal-400/50" />
            <span className="text-sm font-medium bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
              Available now on iOS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
            <span className="inline-block bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-sm">
              Calm your mind.
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-sm animate-gradient bg-[length:200%_auto]">
              One breath at a time.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Guided breathing, journaling, and calming sounds to help you stop overthinking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://apps.apple.com/us/app/unspiral-calm-your-mind/id6756629264"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-5 rounded-full text-white font-semibold text-lg w-full sm:w-auto relative z-10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center justify-center gap-3 relative z-10">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on iOS
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary px-10 py-5 rounded-full text-slate-200 font-semibold text-lg w-full sm:w-auto relative z-10"
            >
              <span className="relative z-10">See How It Works</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
