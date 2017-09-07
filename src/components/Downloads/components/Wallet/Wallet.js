import React from 'react';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import ApplicationTable from 'components/ApplicationTable';

import { downloads, version } from './downloads';

const Wallet = () => (
  <div>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
          <FormattedMessage id="downloads.wallet.heading" />
        </Heading>

        <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
          <FormattedMessage id="downloads.wallet.lead" />
        </Text>

        <Text fontSize={[3, 3, 4]} color="gray.9" heavy>
          <FormattedMessage id="downloads.wallet.build" values={{ version }} />
        </Text>
      </Box>
      <ApplicationTable list={downloads} />
    </Container>
  </div>
);

export default Wallet;
