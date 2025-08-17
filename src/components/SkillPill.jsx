export default function SkillPill({ label }) {
  return (
    <span 
      className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 
                 border border-neutral-200 dark:border-neutral-700 
                 text-xs md:text-sm transition-transform hover:scale-110 
                 hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] hover:border-brand/60"
    >
      {label}
    </span>
  )
}
