import React from 'react'
import styles from "./hs2.module.css"
import { useLocation, useNavigate } from 'react-router-dom'
const HeaderSection2 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  return (
    <section className={styles.section}>
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                <li 
                onClick={()=>navigate("/")} 
                className={location.pathname == "/" && styles.active}>ГЛАВНАЯ</li>
                {location.pathname != "/" 
                ? 
                <li 
                onClick={()=>navigate("/")}>О НАС</li>
                : 
                <li> <a href="#aboutus">О НАС</a> </li>
                }
                
                <li 
                onClick={()=>navigate("/gallery")}
                className={location.pathname == "/gallery" && styles.active}>ГАЛЕРЕЯ</li>
                <li 
                onClick={()=>navigate("/reg")}
                className={location.pathname == "/reg" && styles.active}>РЕГИСТРАЦИЯ</li>
                <li 
                onClick={()=>navigate("/contacts")}
                className={location.pathname == "/contacts" && styles.active}>КОНТАКТЫ</li>
            </ul>
        </nav>
    </section>
  )
}

export default HeaderSection2