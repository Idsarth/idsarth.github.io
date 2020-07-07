import React from 'react';

const Button = (props) => {
  const { message } = props;

  return (
    <a href="/CV.pdf" download target="_blank" className="button button-success">
      {message}
    </a>
  );
};

export default Button;
