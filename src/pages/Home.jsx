// import React, { useEffect } from "react";
import { motion } from "framer-motion";
import swingChair from "../assets/swingChair.mp4";
// import wooshSound from "../assets/woosh.mp3"; // halkan geli codkaaga

function Home() {
  // useEffect(() => {
  //   const audio = new Audio(wooshSound);
  //   audio.volume = 0.3; // codka hoos u dhig haddii uu xoog badan yahay
  //   audio.play();
  // }, []); // markuu page-ka furmo kaliya

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
      {/* Video background */}
      <video
        src={swingChair}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay madow yar */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Qoraalka soo dhaweynta */}
      <motion.div
        className="relative text-center text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Ku Soo Dhawoow <span className="text-green-200">Bilic-dhallaan </span>baby shop
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 7 }}
        >
          Halkaan waxaad ka heli doontaa dhar qurux badan oo casri ah — ku habboon
          caruurta da’ kasta. Soo dhowow!
        </motion.p>
      </motion.div>

      {/* Animation overlay marka page-ka furmo */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Home;
