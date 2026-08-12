import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CityPage from './pages/CityPage'

// Code-split the blog (50 posts of content) so the homepage bundle stays lean.
const BlogIndex = lazy(() => import('./pages/BlogIndex'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#04110D]" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locksmith/:slug" element={<CityPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Suspense>
  )
}
