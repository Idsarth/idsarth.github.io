import React from 'react';
import { FaAddressCard } from 'react-icons/fa';

import Title from '../components/title.component';
import Card from '../components/card.component';
import CardSkill from '../components/card-skill.component';

const HomePage = () => (
  <div className="container l-layout">
    <main>
      <Title title="About Me" />
      <Card className="card-profile" title="Idsarth Juarez">
        <div className="card-details">
          <FaAddressCard className="card-icon" />
          <span className="card-subtitle">Managua, Nicaragua</span>
        </div>
        <p className="card-description">
          Hello! I'm Idsarth Juarez FullStack and Mobile developer,
          with extensive experience in developing native and multi-platform applications for
          iOS and Android.
        </p>
        <p className="card-description">
          With solid knowledge in technologies such as
          ReactJS, React Native, NextJS, NodeJS, Graphql, Flutter, Golang and Python.
        </p>
      </Card>
    </main>
    <section className="l-layout">
      <Title title="Skills" />
      <CardSkill />
    </section>
  </div>
);

export default HomePage;
