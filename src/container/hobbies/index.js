import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getListImages } from '../../data/listImages';
import { Container } from './styled';

const listImages = getListImages();

const Hobby = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h2" align="center">
        {t('hobbies.title')}
      </Typography>
      <br />
      <br />
      <Grid container spacing={3}>
        {listImages.map(i => (
          <Grid key={i.image} item lg={6} md={6} sm={6} xs={12}>
            <img alt={i.image} src={i.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Hobby;
