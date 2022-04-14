import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import NavBar from '../../components/Navbar';
import DetailsContainer from '../../components/DetailsContainer';

export async function getStaticPaths() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await response.json();

  return {
    paths: data.map((movie) => {
      return {
        params: {
          id: movie.id,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://ghibliapi.herokuapp.com/films/${params.id}/`);
  const data = await response.json();

  return {
    props: {
      movie: data,
    },
  };
}

const Details = ({ movie }) => {
  return (
    <>
      <Head>
        <title>Studio Ghibli - {movie.title}</title>
      </Head>
      <NavBar />
      <DetailsContainer>
        <div className="movie">
          <div className="image-wrapper">
            <Image layout="fill" src={movie.image} quality={100} />
          </div>
          <div className="info">
            <h1>{movie.title}</h1>
            <div className="titles">
              <span>
                <strong>Romaji Title: </strong> {movie.original_title_romanised}
              </span>
              <span>
                <strong>Original Title: </strong> {movie.original_title}
              </span>
            </div>
            <span className="justify">
              <strong>Sinopse: </strong> {movie.description}
            </span>
            <span>
              <strong>Director:</strong> {movie.director}
            </span>
            <span>
              <strong>Release Date:</strong> {movie.release_date}
            </span>
            <Link href="/" passHref>
              <button type="button" className="go-back">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </DetailsContainer>
    </>
  );
};

export default Details;
