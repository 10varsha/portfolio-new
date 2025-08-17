import React from 'react'

export default function Footer(){
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="p">© {new Date().getFullYear()} Varsha Sahu. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a className="hover:text-brand" href="https://github.com/10varsha" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-brand" href="https://linkedin.com/in/varsha6212" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-brand" href="https://x.com/solaris_rain" target="_blank" rel="noreferrer">Twitter</a>
          <a className="hover:text-brand" href="mailto:varshasahu915@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}