import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import { SPACE } from '@skycoin/config';
import Container from '@skycoin/container';
import Heading from '@skycoin/heading';
import Text from '@skycoin/text';
import Table, { TableWrapper } from 'components/Table';

import { downloads } from '../../downloads';
import * as icons from './icons';

const Icon = styled.img`
  max-width: ${rem(30)};
  display: block;
  margin: 0 auto;
  margin-bottom: ${rem(SPACE[2])};
`;

export default () => (
  <TableWrapper>
    <Table>
      <tbody>
        {/* TODO: refactor or move into another component */}
        {downloads.map(({ platform, icon, builds }, platformIndex) =>
          builds.map((build, buildIndex) =>
            build.architectures.map((architecture, architectureIndex) => (
              <tr key={`${platformIndex}-${buildIndex}-${architectureIndex}`}>
                {buildIndex === 0 &&
                  <th rowSpan={builds.reduce((a, { architectures: b }) => a + b.length, 0)}>
                    <Icon src={icons[icon]} />
                    <FormattedMessage id={platform} />
                  </th>
                }

                {architectureIndex === 0 &&
                  <td rowSpan={build.architectures.length}>
                    <FormattedMessage id={build.name} />
                  </td>
                }

                <td>{architecture.name}</td>

                <td>
                  <a href={architecture.download}>
                    <FormattedMessage id="downloads.wallet.download" />
                    &nbsp;
                    ({architecture.filetype})
                  </a>
                </td>

                <td>
                  <a href={architecture.torrent}>
                    <FormattedMessage id="downloads.wallet.torrent" />
                  </a>
                </td>

                <td>
                  <Text as="span" color="gray.7" heavy>
                    {architecture.version}
                  </Text>
                </td>

                <td>
                  <Text as="span" color="gray.7" heavy>
                    {architecture.filesize}
                  </Text>
                </td>
              </tr>
            )),
          ),
        )}
      </tbody>
    </Table>
  </TableWrapper>
);
