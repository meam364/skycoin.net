import React from 'react';
import styled from 'styled-components';

import { COLORS, SPACE } from 'config';
import { rem } from 'polished';

import Link from 'components/Link';
import Text from 'components/Text';
import Table, { TableWrapper } from 'components/Table';

import content from './content';


const StyledTable = Table.extend`
  th {
    text-align: left;
  }

  thead {
    border-bottom: 3px solid ${COLORS.gray[1]};
  }

  th, td {
    padding: 0 ${rem(SPACE[4])};
    white-space: nowrap;

    &:nth-of-type(2) {
      border-left: 1px solid ${COLORS.gray[1]};
      border-right: 1px solid ${COLORS.gray[1]};
    }

    &:last-of-type {
      width: 100%;
    }
  }

  tr {
    &:first-of-type {
      th {
        border-top: none;
      }
    }
  }
`;

const StyledText = Text.extend`
  margin-bottom: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TableContent = () => (
  <TableWrapper>
    <StyledTable>
      <thead>
        <tr>
          {content.header.map((item, key) => (
            <th key={key}><StyledText heavy>{item}</StyledText></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.list.map((item, key) => (
          <tr key={key}>
            <td><StyledText>{item.component}</StyledText></td>
            <td>{item.repo && <StyledLink href={item.repo}>
              <StyledText>Repo</StyledText></StyledLink>}
            </td>
            <td><StyledText>{item.replaces}</StyledText></td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

export default TableContent;
