import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState([]);

  function cardAdd() {
    addCard("Nova tarefa")
}

  return (
    <>
      <h3>{name}</h3>
      <button className='btn btn-primary' onClick={addCard}>
        Adicionar tarefa
      </button>
    </>
  )
}

export default App
