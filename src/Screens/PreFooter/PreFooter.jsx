import React from "react";
import styles from "./pfoter.module.css";
const PreFooter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
      <img width='80px' src="/logo.png" alt="" />
        

        <hr />
        <p className={styles.describe}>
          Вы можете обращаться к нам в любое удобное для вас время по всем
          интересующим вас вопросам.
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
