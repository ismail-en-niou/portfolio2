import React from 'react';
import './main.css';
import { useState } from 'react';
import { myproject } from './myproject';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Main() {
  const [active, setactive] = useState("all");
  const [array, setarray] = useState(myproject)

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
        <button
          onClick={() => {
            setactive("all");
            setarray(myproject)
          }}
          className={active === "all" ? "active" : null}>All project</button>
        <button
          onClick={() => {
            handelClick("css")
          }}
          className={active === "css" ? "active" : null}>HTML & CSS</button>


        <button
          onClick={() => {
            handelClick("js")
          }}
          className={active === "js" ? "active" : null}>javascript</button>




        <button
          onClick={() => {
            handelClick("react")
          }}
          className={active === "react" ? "active" : null}>React & MUI</button>




        <button
          onClick={() => {
            handelClick("PHP")
          }}
          className={active === "PHP" ? "active" : null}>PHP</button>



      </section>
      <section className="flex right-section">
        <AnimatePresence>
          {array.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
              
                transition={{duration:1, type:"spring",damping:10,
                 stiffness:100
             }}
                key={item.imgpath} 
                className='card'>
                <img style={{ width: "266px" }} src={item.imgpath} />
                <div style={{ width: "266px" }} className="box">
                  <h1 className='title'> {item.title}</h1>
                  <p className='sub-title'>    {item.subtitle}        </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className='flex'>
                    <a target='_blank' className="icon-link" href={item.link}></a>
                     <a target='_blank' className="icon-github-square" href={item.git}></a>
                      
                    </div>
                    <a href="" className='link flex'>
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
