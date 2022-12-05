import React from 'react';
import { StyledSection, StyledContainer } from '../sections.style';
import { ProjectType } from '../../types';
import { FaRegFolderOpen } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { computeIsEven } from '../../services/data/utils';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <StyledSection id={'projects'}>
      <StyledContainer style={{ gap: '20px' }}>
        <h2>
          <FaRegFolderOpen fontSize="1.5em" /> Projets
        </h2>
        {projects.map((project, i) => {
          const revert = computeIsEven(i);
          return (
            <ProjectCard project={project} revert={revert} key={project.name} />
          );
        })}
      </StyledContainer>
    </StyledSection>
  );
};

export default Projects;
