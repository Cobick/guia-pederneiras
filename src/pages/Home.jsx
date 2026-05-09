import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedBusinesses from '../components/FeaturedBusinesses'

function Home() {
  return (
    <div className="bg-zinc-950">
      <Hero />
      <Categories />
      <FeaturedBusinesses />
    </div>
  )
}

export default Home