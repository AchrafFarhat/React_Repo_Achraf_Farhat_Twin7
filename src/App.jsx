import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Ecmascript/test'
import Hello from './Components/Hello'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Test/>
        <Hello/>
        <Form labelle="FirstName" namee="firstname" typee="text"/>
        <Form labelle="LastName" namee="lastname" typee="text"/>
        <Form labelle="Date Of Birth" namee="date" typee="date"/>
        <button/>
      </div>
    </>  
  );
}

export default App
