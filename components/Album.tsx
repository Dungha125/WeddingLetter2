"use client"
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromBottomtime, slideInFromTop } from "@/util/motion";

const Album = () => {
  const images = [
    { src: "/img/RENA2939.JPG", alt: "Ảnh 1" },
    { src: "/img/RENA2992.JPG", alt: "Ảnh 2" },
    { src: "/img/RENA3049.JPG", alt: "Ảnh 3" },
    { src: "/img/RENA3083.JPG", alt: "Ảnh 4" },
    { src: "/img/RENA3217.JPG", alt: "Ảnh 5" },
    { src: "/img/RENA3189.JPG", alt: "Ảnh 6" },
    { src: "/img/RENA3558.JPG", alt: "Ảnh 7" },
    { src: "/img/RENA3580.JPG", alt: "Ảnh 8" },
    { src: "/img/RENA3430.JPG", alt: "Ảnh 9" },
  ];

  return (
    <div className="relative h-full w-full flex flex-col items-center py-6 justify-center">
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="Fz-Strange-Dreams text-base text-yellow-300 mt-[2rem]"
      >
        MỌI YÊU THƯƠNG TỪ XA XIN GỬI TỚI
      </motion.h2>

      <div className="w-full h-full flex flex-col md:flex-row justify-center mt-4 gap-4 items-center">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center"
      >
        <img
          src="/img/tvt.svg"
          alt="Mã QR"
          className="w-40 h-40 object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center"
      >
        <img
          src="/img/vtt.svg"
          alt="Mã QR"
          className="w-40 h-40 object-contain"
        />
      </motion.div>
      </div>
      {/* Album */}
      <motion.h2
        variants={slideInFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="Fz-Strange-Dreams text-3xl md:text-5xl text-yellow-300 my-4"
      >
        ALBUM KỶ NIỆM
      </motion.h2>

      <div className="album-grid w-full p-4 md:w-[70%]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={slideInFromBottomtime(0.5 + index * 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="album-item"
          >
            <img src={image.src} alt={image.alt} className="album-image" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 -z-50">
        {/* Background for Mobile */}
        <img src="/SVG/backmobile0.svg" alt="Background" className="object-cover w-full h-full md:hidden" />
        {/* Background for Larger Screens */}
        <img src="/SVG/backmobile0.svg" alt="Background" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Album;
