import React from 'react'
import styles from "./st.module.css"
import { useTranslation } from "react-i18next";

const Stats = () => {
    const [t,_] = useTranslation()
  return (
    <section className={styles.section}>
        <div className={styles.stat}>
            <h2>15</h2>
            <p>{t("stats_item_1")}</p>
        </div>
        <div className={styles.stat}>
            <h2>9</h2>
            <p>{t("stats_item_2")}</p>
        </div>
        <div className={styles.stat}>
            <h2>36</h2>
            <p>{t("stats_item_3")}</p>
        </div>
        <div className={styles.stat}>
            <h2>144</h2>
            <p>{t("stats_item_4")}</p>
        </div>
    </section>
  )
}

export default Stats