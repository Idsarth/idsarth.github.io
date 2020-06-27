import React from 'react';
import { GrMapLocation } from 'react-icons/gr';

import Title from '../components/title.component';
import Layout from '../layout/layout';

const HomePage = () => (
  <Layout>
    <Title title="About Me" />
    <h2>Idsarth Juarez</h2>
    <div>
      <GrMapLocation />
      <span>Managua, Nicaragua</span>
    </div>
    <p>
      Hello! I'm Idsarth Juarez FullStack and Mobile developer,
      with extensive experience in developing native and multi-platform applications for
      iOS and Android. With solid knowledge in technologies such as
      ReactJS, React Native, NextJS, NodeJS, Graphql, Flutter, Golang and Python.
    </p>
  </Layout>
);

export default HomePage;
