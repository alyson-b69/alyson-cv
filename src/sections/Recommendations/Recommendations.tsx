import React from 'react';
import { RecommendationType } from '../../types';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { StyledContainer, StyledSection } from '../sections.style';
import {
  RecommendationCard,
  RecommendationContainer,
  RecommendationDate,
  RecommendationHeader,
} from './Recommendations.style';
import { Zoom } from 'react-awesome-reveal';

interface RecommendationsProps {
  recommendations: RecommendationType[];
}

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
}) => {
  return (
    <StyledSection id={'recommendations'}>
      <StyledContainer>
        <h2>
          <FaEnvelopeOpenText fontSize="1.5em" />
          Ils parlent de moi
        </h2>
        <RecommendationContainer>
          <Zoom>
            {recommendations.map((reco) => {
              return (
                <RecommendationCard>
                  <RecommendationHeader>
                    <img src={reco.imgUrl} alt={`${reco.name}-avatar`} />
                    <div>
                      <h4>{reco.name}</h4>
                      <em>{reco.job}</em>
                    </div>
                  </RecommendationHeader>
                  <div>
                    <RecommendationDate>Le {reco.date}</RecommendationDate>
                    <div>{reco.content}</div>
                  </div>
                </RecommendationCard>
              );
            })}
          </Zoom>
        </RecommendationContainer>
      </StyledContainer>
    </StyledSection>
  );
};

export default Recommendations;
