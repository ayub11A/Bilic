import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import video1 from "../assets/viedo3.mp4";


function Home() {
  const navigate = useNavigate();
  const videos = [ video1];
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

      {/* DECORATIVE BLURRED SHAPES */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* TEXT CONTENT */}
      <motion.div
        className="relative text-center text-white px-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-4xl font-semibold mb-4 drop-shadow-lg">
          Ku Soo Dhawoow{" "}
          <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
           
          </span>{" "}
           <h1> Bilic-dhallaan Baby Shop</h1>
        
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg mb-6">
          oo aad kaheli karto dhar bilic leh iyo agab walba o kusabsan <br />Hooyada iyo dhallaanka.
        </p>

        {/* Glowing Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #34D399, 0 0 40px #10B981" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 font-bold text-lg rounded-full bg-green-500 text-white border border-green-300 transition-all duration-300"
          onClick={() => navigate("/newborn")}
        >
          Order Now
        </motion.button>
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
