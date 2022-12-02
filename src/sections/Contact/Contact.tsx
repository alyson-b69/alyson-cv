import React, { FormEvent } from 'react';
import { StyledSection, StyledContainer } from '../sections.style';
import { MdContactMail } from 'react-icons/md';
import Button from '../../components/Button';
import axios, { AxiosError } from 'axios';
import Input from '../../components/Input/Input';
import { FormRow, StyledEffect, StyledForm } from './Contact.style';
import TextArea from '../../components/TextArea';

const Contact: React.FC = () => {
  const [state, setState] = React.useState({
    name: '',
    from: '',
    subject: '',
    message: '',
  });

  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const apiURL =
      process.env.CONTACT_API ||
      'https://alysonb-contact.herokuapp.com/send-email';

    axios
      .post(apiURL, { ...state })
      .then((_) => {
        setSuccess(true);
        setState({
          name: '',
          from: '',
          subject: '',
          message: '',
        });
      })
      .catch((err: AxiosError) => {
        setError(err.name);
      });
  };

  return (
    <StyledSection id={'contact'}>
      <StyledContainer>
        <h2>
          <MdContactMail fontSize="1.5em" />
          Prenons Contact
        </h2>
        <h3>Besoin de plus d'infos ?</h3>
        <StyledEffect>
          <StyledForm onSubmit={handleSubmit}>
            <FormRow>
              Nom
              <Input
                name={'name'}
                placeholder={'Votre nom'}
                value={state.name}
                type={'text'}
                onChange={handleInputChange}
                required
                width={'100%'}
              />
            </FormRow>
            <FormRow>
              Mail
              <Input
                name={'from'}
                type={'email'}
                placeholder={'Votre email'}
                value={state.from}
                onChange={handleInputChange}
                required
                width={'100%'}
              />
            </FormRow>
            <FormRow>
              Objet
              <Input
                name={'subject'}
                type={'text'}
                placeholder={`L'objet de votre message`}
                value={state.subject}
                onChange={handleInputChange}
                required
                width={'100%'}
              />
            </FormRow>
            <FormRow>
              Message
              <TextArea
                name={'message'}
                placeholder={`Votre message`}
                value={state.message}
                onChange={handleInputChange}
                required
                width={'100%'}
              />
            </FormRow>
            <Button type={'submit'}>Envoyer</Button>
          </StyledForm>
        </StyledEffect>
        {success ? <div>Votre message a été envoyé</div> : null}
        {error ? error : null}
      </StyledContainer>
    </StyledSection>
  );
};

export default Contact;
