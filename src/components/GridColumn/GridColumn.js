import styled from 'styled-components';
import media from 'utils/media';
import { rem } from 'polished';

export default styled.div`
  width: 100%;
  padding: 0 ${rem(10)};
  box-sizing: border-box;

  ${media.lg.css`
    width: ${props => `${props.width / (12 / 100)}%`};
    margin-left: ${props => `${props.offset / (12 / 100)}%`};
  `}
`;
