import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let users = [{
    username: 'Syed',
    age: 21,
    btnText:'Click Me'
  }, {
    username: 'Jaleed',
    age: 21,
    btnText:'Click Me'
  },{
    username: 'Ahmed',
    age: 21,
    btnText:'Click Me'
  }]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>   
      <Card username="Jaleed" btnText="Click Me"/>
      <Card username="Syed" btnText="Click"/> 
    </>
  )
}

export default App
