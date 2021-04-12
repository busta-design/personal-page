import { IconButton, Grid, Typography } from '@material-ui/core';
import { Container } from './styled';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import CircularImage from '../../components/circularImage';

const About = () => {
  const { t } = useTranslation();
  const onClickIconButton = url => window.open(url, '_blank');

  return (
    <Container>
      <Grid container>
        <Grid item lg={4} md={4} sm={5} xs={12}>
          <CircularImage image="/images/profile.jpg" size="300px" />
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={12} />
        <Grid item lg={7} md={7} sm={6} xs={12}>
          <Typography variant="h2" align="center">
            {t('about.title')}
          </Typography>
          <br />
          <Typography variant="body1" align="center">
            {t('about.description')}
          </Typography>
          <br />
          <Grid container justify="space-evenly">
            <IconButton
              color="primary"
              onClick={() =>
                onClickIconButton('https://www.linkedin.com/in/andresbusta')
              }
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={() =>
                onClickIconButton(
                  'https://www.instagram.com/invites/contact/?i=19w7td9shtkqi&utm_content=pib7ly'
                )
              }
            >
              <Instagram />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() =>
                onClickIconButton('https://github.com/busta-design')
              }
            >
              <GitHub />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
