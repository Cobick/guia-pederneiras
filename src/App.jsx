import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <BrowserRouter>
        <Header />

        <main className="min-h-screen bg-zinc-950">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:slug" element={<CategoryPage />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App