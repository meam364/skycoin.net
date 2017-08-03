import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Table, { TableWrapper } from 'components/Table';
import { COLORS, SPACE, BREAKPOINTS } from 'config';

import content from './content';

const Wrapper = styled.div`
  border-top: 2px solid ${COLORS.gray[1]};
`;

const StyledTable = Table.extend`
  @media (max-width: ${BREAKPOINTS.sm}rem) {
    min-width: 0;
    border: 0;

    tr {
      display: block;
      padding: ${rem(SPACE[4])} 0;
      border-top: 1px solid ${COLORS.gray[1]};
    }

    td {
      border: 0;
      display: block;
      height: auto;
    }
  }
`;

export default () => (
  <Wrapper>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]} id="whitepapers">
          <FormattedMessage id="whitepapers.downloads.heading" />
        </Heading>
      </Box>

      <TableWrapper>
        <StyledTable>
          <tbody>
            {content.map(({ name, download, filetype, filesize }, i) => (
              <tr key={i}>
                <td>{name}</td>

                <td>
                  <a href={download}>
                    <FormattedMessage id="whitepapers.downloads.download" />
                    &nbsp;
                    ({filetype})
                  </a>
                </td>

                <td>
                  <Text as="span" color="gray.7" heavy>
                    {filesize}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </Container>
  </Wrapper>
);
