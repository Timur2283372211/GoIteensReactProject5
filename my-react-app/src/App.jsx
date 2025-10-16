import { useState } from 'react'
import './App.css'
import Top from './components/Top/Top.jsx'
import Cards from './components/Top/Cards/Cards.jsx'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <>
      <Top onCategorySelect={setSelectedCategory} />
      <Cards cards={selectedCategory} />
    </>
  )
}

export default App
