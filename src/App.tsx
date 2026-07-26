import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CityPage from './pages/CityPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locksmith/:slug" element={<CityPage />} />
    </Routes>
  )
}
