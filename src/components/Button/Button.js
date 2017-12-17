import styled, { css } from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import { rem, darken, rgba } from 'polished';
import get from 'lodash/get';

import Link from 'components/Link';
import media from 'utils/media';
import { COLORS, FONT_FAMILIES, SPACE, BORDER_RADIUS } from 'config';

export default styled(Link)`
  display: inline-block;
  border: 1px solid transparent;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  text-align: center;

  border-radius: ${props => (props.pill ? BORDER_RADIUS.pill : BORDER_RADIUS.base)};
  font-family: ${FONT_FAMILIES.sans};
  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: bold;
  transition: 150ms ease-in-out;
  ${props => props.gradient && `
    background: linear-gradient(107.35deg, ${props.gradientFirst} 0%, ${props.gradientSecond} 100%);
    box-shadow: 0 8px 20px -4px ${rgba(props.gradientSecond, 0.2)};
    border: none;

    &:hover {
      box-shadow: 0 0 0 0 ${rgba(props.gradientSecond, 0)};
    }
  `};


  ${fontSize}
  ${color}
  ${space}
  ${width}

  &:hover {
    background-color: ${props =>
      props.bg && darken(0.05, get(COLORS, props.bg) || props.bg)
    };
  }

  &:active {
    background-color: ${props =>
      props.bg && darken(0.1, get(COLORS, props.bg) || props.bg)
    };
  }

  ${props => props.outlined && css`
    border: 1px solid currentColor;

    &, &:hover, &:active {
      box-shadow: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.big && media.sm.css`
    padding: ${rem(SPACE[4])} ${rem(SPACE[7])};
  `}
`;
