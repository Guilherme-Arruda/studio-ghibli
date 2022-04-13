/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import MovieCard from './index.styled';

const Movie = ({ src, title }) => {
  return (
    <MovieCard>
      <Link href="/" passHref>
        <a className="image-wrapper">
          <Image layout='fill' src={src} />
        </a>
      </Link>
      <span>{title}</span>
    </MovieCard>
  );
};

export default Movie;
