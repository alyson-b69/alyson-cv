import React from 'react';
import { StyledApp, StyledContent } from './Root.style';
import NavBar from '../NavBar/NavBar';
import { links } from '../../datas';

interface RootProps {
  children: React.ReactNode;
  contentRef: React.RefObject<HTMLDivElement>;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

const Root: React.FC<RootProps> = ({ children, contentRef, onScroll }) => {
  return (
    <StyledApp>
      <NavBar links={links} />
      <StyledContent ref={contentRef} onScroll={onScroll}>
        {children}
      </StyledContent>
    </StyledApp>
  );
};

export default Root;
