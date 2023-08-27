// Import statements and type definitions
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { getPopular } from '../services/GetMoviesAPI';
import { Alert, Container, ListGroup, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

// Component definition
const PopularPage = () => {
  // Component code
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1'
  });
  const page = searchParams.get('page') || '1';
  const pageNumber = Number(page);

  const { data, isError } = useQuery(
    ['PopularPage', { page }],
    () => getPopular(pageNumber),
    {
      enabled: !!page,
      keepPreviousData: true
    }
  );

  return (
    <>
      <h1>Popular</h1>
      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}
      {data && (
        <ListGroup className="mb-6">
          <Container>
            <Row>
              {data?.results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  poster_path={movie.poster_path!}
                  title={movie.title!}
                  overview={movie.overview!}
                  release_date={movie.release_date!}
                  vote_average={movie.vote_average!}
                  id={movie.id!}
                />
              ))}
            </Row>
          </Container>
        </ListGroup>
      )}
    </>
  );
};

export default PopularPage;
