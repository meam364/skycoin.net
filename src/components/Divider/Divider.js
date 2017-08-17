import styled from 'styled-components';
import { rem } from 'polished';

import { media } from '@skycoin/utils';
import { COLORS, SPACE } from '@skycoin/config';

// TODO: move to @skycoin/divider
export default styled.div`
  width: ${rem(150)};
  height: 4px;
  background-color: ${COLORS.gray[1]};

  margin: ${rem(SPACE[5])} 0;

  ${media.md.css`
    margin: ${rem(SPACE[9])} 0;
  `}
`;
