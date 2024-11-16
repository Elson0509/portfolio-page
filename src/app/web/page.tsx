"use client";

import { useState, useEffect } from "react";
import DarkModeToggleButton from "@/components/DarkModeToggleButton";
import Presentation from "@/components/layout/Presentation";

import SplashScreen from "@/components/SplashScreen";
export default function Home() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  if (isLoading) {
    return <SplashScreen finishLoading={() => setIsloading(false)} />;
  }

  return (
    <>
      <main>
        <DarkModeToggleButton />
        <Presentation />
      </main>
      <footer>Footer</footer>
    </>
  );
}
