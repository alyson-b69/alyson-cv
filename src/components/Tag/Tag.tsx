import React from 'react';
import { StyledTag } from './Tag.style';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <StyledTag> # {children}</StyledTag>;
};

export default Tag;
