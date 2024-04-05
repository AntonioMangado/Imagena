import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Favorites from './components/Favorites'

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myphotos" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
