import React from 'react';
import { StyledSection, StyledContainer } from '../sections.style';
import { ProjectType } from '../../types';
import { FaRegFolderOpen } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

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
          const revert = i % 2 === 0;
          return (
            <ProjectCard project={project} revert={revert} key={project.name} />
          );
        })}
      </StyledContainer>
    </StyledSection>
  );
};

export default Projects;
