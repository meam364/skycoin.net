import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import Buy from 'components/Buy';
import Heading from 'components/Heading';
import Text from 'components/Text';

export default () => (
  <div>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={7}>
      <FormattedMessage id="home.hero.heading" values={{ break: <br /> }} />
    </Heading>

    <Buy color="violet.5" bg="white" mr={[2, 5]} big fontSize={[1, 3]}>
      <FormattedMessage id="home.hero.buy" />
    </Buy>

    <Button to="downloads" color="white" big outlined fontSize={[1, 3]}>
      <FormattedMessage id="home.hero.wallet.get" />
    </Button>

    <Text heavy color="white" fontSize={[1, 3]} mt={7}>
      <FormattedMessage id="home.hero.wallet.blurb" values={{ break: <br /> }} />
    </Text>
  </div>
);
