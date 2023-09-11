import React from "react";
import styles from "./Section.module.css";

export default function Section(props) {
  return (
    <section className={styles.slide}>
      <div className="container">
        <div className={styles.space}>{props.children}</div>
      </div>
    </section>
  );
}
