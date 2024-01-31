import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weatherapp from './Weatherapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weatherapp />
    </>
  )
}

export default App
