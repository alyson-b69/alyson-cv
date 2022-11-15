import React from 'react';
import { StyledSection, StyledContainer } from '../sections.style';
import Button from '../../components/Button';
import { FaRegAddressCard } from 'react-icons/fa';
import Popup from '../../components/Popup';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from './cv.pdf';
import { StyledPdf } from './Cv.style';
import { AttentionSeeker } from 'react-awesome-reveal';

const Cv: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  return (
    <StyledSection id={'cv'}>
      <StyledContainer>
        <h2>
          <FaRegAddressCard fontSize="1.5em" />
          Curriculum vitae
        </h2>
        <h3>Mon CV au format PDF</h3>
        <AttentionSeeker effect={'swing'}>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Voir le PDF
          </Button>
        </AttentionSeeker>
      </StyledContainer>
      <Popup
        open={open}
        close={() => setOpen(false)}
        children={
          <StyledPdf>
            <Document file={pdfFile}>
              <Page pageNumber={1} />
            </Document>
          </StyledPdf>
        }
        buttons={[
          {
            children: <>Télécharger le CV</>,
            onClick: () => {
              fetch(pdfFile)
                .then((response) => response.blob())
                .then((blob) => {
                  const fileURL = window.URL.createObjectURL(blob);
                  const alink = document.createElement('a');
                  alink.href = fileURL;
                  alink.download = 'alyson-bernabeu-cv.pdf';
                  alink.click();
                });
            },
          },
        ]}
      />
    </StyledSection>
  );
};

export default Cv;
