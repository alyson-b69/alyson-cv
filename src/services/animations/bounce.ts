import { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.5, 1.5, 1.5);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export default bounce;
