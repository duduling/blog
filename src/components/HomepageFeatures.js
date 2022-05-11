import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureCoverStyle = {
  fontSize: "100px",
};

const FeatureList = [
  {
    cover: "👨🏻‍💻",
    title: "Develop For Business",
    description: <>Not Ready</>,
  },
  {
    cover: "👨‍👩‍👧‍👦",
    title: "Value of Together",
    description: <>Not Ready</>,
  },
  {
    cover: "🏃🏻‍♂️",
    title: "No Pain, No Gain",
    description: <>Not Ready</>,
  },
];

function Feature({ cover, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div style={FeatureCoverStyle}>{cover}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
