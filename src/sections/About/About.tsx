import React from 'react';
import { StyledSection } from '../sections.style';
import alyson from '../../img/alyson.jpg';
import { Slide } from 'react-awesome-reveal';
import { StyledContainerAbout } from './About.style';

interface AboutProps {
  about: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <StyledSection id={'about'}>
      <Slide>
        <StyledContainerAbout>
          <img src={alyson} alt={'alyson'} />
          <div>
            <h2>À PROPOS</h2>
            {about}
          </div>
        </StyledContainerAbout>
      </Slide>
    </StyledSection>
  );
};

export default About;
