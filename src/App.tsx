import Navigation from './components/Navigation';
import './assets/styles.scss';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import Popular from './pages/PopularPage';
import TopRated from './pages/TopRatedPage';
import PlayingNow from './pages/PlayingNowPage';
import Movie from './pages/MoviePage';
import Genres from './pages/GenresPage';
import Genre from './pages/GenrePage';
import { Actor } from './pages/ActorPage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/TopRatedPage" element={<TopRated />}></Route>
          <Route path="/InTheatersNowPage" element={<PlayingNow />}></Route>
          <Route path="/Movie/:id" element={<Movie />}></Route>
          <Route path="/GenrePage" element={<Genres />}></Route>
          <Route path="/GenrePage/:id" element={<Genre />}></Route>
          <Route path="/ActorPage/:id" element={<Actor />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </>
  );
}

export default App;
