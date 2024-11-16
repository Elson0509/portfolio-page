import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

type SplashScreenProps = {
  finishLoading: () => void;
};

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  const onAnimationComplete = () => {
    finishLoading();
  };

  return (
    <motion.div
      className="flex h-screen items-center justify-center bg-slate-700"
      animate={{
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.85, 1],
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <Typewriter
        options={{
          delay: 25,
          cursor:"",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-white text-xl">Elson Ramos </span>`)
            .pauseFor(500)
            .typeString(`<span class="text-white text-xl">- <strong>Web Developer</strong></span>`)
            .start();
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;
