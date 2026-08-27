import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Ateliers from './pages/Ateliers.jsx'
import Contact from './pages/Contact.jsx'
import Actus from './pages/Actus.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/ateliers" element={<Ateliers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/actus" element={<Actus />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}