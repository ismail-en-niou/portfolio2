import React from 'react';
import './main.css';
import { useState } from 'react';
import { myproject } from './myproject';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Main() {
  const [active, setactive] = useState("all");
  const [array, setarray] = useState(myproject)
  AOS.init({
    duration: 1200,
  })
  

  const handelClick = (buttonCategory) => {
    setactive(buttonCategory);
    const newArray = myproject.filter((item) => {
      const newArray2 = item.category.filter((myitems) => {
        return myitems === buttonCategory;
      })
      return newArray2[0] === buttonCategory;
    })
    setarray(newArray);
  }

  return (
    <main className='flex'>
      <section className="flex  left-section">
        <button data-aos="zoom-in"
          onClick={() => {
            setactive("all");
            setarray(myproject)
          }}
          className={active === "all" ? "active" : null}>All project</button>
        <button data-aos="zoom-in"
          onClick={() => {
            handelClick("css")
          }}
          className={active === "css" ? "active" : null}>HTML & CSS</button>


        <button data-aos="zoom-in"
          onClick={() => {
            handelClick("js")
          }}
          className={active === "js" ? "active" : null}>javascript</button>




        <button data-aos="zoom-in"
          onClick={() => {
            handelClick("react")
          }}
          className={active === "react" ? "active" : null}>React & MUI</button>




        <button data-aos="zoom-in"
          onClick={() => {
            handelClick("back")
          }}
          className={active === "back" ? "active" : null}>Back-End</button>



      </section>
      <section className="flex right-section">
        <AnimatePresence>
          {array.map((item) => {
            return (
              <motion.article data-aos="zoom-in"
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
              
                transition={{duration:1, type:"spring",damping:10,
                 stiffness:100
             }}
                key={item.imgpath} 
                className='card'>
                <img style={{ width: "266px" }} src={item.imgpath} />
                <div data-aos="zoom-out" style={{ width: "266px" }} className="box">
                  <h1 className='title'> {item.title}</h1>
                  <p className='sub-title'>    {item.subtitle}        </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className='flex'>
                    <a target='_blank' className="icon-link" href={item.link}></a>
                     <a target='_blank' className="icon-github-square" href={item.git}></a>
                      
                    </div>
                    <a  href={item.link} target='_blank' className='link flex'>
                      more <span style={{ alignSelf: "end" }} className="icon-arrow_forward "></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  )
}
