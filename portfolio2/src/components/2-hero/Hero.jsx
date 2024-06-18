import React from 'react';
import './hero.css';
import Lottie from "lottie-react";
import Animation from "../../../src/animation/animationenitial.json" 
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hero() {
  AOS.init({
    duration: 1200,
  })
  
  return (
    <section className='hero flex'>
      <div data-aos="fade-right" className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{damping:6, type:"spring" ,stiffness:200}}
          src="./Untitled-1-modified.png"className='avatar' alt=""  />
          <div className='icon-verified'></div>
        </div>


        <motion.h1
        initial ={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2 }}
        className='title'>
          Software designer , Founder and amateur cryptage   
        </motion.h1>
        <p>
        Ismail En-Niou is an experienced 
        frontend developer with a strong proficiency 
        in HTML, CSS,  JavaScript , php , c and react.js  . With 1 years of experience
         in the industry,Ismail is well-versed in various frontend frameworks
          and has worked on a range of projects
         across different industries
        </p>
          <div className="all-icons flex">
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github-square"></div>
            <div className="icon icon-linkedin-square"></div>
          </div>

      </div>

      <div data-aos="fade-left" className="right-section animation ">
      <Lottie className='animation'  style={{height:"auto"}} animationData={Animation} />
      </div>
    </section>
  )
}
