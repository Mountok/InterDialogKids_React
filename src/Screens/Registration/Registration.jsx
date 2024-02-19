import React from "react";
import styles from "./r.module.css";
const Registration = () => {
  return (
    <section className={styles.section}>
      <h2>Цены</h2>
      <p>Регистрацию можно пройти лично в нашем офисе. Наши часы работы: пн. - пт. с 9:00 до 16:30</p>
      <table>
        <tr>
          <td>Группа</td>
          <td>График</td>
          <td>Время</td>
          <td>Завтрак</td>
          <td>Обед</td>
          <td>Ужин</td>
          <td>Цена</td>
        </tr>
        <tr>
          <td>Младшая</td>
          <td>Полдня</td>
          <td>8:00-12:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>Младшая</td>
          <td>Неполный день</td>
          <td>8:00-14:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>Младшая</td>
          <td>Целый день</td>
          <td>8:00-16:30</td>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>100€</td>
        </tr>
        <tr>
          <td>Старшая</td>
          <td>Полдня</td>
          <td>8:00-12:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>Старшая</td>
          <td>Неполный день</td>
          <td>8:00-14:00</td>
          <td>+</td>
          <td>+</td>
          <td>-</td>
          <td>75€</td>
        </tr>
        <tr>
          <td>Старшая</td>
          <td>Полный день</td>
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
