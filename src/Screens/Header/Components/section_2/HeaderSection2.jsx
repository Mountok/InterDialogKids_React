import React from 'react'
import styles from "./hs2.module.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const HeaderSection2 = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n} = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)

  };
  
  return (
    <section className={styles.section}>
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                <li 
                onClick={()=>navigate("/")} 
                className={location.pathname == "/" && styles.active}>{t("header_home")}</li>
                <li 
                className={location.pathname == "/aboutus" && styles.active}
                onClick={()=>navigate("/aboutus")}>{t("header_aboutus")}</li>
                
                <li 
                onClick={()=>navigate("/gallery")}
                className={location.pathname == "/gallery" && styles.active}>{t("header_gallery")}</li>

                <li 
                onClick={()=>navigate("/contacts")}
                className={location.pathname == "/contacts" && styles.active}>{t("header_contacts")}</li>

                

                
            </ul>
            <ul className={styles.links}>
            
                <li 
                className={i18n.language == "en" && styles.active}
                onClick={() => {changeLanguage("en")}}>EN</li>
                <li 
                className={i18n.language == "ge" && styles.active}
                onClick={() => {changeLanguage("ge")}}>DE</li>
                 <li 
                className={i18n.language == "tu" && styles.active}
                onClick={() => {changeLanguage("tu")}}>TU</li>
                <li
                className={i18n.language == "ru" && styles.active} 
                onClick={() => {changeLanguage("ru")}}>RU</li>
                <li
                className={i18n.language == "chr" && styles.active} 
                onClick={() => {changeLanguage("chr")}}>CHE</li>
            </ul>
        </nav>
    </section>
  )
}

export default HeaderSection2