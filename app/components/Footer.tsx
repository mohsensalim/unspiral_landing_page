"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 sm:px-8 lg:px-12 border-t border-slate-800/60 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              {/* Logo mark */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Unspiral
              </span>
            </div>
            <p className="text-base text-slate-400 font-light">
              Calm your mind. One breath at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-base">
            <a
              href="https://doc-hosting.flycricket.io/unspiral-calm-your-mind-privacy-policy/38e5dc8b-b0de-45bb-aefc-fcd51f2cc479/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="https://doc-hosting.flycricket.io/unspiral-calm-your-mind-terms-of-use/981ccbeb-9af6-40cb-87cc-00718441a24c/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium"
            >
              Terms of Use
            </a>
            <a
              href="mailto:unspiral.calm@getunspiral.com"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium"
            >
              unspiral.calm@getunspiral.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/60 text-center">
          <p className="text-base text-slate-500 font-light">
            © {currentYear} Unspiral. Made with care for your peace of mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
