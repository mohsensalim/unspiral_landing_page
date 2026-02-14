"use client";

const steps = [
  {
    number: "01",
    title: "Open the app",
    description: "Launch Unspiral whenever you feel overwhelmed or anxious.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: 'Tap "Calm Me Now"',
    description: "One tap to start your guided breathing session instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Breathe, relax, and reset",
    description: "Follow the gentle visual guide. Feel calmer in just 60 seconds.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 bg-clip-text text-transparent">
              How it works
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            From anxious to calm in three simple steps. No complicated setup, no learning curve.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gradient-to-r via-from-teal-400/20 via-via-cyan-400/20 via-to-blue-400/20 to-transparent -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center group"
              >
                {/* Step card */}
                <div 
                  className="glass-card rounded-[2rem] p-10 transition-all duration-500 hover:scale-[1.03] cursor-pointer"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white mb-8 relative shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-2xl font-bold relative z-10">{step.number}</span>
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full bg-teal-400/30 animate-ping opacity-60" style={{ animationDuration: "2.5s" }} />
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-40" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-teal-400 mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-slate-50">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-6">
                    <svg className="w-6 h-6 text-teal-400 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
