import React from 'react';

const Title = (props) => {
  const { title } = props;
  return (
    <div className="title-content">
      <h2 className="title">{title}</h2>
      <span />
    </div>
  );
};

export default Title;
