import React from 'react';
import { StyledSection, StyledContainer } from '../sections.style';
import Avatar from '../../img/avatar.png';
import { Zoom, AttentionSeeker } from 'react-awesome-reveal';

const Intro: React.FC = () => {
  return (
    <StyledSection id={'intro'}>
      <StyledContainer>
        <Zoom>
          <img src={Avatar} alt="alyson-b avatar" />
        </Zoom>
        <AttentionSeeker effect={'rubberBand'}>
          <h2>ALYSON BERNABEU</h2>
          <h3>DÉVELOPPEUSE WEB REACT.JS / NODE.JS</h3>
        </AttentionSeeker>
      </StyledContainer>
    </StyledSection>
  );
};

export default Intro;
