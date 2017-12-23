import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import Grid from 'components/Grid';
import GridColumn from 'components/GridColumn';
import Container from 'components/Container';
import Heading from 'components/redesign/Heading';
import media from 'utils/media';

import { COLORS_NEW } from 'config';

import bg from './images/bg.png';
import columns from './images/columns.svg';

const Wrap = styled.div`
  background: url(${bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: ${rem(82)} 0 ${rem(40)};

  ${media.md.css`
    padding: ${rem(182)} 0 ${rem(140)};
  `};
`;

const StyledHeading = styled(Heading)`
  margin-botton: ${rem(20)};

  ${media.md.css`
    margin-bottom: ${rem(131)};
  `};
`;

const Columns = styled.div`
  background: url(${columns}) no-repeat;
  width: 100%;
  height: 435px;
  max-width: 339px;
  margin: 36px auto 0;

  ${media.md.css`
    margin-top: 136px;
  `}
`;

const ListTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 42px;
  color: ${COLORS_NEW.white};
  margin-bottom: 20px;

  span > span {
    color: ${COLORS_NEW.gold};
  }

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: ${COLORS_NEW.white};
    margin-bottom: 30px;
  }
`;

const ListDescription = styled.div`
  font-size: 20px;
  font-weight: 700px;
  color: ${COLORS_NEW.white};
  opacity: .3;
`;

const List = styled.div`
  margin-top: 60px;
`;

const ListName = styled.div`
  color: ${COLORS_NEW.white};
  font-size: 16px;
  line-height: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ListText = styled.div`
  color: ${COLORS_NEW.white};
  opacity: .3;
  font-size: 16px;
  line-height: 28px;
`;

const ListItem = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const About = () => (
  <Wrap>
    <Container>
      <Grid>
        <GridColumn offset={1} width={8}>
          <StyledHeading
            fontSize={40}
            gradient
          >
            <FormattedMessage id="skycoinPage.about.title" />
          </StyledHeading>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn width={5}>
          <Columns />
        </GridColumn>
        <GridColumn width={7}>
          <ListTitle>
            <FormattedHTMLMessage id="skycoinPage.about.listTitle" />
          </ListTitle>
          <ListDescription>
            <FormattedMessage id="skycoinPage.about.listDescription" />
          </ListDescription>
          <List>
            <ListItem>
              <ListName><FormattedMessage id="skycoinPage.about.obeliskTitle" /></ListName>
              <ListText><FormattedMessage id="skycoinPage.about.obeliskText" /></ListText>
            </ListItem>
            <ListItem>
              <ListName><FormattedMessage id="skycoinPage.about.skywireTitle" /></ListName>
              <ListText><FormattedMessage id="skycoinPage.about.skywireText" /></ListText>
            </ListItem>
          </List>
        </GridColumn>
      </Grid>
    </Container>
  </Wrap>
);

export default About;
