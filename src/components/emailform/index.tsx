import { useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import {
  ComponentWrapper,
  FormWrapper,
  ButtonWrapper,
  PurpleContent,
} from './styles';
import { FORM_DATA_EN, FORM_DATA_RU } from 'data';
import { Button, Title, Textfield } from 'ui';
import { LazyShow } from 'components';

interface OfferForm {
  name?: string;
  company?: string;
  offer?: string;
  contacts?: string;
}

export const EmailForm = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, setValue } = useForm();
  const { t, i18n } = useTranslation();
  const FORM_DATA = i18n.language === 'en' ? FORM_DATA_EN : FORM_DATA_RU;

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
      <LazyShow direction='left'>
        <Title fontSize={90} light={true}>
          {t('letsCreate')}{' '}
          <PurpleContent>{t('digitalProdicts')}</PurpleContent> {t('together')}
        </Title>
      </LazyShow>
      <LazyShow direction='left'>
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
      </LazyShow>
      <LazyShow direction='right'>
        <ButtonWrapper>
          <Button
            size='large'
            variant='quaternary'
            loading={loading}
            onClick={handleSubmit((data) => sendEmailOffer(data))}>
            {t('send')}
          </Button>
        </ButtonWrapper>
      </LazyShow>
    </ComponentWrapper>
  );
};
