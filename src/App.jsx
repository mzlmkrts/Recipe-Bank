import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header.jsx'
import RecipeSearch from './assets/components/RecipeSearch.jsx'
import RecipeReviewCard from './assets/components/RecipeReviewCard.jsx'
import ResponsiveAppBar from './assets/components/AppBar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import About from './assets/components/About.jsx';
import Contact from './assets/components/Contact.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div style={{ marginTop: '-35px' }}></div>
      <ResponsiveAppBar />
      <div style={{ marginTop: '20px' }}></div>
      <Routes>
        <Route path="/" element={<RecipeSearch />} />
        <Route path="/home" element={<RecipeSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe-search" element={<RecipeSearch />} />
        <Route path="*" element={<RecipeSearch />} />
      </Routes>
    </Router>
  );
}

export default App
