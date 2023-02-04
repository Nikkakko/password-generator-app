import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hook';

const Input = () => {
  const { passwordValue } = useAppSelector(state => state.password);

  return (
    <InputStyle
      placeholder='P4$5W0rD!'
      type='text'
      readOnly
      value={passwordValue}
    />
  );
};

const InputStyle = styled.input`
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.almostWhite};
  padding: 0px 16px;
  border: none;
  outline: none;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.medium};
  height: 64px;
  width: 100%;
`;

export default Input;
