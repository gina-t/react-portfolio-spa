import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import BlogpostsPage from './pages/BlogPostsPage';
import JournalArticlesPage from './pages/JournalArticlesPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutMePage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/resume' element={<ResumePage />} />
      <Route path='/blogposts' element={<BlogpostsPage />} />
      <Route path='/journal-articles' element={<JournalArticlesPage />} />
      
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;