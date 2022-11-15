import React, { CSSProperties } from 'react';
import { InputContainer, InputWrapper, StyledInput } from './TextArea.style';

export interface TextAreaProps {
  name: string;
  value: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  width?: string;
  height?: number;
  isError?: boolean;
  isSuccess?: boolean;
  autoComplete?: string;
  style?: CSSProperties;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  onChange,
  disabled,
  className,
  placeholder,
  width,
  height,
  isError,
  isSuccess,
  autoComplete,
  style,
  required,
}) => {
  const [thisInput, setThisInput] = React.useState(
    document.getElementById(name),
  );
  const [thisIsAutocompleted, setThisInputIsAutocompleted] =
    React.useState(false);

  const [isActive, setIsActive] = React.useState(false);

  const setTimoutCallback = React.useCallback(() => {
    setTimeout(() => {
      setThisInput(document.getElementById(name));

      try {
        if (
          thisInput &&
          typeof thisInput.matches === 'function' &&
          thisInput.matches(':-internal-autofill-selected')
        ) {
          setThisInputIsAutocompleted(true);
        }
      } catch (e) {}
    }, 200);
  }, [thisInput, name]);

  React.useEffect(() => {
    setTimoutCallback();
  }, [setTimoutCallback]);

  React.useEffect(() => {
    setThisInputIsAutocompleted(false);
  }, [value]);

  return (
    <InputContainer className={className} width={width}>
      <InputWrapper width={width}>
        <StyledInput
          name={name}
          id={name}
          style={style}
          value={value}
          isActive={isActive}
          onFocusCapture={() => setIsActive(true)}
          onBlurCapture={() => setIsActive(false)}
          disabled={disabled}
          onChange={onChange}
          width={width}
          height={height}
          autoComplete={autoComplete || 'none'}
          placeholder={placeholder}
          isSuccess={isSuccess}
          isError={isError}
          isAutocompleted={thisIsAutocompleted}
          required={required}
        />
      </InputWrapper>
    </InputContainer>
  );
};

export default TextArea;
