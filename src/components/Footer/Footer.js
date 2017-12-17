import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { COLORS_NEW } from 'config';

import Container from 'components/Container';
import Text from 'components/Text';
import Logo from 'components/Logo';

import Languages from './components/Languages';
import List from './components/List';
import content from './content';

const Footer = styled.div`
  background: ${COLORS_NEW.black};
`;

export default () => (
  <Footer>
    <Container>
      <Flex wrap py={[4, 8]} mx={-4}>
        <Box width={[1 / 2, 1 / 4]} my={2} px={4}>
          <Logo white />

          <Text as="div" fontSize={[0, 0, 1]} color={COLORS_NEW.white} heavy>
            <Languages />
          </Text>
        </Box>

        {content.map(({ heading, links }, sectionIndex) => (
          <Box width={[1 / 2, 1 / 4]} my={2} px={4} key={sectionIndex}>
            <List heading={heading} links={links} />
          </Box>
        ))}
      </Flex>
    </Container>
  </Footer>
);
