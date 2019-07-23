import styled from 'styled-components';
import { rem } from 'polished';

import theme from '../../styles/theme';

const { colours, spacingUnit, mediaQuery, fontSize } = theme;

const NavButton = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: ${rem(fontSize.small)};
  height: ${rem(spacingUnit * 8)};
  justify-content: flex-start;
  letter-spacing: ${rem(0.4)};
  min-height: ${rem(spacingUnit * 8)};
  padding: 0 ${rem(spacingUnit * 2)};

  ${mediaQuery.min('small')`
    padding: 0 ${rem(spacingUnit * 4)};
  `}
`;

export const BackButton = styled(NavButton)`
  color: ${props => props.theme.colours.darkBlue};
  width: 100%;

  .icon {
    display: flex;
    justify-content: flex-end;
    margin-right: ${rem(spacingUnit / 2)};
    transform: rotate(180deg);
  }

  ${mediaQuery.min('medium')`
    display: none;
  `}
`;

export const CloseButton = styled(NavButton)`
  color: ${colours.textGrey};

  .icon {
    margin-right: ${rem(spacingUnit * 1.5)};
  }
`;

export const SearchButton = styled(NavButton)`
  color: ${colours.textGrey};
  transition: opacity ease 0.4s;

  .icon {
    margin-left: ${rem(spacingUnit * 1.5)};
  }

  ${mediaQuery.min('medium')`
    color: ${props => props.theme.colours.white};
    margin-right: -${rem(spacingUnit * 4)};
  `}

  &.is-disabled {
    opacity: 0;
  }
`;

export default BackButton;
