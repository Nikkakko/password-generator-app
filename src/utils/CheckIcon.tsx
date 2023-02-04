import styled from 'styled-components';

type CheckIconProps = {
  checked: boolean;
};

const CheckIcon = ({ checked }: CheckIconProps) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' checked={checked}>
      <Path
        stroke='#18171F'
        stroke-width='3'
        d='M1 5.607 4.393 9l8-8'
        checked={checked}
      />
    </Svg>
  );
};

const Svg = styled.svg<CheckIconProps>`
  background: ${props =>
    props.checked ? props.theme.colors.neonGreen : 'none'};

  width: 100%;
  height: 100%;

  fill: ${props => (props.checked ? props.theme.colors.darkGrey : 'none')};
`;
const Path = styled.path<CheckIconProps>``;

export default CheckIcon;
