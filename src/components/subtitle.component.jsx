import React from 'react';

const Subtitle = (props) => {
  const { subTitle } = props;

  return (
    <div className="subtitle-content">
      <h2>{subTitle}</h2>
    </div>
  );
};

export default Subtitle;
