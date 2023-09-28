import React from "react";

import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./Blog.module.css";

export default function Blog({
  title = "Blog Title",
  description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  link = "/docs/lets-hack",
  tags = ["Test", "New"],
  date = "July 2022",
}) {
  return (
    <div className={clsx("margin-bottom--xl", styles.blog)}>
      <Link to={link}>
        <h3 className={styles.title}>{title}</h3>
      </Link>

      <p>{description}</p>

      <p>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={clsx(
              "badge badge--primary margin-right--xs",
              styles.tag
            )}
          >
            {tag}
          </span>
        ))}{" "}
        · {date}
      </p>
    </div>
  );
}
