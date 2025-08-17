import { Github, ExternalLink } from 'lucide-react'
import React from 'react'

export default function ProjectCard({ project }){
  return (
    <article className="card p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="h3">{project.title}</h3>
          <p className="p mt-1">{project.tagline}</p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand border border-brand/20">{project.category}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-1">
        {project.stack.map(s => <span key={s} className="text-xs px-2 py-1 border rounded-lg">{s}</span>)}
      </div>
      <p className="p mt-1">{project.description}</p>
      <div className="mt-2 flex gap-3">
        {project.github && <a className="btn btn-outline rounded-xl" href={project.github} target="_blank" rel="noreferrer"><Github size={16}/>Code</a>}
        {project.demo && <a className="btn btn-primary rounded-xl" href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16}/>Live</a>}
      </div>
    </article>
  )
}
