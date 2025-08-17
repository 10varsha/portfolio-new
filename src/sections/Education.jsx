import Section from '../components/Section'
import { GraduationCap, BookOpen } from 'lucide-react'
import React from 'react'

export default function Education() {
  return (
    <Section id="education" title="Education & Research">
      <div className="grid md:grid-cols-2 gap-8">

        {/* --- Education Column --- */}
        <div className="relative flex items-start gap-4 bg-gradient-to-r from-brand/10 via-transparent to-transparent p-6 rounded-2xl">
          {/* Icon */}
          <div className="flex-shrink-0 p-3 bg-brand text-white rounded-full shadow-md">
            <GraduationCap size={28} />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-bold">B.Tech — Computer Science Engineering (AI)</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Shri Shankaracharya Institute of Professional Management and Technology, Raipur
            </p>
            <p className="mt-1 text-sm font-medium text-brand">
              CGPA: 7.6 • Aug 2021 — Jun 2025
            </p>

            <div className="mt-3">
              <p className="text-sm font-semibold">Relevant Coursework:</p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {[
                  'AI',
                  'Machine Learning',
                  'Deep Learning',
                  'NLP',
                  'Advance Data Science',
                  'Digital Image Processing'
                ].map((course, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs border border-neutral-200 dark:border-neutral-700"
                  >
                    {course}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Research Column --- */}
        <div className="relative flex items-start gap-4 bg-gradient-to-l from-brand/10 via-transparent to-transparent p-6 rounded-2xl">
          {/* Icon */}
          <div className="flex-shrink-0 p-3 bg-brand text-white rounded-full shadow-md">
            <BookOpen size={28} />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-bold">
              Harnessing AI in Healthcare: Detecting Mental Health Disorders via Social Media
            </h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Paper ID: 419
            </p>
            <p className="mt-1 text-sm font-medium text-brand">
              The International Conference on Healthcare Innovation and Smart Systems (ICHISS 2024)
            </p>
            <p className="text-sm mt-1 text-neutral-700 dark:text-neutral-300">
              Dates: 29th & 30th December 2024
            </p>
            <a 
              href="https://publishing.aip.org/" 
              target="_blank" 
              rel="noreferrer" 
              className="mt-3 inline-block text-sm hover:text-brand"
            >
              Publishing Website →
            </a>
          </div>
        </div>

      </div>
    </Section>
  )
}
