import { FC } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  NavbarWrapper,
  ButtonWrapper,
  MenuWrapper,
  MenuLanguage,
} from './styles';
import { Title, Button, Select } from 'ui';

export const Navbar: FC = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <NavbarWrapper>
      <Link to='hero' spy={true} smooth={true} offset={-100} duration={1000}>
        <Title>Yan Levin</Title>
      </Link>
      <MenuWrapper>
        <MenuLanguage>
          <Select
            options={['en', 'ru']}
            defaultSelected={i18n.language}
            onChange={onChangeLang}
          />
        </MenuLanguage>
        <ButtonWrapper>
          <Link
            to='form'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}>
            <Button>{t('emailMe')}</Button>
          </Link>
        </ButtonWrapper>
      </MenuWrapper>
    </NavbarWrapper>
  );
};
