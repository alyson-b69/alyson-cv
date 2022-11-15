import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'styled-components';

const useIsMobile = () => {
  const theme = useTheme();
  return useMediaQuery({ query: `(max-width: ${theme.responsive.max})` });
};

export default useIsMobile;
