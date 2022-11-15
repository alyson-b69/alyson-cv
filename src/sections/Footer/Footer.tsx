import React from 'react';
import { StyledSection, StyledContainer } from '../sections.style';
import {
  CopyRight,
  FooterBox,
  FooterCol,
  IconsLine,
  InfoLine,
  StyledImage,
} from './Footer.style';
import {
  FaRegEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaCodepen,
} from 'react-icons/fa';
import spooky from '../../img/spooky.png';
import TooltipQuote from '../../components/TooltipQuote';
import Map from './Map';

const Footer: React.FC = () => {
  return (
    <StyledSection>
      <StyledContainer style={{ paddingBottom: '20px' }}>
        <FooterBox>
          <FooterCol>
            <h3>Informations perso</h3>
            <Map />
            <InfoLine>
              <FaRegEnvelope />
              <a href="mailto:alyson.bernabeu@gmail.com" title="Mail to Alyson">
                alyson.bernabeu@gmail.com
              </a>
            </InfoLine>
          </FooterCol>
          <FooterCol>
            <h3>Retrouvez-moi</h3>
            <IconsLine>
              <a
                href="https://github.com/alyson-b69"
                title="GitHub Alyson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub fontSize="2em" />
              </a>
              <a
                href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/"
                title="linkedin Alyson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin fontSize="2em" />
              </a>
              <a
                href="https://codepen.io/alysonb69"
                title="CodePen Alyson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCodepen fontSize="2em" />
              </a>
              <a
                href="https://instagram.com/alyson.b69"
                title="instagram Alyson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram fontSize="2em" />
              </a>
            </IconsLine>
          </FooterCol>
          <FooterCol>
            <h3>Bonus</h3>
            <TooltipQuote
              base={
                <StyledImage
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/spooky.b69/tagged/?hl=fr',
                    )
                  }
                >
                  <img src={spooky} alt={'my-dog'} />
                  <div>Mon Rubber Duck</div>
                </StyledImage>
              }
              title={'Doggy Duck'}
              quote={'À force, je vais savoir debugger comme un pro...'}
              author={'Spooky'}
            />
          </FooterCol>
        </FooterBox>
        <CopyRight>
          <div>© Copyright 2022</div>
          <div>
            Made with <span> ❤️ </span>by Alyson.B
          </div>
        </CopyRight>
      </StyledContainer>
    </StyledSection>
  );
};

export default Footer;
