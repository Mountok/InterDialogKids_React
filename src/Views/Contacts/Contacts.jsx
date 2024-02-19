import React from 'react'
import styles from './contacts.module.css'
const Contacts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2>Постановка на учет</h2>
        <p>
            Проходит лично в нашем офисе. <br /> 
            Время работы с 9:00 до 16:30. <br />
            Записать на прием можно по номеру: <br /> +43 680 240 2775
        </p>
      </div>

      <div className={styles.card}>
        <h2>Наши данные</h2>
        <p>
            Улица: Denisgasse 38/4 5 1200 Wien <br />
            График работы: Пн- Пт 09:00 - 16:30 <br />
            Телефон: 0664/5680155<br />
            Почта: office@interdilog.at
        </p>
      </div>

      <div className={styles.card}>
        <h2>Регистрация</h2>
        <p>
        1. Номер клиента МА10 <br />
        2. Регистрационная форма (копия) <br />
        3. Электронная открытка (копия) <br />
        4. Сертивикат о вакцинации <br />
        5. Родительский договор (заполняеться непосредственно в офисен при регистрации)
        </p>
      </div>
    </section>
  )
}

export default Contacts