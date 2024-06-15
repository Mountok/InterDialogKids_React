import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Screens/Header/Header'
import Footer from './Screens/Footer/Footer'
import Home from './Views/Home/Home'
import PreFooter from './Screens/PreFooter/PreFooter'
import GalleryPage from './Views/Gallery/GalleryPage'
import { AboutUsPage } from './Views/AboutUsPage/AboutUsPage'
import Prices from './Views/Prices/Prices'
import Contacts from './Views/Contacts/Contacts'


function App() {

  return (
    <>
    <Header/>
    <main className='main'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/aboutus' element={<AboutUsPage/>}/>
      {/* <Route path='/prices' element={<Prices/>}/> */}
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </main>
    <PreFooter/>
    <Footer/>
    </>
  )
}

export default App
