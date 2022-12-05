import React from 'react';
import { TrainingType } from '../../types';
import {
  TrainingRow,
  TrainingYear,
  TrainingDescription,
} from './Training.style';
import { AttentionSeeker } from 'react-awesome-reveal';
import { computeIsEven } from '../../services/data/utils';

interface RenderTrainingProps {
  index: number;
  training: TrainingType;
}

const RenderTraining: React.FC<RenderTrainingProps> = ({ training, index }) => {
  const isEven = computeIsEven(index);
  return (
    <AttentionSeeker key={training.name} effect={'rubberBand'}>
      <TrainingRow isEven={isEven}>
        <TrainingYear>{training.year}</TrainingYear>
        <TrainingDescription>
          {training.name}
          <em>{training.school}</em>
        </TrainingDescription>
      </TrainingRow>
    </AttentionSeeker>
  );
};

export default RenderTraining;
