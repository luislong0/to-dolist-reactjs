import { useState } from 'react'

import { Header } from './components/Header'

import './App.module.css'
import './global.css';
import { List } from './components/List';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      <main>
        <List />
      </main>
    </div>
  )
}

export default App
