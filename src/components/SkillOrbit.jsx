import React from 'react'
import SkillPill from './SkillPill'

export default function SkillOrbit({ category }) {
  return (
    <div className="relative flex flex-col items-center md:flex-row md:items-start md:gap-10">
      {/* Planet */}
      <div className="flex-shrink-0 w-28 h-28 rounded-full bg-gradient-to-br from-brand/30 to-brand/10 
                      flex items-center justify-center text-center text-sm font-bold text-brand shadow-md">
        {category.title}
      </div>

      {/* Orbits */}
      <div className="flex-1 grid md:grid-cols-3 gap-6 mt-6 md:mt-0">
        {category.groups.map((sub, i) => (
          <div key={i} className="relative p-4 border border-neutral-200 dark:border-neutral-700 
                                 rounded-2xl bg-white/40 dark:bg-neutral-900/40">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400 mb-3">
              {sub.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {sub.items.map(skill => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
