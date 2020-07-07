import React from 'react';

const Title = (props) => {
  const { title, className, show } = props;

  return (
    <div className={show ? 'title-content show' : 'title-content'}>
      <h2 className={className ? `${className} title` : 'title'}>{title}</h2>
      {!className && <span />}
    </div>
  );
};

export default Title;
