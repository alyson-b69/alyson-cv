import styled from 'styled-components';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export const StyledPdf = styled.div`
  & .textLayer,
  .annotationLayer {
    display: none;
  }
`;
