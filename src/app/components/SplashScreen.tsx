import { motion } from "framer-motion";

type SplashScreenProps = {
    finishLoading: () => void
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  const onAnimationComplete = () => {
    //finishLoading();
  };

  return (
    <div
      className="flex h-screen items-center justify-center"
    >
      <motion.div
        className="bg-blue-800 size-14"
        animate={{
          scale: [1, 2, 2, 1, 1, 0.5],
          rotate: [0, 0, 180, 180, 0, 0],
          opacity: [1, 1, 1, 1, 1, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.1, 0.35, 0.5, 0.7, 1],
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
};

export default SplashScreen;
