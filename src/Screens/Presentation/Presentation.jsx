import React from "react";
import styles from "./psnt.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SliderComponent from "./SliderComponent";
const Presentation = () => {
  const [t,i18n] = useTranslation()
  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        <SliderComponent/>
        
      </div>
      <div className={styles.content}>
          <div className={styles.titles}>
            <h1 className={styles.heading}>
              {t("presentation_header")}
            </h1>
            <p className={styles.subtitle}>
              {t("presentation_subtitle")}
            </p>
            <Link className={styles.btn} to="/gallery">
              {t("presentation_reg")}
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Presentation;
