import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import { COLORS_NEW, FONT_FAMILIES } from 'config';
import { rem } from 'polished';

const Text = createComponentFromTagProp({
  tag: 'h2',
  prop: 'as',
  propsToOmit: ['fontSize', 'gradient'],
});

const Heading = styled(Text)`
  font-size: ${props => rem(props.fontSize)};
  font-family: ${FONT_FAMILIES.sans};
  color: ${props => (props.fontSize > 32 ? COLORS_NEW.primary : COLORS_NEW.black)};
  margin-bottom: ${(props) => {
    switch (true) {
      case props.fontSize >= 48:
        return rem(40);
      case props.fontSize >= 24:
        return rem(20);
      default:
        return 0;
    }
  }};

  ${props => props.gradient && `
    @supports (-webkit-background-clip: text) {
      background: linear-gradient(45deg, ${COLORS_NEW.primary}, ${COLORS_NEW.lightPrimary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}

  ${props => props.underline && `
    &::after {
      content: '';
      display: block;
      height: 4px;
      width: 50px;
      border-radius: 180px;
      background: ${COLORS_NEW.primary};
      margin-top: ${rem(40)};
    }
  `}
`;

export default Heading;
