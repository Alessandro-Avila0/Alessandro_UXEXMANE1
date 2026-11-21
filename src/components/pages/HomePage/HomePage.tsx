import MoodChips from '../../organisms/MoodChips/MoodChips'
import FeaturedSection from '../../organisms/FeaturedSection/FeaturedSection'
import CardCarousel from '../../organisms/CardCarousel/CardCarousel'
import QuickPicks from '../../organisms/QuickPicks/QuickPicks'
import {
  featured,
  recentlyPlayed,
  yourMixes,
  recommendations,
  quickPicks,
  topHits,
  newReleases,
} from '../../../data/datosdePruba'

interface HomePageProps {
  isLoggedIn: boolean
}

function HomePage({ isLoggedIn }: HomePageProps) {
  return (
    <>
      <MoodChips />
      {}
      {isLoggedIn && <FeaturedSection item={featured} />}
      {isLoggedIn && <CardCarousel title="Escuchado recientemente" items={recentlyPlayed} />}
      {isLoggedIn && <CardCarousel title="Tus mixes" items={yourMixes} />}
      {isLoggedIn && <CardCarousel title="Recomendaciones para ti" items={recommendations} />}
      <QuickPicks items={quickPicks} />
      <CardCarousel title="Éxitos del momento" items={topHits} />
      <CardCarousel title="Nuevos lanzamientos" items={newReleases} />
    </>
  )
}

export default HomePage