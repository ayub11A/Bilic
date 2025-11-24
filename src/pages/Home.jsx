import { useState, useEffect } from "react";
import { motion } from "framer-motion";


import video3 from "../assets/viedo3.mp4";

function Home() {
  const videos = [ video3];
  const [current, setCurrent] = useState(0);

  // 5 seconds → change video
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden bg-black">

      {/* VIDEO LAYER */}
      <div className="absolute inset-0">
        {videos.map((vid, index) => (
          <video
            key={index}
            src={vid}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000
              ${index === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT CONTENT */}
      <motion.div
        className="relative text-center text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ku Soo Dhawoow <span className="text-green-300">Bilic-dhallaan</span> Baby Shop
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          oo aad kaheli karto dhar bilic leh iyo agab walba o kusabsan <br />Hooyada iyo dhallaanka.
        </p>
      </motion.div>

      {/* PAGE OPENING ANIMATION */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Home;
