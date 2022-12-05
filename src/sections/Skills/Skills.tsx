import React from 'react';
import { StyledSection } from '../sections.style';
import { CompetenceType } from '../../types';
import { renderHardSkillImg, renderIcon } from './services';
import {
  HardSkillsCol,
  HardSkillsContainer,
  SoftSkillCard,
  SoftSkillsContainer,
  StyledHardSkillCard,
  StyledSkillsContainer,
} from './Skills.style';
import TooltipQuote from '../../components/TooltipQuote';
import { FaCode } from 'react-icons/fa';
import { Fade, Zoom } from 'react-awesome-reveal';
import useIsMobile from '../../services/hooks/useIsMobile';
import { computeIsEven } from '../../services/data/utils';

interface CompetencesProps {
  skills: CompetenceType;
}

const Skills: React.FC<CompetencesProps> = ({ skills }) => {
  const isMobile = useIsMobile();
  return (
    <StyledSection id={'skills'}>
      <StyledSkillsContainer>
        <h2>
          {' '}
          <FaCode fontSize="1.3em" />
          COMPÉTENCES
        </h2>
        <h3>Soft Skills</h3>
        <SoftSkillsContainer>
          {skills.softSkills.map((skill, i) => {
            const isEven = computeIsEven(i);
            return (
              <Fade duration={3000} key={skill.name}>
                <TooltipQuote
                  position={isMobile ? 'top' : isEven ? 'top' : 'bottom'}
                  base={
                    <SoftSkillCard key={skill.name}>
                      {renderIcon(skill.icon)}
                      <p>{skill.name}</p>
                    </SoftSkillCard>
                  }
                  title={skill.name}
                  quote={skill.quote}
                  author={skill.author}
                />
              </Fade>
            );
          })}
        </SoftSkillsContainer>
        <h3>Hard Skills</h3>
        <HardSkillsContainer>
          <HardSkillsCol>
            <StyledHardSkillCard isTitle>
              <h4>Languages</h4>
            </StyledHardSkillCard>
            <Zoom>
              {skills.hardSkills.languages.map((skill) => {
                return (
                  <StyledHardSkillCard key={skill}>
                    {renderHardSkillImg(skill)}
                    <p>{skill}</p>
                  </StyledHardSkillCard>
                );
              })}
            </Zoom>
          </HardSkillsCol>
          <HardSkillsCol>
            <StyledHardSkillCard isTitle>
              <h4>Frameworks & librairies</h4>
            </StyledHardSkillCard>
            <Zoom>
              {skills.hardSkills.frameworks.map((skill) => {
                return (
                  <StyledHardSkillCard key={skill}>
                    {renderHardSkillImg(skill)}
                    <p>{skill}</p>
                  </StyledHardSkillCard>
                );
              })}
            </Zoom>
          </HardSkillsCol>
          <HardSkillsCol>
            <StyledHardSkillCard isTitle>
              <h4>Outils</h4>
            </StyledHardSkillCard>
            <Zoom>
              {skills.hardSkills.tools.map((skill) => {
                return (
                  <StyledHardSkillCard key={skill}>
                    {renderHardSkillImg(skill)}
                    <p>{skill}</p>
                  </StyledHardSkillCard>
                );
              })}
            </Zoom>
          </HardSkillsCol>
        </HardSkillsContainer>
      </StyledSkillsContainer>
    </StyledSection>
  );
};

export default Skills;
