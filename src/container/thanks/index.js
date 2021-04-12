import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContainerVerticalAlign from '../../components/verticalCenter';
import { RouteNavigation } from '../../constants/routeNavigation';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  const { t } = useTranslation();

  return (
    <ContainerVerticalAlign height="100vh" centerHorizontal>
      <div>
        <img alt="Andy" src="/images/2.png" heigth="150px" width="150px" />
      </div>
      <Typography variant="h2">{t('thanks.thankyou')}</Typography>
      <Typography variant="h6">{t('thanks.goodbay')}</Typography>
      <br />
      <Link to={RouteNavigation.Home}>
        <Button variant="contained" color="primary">
          {t('thanks.goback')}
        </Button>
      </Link>
    </ContainerVerticalAlign>
  );
};

export default ThankYou;
