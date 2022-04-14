import styled from 'styled-components';

const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image-wrapper {
    position: relative;
    width: 250px;
    height: 375px;
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  span {
    font-size: 120%;
    text-align: center;
    color: var(--text-color);
  }
`;

export default MovieCard;
