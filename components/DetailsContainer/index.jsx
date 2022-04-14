import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 2rem;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 991.98px) {
    height: auto;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 991.98px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .image-wrapper {
    position: relative;
    width: 310px;
    height: 465px;
    border-radius: 0.75rem;
    overflow: hidden;

    @media screen and (max-width: 375.98px) {
      width: 290px;
      height: 435px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 60%;

    @media screen and (max-width: 991.98px) {
      max-width: 100%;
    }
  }

  h1 {
    @media screen and (max-width: 991.98px) {
      text-align: center;
    }

    @media screen and (max-width: 575.98px) {
      font-size: 1.5rem;
    }
  }

  .titles {
    display: flex;
    gap: 5rem;

    @media screen and (max-width: 991.98px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .justify {
    text-align: justify;
  }

  button.go-back {
    background-color: #3393b9;
    color: white;
    padding: 0.8rem 4rem;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: #2a7796;
    }
  }
`;

export default DetailsContainer;
