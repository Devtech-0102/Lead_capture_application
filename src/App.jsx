import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import AppFooter from './layouts/AppFooter'
import Headers from './layouts/Headers'
import Section from './layouts/Section'
import Topbar from './layouts/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar />
      <Headers />
      <Section />
      <AppFooter />
    </>
  )
}

export default App
