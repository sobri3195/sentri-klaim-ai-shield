
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { Modules } from "@/components/Modules";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Hero />
      <Stats />
      <Features />
      <Dashboard />
      <Modules />
      <CTA />
    </div>
  );
};

export default Index;
