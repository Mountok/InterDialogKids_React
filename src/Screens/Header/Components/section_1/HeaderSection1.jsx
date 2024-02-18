import React from 'react'
import styles from "./hs1.module.css"
import {FaPhone, FaLocationPin} from 'react-icons/fa6'

export const HeaderSection1 = () => {
  return (
    <section className={styles.section}>
        <div className={styles.logotype}>
        <img width='50px' src="/logo.png" alt="" />
        InterDialog
        </div>
        <div className={styles.info}>
            <div className={styles.address}>
                <FaLocationPin className={styles.icon}/>
                Denisgasse 38 / 4+5 1200 Wien
            </div>
            <div className={styles.number}>
                <FaPhone className={styles.icon}/>
                0664 / 5680155
            </div>
        </div>
    </section>
  )
}
