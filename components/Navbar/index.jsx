import { GitHub, GitBranch, Star } from 'react-feather';

import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ThemeButton from '../ThemeButton';

import { useAppContext } from '../../context/AppContext';

const NavBar = () => {
  const { theme } = useAppContext();

  return (
    <Navbar variant={theme ? 'dark' : 'light'} expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>The Studio Ghibli Collection</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Collapse id="responsive-navbar" className="justify-content-end">
          <Nav>
            <Nav.Link
              href="https://github.com/Guilherme-Arruda/studio-ghibli"
              target="_blank"
              className="d-flex align-items-center"
            >
              <Star size={17} className="me-1" />
              Star this project
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Guilherme-Arruda/studio-ghibli/fork"
              target="_blank"
              className="d-flex align-items-center"
            >
              <GitBranch size={17} className="me-1" />
              Fork to your GitHub
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Guilherme-Arruda"
              target="_blank"
              className="d-flex align-items-center"
            >
              <GitHub size={17} className="me-1" />
              @Guilherme-Arruda
            </Nav.Link>
            <ThemeButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
