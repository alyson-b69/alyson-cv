import React from 'react';
import { FormationType } from '../../types';
import { StyledContainer, StyledSection } from '../sections.style';
import { FaGraduationCap } from 'react-icons/fa';
import { FormationsBlock } from './Formations.style';
import RenderFormation from './RenderFormation';

interface FormationsProps {
  formations: FormationType[];
}

const Formations: React.FC<FormationsProps> = ({ formations }) => {
  return (
    <StyledSection id={'formations'}>
      <StyledContainer>
        <h2>
          <FaGraduationCap fontSize="1.5em" />
          Formations
        </h2>
        <h3>Diplômes & formations</h3>
        <FormationsBlock>
          {formations.map((formation, i) => (
            <RenderFormation
              key={formation.name}
              formation={formation}
              index={i}
            />
          ))}
        </FormationsBlock>
      </StyledContainer>
    </StyledSection>
  );
};

export default Formations;
