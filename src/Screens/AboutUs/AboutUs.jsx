import React from "react";
import styles from "./au.module.css";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const [t,_] = useTranslation()
  return (
    <section id="aboutus" className={styles.section}>
      <div className={styles.info}>
        <h2>{t("aboutus_heading")}</h2>
        <p>
          {t("aboutus_content")}
        </p>
        <div className={styles.list}>
          <div>
            <FaCube className={styles.icon} />
            {t("aboutus_item_1")}
          </div>
          <div>
            <FaCube className={styles.icon} />
            {t("aboutus_item_2")}
            
          </div>
          <div>
            <FaCube className={styles.icon} />
            {t("aboutus_item_3")}
          
          </div>
          <div>
            <FaCube className={styles.icon} />
            {t("aboutus_item_4")}
          
          </div>
        </div>
      </div>
      <div className={styles.video}>
        <iframe
          className={styles.player}
          src="https://www.youtube-nocookie.com/embed/lXuBWg-NciU?si=BNYqkOfcxmL5wniC"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          
        ></iframe>
      </div>
    </section>
  );
};

export default AboutUs;
