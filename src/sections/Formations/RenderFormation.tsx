import React from 'react';
import { FormationType } from '../../types';
import {
  FormationDescription,
  FormationRow,
  FormationYear,
} from './Formations.style';
import { AttentionSeeker } from 'react-awesome-reveal';

interface RenderFormationProps {
  index: number;
  formation: FormationType;
}

const RenderFormation: React.FC<RenderFormationProps> = ({
  formation,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <AttentionSeeker key={formation.name} effect={'rubberBand'}>
      <FormationRow isEven={isEven}>
        <FormationYear>{formation.year}</FormationYear>
        <FormationDescription>
          {formation.name}
          <em>{formation.school}</em>
        </FormationDescription>
      </FormationRow>
    </AttentionSeeker>
  );
};

export default RenderFormation;
