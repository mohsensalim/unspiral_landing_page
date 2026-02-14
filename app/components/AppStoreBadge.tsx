"use client";

export default function AppStoreBadge() {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 bg-clip-text text-transparent">
            Ready to start your journey?
          </span>
        </h2>
        <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
          Download Unspiral now and discover the power of mindful breathing. Available on iPhone, iPad, and Mac.
        </p>
        
        {/* App Store Badge */}
        <a
          href="https://apps.apple.com/us/app/unspiral-calm-your-mind/id6756629264"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black shadow-xl hover:shadow-2xl transition-all duration-300">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs font-medium opacity-90">Download on the</div>
              <div className="text-2xl font-bold -mt-1">App Store</div>
            </div>
          </div>
        </a>

        {/* Platform info */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>iPhone & iPad</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Mac (Apple Silicon)</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Free with In-App Purchases</span>
          </div>
        </div>
      </div>
    </section>
  );
}
