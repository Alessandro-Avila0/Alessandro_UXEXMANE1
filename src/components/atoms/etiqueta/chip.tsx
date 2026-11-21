import './Chip.css'

interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
}

function Chip({ label, active = false, onClick }: ChipProps) {
  return (
    <button className={`chip ${active ? 'chip--active' : ''}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default Chip