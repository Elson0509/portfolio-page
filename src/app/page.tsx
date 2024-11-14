"use client"

import { useState, useEffect } from "react";

import SplashScreen from "./components/SplashScreen";
export default function Home() {
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    if(isLoading)
      return
  },[isLoading])

  if(isLoading){
    return <SplashScreen finishLoading={() => setIsloading(false)}/>
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      teste
    </div>
  );
}
