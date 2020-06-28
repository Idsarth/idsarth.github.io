import React from 'react';

const Category = (props) => {
  const { children, title, subtitle } = props;
  return (
    <div className="category">
      <div className="category-circle">
        {children}
      </div>
      <div className="category-info">
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default Category;
