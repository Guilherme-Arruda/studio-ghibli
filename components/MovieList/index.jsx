import styled from 'styled-components';

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;
`;

export default MovieList;
