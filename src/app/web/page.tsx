"use client";

import { useState } from "react";
import DarkModeToggleButton from "@/components/DarkModeToggleButton";
import Presentation from "@/components/layout/Presentation";
import Skills from "@/components/layout/Skills";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [isLoading, setIsloading] = useState(true);

  if (isLoading) {
    return <SplashScreen finishLoading={() => setIsloading(false)} />;
  }

  return (
    <>
      <main>
        <DarkModeToggleButton />
        <Presentation />
        <Skills />
      </main>
      <footer>Footer</footer>
    </>
  );
}
