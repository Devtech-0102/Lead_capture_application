import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Home from './pages/Home'
import Hero from './components/Hero'
import AppFooter from './layouts/AppFooter'
import Headers from './layouts/Headers'
import Section from './layouts/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Headers />
      <div style={{ marginTop: 64 }}>
        <Section />
      </div>

      <AppFooter />
    </>
  )
}

export default App
