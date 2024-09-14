import React, { useState } from "react";
import styles from "./psnt.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SliderComponent from "./SliderComponent";
const Presentation = () => {
  const [t, i18n] = useTranslation();
  const [isHover,setIsHover] = useState(false)
  return (
    <>
      <section className={styles.section}>
        <div className={styles.slider}>
          <SliderComponent />
        </div>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h1 className={styles.heading}>{t("presentation_header")}</h1>
            <p className={styles.subtitle}>{t("presentation_subtitle")}</p>
            <Link onClick={()=>setIsHover(!isHover)} className={styles.btn} to="#">
              {t("presentation_reg")}
            </Link>
          </div>
        </div>

        <div style={{display:isHover ? "flex" : "none"}}  className={styles.popup_reg}>
        <div className={styles.popup_reg_card}>
          <h2>{t("presentation_reg")}</h2>
          <p>{t("prices_title")}</p>
          <h2>{t("header_contacts")}</h2>
          <p> {t("address")}: Denisgasse 38/4 5 1200 {t("telephone")}: 0664/5680155 <br /> {t("mail")}: office@interdilog.at </p>
          <h2>{t("contacts_item_3_heading")}</h2>
          <p>
            {t("contacts_item_3_1")} <br />
            {t("contacts_item_3_2")} <br />
            {t("contacts_item_3_3")} <br />
            {t("contacts_item_3_4")} <br />
            {t("contacts_item_3_5")}
          </p>
          <Link onClick={()=>setIsHover(!isHover)} className={styles.btn} to="#">
              {t("presentation_reg_close")}
          </Link>
        </div>
      </div>

      </section>
      
    </>
  );
};

export default Presentation;
