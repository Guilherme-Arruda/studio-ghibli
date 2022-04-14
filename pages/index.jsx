import Head from 'next/head';

import NavBar from '../components/Navbar';
import Container from '../components/Container';
import MovieList from '../components/MovieList';
import Movie from '../components/Movie';

export async function getStaticProps() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await response.json();

  return {
    props: {
      movies: data,
    },
  };
}

const Home = ({ movies }) => {
  return (
    <>
      <Head>
        <title>Studio Ghibli</title>
      </Head>
      <NavBar />
      <Container>
        <h1>A List of All the Studio Ghibli Movies</h1>
        <MovieList>
          {movies.map((movie) => {
            return <Movie key={movie.id} src={movie.image} title={movie.title} id={movie.id} />;
          })}
        </MovieList>
      </Container>
    </>
  );
};

export default Home;
