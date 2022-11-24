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
      <StyledContainerAbout>
        <Slide>
          <img src={alyson} alt={'alyson'} />
        </Slide>
        <Slide direction={'right'}>
          <div>
            <h2>À PROPOS</h2>
            {about}
          </div>
        </Slide>
      </StyledContainerAbout>
    </StyledSection>
  );
};

export default About;
