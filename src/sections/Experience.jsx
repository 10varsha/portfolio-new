import Section from '../components/Section'
import ExperienceItem from '../components/ExperienceItem'
import React from 'react'

const experiences = [
  {
    role: 'GenAI Engineer Intern',
    org: 'Anyway AI',
    loc: 'Bangalore, India',
    start: 'Dec 2024',
    end: 'Jun 2025',
    bullets: [
      'Fine-tuned Stable Diffusion via HF Transformers; generated 10k+ synthetic images for CV pipelines.',
      'Shipped GPU-backed inference pipelines for batch generation & real-time experiments.',
      'Designed LLM system prompts; improved relevance/diversity in multimodal setups by 20%.'
    ]
  },
  {
    role: 'Machine Learning Intern',
    org: 'Orinson Technologies',
    loc: 'Remote',
    start: 'Sep 2024',
    end: 'Oct 2024',
    bullets: [
      'Built classification models with up to 93% accuracy using feature engineering + iteration.',
      'Integrated models into REST APIs for real-time inference; added experiment tracking.'
    ]
  },
  {
    role: 'Co-founder',
    org: 'Slane',
    loc: 'Remote',
    start: 'Nov 2024',
    end: 'Present',
    bullets: [
      'Led frontend in Next.js/Tailwind; features: AI email, tasks, calendar, payments.',
      'Coordinated backend & infra; improved delivery velocity and code quality.'
    ]
  }
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Real-world reps that matter.">
      <div className="relative">
        {experiences.map((e, i) => (
          <ExperienceItem key={i} {...e} />
        ))}
      </div>
    </Section>
  )
}
