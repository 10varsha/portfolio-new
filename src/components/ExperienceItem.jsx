import React from 'react'

export default function ExperienceItem({ role, org, loc, start, end, bullets }) {
  return (
    <div className="relative pl-10 pb-10 group">
      {/* Timeline line */}
      <span className="absolute left-3 top-0 h-full w-[2px] bg-neutral-300 dark:bg-neutral-700"></span>
      {/* Timeline dot */}
      <span className="absolute left-[7px] top-1 w-4 h-4 rounded-full bg-brand border-4 border-white dark:border-neutral-950"></span>
      
      {/* Content */}
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h3 className="h3">{role}</h3>
            <p className="p text-brand">{org} • {loc}</p>
          </div>
          <p className="text-sm opacity-80">{start} — {end}</p>
        </div>
        
        <ul className="mt-3 space-y-2 list-disc pl-5">
          {bullets.map((b, i) => (
            <li key={i} className="p">{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
