import React from 'react'
import styles from './gallery.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const [t, _] = useTranslation()
  return (
    <section className={styles.section}>
      <h2>{t("gallery_heading")}</h2>
      <div className={styles.images}>
        <img className={styles.image} src="/images/фото_1.jpeg" alt="" />
        <img className={styles.image} src="/images/фото_2.jpeg" alt="" />
        <img className={styles.image} src="/images/фото_3.jpeg" alt="" />
        <img className={styles.image} src="/images/фото_4.jpeg" alt="" />
        <img className={styles.image} src="/images/фото_5.jpeg" alt="" />
        <img className={styles.image} src="/images/фото_6.jpeg" alt="" />
        <img className={styles.image} src="/images/фото_7.jpeg" alt="" />
        <img className={styles.image} src="/images/фото_8.jpeg" alt="" />
        <Link className={styles.image} to='/gallery'>{t("gallery_more")}</Link>
      </div>
    </section>
  )
}

export default Gallery