import React from 'react';
import styled from 'styled-components';

import Link from 'components/Link';
import Text from 'components/Text';
import Table, { TableWrapper } from 'components/Table';

import content from './content';


const StyledTable = Table.extend`
  th {
    text-align: left;
    width: 33.33%;
  }

  td {
    width: 33.33%;
  }

  tr {
    &:first-of-type {
      th {
        border: none;
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
              <StyledText>Github</StyledText></StyledLink>}
            </td>
            <td><StyledText>{item.replaces}</StyledText></td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

export default TableContent;
