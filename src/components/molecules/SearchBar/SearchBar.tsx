import { Search } from 'lucide-react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search-bar">
      <Search size={18} />
      <input type="text" placeholder="Buscar canciones, álbumes, artistas o podcasts" />
    </div>
  )
}

export default SearchBar