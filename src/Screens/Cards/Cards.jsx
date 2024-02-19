import React from "react";
import styles from "./c.module.css";
import { SiSololearn } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const [t, _] = useTranslation()
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.icons}>
          <SiSololearn />
        </div>
        <h2>{t("card_1_header")}</h2>
        <p>{t("card_1_content")}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.icons}>
          <FaChalkboardTeacher />
        </div>
        <h2>{t("card_2_header")}</h2>
        <p>{t("card_2_content")}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.icons}>
          <FaPlateWheat />
        </div>
        <h2>{t("card_3_header")}</h2>
        <p>{t("card_3_content")}</p>
      </div>
    </section>
  );
};

export default Cards;
