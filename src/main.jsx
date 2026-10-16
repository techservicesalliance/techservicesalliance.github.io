import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import BlogList from './pages/BlogList'
import BlogDetails from './pages/BlogDetails'
import ContactPage from './pages/ContactPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
)
