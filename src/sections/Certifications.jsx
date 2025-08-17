import Section from '../components/Section'
import { Award } from 'lucide-react'
import React from 'react'

const certs = [
  {
    title: 'Data Analytics — Coursera',
    description: 'Wrangling, dashboards, KPIs with Excel & Tableau. Project-based modules.',
    link: '#'
  },
  {
    title: 'Web Development — Thinkers Paradise',
    description: 'Built responsive UIs with HTML/CSS/JS/React; backend APIs with Node & MongoDB.',
    link: '#'
  }
]

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert, i) => (
          <div 
            key={i} 
            className="relative flex gap-4 items-start p-5 bg-white dark:bg-neutral-900 rounded-xl border-l-4 border-brand shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            {/* Icon */}
            <div className="p-2 bg-brand/10 text-brand rounded-lg flex-shrink-0">
              <Award size={20} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="p mt-1">{cert.description}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
