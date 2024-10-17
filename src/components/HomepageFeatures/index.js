import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quem nós somos',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A GamesNotFound é um estúdio de jogos composto por um grupo de estudantes
	de Ciência da Computação da UENF (Universidade Estadual Norte Fluminense - Darcy Ribeiro).
      </>
    ),
  },
  {
    title: 'Nosso objetivo',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        O nosso objetivo é criar projetos criativos com Godot, e incentivar desenvolvedores 
	e alunos a programarem e descobrir mais sobre game design!
      </>
    ),
  },
  {
    title: 'Metodologia e como contribuir',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Utilizaremos a metodologia (DESCRIÇÃO), que promove (DESCRIÇÃO 2).
	Para contribuir, entre em contato conosco via (DESCRIÇÃO 3).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
