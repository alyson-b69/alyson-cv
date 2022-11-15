import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { WindowContextProps } from './index';

export const WindowContext = React.createContext<WindowContextProps>({
  windowHeight: 0,
  windowWidth: 0,
});

export const WindowContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getVh = useCallback(() => {
    return Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    );
  }, []);
  const getVw = useCallback(() => {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
  }, []);
  const [windowHeight, setVh] = useState<number>(getVh());
  const [windowWidth, setVw] = useState<number>(getVw());

  useEffect(() => {
    const handleResize = () => {
      setVh(getVh());
      setVw(getVw());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getVh, getVw]);
  return (
    <WindowContext.Provider value={{ windowHeight, windowWidth }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowSize = () => useContext(WindowContext);
