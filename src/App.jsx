import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import AmtlicheVermessung from './pages/AmtlicheVermessung'
import Bauvermessung from './pages/Bauvermessung'
import Kontakt from './pages/Kontakt'
import Navbar from './sections/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/leistungen/amtliche-vermessung" element={<AmtlicheVermessung />} />
        <Route path="/leistungen/bauvermessung" element={<Bauvermessung />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  )
}

export default App