import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 3rem;

  h1 {
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.color};
  }
`;

export default Container;