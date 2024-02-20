import React from "react";
import styles from "./Article.module.css";
import {useTranslation} from 'react-i18next'
const Article = () => {
    const [t,_] = useTranslation()
  return (
    <section className={styles.section}>
        <div className={styles.hr}></div>
      <div>
        &emsp;&emsp;&emsp;{t("article_1")}<br />
        &emsp;&emsp;&emsp;{t("article_2")}<br />
        &emsp;&emsp;&emsp;{t("article_3")}<br />
        &emsp;&emsp;&emsp;{t("article_4")}
      </div>
    </section>
  );
};

export default Article;
