import styled from 'styled-components';

const Button = styled.button`
  padding: 4px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  margin-left: 1rem;
  transition: all 0.3s;
`;

export default Button;
