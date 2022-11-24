import React from 'react';
import {
  Circle,
  JobDescription,
  JobInfos,
  JobTitle,
  TimelineCard,
} from './Experiences.style';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { computePeriod } from '../../services/data/renderDate';
import { Zoom } from 'react-awesome-reveal';
import useIsMobile from '../../services/hooks/useIsMobile';
import { JobType } from '../../types';

interface RenderJobProps {
  index: number;
  indexYear: number;
  job: JobType;
}

const RenderJob: React.FC<RenderJobProps> = ({ index, indexYear, job }) => {
  const isMobile = useIsMobile();
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
      <Circle inverted={isMobile ? true : job.inverted} left={left} />
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
  if (isMobile && index === 0 && indexYear === 0) {
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
};

export default RenderJob;
