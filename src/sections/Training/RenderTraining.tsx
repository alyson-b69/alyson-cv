import React from 'react';
import { TrainingType } from '../../types';
import {
  TrainingRow,
  TrainingYear,
  TrainingDescription,
} from './Training.style';
import { AttentionSeeker } from 'react-awesome-reveal';

interface RenderTrainingProps {
  index: number;
  training: TrainingType;
}

const RenderTraining: React.FC<RenderTrainingProps> = ({ training, index }) => {
  const isEven = index % 2 === 0;
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
