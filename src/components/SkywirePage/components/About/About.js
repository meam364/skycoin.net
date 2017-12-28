import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import Heading from 'components/redesign/Heading';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridColumn from 'components/GridColumn';
import { COLORS_NEW } from 'config';
import media from 'utils/media';

import bg from './images/bg.png';
import circ from './images/circ.svg';

const Wrap = styled.div`
  padding: 80px 0 50px;
  background: url(${bg}) no-repeat 50% 50%;
  background-size: contain;

  ${media.md.css`
    padding: 192px 0 75px;
  `}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 60px;
  line-height: 70px;
`;

const Circles = styled.div`
  width: 411px;
  height: 527px;
  background: url(${circ}) no-repeat;
  background-size: contain;
  margin: 0 auto;

  ${media.md.css`
    height: 754px;
    width: 588px;
  `}

  ${media.lg.css`
    float: right;
    margin-right: 20px;
  `}
`;

const ListTitle = styled.div`
  margin-top: 60px;
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
  margin-top 60px;

  ${media.md.css`
    padding-left: 40px;
  `}
`;

const Item = styled.div`
  padding-left: 60px;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
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

const Icon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  background: linear-gradient(135deg, #0072FF 0%, #00C3FF 100%);
  left: 0;
  top: -6px;
  color: ${COLORS_NEW.white};
  font-size: 16px;
  line-height: 40px;
  text-align: center;
`;

const About = () => (
  <Wrap>
    <Container>
      <Grid>
        <GridColumn offset={1} width={8}>
          <StyledHeading gradient fontSize={40}>
            <FormattedMessage id="skywirePage.about.title" />
          </StyledHeading>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn width={5}>
          <Circles />
        </GridColumn>
        <GridColumn width={7}>
          <ListTitle>
            <FormattedHTMLMessage id="skywirePage.about.listTitle" />
          </ListTitle>
          <ListDescription>
            <FormattedMessage id="skywirePage.about.listDescription" />
          </ListDescription>
          <List>
            <Item>
              <Icon>1</Icon>
              <ListName><FormattedMessage id="skywirePage.about.list.1.name" /></ListName>
              <ListText><FormattedMessage id="skywirePage.about.list.1.text" /></ListText>
            </Item>
            <Item>
              <Icon>2</Icon>
              <ListName><FormattedMessage id="skywirePage.about.list.2.name" /></ListName>
              <ListText><FormattedMessage id="skywirePage.about.list.2.text" /></ListText>
            </Item>
            <Item>
              <Icon>3</Icon>
              <ListName><FormattedMessage id="skywirePage.about.list.3.name" /></ListName>
              <ListText><FormattedMessage id="skywirePage.about.list.3.text" /></ListText>
            </Item>
          </List>
        </GridColumn>
      </Grid>
    </Container>
  </Wrap>
);

export default About;
