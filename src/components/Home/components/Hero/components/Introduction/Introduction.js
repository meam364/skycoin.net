import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import Heading from 'components/redesign/Heading';
import Grid from 'components/Grid';
import GridColumn from 'components/GridColumn';

const Wrap = styled.div`
  margin-top: ${rem(220)};
`;


const Introduction = () => (
  <Wrap>
    <Grid>
      <GridColumn width={6}>
        <Heading as="h1" fontSize={52} gradient underline>
          <FormattedMessage id="home.hero.heading" />
        </Heading>
      </GridColumn>
    </Grid>
    <Grid>
      <GridColumn width={8}>
        <Heading fontSize={24}>
          <FormattedMessage id="home.hero.lead" />
        </Heading>
      </GridColumn>
    </Grid>
  </Wrap>
);

export default Introduction;
