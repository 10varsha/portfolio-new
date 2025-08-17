// src/sections/Projects.jsx
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../shared/projects'
import React, { useMemo, useState } from 'react'

const tabs = ['AI/ML','GenAI','Web/Creative','Mini Apps']

export default function Projects(){
  const [tab, setTab] = useState('AI/ML') // default to first tab

  const filtered = useMemo(()=>{
    return projects.filter(p => p.filterTags.includes(tab))
  }, [tab])

  return (
    <Section id="projects" title="Projects" subtitle="A curated set — quality over quantity.">
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map(t => (
          <button 
            key={t} 
            onClick={()=>setTab(t)} 
            className={`px-4 py-2 rounded-xl border transition-colors 
              ${tab===t 
                ? 'bg-brand text-white border-brand' 
                : 'border-neutral-300 dark:border-neutral-700 hover:border-brand/60'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </Section>
  )
}
