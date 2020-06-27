import React from 'react';

const Title = (props) => {
  const { title } = props;
  return (
    <div className="title-content">
      <h2 className="title">{title}</h2>
      <span className="title-decoration" />
    </div>
  );
};

export default Title;
