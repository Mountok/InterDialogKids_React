import React from 'react'
import styles from './contacts.module.css'
import {useTranslation} from "react-i18next"
const Contacts = () => {
  const [t,_] = useTranslation()
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2>{t("contacts_item_1_heading")}</h2>
        <p>
        {t("contacts_item_1_content")}
        </p>
      </div>

      <div className={styles.card}>
        <h2>{t("contacts_item_2_heading")}</h2>
        <p>
        {t("contacts_item_2_content")}
            
        </p>
      </div>

      <div className={styles.card}>
        <h2>{t("contacts_item_3_heading")}</h2>
        <p>
        {t("contacts_item_3_1")} <br />
        {t("contacts_item_3_2")} <br />
        {t("contacts_item_3_3")} <br />
        {t("contacts_item_3_4")} <br />
        {t("contacts_item_3_5")}
        </p>
      </div>
    </section>
  )
}

export default Contacts