import { useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {
  ComponentWrapper,
  FormWrapper,
  ButtonWrapper,
  PurpleContent,
} from './styles';
import { Button, Title, Textfield } from 'ui';

const FORM_DATA = [
  {
    title: 'Hello, I am ',
    textfield: {
      name: 'name',
      placeholder: 'enter the name',
    },
  },
  {
    title: ' from ',
    textfield: {
      name: 'company',
      // eslint-disable-next-line prettier/prettier, quotes
      placeholder: "company's name",
    },
    postfix: '. ',
  },
  {
    title: 'I would like to ',
    textfield: {
      name: 'offer',
      placeholder: 'describe the offer',
    },
    postfix: '. ',
  },
  {
    title: 'Contact me by ',
    textfield: {
      name: 'contacts',
      placeholder: 'email, telegram, social media',
    },
    postfix: '.',
  },
];

interface OfferForm {
  name?: string;
  company?: string;
  offer?: string;
  contacts?: string;
}

export const EmailForm = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, setValue } = useForm();

  const sendEmailOffer = (values: OfferForm) => {
    const { name, company, offer, contacts } = values;

    if (!name || !company || !offer || !contacts) {
      return;
    }

    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        { ...values },
        process.env.REACT_APP_ACCOUNT_ID
      )
      .finally(() => setLoading(false));
  };

  return (
    <ComponentWrapper name='form'>
      <Title fontSize={90} light={true}>
        Let's create <PurpleContent>digital products</PurpleContent> together!
      </Title>
      <FormWrapper>
        {FORM_DATA.map(({ title, textfield, postfix }) => (
          <span key={Math.random()}>
            <Title light={true} fontSize={50}>
              {title}
            </Title>
            <Textfield
              placeholder={textfield.placeholder}
              onInput={(e: FormEvent<HTMLInputElement>) =>
                setValue(textfield.name, e.currentTarget.textContent)
              }
            />
            {postfix && postfix}
          </span>
        ))}
      </FormWrapper>
      <ButtonWrapper>
        <Button
          size='large'
          variant='secondary'
          loading={loading}
          onClick={handleSubmit((data) => sendEmailOffer(data))}>
          Send!
        </Button>
      </ButtonWrapper>
    </ComponentWrapper>
  );
};
