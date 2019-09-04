import * as React from "react";
import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  width: 200px;
  height: 28px;
`;

interface IProps {
  [key: string]: any;
}

const Input = forwardRef((props: IProps, ref?: any) => {
  return <StyledInput {...props} ref={ref} type='text' />;
});

export default Input;
