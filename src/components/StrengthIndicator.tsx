import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hook';

type StrengthIndicatorProps = {
  checkBoxValue?: any;
  isTrue?: boolean;
};

const StrengthIndicator = ({ checkBoxValue }: StrengthIndicatorProps) => {
  const [indicatorBar, setIndicatorBar] = useState([
    { color: 'transperant' },
    { color: 'transperant' },
    { color: 'transperant' },
    { color: 'transperant' },
  ]);

  const [indicatorText, setIndicatorText] = useState('');

  const StrengthIndicator = () => {
    const trueCount = checkBoxValue.filter(
      (box: any) => box.value === true
    ).length;

    switch (trueCount) {
      case 1:
        setIndicatorBar([
          { color: '#F64A4A' },
          { color: 'transperant' },
          { color: 'transperant' },
          { color: 'transperant' },
        ]);
        setIndicatorText('Too Weak');
        break;
      case 2:
        setIndicatorBar([
          { color: '#FB7C58' },
          { color: '#FB7C58' },
          { color: 'transperant' },
          { color: 'transperant' },
        ]);
        setIndicatorText('Weak');
        break;
      case 3:
        setIndicatorBar([
          { color: '#F8CD65' },
          { color: '#F8CD65' },
          { color: '#F8CD65' },
          { color: 'transperant' },
        ]);
        setIndicatorText('Medium');
        break;
      case 4:
        setIndicatorBar([
          { color: '#A4FFAF' },
          { color: '#A4FFAF' },
          { color: '#A4FFAF' },
          { color: '#A4FFAF' },
        ]);
        setIndicatorText('Strong');
        break;
      default:
        setIndicatorBar([
          { color: 'transperant' },
          { color: 'transperant' },
          { color: 'transperant' },
          { color: 'transperant' },
        ]);
        break;
    }

    if (trueCount === 0) {
      setIndicatorText('');
    }
  };

  useEffect(() => {
    StrengthIndicator();
  }, [checkBoxValue]);

  return (
    <Container>
      <Title>Strength</Title>
      <Indicator>
        <StrengthValue>{indicatorText}</StrengthValue>
        <IndicatorBar>
          {indicatorBar.map((bar, index) => (
            <Bar key={index} color={bar.color} />
          ))}
        </IndicatorBar>
      </Indicator>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  background: ${props => props.theme.colors.veryDarkGrey};
  padding: 16px;
`;

const Title = styled.h3`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.grey};

  text-transform: uppercase;
`;

const Indicator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StrengthValue = styled.h3`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.almostWhite};
  font-size: 18px;
  margin-right: 16px;
  text-transform: uppercase;
`;

const IndicatorBar = styled.div`
  display: flex;
  gap: 8px;
`;

const Bar = styled.div<StrengthIndicatorProps>`
  width: 10px;
  height: 28px;
  background: ${props => props.theme.colors.veryDarkGrey};
  border: 2px solid ${props => props.theme.colors.almostWhite};
  border: 0px solid ${props => props.color};

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
  }
`;

export default StrengthIndicator;
