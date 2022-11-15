import { ButtonProps } from '../Button/Button';
import Button from '../Button';
import React, { CSSProperties } from 'react';
import { StyledPopup, ButtonContainer } from './Popup.style';
import { useWindowSize } from '../../services/contexts/WindowContext';
import { ImCross } from 'react-icons/im';

export interface PopupProps {
  buttons?: ButtonProps[];
  open?: boolean;
  onSubmit?: () => void;
  close: () => void;
  nested?: boolean;
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  style?: CSSProperties;
  title?: string;
  center?: boolean;
  fullScreen?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
  buttons = [],
  open,
  close,
  onSubmit,
  className,
  style,
  children,
  nested,
  closeOnDocumentClick,
  closeOnEscape,
  title,
  center = false,
  fullScreen = false,
  loading = false,
}) => {
  const windowSize = useWindowSize();

  return (
    <StyledPopup
      modal
      {...{ style, className, open }}
      onClose={close}
      nested={nested}
      closeOnDocumentClick={closeOnDocumentClick}
      closeOnEscape={closeOnEscape}
      fullScreen={fullScreen}
      windowSize={windowSize}
    >
      <div className="close" onClick={close}>
        <ImCross />
      </div>
      {title && (
        <div className="title">
          <h2>{title}</h2>
        </div>
      )}
      <div className="content">{loading ? <>...</> : children}</div>
      {buttons.length > 0 && (
        <ButtonContainer center={center}>
          {buttons.map((b, i) => {
            const key = `button-${i}`;
            return (
              <Button
                key={key}
                {...b}
                onClick={() => {
                  if (onSubmit && b.type === 'submit') {
                    onSubmit();
                  }
                  if (b.onClick) {
                    b.onClick();
                  }
                }}
              />
            );
          })}
        </ButtonContainer>
      )}
    </StyledPopup>
  );
};

export default Popup;
