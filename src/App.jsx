// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import BasicMap from './map/BasicMap'
import PropGear from './props/PropGear'
import StateGear from './state/StateGear'
import LoginForm from "./forms/LoginForm";
import ToDoList from "./todolist/ToDoList";
import FormTheme from "./context/ThemeContext";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
          <Link to="/">Props</Link>
          <Link to="/state">State</Link>
          <Link to="/map">Map</Link>
          <Link to="/login">Login</Link>
          <Link to="/todolist">To Do List</Link>
          <Link to="/themecontext">Context</Link>
        </nav>



        <Routes>
          <Route path='/' element={<PropGear />} />
          <Route path='/state' element={<StateGear />} />
          <Route path='/map' element={<BasicMap />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/themecontext" element={<FormTheme />} />
        </Routes>
      </BrowserRouter>
      {/* <PropGear />
      <StateGear />
      <BasicMap /> */}
    </>
  )
}

export default App
