import React from "react";
import styles from "./psnt.module.css";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        <div className={styles.gallery_list}>
          <img className={styles.image} src="/images/kids.jpg" alt="" />
          <img className={styles.image} src="/images/kids.jpg" alt="" />
          <img className={styles.image} src="/images/kids.jpg" alt="" />
          <img className={styles.image} src="/images/kids.jpg" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h1 className={styles.heading}>
              Открытый мир <span>для всех детей</span>
            </h1>
            <p className={styles.subtitle}>
              Создание первого детского садика в рамках организации ИнтерДиалог
              (InterDialog) состоялось в начале 2012 года в Вене и уже спустя
              короткое время были открыты еще 6 садика. У нас также сложились
              самые деловые и теплые отношения с департаментом семьи и детского
              воспитания венского магистрата, в чьем ведении находится открытие
              детских садов в Вене.
            </p>
            <Link className={styles.btn} to="/gallery">
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
