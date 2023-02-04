import React, { useState } from 'react';
import styled from 'styled-components';
import checkBoxIcon from '../assets/images/icon-check.svg';

type CheckboxProps = {
  label?: string;
  type?: string;
  isChecked?: boolean;
  value?: boolean;
  checkBoxValue?: object;
  setCheckBoxValue?: React.Dispatch<
    React.SetStateAction<
      {
        label: string;
        value: boolean;
      }[]
    >
  >;
};

const Checkbox = ({ label, setCheckBoxValue }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = () => {
    setIsChecked(prev => !prev);

    if (setCheckBoxValue) {
      setCheckBoxValue(prev => {
        return prev.map(item => {
          if (item.label === label) {
            return {
              ...item,
              value: !item.value,
            };
          }
          return item;
        });
      });
    }
  };

  return (
    <Container>
      <Form>
        <Input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheck}
          isChecked={isChecked}
        />

        <InputLabel>{label}</InputLabel>
      </Form>
    </Container>
  );
};

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-left: 24px;
`;

const Input = styled.input<CheckboxProps>`
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 20px;
  height: 20px;
  border-radius: 0.15em;
  border: 2px solid ${props => props.theme.colors.almostWhite};
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid ${props => props.theme.colors.neonGreen};
  }

  &:checked {
    border: 2px solid ${props => props.theme.colors.neonGreen};
  }

  background-color: ${props => props.isChecked && props.theme.colors.neonGreen};
  background-image: ${props => props.isChecked && `url(${checkBoxIcon})`};
  background-repeat: no-repeat;
  background-position: center;
`;

export default Checkbox;
