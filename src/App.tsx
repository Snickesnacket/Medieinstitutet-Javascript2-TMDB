import Navigation from './components/Navigation';
import './assets/styles.scss';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import PopularPage from './pages/Popular';
import TopRated from './pages/TopRated';
import InTheatre from './pages/PlayingNow';
import TheMovie from './pages/MovieId';
import GenrePage from './pages/Genre';
import MovieByGenre from './pages/MovieByGenre';
import { ActorID } from './pages/Actor';


function App() {
  return (
    <>
      <Navigation />
      <Container>
          <Routes>
            <Route path="/PopularPage" element={<PopularPage />}></Route>
            <Route path="/TopRatedPage" element={<TopRated />}></Route> 
            <Route path="/InTheatersNowPage" element={<InTheatre />}></Route>
            <Route path="/Movie/:id" element={<TheMovie />}></Route>
            <Route path="/GenrePage" element={<GenrePage />}></Route>
            <Route
              path="/GenrePage/:id"
              element={<MovieByGenre />}
            ></Route>
            <Route
              path="/ActorPage/:id"
              element={<ActorID />}
            ></Route>

            <Route></Route>
            <Route></Route>
          </Routes>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </>
  );
}

export default App;
