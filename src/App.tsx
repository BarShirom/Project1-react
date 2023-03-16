import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";
import DogPage from './components/DogPage/DogPage';

function App() {
  return(
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/:dogBreed' element={<DogPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
