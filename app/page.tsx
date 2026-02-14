import {
  Hero,
  Features,
  HowItWorks,
  Trust,
  AppStoreBadge,
  Waitlist,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Trust Section */}
      <Trust />

      {/* App Store Download Section */}
      <AppStoreBadge />

      {/* Waitlist Section */}
      <Waitlist />

      {/* Footer */}
      <Footer />
    </main>
  );
}
