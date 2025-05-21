import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hello everyone</h1>
     <main>
        Product List
      </main>
      <footer>
        <hr />
        &copy;2005. all rights reserved
      </footer>
    </>
  )
}

export default App
