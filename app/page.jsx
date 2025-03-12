"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
export default function Home() {
  return (
    <main>
      <TransitionPage />
      <CoverParticles />
      <Introduction />
    </main>
  );
}
