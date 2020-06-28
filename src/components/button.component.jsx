import React from 'react';

const Button = (props) => {
  const { onClick, message } = props;

  return (
    <input
      type="button"
      onClick={onClick}
      value={message}
      className="button button-success"
    />
  );
};

export default Button;
