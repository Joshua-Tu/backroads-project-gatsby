// this file is for styled components demonstration
import styled from "styled-components";

const color = "blue"; //这里你也可以用任何color value比如十六进制，八进制等等

const Button = styled.button`
  /* color: red; */
  /* 接受props */
  /* color: ${({ color }) => color}; */
  /* 或者可以写成 */
  color: ${props => props.color};

  /* 接受变量 */
  background: ${color};
  /* font-size: 1rem; */
  /* 可以接受逻辑语句 */
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  padding: 1rem;
  margin: 1rem;
`;

export default Button;
