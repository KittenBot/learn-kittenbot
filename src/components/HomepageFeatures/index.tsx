import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'User-Friendly Programming Interface',
    Svg: require('@site/static/img/UserFriendly_Programming_Interface.svg').default,
    description: (
      <>
        Kittenbot comes with an intuitive drag-and-drop interface, making it easy for kids and beginners to start programming without any prior experience. Dive into the world of coding with fun, interactive lessons and challenges!
      </>
    ),
  },
  {
    title: 'Expandable Modules and Components',
    Svg: require('@site/static/img/Expandable_Modules_and_Components.svg').default,
    description: (
      <>
        Unlock endless possibilities with Kittenbot's modular design. Whether you're looking to add sensors, motors, or other innovative components, Kittenbot grows with your imagination and creativity.
      </>
    ),
  },
  {
    title: 'Durable and Safe Design',
    Svg: require('@site/static/img/Durable_and_Safe_Design.svg').default,
    description: (
      <>
        Safety first! Kittenbot is designed with durable materials and features to ensure longevity, while also prioritizing the safety of its young users. Rounded edges, battery protection, and eco-friendly materials make it a top choice for parents and educators.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
