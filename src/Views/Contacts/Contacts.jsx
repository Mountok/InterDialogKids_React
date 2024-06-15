import React from 'react'
import styles from './contacts.module.css'
import {useTranslation} from "react-i18next"
const Contacts = () => {
  const [t,_] = useTranslation()
  return (
    <>
  <section className={styles.map}>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.6675791001735!2d16.362645776551386!3d48.232275271254125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d064ab0b507f7%3A0x20e51cd21ccbc4ac!2zRGVuaXNnYXNzZSAzOC80IDUsIDEyMDAgV2llbiwg0JDQstGB0YLRgNC40Y8!5e0!3m2!1sru!2sru!4v1708407168230!5m2!1sru!2sru" 
    width="600" height="450" 
    style={{border:0}} 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
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

    <section className={styles.uridinfo}>
      <p>Vereinsname: <span>Vereinsname:</span></p>
      <p>ZVR-Zahl: <span>431097370</span></p>
      <p>Zuständigkeit: <span>Landespolizeidirektion Wien, Referat Vereins-, Versammlungs- und Medienrechtsangelegenheiten</span></p>
      <p>Sitz: <span>Wien</span></p>
      <p>c/o: <span>Mag. Laziz Vagaev </span></p>
      <p>Zustelladresse: <span>1170 Wien, Neuwaldeggerstraße 19-21/4/5</span></p>
      <p>Land: <span>Österreich</span></p>
      <p>Entstehungsdatum: <span>09.09.2010</span></p>
      <p>Bank Austria: <span>Verein InterDialog</span></p>
      <p>IBAN: <span>AT73 1200 0515 1669 9829</span></p>
      <p>BIC: <span>BKAUATWW</span></p>
    </section>
    
    </>
  )
}

export default Contacts