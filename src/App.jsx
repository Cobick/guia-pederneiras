import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedBusinesses from './components/FeaturedBusinesses'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedBusinesses />
      <Footer />
    </div>
  )
}

export default App