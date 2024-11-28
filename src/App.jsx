import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'




function App() {

  return (
    <>
     <div style={{width:'100%',height:'100px'}} className='bg-cyan-600 text-center flex justify-center items-center'> <h1 className='font-bold text-white text-2xl'>WELCOME TO EXPENSE TRACKER</h1></div>
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
