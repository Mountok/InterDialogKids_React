import React from "react";
import styles from "./au.module.css";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <section id="aboutus" className={styles.section}>
      <div className={styles.info}>
        <h2 >О нас</h2>
        <p>
          У нас также сложились самые деловые и теплые отношения с департаментом
          семьи и детского воспитания венского магистрата, в чьем ведении
          находится открытие детских садов в Вене. <br /> Это признание явилось
          результатом той большой работы, которую мы провели и проводим. Высокая
          оценка нашей деятельности заслуженно стала предметом нашей гордости,
          потому что, по милости Всевышнего, мы успешно справились и справляемся
          со всеми трудностями на этом нелёгком пути.
        </p>
        <div className={styles.list}>
          <div>
            <FaCube className={styles.icon} />
            Дошкольная подготовка
          </div>
          <div>
            <FaCube className={styles.icon} />
            Всесторонне развитие
          </div>
          <div>
            <FaCube className={styles.icon} />
            Изучения языка
          </div>
        </div>

      </div>
      <div className={styles.video}>
        <video className={styles.player} controls>
          <source src="" />
        </video>
      </div>
    </section>
  );
};

export default AboutUs;
