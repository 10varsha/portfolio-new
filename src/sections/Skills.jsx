import Section from '../components/Section'
import SkillOrbit from '../components/SkillOrbit'
import { skills } from '../shared/skills'
import React from 'react'

export default function Skills() {
  return (
    <Section 
      id="skills" 
      title="Skills" 
      subtitle="A galaxy of stacks, frameworks, and AI tools I orbit around."
    >
      <div className="space-y-12">
        {skills.map((category, i) => (
          <SkillOrbit key={i} category={category} />
        ))}
      </div>
    </Section>
  )
}
