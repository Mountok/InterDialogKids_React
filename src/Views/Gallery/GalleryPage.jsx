import React from 'react'
import styles from './gallery.module.css'

const GalleryPage = () => {
  return (
    <section className={styles.section}>
      <br />
      <h2>Наша Галерея</h2>
      <div className={styles.images}>
        <img className={styles.image} src="/images/1.jpeg" alt="" />
        <img className={styles.image} src="/images/2.jpeg" alt="" />
        <video className={styles.image} src='/videos/1.mp4' controls ></video>

        <img className={styles.image} src="/images/3.jpeg" alt="" />
        <img className={styles.image} src="/images/4.jpeg" alt="" />
        <img className={styles.image} src="/images/5.jpg" alt="" />
        <iframe className={styles.image} src="https://www.youtube.com/embed/mwCmRcMcq1A?si=_r1lv3Ba67omFQ0D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img className={styles.image} src="/images/6.jpg" alt="" />
        <img className={styles.image} src="/images/7.jpg" alt="" />
        <img className={styles.image} src="/images/9.jpg" alt="" />
        <video className={styles.image} src='/videos/2.mp4' loop autoPlay ></video>

        <img className={styles.image} src="/images/10.jpg" alt="" />
        <img className={styles.image} src="/images/11.jpg" alt="" />
        <img className={styles.image} src="/images/12.jpg" alt="" />
        <img className={styles.image} src="/images/13.jpg" alt="" />
        <video className={styles.image} src='/videos/2.mp4' loop autoPlay ></video>

        <img className={styles.image} src="/images/14.jpg" alt="" />
        <img className={styles.image} src="/images/15.jpg" alt="" />
        <img className={styles.image} src="/images/16.jpg" alt="" />
        <iframe className={styles.image} src="https://www.youtube.com/embed/HDwSfzxajl4?si=Nfoeh1nUbmIdeXOB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img className={styles.image} src="/images/17.jpg" alt="" />
        <video className={styles.image} src='/videos/3.mp4' controls></video>
      </div>
    </section>
  )
}

export default GalleryPage