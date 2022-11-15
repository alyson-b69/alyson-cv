import React from 'react';
import { PortfolioType } from '../../types';
import {
  ImageWrapper,
  InlineIcons,
  InlineStacks,
  ProjectDescription,
  ProjectWrapper,
  StyledEffect,
  StyledPortfolioCard,
} from './Portfolio.style';
import Tag from '../../components/Tag';
import { FaGithub } from 'react-icons/fa';
import { BsWindow } from 'react-icons/bs';
import { renderImage } from './services';
import MacMockup from '../../img/mac-mockup.webp';
import Button from '../../components/Button';

interface PortfolioCardProps {
  project: PortfolioType;
  revert: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, revert }) => {
  return (
    <StyledEffect direction={revert ? 'left' : 'right'} key={project.name}>
      <StyledPortfolioCard revert={revert}>
        <ProjectWrapper revert={revert}>
          <h4>
            {project.name} <em>{project.type}</em>
          </h4>
          <em>{project.period}</em>
          <ProjectDescription>{project.description}</ProjectDescription>
          <InlineStacks>
            Stack :{' '}
            {project.stacks.map((stack) => (
              <Tag key={stack}>{stack}</Tag>
            ))}
          </InlineStacks>
          <InlineIcons>
            {project.githubLink ? (
              <a href={project.githubLink}>
                <FaGithub fontSize={'1.5em'} />
              </a>
            ) : null}
            {project.websiteLink ? (
              <a href={project.websiteLink}>
                <BsWindow fontSize={'1.5em'} />
              </a>
            ) : null}
          </InlineIcons>
        </ProjectWrapper>
        <ImageWrapper revert={revert}>
          {renderImage(project.name)}
          <img src={MacMockup} alt={'mockup'} className={'mockup'} />
          {project.websiteLink ? (
            <Button
              onClick={() =>
                project.websiteLink && window.open(project.websiteLink)
              }
            >
              Voir le projet
            </Button>
          ) : null}
        </ImageWrapper>
      </StyledPortfolioCard>
    </StyledEffect>
  );
};

export default PortfolioCard;
