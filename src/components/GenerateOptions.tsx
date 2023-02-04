import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { setCharacterLength } from '../features/passwordSlice';
import Checkbox from './Checkbox';
import GenerateButton from './GenerateButton';
import StrengthIndicator from './StrengthIndicator';

type GenerateOptionsProps = {
  charLength: number;
};

const GenerateOptions = () => {
  const dispatch = useAppDispatch();
  const { characterLength } = useAppSelector(state => state.password);

  const [checkBoxValue, setCheckBoxValue] = useState([
    { label: 'Include Uppercase Letters', value: false },
    { label: 'Include Lowercase Letters', value: false },
    { label: 'Include Numbers', value: false },
    { label: 'Include Symbols', value: false },
  ]);

  const handleCharLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCharacterLength(parseInt(e.target.value)));
  };
  return (
    <Container>
      <CharacterWrapper>
        <CharacterLength>
          <Title>Character Length</Title>
          <Length>{characterLength}</Length>
        </CharacterLength>
        <CharacterInput
          charLength={characterLength}
          value={characterLength}
          onChange={handleCharLength}
          type='range'
          min='0'
          max='20'
        />
      </CharacterWrapper>
      <BoxWrapper>
        {checkBoxValue.map((input, index) => (
          <Checkbox
            key={index}
            label={input.label}
            setCheckBoxValue={setCheckBoxValue}
          />
        ))}
      </BoxWrapper>

      <StrengthIndicator checkBoxValue={checkBoxValue} />

      <GenerateButton checkBoxValue={checkBoxValue} />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${props => props.theme.colors.darkGrey};
  padding: 0px 16px;
`;

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterLength = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CharacterInput = styled.input<GenerateOptionsProps>`
  position: relative;
  margin-top: 23px;
  outline: none;
  width: 100%;
  height: 8px;

  z-index: 0;

  -webkit-appearance: none;
  background-color: ${props => props.theme.colors.veryDarkGrey};

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: ${props => (props.charLength / 20) * 100}%;
    height: 8px;
    background-color: ${props => props.theme.colors.neonGreen};
    z-index: -1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${props => props.theme.colors.almostWhite};
    z-index: 1;

    &:hover {
      border: 1px solid ${props => props.theme.colors.neonGreen};
      background: ${props => props.theme.colors.veryDarkGrey};
    }
  }
`;

const Title = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.small};
`;
const Length = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.neonGreen};
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 42px;
  gap: 16px;
`;
export default GenerateOptions;
