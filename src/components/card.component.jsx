import React from 'react';

const Card = (props) => {
  const {
    title, description, avatar, children, className,
  } = props;

  return (
    <div className={className ? `${className} card` : 'card'}>
      <div className="card-body">
        <div className="card-avatar">
          <img src="https://abyeneregia.net/assets/img/theme/av.png" alt="Idsarth Juarez" />
        </div>
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          {children}
        </div>
      </div>
      <div className="card-footer" />
    </div>
  );
};

export default Card;
