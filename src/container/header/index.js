import {
  AppBar,
  Drawer,
  Link,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteNavigation } from '../../constants/routeNavigation';
import {
  DivHeader,
  DivListMobile,
  IconButtonMenu,
  ToolbarStyled,
} from './styled';
import { useState } from 'react';
import ShowOnScroll from '../../components/showOnScroll';

const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const toggleDrawer = open => {
    return event => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpenMenuMobile(open);
    };
  };

  const renderLinks = () => (
    <Fragment>
      <Link
        variant="body2"
        underline="none"
        color="textPrimary"
        href={RouteNavigation.About}
      >
        <h4>{t('header.about')}</h4>
      </Link>
      <Link
        variant="body2"
        underline="none"
        color="textPrimary"
        href={RouteNavigation.WorkExperience}
      >
        <h4>{t('header.work')}</h4>
      </Link>
      <Link
        variant="body2"
        underline="none"
        color="textPrimary"
        href={RouteNavigation.Hobbies}
      >
        <h4>{t('header.hobby')}</h4>
      </Link>
      <Link
        variant="body2"
        underline="none"
        color="textPrimary"
        href={RouteNavigation.Contact}
      >
        <h4>{t('header.contact')}</h4>
      </Link>
    </Fragment>
  );

  const list = () => (
    <DivListMobile
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {renderLinks()}
    </DivListMobile>
  );

  return (
    <div>
      <ShowOnScroll>
        <AppBar position="fixed">
          <ToolbarStyled>
            <img src="images/1.png" alt="logo" />
            {isMobile ? (
              <div>
                <IconButtonMenu
                  edge="start"
                  aria-label="menu"
                  onClick={() => setOpenMenuMobile(true)}
                >
                  <Menu />
                </IconButtonMenu>
              </div>
            ) : (
              <DivHeader>{renderLinks()}</DivHeader>
            )}
          </ToolbarStyled>
          <Drawer
            anchor="bottom"
            open={openMenuMobile}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </AppBar>
      </ShowOnScroll>
    </div>
  );
};

export default Header;
