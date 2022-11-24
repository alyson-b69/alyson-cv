import React, { useMemo, useState } from 'react';
import { StyledContainer, StyledSection } from '../sections.style';
import { FaPencilAlt } from 'react-icons/fa';
import { StyledTimeline, StyledYear } from './Experiences.style';
import { ExperienceType } from '../../types';
import Button from '../../components/Button';
import { Zoom } from 'react-awesome-reveal';
import RenderJob from './RenderJob';

interface ExperiencesProps {
  experiences: ExperienceType[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  const [isFiltered, setIsFiltered] = useState(true);
  const filteredExp = useMemo(() => {
    if (isFiltered) {
      return experiences.filter((exp) => exp.year > 2019);
    } else {
      return experiences;
    }
  }, [isFiltered, experiences]);

  return (
    <StyledSection id={'experiences'}>
      <StyledContainer>
        <h2>
          <FaPencilAlt />
          Expériences
        </h2>
        <StyledTimeline id={'list'}>
          {filteredExp.map((exp, indexExp) => {
            return (
              <React.Fragment key={exp.year}>
                <Zoom>
                  <StyledYear id={'card'}>{exp.year}</StyledYear>
                </Zoom>

                {exp.jobs.map((job, indexJob) => {
                  return (
                    <RenderJob
                      job={job}
                      index={indexJob}
                      indexYear={indexExp}
                    />
                  );
                })}
                {exp.year === 2020 && !isFiltered ? (
                  <Button
                    onClick={(e) => {
                      e?.preventDefault();
                      setIsFiltered(true);
                    }}
                    style={{
                      marginBottom: '20px',
                      width: 'fit-content',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    {' '}
                    Cacher les expériences hors développement web
                  </Button>
                ) : null}
              </React.Fragment>
            );
          })}
        </StyledTimeline>
        {isFiltered ? (
          <Button
            onClick={(e) => {
              e?.preventDefault();
              setIsFiltered(false);
            }}
          >
            {' '}
            ... Voir les expériences hors développement web
          </Button>
        ) : null}
      </StyledContainer>
    </StyledSection>
  );
};

export default Experiences;
