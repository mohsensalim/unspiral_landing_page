"use client";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Calm Me Now",
    description:
      "Short guided breathing sessions to instantly reduce anxiety. Just tap and breathe along.",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    title: "Simple Journaling",
    description:
      "Write what's on your mind without pressure or overthinking. No prompts, no rules.",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-500/10 to-violet-500/10",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    title: "Calming Sounds",
    description:
      "Ambient sounds to relax, focus, or sleep. Rain, waves, forest, and more.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 bg-clip-text text-transparent">
              Everything you need to feel calm
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Simple tools designed to help you find peace in moments of overwhelm.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative glass-card rounded-[2rem] p-10 transition-all duration-500 hover:scale-[1.03] cursor-pointer"
              style={{ 
                animationDelay: `${index * 150}ms`,
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-700`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-slate-50 group-hover:text-slate-100 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.gradient} opacity-0 group-hover:opacity-[0.08] rounded-bl-full rounded-tr-[2rem] transition-opacity duration-700`}
              />
              <div
                className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${feature.gradient} opacity-0 group-hover:opacity-[0.06] rounded-tr-full rounded-bl-[2rem] transition-opacity duration-700`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
