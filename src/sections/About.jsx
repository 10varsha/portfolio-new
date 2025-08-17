import Section from '../components/Section'
import React from 'react'

export default function About(){
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Final-year B.Tech (AI) building ML systems, LLM apps, and modern web experiences. I ship fast, measure impact, and sweat the details."
    >
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* About Text */}
        <div className="md:col-span-2 mr-5">
          <p className="p">
            From fine-tuning diffusion models to deploying full-stack apps, I enjoy turning ambiguous problems into shipped features. 
            I’ve worked with Stable Diffusion, PyTorch, OpenCV, and OpenAI APIs; on the web side, <br />
            I build with React, Next.js, Node, and Tailwind.
          </p>
          <p className="p mt-3">
            Currently based in India, graduating in 2025. Open to Data Science, ML Engineer, and AI Engineer roles.
          </p>
        </div>

        {/* Two Truths and a Future */}
        <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 
                        bg-gradient-to-br from-brand/5 to-transparent space-y-4
                        relative z-10 -mt-20">
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-80">Two Truths & a Future</h3>
          <div>
            <p className="font-medium text-brand">✅ What I’ve Done</p>
            <p className="text-sm mt-1">Fine-tuned models, shipped APIs, and co-founded a startup.</p>
          </div>
          <div>
            <p className="font-medium text-brand">⚡ What I’m Doing</p>
            <p className="text-sm mt-1">Graduating in 2025, experimenting with multimodal AI and prompt engineering.</p>
          </div>
          <div>
            <p className="font-medium text-brand">🚀 What’s Next</p>
            <p className="text-sm mt-1">Building scalable AI systems that solve real-world problems at scale.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
