import React, { Fragment } from 'react';

const Progress = (props) => {
  const { color, percent, skill } = props;

  return (
    <>
      <div className="progress-info">
        <span>{skill}</span>
        <p>
          {percent}
          %
        </p>
      </div>
      <div className="progress">
        <div style={{ width: `${percent}%`, backgroundColor: color }} className="progress-percent" />
      </div>
    </>
  );
};

export default Progress;
