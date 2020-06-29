import React from 'react';
import Title from '../components/title.component';

const ResumePage = () => (
  <div className="l-layout container">
    <section className="">
      <Title title="Resume" />
      <div>
        <div>
          <Title title="Experience" />
          <div className="card" />
        </div>
        <div>
          <Title title="Education" />
          <div className="card" />
        </div>
      </div>
    </section>
  </div>
);

export default ResumePage;
