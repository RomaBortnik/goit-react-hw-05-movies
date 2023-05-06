import { Outlet } from 'react-router-dom';

import { Header, StyledLink, Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
