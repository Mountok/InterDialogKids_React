import React from "react";
import styles from "./r.module.css";
import { useTranslation } from "react-i18next";

const Registration = () => {
  const [t,_] = useTranslation()
  return (
    <section className={styles.section}>
      <p>{t("prices_title")}</p>
      <table>
        <tr>
          <td>{t("prices_th_1")}</td>
          <td>{t("prices_th_2")}</td>
          <td>{t("prices_th_3")}</td>
          <td>{t("prices_th_4")}</td>
          <td>{t("prices_th_5")}</td>
          <td>{t("prices_th_6")}</td>
          <td>{t("prices_th_7")}</td>
        </tr>
        <tr>
          <td>{t("prices_junior_td")}</td>
          <td>{t("prices_half_a_day")}</td>
          <td>8:00-12:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>{t("prices_junior_td")}</td>
          <td>{t("prices_part_time")}</td>
          <td>8:00-14:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>{t("prices_junior_td")}</td>
          <td>{t("prices_full_day")}</td>
          <td>8:00-16:30</td>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>100€</td>
        </tr>
        <tr>
          <td>{t("prices_senior_td")}</td>
          <td>{t("prices_half_a_day")}</td>
          <td>8:00-12:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>{t("prices_senior_td")}</td>
          <td>{t("prices_part_time")}</td>
          <td>8:00-14:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>{t("prices_senior_td")}</td>
          <td>{t("prices_full_day")}</td>
          <td>8:00-16:00</td>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>100€</td>
        </tr>
      </table>
    </section>
  );
};

export default Registration;
