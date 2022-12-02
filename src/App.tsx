import React from 'react';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import {
  about,
  skills,
  experiences,
  training,
  projects,
  recommendations,
} from './datas';
import Intro from './sections/Intro';
import About from './sections/About';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import Training from './sections/Training';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import { WindowContextProvider } from './services/contexts/WindowContext';
import Root from './components/Root';
import Recommendations from './sections/Recommendations';

const App: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [currentScroll, setCurrentScroll] = React.useState(0);

  return (
    <WindowContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root
          contentRef={contentRef}
          onScroll={(e) => {
            const newScroll = e.currentTarget.scrollTop;
            setCurrentScroll(newScroll);
          }}
        >
          <Intro />
          <About about={about} />
          <Skills skills={skills} />
          <Experiences experiences={experiences} />
          <Training training={training} />
          <Projects projects={projects} />
          <Contact />
          <Recommendations recommendations={recommendations} />
          <Footer />
          <ScrollToTop
            currentScroll={currentScroll}
            onClick={() =>
              contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
            }
          />
        </Root>
      </ThemeProvider>
    </WindowContextProvider>
  );
};

export default App;
