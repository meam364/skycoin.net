import React from 'react';
import styled from 'styled-components';
import ProductHeader from 'components/ProductHeader';
import { COLORS_NEW } from 'config';
import Footer from 'components/Footer';
import ProductBenefits from 'components/ProductBenefits';
import IconFast from 'components/Icons/IconFast.svg';
import IconFree from 'components/Icons/IconFree.svg';
import IconPrivacy from 'components/Icons/IconPrivacy.svg';
import IconSecurity from 'components/Icons/IconSecurity.svg';
import IconEco from 'components/Icons/IconEco.svg';
import skycoinHeader from './images/skycoin-header.png';
import About from './components/About';

const Body = styled.div`
  background: ${COLORS_NEW.black};
  overflow: hidden;
`;

const SkycoinPage = () => (
  <Body>
    <ProductHeader image={skycoinHeader} title="Skycoin" name="Technology" />
    <About />
    <ProductBenefits
      title="skycoinPage.benefits.title"
      list={[
        {
          name: 'skycoinPage.benefits.1.title',
          text: 'skycoinPage.benefits.1.text',
          icon: IconFast,
        },
        {
          name: 'skycoinPage.benefits.2.title',
          text: 'skycoinPage.benefits.2.text',
          icon: IconFree,
        },
        {
          name: 'skycoinPage.benefits.3.title',
          text: 'skycoinPage.benefits.3.text',
          icon: IconPrivacy,
        },
        {
          name: 'skycoinPage.benefits.4.title',
          text: 'skycoinPage.benefits.4.text',
          icon: IconSecurity,
        },
        {
          name: 'skycoinPage.benefits.5.title',
          text: 'skycoinPage.benefits.5.text',
          icon: IconEco,
        },
      ]}
    />
    <Footer />
  </Body>
);

export default SkycoinPage;
