import { IconButton, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  min-height: 99;
  & img {
    height: 70px;
  }
`;

export const DivListMobile = styled('div')`
  text-align: center;
`;
export const IconButtonMenu = styled(IconButton)`
  justify-content: right;
`;

export const DivHeader = styled('div')`
  ${({ theme }) => ` 
    display: flex;
    justify-content: left;
    & a {
      margin-right: ${theme.spacing(3)}px;
    }
  `}
`;
