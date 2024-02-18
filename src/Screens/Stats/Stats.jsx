import React from 'react'
import styles from "./st.module.css"
const Stats = () => {
  return (
    <section className={styles.section}>
        <div className={styles.stat}>
            <h2>12</h2>
            <p>лет работаем</p>
        </div>
        <div className={styles.stat}>
            <h2>7</h2>
            <p>детский садов</p>
        </div>
        <div className={styles.stat}>
            <h2>147</h2>
            <p>Преподавателей</p>
        </div>
        <div className={styles.stat}>
            <h2>350</h2>
            <p>детей обучаются</p>
        </div>
    </section>
  )
}

export default Stats