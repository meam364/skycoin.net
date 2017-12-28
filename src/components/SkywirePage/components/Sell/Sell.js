import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridColumn from 'components/GridColumn';
import IconCheck from 'components/Icons/check.svg';
import { COLORS_NEW } from 'config';
import Button from 'components/Button';
import media from 'utils/media';
import Form from './components/Form';
import skywire from './images/skywire.png';

const Wrap = styled.div`
  background: ${COLORS_NEW.white};
  padding: 54px 0 140px;
`;

const Title = styled.div`
  margin-top: 60px;
  font-size: 24px;
  font-weight: 700;
  line-height: 42px;
  color: ${COLORS_NEW.black};
  margin-bottom: 20px;

  span > span {
    color: ${COLORS_NEW.gold};
  }

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: ${COLORS_NEW.black};
    margin-bottom: 30px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  font-weight: 700px;
  color: ${COLORS_NEW.black};
  opacity: .3;
`;

const ListTitle = styled.div`
  color: ${COLORS_NEW.lightPrimary};
  font-weight: 700;
  font-size: 24px;
  line-height: 42px;
  margin-top: 98px;
  margin-bottom: 20px;
`;

const ListDescription = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 28px;
  color: ${COLORS_NEW.black};
`;

const List = styled.div`
  margin-bottom: 20px;
`;

const ListItem = styled.div`
  color: ${COLORS_NEW.black};
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 6px;
  padding-left: 37px;
  position: relative;

  &::before {
    content: '';
    background: url(${IconCheck}) no-repeat 50% 50%;
    position: absolute;
    top: -2px;
    left: 0;
    width: 32px;
    height: 32px;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Skywire = styled.div`
  position: relative;
  width: 100%;
  max-width: 475px;
  margin: 40px auto 0;

  ${media.md.css`
    margin-top: 0;
  `}

  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    padding-bottom: 118.31%;
    width: 100%;
    max-width: 475px;
    background: url(${skywire}) no-repeat;
    background-size: cover;
  }
`;


const Sell = () => (
  <Wrap>
    <Container>
      <Grid>
        <GridColumn width={6}>
          <Title>
            <FormattedHTMLMessage id="skywirePage.sell.title" />
          </Title>
          <Description>
            <FormattedMessage id="skywirePage.sell.description" />
          </Description>
          <ListTitle>
            <FormattedMessage id="skywirePage.sell.listTitle" />
          </ListTitle>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn width={6}>
          <ListDescription>
            <FormattedMessage id="skywirePage.sell.listDescription" />
          </ListDescription>
          <Grid>
            <GridColumn width={6}>
              <List>
                <ListItem><FormattedMessage id="skywirePage.sell.list.1" /></ListItem>
                <ListItem><FormattedMessage id="skywirePage.sell.list.2" /></ListItem>
                <ListItem><FormattedMessage id="skywirePage.sell.list.3" /></ListItem>
              </List>
            </GridColumn>
            <GridColumn width={6}>
              <List>
                <ListItem><FormattedMessage id="skywirePage.sell.list.4" /></ListItem>
                <ListItem><FormattedMessage id="skywirePage.sell.list.5" /></ListItem>
                <ListItem><FormattedMessage id="skywirePage.sell.list.6" /></ListItem>
              </List>
            </GridColumn>
          </Grid>
          <Form />
        </GridColumn>
        <GridColumn width={5} offset={1}>
          <Skywire>
            <ButtonWrap>
              <Button
                bg={COLORS_NEW.error}
                width="100%"
                color={COLORS_NEW.white}
              ><FormattedMessage id="skywirePage.sell.soldout" /></Button>
            </ButtonWrap>
          </Skywire>
        </GridColumn>
      </Grid>
    </Container>
  </Wrap>
);

export default Sell;
