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
    description: (
      <div>
        개발자 이전에 서비스의 일원으로 <br />
        개발을 위한 개발보다 <br />
        서비스를 위한 개발을 위해 <br />
        도메인 이해를 위해 노력합니다.
      </div>
    ),
  },
  {
    cover: "👨‍👩‍👧‍👦",
    title: "Value of Together",
    description: (
      <div>
        혼자 스타플레이어가 되는 것보다 <br />
        함께 문제를 고민하고 해결하며 <br />
        성장하기 위해 <br />
        블로그에 시간을 투자합니다.
      </div>
    ),
  },
  {
    cover: "🏃🏻‍♂️",
    title: "Steady Growth",
    description: (
      <div>
        잠깐의 열정보다 지속하는 것이 <br />
        더 중요하다고 느끼며 <br />
        성장의 지속성을 위해 <br />
        주기적 회고를 통해 성찰합니다.
      </div>
    ),
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
