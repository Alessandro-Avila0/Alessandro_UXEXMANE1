import { ChevronLeft, ChevronRight } from 'lucide-react'
import './SectionHeader.css'

interface SectionHeaderProps {
  title: string
  onPrev?: () => void
  onNext?: () => void
}

function SectionHeader({ title, onPrev, onNext }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__arrows">
        <button onClick={onPrev} aria-label="Anterior"><ChevronLeft size={18} /></button>
        <button onClick={onNext} aria-label="Siguiente"><ChevronRight size={18} /></button>
      </div>
    </div>
  )
}

export default SectionHeader