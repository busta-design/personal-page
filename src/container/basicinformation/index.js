import { Typography } from '@material-ui/core';
import React from 'react';
import ArrowAnimated from '../../components/arrowAnimated';
import { useTranslation } from 'react-i18next';
import { useHover } from '../../hooks/useHover';
import ContainerVerticalAlign from '../../components/verticalCenter';
import { ContainerArrows } from './styled';
import { RouteNavigation } from '../../constants/routeNavigation';

const BasicInformation = () => {
  const { t } = useTranslation();
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <ContainerVerticalAlign height="100vh" centerHorizontal>
        <div ref={hoverRef}>
          {isHovered ? (
            <img alt="Andy" src="/images/2.png" heigth="150px" width="150px" />
          ) : (
            <img alt="Andy" src="/images/1.png" heigth="150px" width="150px" />
          )}
        </div>
        <Typography variant="h2">{t('home.title')}</Typography>
        <Typography variant="h6">{t('home.subTitle')}</Typography>
      </ContainerVerticalAlign>
      <ContainerArrows>
        <ArrowAnimated delayAnimation="0" href={RouteNavigation.About} />
        <br />
        <ArrowAnimated delayAnimation=".15s" href={RouteNavigation.About} />
        <br />
        <ArrowAnimated delayAnimation=".3s" href={RouteNavigation.About} />
        <br />
      </ContainerArrows>
    </div>
  );
};

export default BasicInformation;
