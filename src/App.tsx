import styled from 'styled-components';
import { useAppSelector } from './app/hook';
import GenerateOptions from './components/GenerateOptions';
import InputComponent from './components/Input';
import CopyIcon from './utils/CopyIcon';

const App = () => {
  const { copied } = useAppSelector(state => state.password);
  return (
    <AppContainer>
      <Wrapper>
        <Title>Password Generator</Title>
        <GeneratePassword>
          <InputComponent />
          {copied && <span>Copied</span>}
          <CopyIcon />
        </GeneratePassword>
        <GenerateOptions />
      </Wrapper>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  @media (min-width: 1440px) {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  margin: 64px 16px;

  display: flex;
  flex-direction: column;

  gap: 16px;

  @media (min-width: 1440px) {
    margin: 64px auto;
  }
`;

const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.grey};
  text-align: center;
`;

const GeneratePassword = styled.div`
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.almostWhite};
  padding: 0px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;

  span {
    color: ${props => props.theme.colors.neonGreen};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.small};
    margin-right: 16px;
    text-transform: uppercase;
  }

  svg {
    width: 30px;
    /* height: 25px; */
    cursor: pointer;
  }
`;

const Password = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.medium};
`;

export default App;
