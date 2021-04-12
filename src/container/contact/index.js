import { Typography, TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Container } from './styled';
import { useState } from 'react';
import { db } from '../../firebase/config/index';
import { Link, Redirect } from 'react-router-dom';
import { RouteNavigation } from '../../constants/routeNavigation';
import ReCaptcha from 'react-google-recaptcha';

const reCAPTCHA_KEY = process.env.REACT_APP_CAPTCHA_KEY_SITE;

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Contact = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [disabledButton, setDisabledButton] = useState(true);

  const [redirect, setRedirect] = useState(false);

  const handleChange = input => event => {
    switch (input) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      default:
        alert('Error');
    }
  };

  const handleDisabledButton = value => {
    if (value) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const validateData = () => {
    if (!name || !email || !message) {
      return true;
    }

    return false;
  };

  const handleClick = () => {
    if (validateData()) {
      return;
    }
    db.collection('contacts')
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
      })
      .then(() => {
        setRedirect(true);
      })
      .catch(e => {
        alert(e.message);
      });
    <Link to={RouteNavigation.Thanks} />;
  };

  return (
    <Container>
      <Typography variant="h2" align="center">
        {t('contact.title')}
      </Typography>
      <br />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          value={name}
          label={t('contact.form.name')}
          variant="filled"
          onChange={handleChange('name')}
        />
        <TextField
          required
          type="email"
          value={email}
          label={t('contact.form.email')}
          variant="filled"
          onChange={handleChange('email')}
        />
        <TextField
          required
          value={message}
          label={t('contact.form.message')}
          multiline
          rows={6}
          variant="filled"
          onChange={handleChange('message')}
        />
        <ReCaptcha sitekey={reCAPTCHA_KEY} onChange={handleDisabledButton} />
        {!disabledButton && (
          <Button
            display="none"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Send />}
            onClick={handleClick}
          >
            {t('contact.form.send')}
            {redirect && <Redirect to={RouteNavigation.Thanks} />}
          </Button>
        )}
        <br />
      </form>
    </Container>
  );
};

export default Contact;
