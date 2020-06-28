import React from 'react';
import { FaAward, FaUserAstronaut } from 'react-icons/fa';

// Import components
import Category from './category.component';

const Card = (props) => {
  const {
    title, avatar, children, className,
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
      <div className="card-footer">
        <Category
          title="4 Years Job"
          subtitle="Experience"
        >
          <FaAward size={20} color="#c8cdd0" />
        </Category>

        <Category
          title="Freelance"
          subtitle="Available"
        >
          <FaUserAstronaut size={20} color="#c8cdd0" />
        </Category>
        <Category
          title=""
          subtitle=""
        />
      </div>
    </div>
  );
};

export default Card;
