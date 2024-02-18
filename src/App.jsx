import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Screens/Header/Header'
import Footer from './Screens/Footer/Footer'
import Home from './Views/Home/Home'
import PreFooter from './Screens/PreFooter/PreFooter'
import GalleryPage from './Views/Gallery/GalleryPage'


function App() {

  return (
    <>
    <Header/>
    <main className='main'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
    </Routes>
    </main>
    <PreFooter/>
    <Footer/>
    </>
  )
}

export default App
