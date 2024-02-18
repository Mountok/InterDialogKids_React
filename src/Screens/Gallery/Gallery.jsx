import React from 'react'
import styles from './gallery.module.css'
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <section className={styles.section}>
        <h2>Наши дети</h2>
        <div className={styles.images}>
            <img className={styles.image} src="/images/1.jpeg" alt="" />
            <img className={styles.image} src="/images/2.jpeg" alt="" />
            <img className={styles.image} src="/images/3.jpeg" alt="" />
            <img className={styles.image} src="/images/4.jpeg" alt="" />
            <img className={styles.image} src="/images/1.jpeg" alt="" />
            <img className={styles.image} src="/images/2.jpeg" alt="" />
            <img className={styles.image} src="/images/2.jpeg" alt="" />
            <img className={styles.image} src="/images/2.jpeg" alt="" />
            <Link className={styles.image} to='/gallery'>Смотреть</Link>
        </div>
    </section>
  )
}

export default Gallery