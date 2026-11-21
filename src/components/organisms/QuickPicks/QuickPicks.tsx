import type { MusicItem } from '../../../types/musica'
import SectionHeader from '../../molecules/SectionHeader/SectionHeader'
import SongRow from '../../molecules/SongRow/Songrow'
import './QuickPicks.css'

interface QuickPicksProps {
  items: MusicItem[]
}

function QuickPicks({ items }: QuickPicksProps) {
  return (
    <section className="quick-picks">
      <SectionHeader title="Selección rápida" />
      <div className="quick-picks__grid">
        {items.map((item) => (
          <SongRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default QuickPicks