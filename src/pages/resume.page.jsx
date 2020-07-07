import React from 'react';
import Title from '../components/title.component';
import CardSkill from '../components/card-skill.component';
import Content from '../components/content.component';

const ResumePage = () => (
  <div className="l-layout container">
    <section className="">
      <Title title="Resume" />
      <div className="grid-system l-layout">
        <div className="grid-child">
          <Title show title="Experience" className="subtitle" />
          <div className="card content">
            <Content
              title="Graphic Design"
              date="2017 - 2018"
              company="Universidad Nacional de Ingenieria"
            >
              <p className="card-skill-alt mt">- Banners design.</p>
              <p className="card-skill-alt mt">- Design of advertising blankets.</p>
              <p className="card-skill-alt mt">- Work folder design.</p>
            </Content>
            <div className="mt" />
            <Content
              title="Laboratory supervisor"
              date="2018 - 2018"
              company="UNI - Posgrado"
            >
              <p className="card-skill-alt mt">- laboratory supervisor of graduate course</p>
            </Content>
            <div className="mt" />
            <Content
              title="Web and mobile developer"
              date="2019 - 2020"
              company="AlySystem, S.A."
            >
              <p className="card-skill-alt mt">- Web application.</p>
              <p className="card-skill-alt mt">- Mobile transport application.</p>
              <p className="card-skill-alt mt">- Mobile delivery application.</p>
              <p className="card-skill-alt mt">- Mobile Restaurant application.</p>
              <p className="card-skill-alt mt">- Commission system (Unilevel tree).</p>
              <p className="card-skill-alt mt">- Cms development.</p>
            </Content>
            <div className="mt" />
            <Content
              title="Mobile developer"
              date="2020 - 2020"
              company="Smart Business Solutions"
            >
              <p className="card-skill-alt mt">- Development of an ecommerce (Mobile).</p>
              <p className="card-skill-alt mt">- Implementation of agile methodology (Scrum).</p>
            </Content>
          </div>
        </div>
        <div className="grid-child">
          <Title show title="Education" className="subtitle" />
          <div className="card content">
            <Content
              title="Basic level of primary"
              date="2005 - 2010"
              company="Sacred heart college"
            />
            <div className="mt" />

            <Content
              title="Bachelor of science and letters"
              date="2011 - 2016"
              company="Sacred heart college"
            />
            <div className="mt" />
            <Content
              title="Higher education"
              date="2017 - Actual"
              company="Universidad Nacional de Ingenieria"
            />

          </div>
        </div>
      </div>
    </section>
    <section className="l-layout">
      <Title title="Skills" />
      <CardSkill />
    </section>
    <div className="mt" />
  </div>
);

export default ResumePage;
