import React from 'react';
import { GrMapLocation } from 'react-icons/gr';

import Title from '../components/title.component';
import Card from '../components/card.component';

const HomePage = () => (
  <main className="container l-layout">
    <Title title="About Me" />
    <Card className="card-profile" title="Idsarth Juarez">
      <div className="card-details">
        <GrMapLocation color="#25ca7f" />
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
);

export default HomePage;
