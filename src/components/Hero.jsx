import { motion } from 'framer-motion'
import ProfileImg from '../assets/varsha-animated.png'
import React from 'react'

export default function Hero(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <h1 className="h1">Varsha Sahu</h1>
          <p className="mt-3 h3 text-brand">Data Science & AI Engineer in the Making</p>
          <p className="mt-4 p max-w-xl">I build data-driven and AI-powered solutions — from ML models and LLM apps to modern, performant web experiences.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="btn btn-primary rounded-2xl">View Projects</a>
            <a href="https://drive.google.com/file/d/1DoeLwTtuawAs47dWS5NwDFqQWnOTffk4/view?usp=sharing" className="btn btn-outline rounded-2xl" target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
          <div className="aspect-square card grid place-items-center">
            <div className="size-40 md:size-56 rounded-full bg-gradient-to-br from-brand/70 to-brand/30 blur-2xl absolute" />
            <div className="relative z-10 p-8 text-center">
              <div className="text-7xl">
                <img 
                  src={ProfileImg} 
                  alt="Varsha Sahu" 
                  className="relative z-10 size-80 md:size-60"
                />
              </div>
              <p className="mt-3 p">AI/ML • LLMs • React • CV</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}