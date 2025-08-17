import React from 'react'

export default function Section({ id, title, subtitle, children }){
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="mb-8">
          <h2 className="h2">{title}</h2>
          {subtitle && <p className="p mt-2 max-w-2xl">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}