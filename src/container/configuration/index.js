import { Language } from '../../constants/languages';
import { Container, FabStyled } from './styled';
import { Brightness7, Brightness4 } from '@material-ui/icons';

const Configuration = ({ isDarkTheme, onChangeLanguage, onChangeTheme }) => {
  return (
    <Container>
      <FabStyled
        size="medium"
        color="primary"
        onClick={() => onChangeLanguage(Language.EN)}
      >
        En
      </FabStyled>
      <FabStyled
        size="medium"
        color="secondary"
        onClick={() => onChangeLanguage(Language.ES)}
      >
        Es
      </FabStyled>

      {isDarkTheme && (
        <FabStyled size="medium" onClick={() => onChangeTheme(false)}>
          <Brightness4 />
        </FabStyled>
      )}
      {!isDarkTheme && (
        <FabStyled size="medium" onClick={() => onChangeTheme(true)}>
          <Brightness7 />
        </FabStyled>
      )}
    </Container>
  );
};

export default Configuration;
