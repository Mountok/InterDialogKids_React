import "./headerStyle.css"
import React from 'react'

import { HeaderSection1 } from './Components/section_1/HeaderSection1'
import HeaderSection2 from "./Components/section_2/HeaderSection2"

export const Header = () => {
  return (
    <header className="header">
        <HeaderSection1/>
        <HeaderSection2/>
    </header>
  )
}
