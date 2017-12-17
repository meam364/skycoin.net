import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import Heading from 'components/redesign/Heading';
import { Box } from 'grid-styled';

const Wrap = styled.div`
  margin-top: ${rem(220)};
`;


const Introduction = () => (
  <Wrap>
    <Box width={[1, 1, 1 / 2]}>
      <Heading as="h1" fontSize={52} gradient underline>
        <FormattedMessage id="home.hero.heading" />
      </Heading>
    </Box>
    <Box width={[1, 1, 2 / 3 ]}>
      <Heading fontSize={24}>
        <FormattedMessage id="home.hero.lead" />
      </Heading>
    </Box>
  </Wrap>
);

export default Introduction;
