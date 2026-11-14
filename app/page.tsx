import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AgentCreation from "@/components/AgentCreation";
import ScaleDashboard from "@/components/ScaleDashboard";
import Integrations from "@/components/Integrations";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <AgentCreation />
      <ScaleDashboard />
      <Integrations />
      <FAQ />
    </>
  );
}
