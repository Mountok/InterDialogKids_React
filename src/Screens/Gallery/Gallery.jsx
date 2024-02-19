import React from 'react'
import styles from './gallery.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const [t,_] = useTranslation()
  return (
    <section className={styles.section}>
        <h2>{t("gallery_heading")}</h2>
        <div className={styles.images}>
            <img className={styles.image} src="/images/1.jpeg" alt="" />
            <img className={styles.image} src="/images/2.jpeg" alt="" />
            <img className={styles.image} src="/images/3.jpeg" alt="" />
            <img className={styles.image} src="/images/4.jpeg" alt="" />
            <img className={styles.image} src="/images/5.jpg" alt="" />
            <img className={styles.image} src="/images/6.jpg" alt="" />
            <img className={styles.image} src="/images/7.jpg" alt="" />
            <img className={styles.image} src="/images/8.jpg" alt="" />
            <Link className={styles.image} to='/gallery'>{t("gallery_more")}</Link>
        </div>
    </section>
  )
}

export default Gallery