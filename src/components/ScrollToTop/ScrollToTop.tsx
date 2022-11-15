import React, { useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { StyledTopNav } from './ScrollToTop.style';

interface ScrollToTopProps {
  currentScroll: number;
  onClick: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  currentScroll,
  onClick,
}) => {
  const [showScroll, setShowScroll] = useState(true);

  React.useEffect(() => {
    if (currentScroll > 300) {
      setShowScroll(true);
    } else if (currentScroll <= 300) {
      setShowScroll(false);
    }
  }, [currentScroll]);

  return (
    <StyledTopNav show={showScroll}>
      <FaAngleDoubleUp
        fontSize="3em"
        className="roundArrow"
        onClick={onClick}
      />
    </StyledTopNav>
  );
};

export default ScrollToTop;
