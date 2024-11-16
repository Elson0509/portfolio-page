"use client"

import { useState, useEffect } from "react";
import DarkModeToggleButton from "@/components/DarkModeToggleButton";

import SplashScreen from "@/components/SplashScreen";
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
    <main className="flex items-center justify-center p-20 pt-32">
      <div>
        <h1 className="max-w-3xl text-center font-bold text-slate-900 dark:text-cyan-500 text-5xl leading-tight mb-3">Tailwind CSS: Dark Mode Tutorial</h1>
        <p className="text-lg font-medium text-slate-700 dark:text-cyan-700 text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam corporis officia illum saepe voluptates, assumenda molestiae exercitationem quisquam illo omnis? Fuga, voluptates? Eum dolor ipsam expedita perspiciatis doloremque, ad illo!</p>
        <DarkModeToggleButton />
      </div>
    </main>
  );
}
