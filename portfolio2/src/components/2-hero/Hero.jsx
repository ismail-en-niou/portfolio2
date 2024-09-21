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
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 200 }}
            src="./ien-niou.jpg" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>


        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='title'>
          full stack developer | media management | student at 1337 | co-founder of Robixe
        </motion.h1>
        <p>
          Hello! I’m Ismail Enniou, a dedicated Fullstack Developer with over two years of experience in the tech industry. My journey extends beyond just writing code — I’m also deeply involved in startup development, software design, and cryptography.
          <br />I’m not just a developer — I’m a co-founder and leader driving innovation in the tech startup ecosystem. Through my startup Robixe, I’m committed to building solutions that empower businesses to thrive in the digital world.
        </p>
        <div className="all-icons flex">
          <a href="https://x.com/ismailEnniou" target='_blank' className="icon icon-twitter" ></a>
          <a className="icon icon-instagram" target='_blank' href='https://www.instagram.com/ismail_enniou/'></a>
          <a className="icon icon-github-square" target='_blank' href='https://github.com/ismail-en-niou'></a>
          <a className="icon icon-linkedin-square" target='_blank' href='https://www.linkedin.com/feed/'></a>
        </div>

      </div>

      <div data-aos="fade-left" className="right-section animation ">
        <Lottie className='animation' style={{ height: "auto" }} animationData={Animation} />
      </div>
    </section>
  )
}
