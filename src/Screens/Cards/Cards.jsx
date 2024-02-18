import React from "react";
import styles from "./c.module.css";
import { SiSololearn } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";

const Cards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.icons}>
          <SiSololearn />
        </div>
        <h2>Развитие & Веселье</h2>
        <p>
          В наших садиках составлена грамотная и эффективная программа для
          всестороннего развития ребенка. Особый акцент делается на развивающие
          игры для познания окружающего мира. Пристальное внимание мы также уделяем дошкольной детской подготовке.  
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.icons}>
          <FaChalkboardTeacher />
        </div>
        <h2>Квалливицированные Учителя</h2>
        <p>
          Воспитательницы в наших садиках имеют ссответсвующее педагогическое
          образование, при этом они не останавливаются на достигнутом, а должны
          постоянно повышать квалификацию, изучать новые методы воспитания детей.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.icons}>
          <FaPlateWheat />
        </div>
        <h2>Здоровое питание & Гигиена</h2>
        <p>
        Мы регулярно обновляем наше меню,  учитывая при этом индивидуальные пристрастия и потребности детей.
        Чистота, которой мы стараемся окружить наших детей и приучить их к ней – один из самых важных залогов правильного воспитания детей.
        </p>
      </div>
    </section>
  );
};

export default Cards;
