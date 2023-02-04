import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { setPassword } from '../features/passwordSlice';

type GenerateButtonProps = {
  checkBoxValue: any;
};

const GenerateButton = ({ checkBoxValue }: GenerateButtonProps) => {
  const { characterLength } = useAppSelector(state => state.password);
  const dispatch = useAppDispatch();

  const handleGenerate = () => {
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '@$!%*#?&';

    if (characterLength <= 5) return;

    // generate random password with length of characterLength and checkboxValue.value === true

    let randomPassword = '';
    let characters = '';

    if (checkBoxValue[0].value === true) characters += uppercase;
    if (checkBoxValue[1].value === true) characters += lowercase;
    if (checkBoxValue[2].value === true) characters += numbers;
    if (checkBoxValue[3].value === true) characters += symbols;

    if (characters === '') return;

    for (let i = 0; i < characterLength; i++) {
      randomPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    dispatch(setPassword(randomPassword));
  };
  return (
    <Button
      type='submit'
      onClick={() => handleGenerate()}
      disabled={characterLength <= 5}
    >
      {characterLength <= 5 ? 'Minimum 6 characters' : 'Generate'}
    </Button>
  );
};

const Button = styled.button`
  margin-top: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  color: ${props => props.theme.colors.veryDarkGrey};
  background-color: ${props => props.theme.colors.neonGreen};
  border: none;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.small};
  text-transform: uppercase;
  line-height: 21px;
  width: 100%;
  height: 48px;

  &:disabled {
    background-color: ${props => props.theme.colors.grey};

    &:hover {
      background-color: ${props => props.theme.colors.grey};
      border: none;
      cursor: not-allowed;
      color: ${props => props.theme.colors.veryDarkGrey};
    }
  }

  &:hover {
    background-color: ${props => props.theme.colors.veryDarkGrey};
    border: 1px solid ${props => props.theme.colors.neonGreen};
    color: ${props => props.theme.colors.neonGreen};
  }
`;

export default GenerateButton;
