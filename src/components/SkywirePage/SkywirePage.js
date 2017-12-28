import React from 'react';
import styled from 'styled-components';
import { COLORS_NEW } from 'config';
import ProductHeader from 'components/ProductHeader';
import ProductBenefits from 'components/ProductBenefits';
import Footer from 'components/Footer';
import IconFast from 'components/Icons/IconFast.svg';
import IconFree from 'components/Icons/IconFree.svg';
import IconHandcuffs from 'components/Icons/IconHandcuffs.svg';
import IconPrivacy from 'components/Icons/IconPrivacy.svg';
import IconSecurity from 'components/Icons/IconSecurity.svg';
import skywireBg from './images/skywireBg.png';
import About from './components/About';
import Sell from './components/Sell';

const Body = styled.div`
  background: ${COLORS_NEW.black};
  overflow: hidden;
`;

const SkywirePage = () => (
  <Body>
    <ProductHeader
      image={skywireBg}
      title="Skywire"
      name="Technology"
    />
    <About />
    <ProductBenefits
      title="skywirePage.benefits.title"
      list={[
        {
          name: 'skywirePage.benefits.1.title',
          text: 'skywirePage.benefits.1.text',
          icon: IconSecurity,
          list: ['skywirePage.benefits.1.list.1', 'skywirePage.benefits.1.list.2', 'skywirePage.benefits.1.list.3'],
        },
        {
          name: 'skywirePage.benefits.2.title',
          text: 'skywirePage.benefits.2.text',
          icon: IconPrivacy,
        },
        {
          name: 'skywirePage.benefits.3.title',
          text: 'skywirePage.benefits.3.text',
          icon: IconFast,
        },
        {
          name: 'skywirePage.benefits.4.title',
          text: 'skywirePage.benefits.4.text',
          icon: IconHandcuffs,
        },
        {
          name: 'skywirePage.benefits.5.title',
          text: 'skywirePage.benefits.5.text',
          icon: IconFree,
        },
      ]}
    />
    <Sell />
    <Footer />
  </Body>
);

export default SkywirePage;
