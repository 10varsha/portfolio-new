import { Menu, Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="container flex items-center justify-between py-3">
        <a href="#" className="font-extrabold tracking-tight text-xl">Varsha<span className="text-brand">.</span></a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm hover:text-brand transition">{l.label}</a>
          ))}
          <button aria-label="Toggle theme" onClick={() => setDark(v=>!v)} className="btn btn-outline rounded-xl">
            {dark ? <Sun size={18}/> : <Moon size={18}/>}<span className="sr-only">Toggle Theme</span>
          </button>
        </div>
        <button className="md:hidden btn btn-outline rounded-xl" onClick={()=>setOpen(o=>!o)} aria-label="Open menu"><Menu size={18}/></button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70">
          <div className="container py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-sm">{l.label}</a>
            ))}
            <button onClick={() => {setDark(v=>!v); setOpen(false)}} className="btn btn-outline rounded-xl w-max">{dark ? 'Light Mode' : 'Dark Mode'}</button>
          </div>
        </div>
      )}
    </header>
  )
}