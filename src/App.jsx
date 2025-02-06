import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Ecmascript/test'
import Hello from './Components/Hello'
import Form from './Components/Form'

import ComponentClass from './Components/ComponentClass'
import ComponentFonct from './Components/ComponentFonct'
import Counter from './Components/Counter'
import Timer from './Components/Timer'
import TextInputFocus from './Components/TextInputFocus'
import RenderCounter from './Components/RenderCounter'
import AppA from './Components/ThemeButton'
import NotesManager from './Components/GestNote'
import Events from './Components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <Test />
        <Hello />
        <Form labelle="FirstName" namee="firstname" typee="text" />
        <Form labelle="LastName" namee="lastname" typee="text" />
        <Form labelle="Date Of Birth" namee="date" typee="date" />
        <ComponentClass />
        <h1>
          <ComponentFonct />
        </h1>
        <Counter />
        <br />
        <Timer />
        <br />
        <br />
        <TextInputFocus />
        <br />
        <br />
        <RenderCounter />
        <br />
        <br />
        <AppA />
        <br />

        <br />
        <NotesManager />
        <br />

      </div> */}
      <div className="App">
      <Events />
      </div>
    </>
  );
}

export default App
