import React from "react";
import styles from "./pfoter.module.css";
import {useTranslation} from "react-i18next"

const PreFooter = () => {
  const [t,_] = useTranslation()
  return (
    <section className={styles.section}>
      <div className={styles.info}>
      <img width='80px' src="/logo.png" alt="" />
        

        <hr />
        <p className={styles.describe}>
          {t("footer_text")}
        </p>
      </div>
      <div className={styles.contacts}>
        <div>
          <h2>EMAIL</h2> office@interdialog.at
        </div>
        <div>
          <h2>PHONE</h2> 0664 / 5680155
        </div>
        <div>
          <h2>ADDRESS</h2> Denisgasse 38 / 4+5 1200 Wien
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
