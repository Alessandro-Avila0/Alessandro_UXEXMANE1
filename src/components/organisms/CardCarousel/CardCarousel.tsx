import { useRef } from 'react'
import type { MusicItem } from '../../../types/musica'
import SectionHeader from '../../molecules/SectionHeader/SectionHeader'
import MusicCard from '../../molecules/MusicCard/MusicCard'
import './CardCarousel.css'

interface CardCarouselProps {
  title: string
  items: MusicItem[]
}

function CardCarousel({ title, items }: CardCarouselProps) {

  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 400, behavior: 'smooth' })
  }

  return (
    <section className="carousel">
      <SectionHeader title={title} onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
      <div className="carousel__track" ref={trackRef}>
        {items.map((item) => (
          <MusicCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default CardCarousel