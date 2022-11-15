import React from 'react';
import {
  TooltipTitle,
  TooltipWrapper,
  TooltipQuoteTxt,
  TooltipAuthor,
} from './TooltipQuote.style';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  base: React.ReactNode;
  title: string;
  quote: string;
  author: string;
  position?: TooltipPosition;
}

const TooltipQuote: React.FC<TooltipProps> = ({
  base,
  title,
  quote,
  author,
  position,
}) => {
  return (
    <TooltipWrapper position={position || 'top'}>
      <div className={'tip'}>
        <TooltipTitle>{title}</TooltipTitle>
        <TooltipQuoteTxt>
          <RiDoubleQuotesL fontSize={'1.5em'} style={{ marginRight: '8px' }} />
          {quote}
          <RiDoubleQuotesR fontSize={'1.5em'} style={{ marginLeft: '8px' }} />
        </TooltipQuoteTxt>
        <TooltipAuthor>{author}</TooltipAuthor>
      </div>
      {base}
    </TooltipWrapper>
  );
};

export default TooltipQuote;
