import React from 'react';
import Button from '../../components/Button';
import { FaRegAddressCard } from 'react-icons/fa';
import Popup from '../../components/Popup';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from './cv.pdf';
import { StyledButtonContent, StyledPdf } from './Cv.style';
import { AttentionSeeker } from 'react-awesome-reveal';

const Cv: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  return (
    <>
      <AttentionSeeker effect={'swing'} style={{ marginTop: '16px' }}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          <StyledButtonContent>
            <FaRegAddressCard fontSize="2em" />
            Voir mon CV en PDF
          </StyledButtonContent>
        </Button>
      </AttentionSeeker>

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
    </>
  );
};

export default Cv;
