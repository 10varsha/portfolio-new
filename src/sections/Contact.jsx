import Section from '../components/Section'
import { Send } from 'lucide-react'
import React from 'react'

export default function Contact() {
  return (
    <Section 
      id="contact" 
      title="Contact" 
      subtitle="Open to Data Science, ML Engineer, and AI Engineer roles."
    >
      <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-12">
        
        {/* Contact Form */}
        <form 
          className="relative z-10 max-w-lg grid gap-4" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input 
              className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-brand outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input 
              type="email" 
              className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-brand outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea 
              rows={4} 
              className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-brand outline-none transition"
              placeholder="Let’s build something."
            ></textarea>
          </div>
          <button 
            className="btn btn-primary rounded-2xl w-max flex items-center gap-2"
          >
            <Send size={16} /> Send
          </button>
        </form>

        {/* Creative Glassmorphic Terminal */}
        <div className="hidden md:block w-100 rounded-2xl bg-neutral-900/90 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden z-10 -mt-20">
          
          {/* Header Bar with Mac-style traffic lights */}
          <div className="flex items-center gap-2 px-4 py-2 bg-neutral-200/30 dark:bg-neutral-800/30">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 font-mono text-sm text-green-400 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">→</span>
              <span>git clone https://github.com/yourname/ml-project</span>
            </div>
            <div className="text-neutral-500">Cloning into 'ml-project'...</div>
            <div className="text-green-300">✓ Cloned successfully</div>
            <div>&nbsp;</div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">→</span>
              <span>pip install -r requirements.txt</span>
            </div>
            <div className="text-neutral-500">Installing dependencies...</div>
            <div className="text-green-300">✓ All packages installed</div>
            <div>&nbsp;</div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">→</span>
              <span>python train.py --epochs 100</span>
            </div>
            <div className="text-yellow-400">Training model...</div>
            <div className="text-neutral-300">Epoch 100/100 - Accuracy: 94.2%</div>
            <div className="text-green-300">✓ Model trained successfully</div>
            <div>&nbsp;</div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">→</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}
