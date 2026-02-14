"use client";

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "No ads",
    description: "Your calm space, uninterrupted",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Privacy-first",
    description: "Your thoughts stay yours",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "No account required",
    description: "Open the app and start",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Built for simplicity",
    description: "Nothing unnecessary, just calm",
  },
];

export default function Trust() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Trust badges */}
        <div 
          className="glass-card rounded-[2.5rem] p-12 sm:p-16"
          style={{ boxShadow: 'var(--shadow-lg)' }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 bg-clip-text text-transparent">
                Designed with care
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 font-light">
              What we believe a wellness app should be
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {trustPoints.map((point, index) => (
              <div
                key={point.title}
                className="text-center group cursor-pointer"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-900/30 via-cyan-900/30 to-blue-900/30 text-teal-400 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  {point.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-slate-50 transition-colors group-hover:text-teal-400">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
