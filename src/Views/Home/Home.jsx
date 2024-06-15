import React from 'react'
import Presentation from '../../Screens/Presentation/Presentation'
import Cards from '../../Screens/Cards/Cards'
import AboutUs from '../../Screens/AboutUs/AboutUs'
import Stats from '../../Screens/Stats/Stats'
import Gallery from '../../Screens/Gallery/Gallery'
import Registration from '../../Screens/Registration/Registration'

const Home = () => {
  return (
    <>
    <Presentation/>
    <Cards/>
    <AboutUs/>
    <Stats/>
    <Gallery/>
    {/* <Registration/> */}
    
    </>
  )
}

export default Home