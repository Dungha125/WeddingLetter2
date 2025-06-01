"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottomtime } from '@/util/motion';

const MainWedding = () => {
  // Variants for the SVG animations
  const flowerAnimation = {
    hidden: {
      x: 0,
    },
    visible: {
      x: '-100%',
      transition: {
        duration: 4,
        ease: 'easeInOut',
      },
    },
  };

  const flower2Animation = {
    hidden: {
      x: 0,
    },
    visible: {
      x: '100%',
      transition: {
        duration: 4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center gap-3 md:gap-6 px-6 lg:gap-8 bg-transparent"
    >
      {/* Covering SVGs */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full z-50 "
        variants={flowerAnimation}
        style={{
          backgroundImage: `url('/SVG/flower2.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full  z-50"
        variants={flower2Animation}
        style={{
          backgroundImage: `url('/SVG/flower.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></motion.div>
      {/* Background SVG */}
      <div className="absolute inset-0 -z-50">
        <img
          src="/SVG/backmobile0.svg"
          alt="Background"
          className="object-cover w-full h-full md:hidden"
        />
        <img
          src="/SVG/backmobile0.svg"
          alt="Background"
          className="object-cover w-full h-full hidden md:block"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full flex flex-col items-center gap-3"
      >
        {/* Save The Date Title */}
        <img
          src="/SVG/chuhi.svg"
          alt="Background"
          className="object-cover w-[100px] h-full"
        />
        <motion.span
          variants={slideInFromBottomtime(0.5)}
          className="Fz-Strange-Dreams text-center text-3xl sm:text-2xl lg:text-3xl xl:text-4xl text-white"
        >
          SAVE THE DATE
        </motion.span>

        {/* Couple's Names */}
        <motion.div
          variants={slideInFromBottomtime(0.6)}
          className="Peristiwa text-yellow-300 text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Hoàng Trường & Thuỳ Trang
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={slideInFromBottomtime(0.7)}
          style={{
            backgroundImage: `url('/img/anh.jpg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[90%] sm:w-3/4 md:w-[400px] lg:w-[500px] xl:w-[600px] h-96 sm:h-48 md:h-72 lg:h-80 xl:h-[300px] rounded-xl"
        />
        
        {/* Date Section */}
        
      </motion.div>
    </motion.div>
  );
};

export default MainWedding;
