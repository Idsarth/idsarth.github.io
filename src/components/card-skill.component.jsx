import React from 'react';
import Progress from './progress.component';

const CardSkill = (props) => {
  const { } = props;

  return (
    <div className="card-profile card">
      <div className="card-skill">
        <div>
          <Progress
            color="#25ca7f"
            percent={95}
            skill="JavaScript"
          />
          <Progress
            color="#25ca7f"
            percent={90}
            skill="TypeScript"
          />
          <Progress
            color="#25ca7f"
            percent={98}
            skill="React"
          />
          <Progress
            color="#25ca7f"
            percent={92}
            skill="React Native"
          />
        </div>
        <div>
          <Progress
            color="#25ca7f"
            percent={70}
            skill="Angular"
          />
          <Progress
            color="#25ca7f"
            percent={85}
            skill="Flutter"
          />
          <Progress
            color="#25ca7f"
            percent={90}
            skill="NodeJS"
          />
          <Progress
            color="#25ca7f"
            percent={85}
            skill="Graphql"
          />
        </div>
      </div>
    </div>
  );
};

export default CardSkill;
