import React from 'react';
import { TrainingType } from '../../types';
import { StyledContainer, StyledSection } from '../sections.style';
import { FaGraduationCap } from 'react-icons/fa';
import { TrainingBlock } from './Training.style';
import RenderTraining from './RenderTraining';

interface TrainingProps {
  training: TrainingType[];
}

const Training: React.FC<TrainingProps> = ({ training }) => {
  return (
    <StyledSection id={'training'}>
      <StyledContainer>
        <h2>
          <FaGraduationCap fontSize="1.5em" />
          Formations
        </h2>
        <h3>Diplômes & formations</h3>
        <TrainingBlock>
          {training.map((singleTraining, i) => (
            <RenderTraining
              key={singleTraining.name}
              training={singleTraining}
              index={i}
            />
          ))}
        </TrainingBlock>
      </StyledContainer>
    </StyledSection>
  );
};

export default Training;
