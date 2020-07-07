import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import Subtitle from './subtitle.component';

const Content = (props) => {
  const {
    title, date, company, children,
  } = props;
  return (
    <div>
      <Subtitle subTitle={title} />
      <div className="content-info">
        <FaCalendar className="card-icon" />
        <span className="card-subtitle small">
          {date}
          {' '}
          |
          {' '}
          {company}
        </span>
      </div>
      {children}
    </div>
  );
};

export default Content;
