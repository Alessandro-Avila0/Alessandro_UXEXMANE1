import { useState } from 'react'
import Chip from '../../atoms/etiqueta/chip'
import { moods } from '../../../data/datosdePruba'
import './MoodChips.css'

function MoodChips() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="mood-chips">
      {moods.map((m) => (
        <Chip
          key={m}
          label={m}
          active={selected === m}
          onClick={() => setSelected(selected === m ? null : m)}
        />
      ))}
    </div>
  )
}

export default MoodChips