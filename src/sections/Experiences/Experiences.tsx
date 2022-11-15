import React, { useMemo, useState } from 'react';
import { StyledContainer, StyledSection } from '../sections.style';
import { FaPencilAlt, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import {
  Circle,
  JobDescription,
  JobInfos,
  JobTitle,
  StyledTimeline,
  StyledYear,
  TimelineCard,
} from './Experiences.style';
import { ExperiencesType } from '../../types';
import Button from '../../components/Button';
import { Zoom } from 'react-awesome-reveal';
import useIsMobile from '../../services/hooks/useIsMobile';
import { computePeriod } from '../../services/data/renderDate';

interface ExperiencesProps {
  experiences: ExperiencesType[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  const [isFiltered, setIsFiltered] = useState(true);
  const isMobile = useIsMobile();
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
                  const ulWidth = document
                    .getElementById('list')
                    ?.getBoundingClientRect().width;
                  const card = document
                    .getElementById('timeline-card')
                    ?.getBoundingClientRect().width;
                  const left = ulWidth && card ? card - ulWidth - 15 : -60;

                  const content = (
                    <TimelineCard
                      inverted={isMobile ? true : job.inverted}
                      id={'timeline-card'}
                    >
                      <Circle
                        inverted={isMobile ? true : job.inverted}
                        left={left}
                      />
                      <JobTitle>{job.title}</JobTitle>
                      <JobInfos>
                        <div>
                          <FaRegCalendarAlt style={{ marginRight: '4px' }} />
                          {job.start} à {job.end ? job.end : ' maintenant'} -{' '}
                          {computePeriod(job.start, job.end)}
                        </div>
                        <div>
                          <FaMapMarkerAlt style={{ marginRight: '4px' }} />
                          {job.location}
                        </div>
                      </JobInfos>
                      <JobDescription>{job.description}</JobDescription>
                    </TimelineCard>
                  );
                  if (isMobile && indexJob === 0 && indexExp === 0) {
                    return (
                      <div
                        style={{
                          alignSelf: isMobile
                            ? 'flex-end'
                            : job.inverted
                            ? 'flex-end'
                            : 'flex-start',
                          width: isMobile ? '90%' : '46%',
                        }}
                        key={job.title}
                      >
                        {content}
                      </div>
                    );
                  }

                  return (
                    <Zoom
                      style={{
                        alignSelf: isMobile
                          ? 'flex-end'
                          : job.inverted
                          ? 'flex-end'
                          : 'flex-start',
                        width: isMobile ? '90%' : '46%',
                      }}
                      key={job.title}
                    >
                      {content}
                    </Zoom>
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
