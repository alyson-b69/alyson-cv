import React from 'react';
import { FormationType } from '../../types';
import { StyledContainer, StyledSection } from '../sections.style';
import { FaGraduationCap } from 'react-icons/fa';
import {
  FormationsBlock,
  FormationRow,
  FormationYear,
  FormationDescription,
} from './Formations.style';
import { AttentionSeeker } from 'react-awesome-reveal';

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
          {formations.map((formation, i) => {
            const isEven = i % 2 === 0;
            if (isEven) {
              return (
                <AttentionSeeker key={formation.name} effect={'rubberBand'}>
                  <FormationRow>
                    <FormationYear>{formation.year}</FormationYear>
                    <FormationDescription>
                      {formation.name}
                      <em>{formation.school}</em>
                    </FormationDescription>
                  </FormationRow>
                </AttentionSeeker>
              );
            }
            return (
              <AttentionSeeker key={formation.name} effect={'rubberBand'}>
                <FormationRow>
                  <FormationDescription>
                    {formation.name}
                    <em>{formation.school}</em>
                  </FormationDescription>
                  <FormationYear>{formation.year}</FormationYear>
                </FormationRow>
              </AttentionSeeker>
            );
          })}
        </FormationsBlock>
      </StyledContainer>
    </StyledSection>
  );
};

export default Formations;
