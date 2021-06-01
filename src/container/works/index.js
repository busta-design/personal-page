import {
  Link,
  Step,
  StepButton,
  StepContent,
  Stepper,
  Typography,
} from '@material-ui/core';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Container } from './styled';
import '../../animation/pulse.css';
import { useState } from 'react';
import WorkCardWork from '../../components/workCardWork';
import WorkCardPortf from '../../components/workCardPortf';

const Works = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const handleStep = step => () => {
    if (activeStep === step) setActiveStep(-1);
    else setActiveStep(step);
  };

  const getCompanies = () => [
    t('workExp.company.n1.dateI'),
    t('workExp.company.n2.dateI'),
    t('workExp.portfolio.n3.name'),
    t('workExp.portfolio.n4.name'),
    t('workExp.portfolio.n5.name'),
    // t('workExp.portfolio.n6.name'),
  ];

  const getType = index => {
    if (t(`workExp.company.n${index}.type`) === 'w') {
      return true;
    } else if (t(`workExp.portfolio.n${index}.type`) === 'p') {
      return false;
    }
  };

  const getCompanyInfo = step => {
    return {
      name: t(`workExp.company.n${step}.name`),
      post: t(`workExp.company.n${step}.post`),
      img: t(`workExp.company.n${step}.img`),
      dateI: t(`workExp.company.n${step}.dateI`),
      dateF: t(`workExp.company.n${step}.dateF`),
      description: t(`workExp.company.n${step}.description`),
    };
  };
  //
  const getPortfolioInfo = step => {
    return {
      name: t(`workExp.portfolio.n${step}.name`),
      linkPage: t(`workExp.portfolio.n${step}.linkPage`),
      img: t(`workExp.portfolio.n${step}.img`),
      description: t(`workExp.portfolio.n${step}.description`),
      linkRepo: t(`workExp.portfolio.n${step}.linkRepo`),
    };
  };

  const getStepContent = step => {
    if (getType(step + 1)) {
      const companyInfo = getCompanyInfo(step + 1);
      return (
        <WorkCardWork
          img={companyInfo.img}
          company={companyInfo.name}
          post={companyInfo.post}
          initialDate={companyInfo.dateI}
          finalDate={companyInfo.dateF}
          description={companyInfo.description}
        />
      );
    } else {
      const portfolioInfo = getPortfolioInfo(step + 1);
      return (
        <WorkCardPortf
          img={portfolioInfo.img}
          nameProject={portfolioInfo.name}
          description={portfolioInfo.description}
          linkRepo={portfolioInfo.linkRepo}
          linkPage={portfolioInfo.linkPage}
        />
      );
    }
  };

  const urlCV = `/documents/${i18next.language}/CV.pdf`;

  return (
    <Container>
      <Typography variant="h2" align="center">
        {t('workExp.title')}
      </Typography>
      <Link
        href={urlCV}
        target="_blank"
        style={{ animation: 'jvcAnimationPulse 1s infinite' }}
      >
        {t('workExp.downloadCV')}
      </Link>

      <br />
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {getCompanies().map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)} {...buttonProps}>
                {label}
              </StepButton>
              <StepContent>{getStepContent(index)}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Container>
  );
};

export default Works;
