import React from 'react';
import { FaAward, FaUserAstronaut, FaGithub } from 'react-icons/fa';

// Import components
import Category from './category.component';
import Button from './button.component';

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
          title="Github"
          subtitle="Projects"
        >
          <FaGithub size={20} color="#c8cdd0" />
        </Category>

        <Button
          message="Download CV"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Card;
