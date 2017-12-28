import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import { COLORS_NEW } from 'config';
import media from 'utils/media';
import checked from 'components/Icons/checked.svg';

const Wrap = styled.div`
  padding: 30px;
  background: rgba(0, 0, 0, 0.05);
  margin-top: 60px;
`;

const Input = styled.input`
  padding: 0 20px;
  line-height: 54px;
  box-sizing: border-box;
  height: 54px;
  border: 2px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  font-size: 14px;
  color: ${COLORS_NEW.black};
  border-radius: 6px;
  flex-grow: 1;
  flex: 1 0 0;

  &::placeholder {
    font-size: 14px;
    color: ${COLORS_NEW.black};
  }
`;

const Title = styled.div`
  color: ${COLORS_NEW.black};
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 20px;
`;

const Content = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;

  ${media.md.css`
    flex-direction: row;
  `}
`;

const StyledButton = styled.div`
  flex-shrink: 0;
  margin-top: 30px;

  ${media.md.css`
    margin-left: 30px;
    margin-top: 0;
  `}
`;

const Label = styled.label`
  margin-left: 10px;
  color: ${COLORS_NEW.black};
  font-size: 13px;
  line-height: 15px;
  vertical-align: middle;
  display-inline-block;
`;

const Checkbox = styled.label`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 20px;
  height: 20px;
  background: rgba(30, 34, 39, 0.05);
  border-radius: 6px;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    right: -4px;
    width: 19px;
    height: 19px;
  }
`;

const StyledCheckbox = styled.input`
  display: none;

  &:checked {
    & + label {
      &::after {
        background: url(${checked});
      }
    }
  }
`;

const Submit = Button.withComponent('input');

class Form extends PureComponent {
  componentWillMount() {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Wrap>
        <Title><FormattedMessage id="skywirePage.form.title" /></Title>
        <form
          action="//skycoin.us16.list-manage.com/subscribe/post?u=47a93630ab9172f29aff78b99&amp;id=264afe24a1" // eslint-disable-line max-len
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          ref={(node) => { this.form = node; }}
          target="_blank"
          noValidate
        >
          <Content>
            <Input type="email" name="EMAIL" id="mce-EMAIL" placeholder="your@email.com" />
            <StyledButton>
              <Submit
                color={COLORS_NEW.trueWhite}
                bg={COLORS_NEW.black}
                type="submit"
                value="Sign up"
                name="subscribe"
                pill
              />
            </StyledButton>
          </Content>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_47a93630ab9172f29aff78b99_264afe24a1"
              tabIndex="-1"
            />
          </div>
          <StyledCheckbox
            type="checkbox"
            value="1"
            name="group[1057][1]"
            id="mce-group[1057]-1057-0"
          />
          <Checkbox htmlFor="mce-group[1057]-1057-0" />
          <Label htmlFor="mce-group[1057]-1057-0">
            <FormattedMessage
              id="skywirePage.sell.checkbox"
            />
          </Label>
        </form>
      </Wrap>
    );
  }
}

export default Form;
