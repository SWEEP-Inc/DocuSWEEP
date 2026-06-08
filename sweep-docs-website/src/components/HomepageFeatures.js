import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'AI-Powered Pull Requests',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Let SWEEP automatically handle your pull requests with AI-powered insights.
        Reduce manual review burden and accelerate your development workflow.
      </>
    ),
  },
  {
    title: 'Code Quality & Consistency',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Maintain code standards and consistency across your repository. SWEEP ensures
        every pull request adheres to your team's coding guidelines and best practices.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Integrate SWEEP directly into your GitHub workflow. Works with existing CI/CD pipelines
        and requires minimal setup to get started.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
