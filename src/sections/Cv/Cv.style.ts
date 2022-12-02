import styled, { css } from 'styled-components';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export const StyledPdf = styled.div`
  & .textLayer,
  .annotationLayer {
    display: none;
  }

  & canvas {
    width: 100%;
  }
`;

export const StyledButtonContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.getSpacing(2)};
  `}
`;
