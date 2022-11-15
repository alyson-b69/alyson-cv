import React from 'react';
import { StyledSection, StyledContainer } from '../sections.style';
import { PortfolioType } from '../../types';
import { FaRegFolderOpen } from 'react-icons/fa';
import PortfolioCard from './PortfolioCard';

interface PortfolioProps {
  projects: PortfolioType[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <StyledSection id={'portfolio'}>
      <StyledContainer style={{ gap: '20px' }}>
        <h2>
          <FaRegFolderOpen fontSize="1.5em" /> Portefolio
        </h2>
        {projects.map((project, i) => {
          const revert = i % 2 === 0;
          return (
            <PortfolioCard
              project={project}
              revert={revert}
              key={project.name}
            />
          );
        })}
      </StyledContainer>
    </StyledSection>
  );
};

export default Portfolio;
