import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { getGenre, getGenreId} from '../services/TMDB';
import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { MovieCard } from '../components/MovieCard';
import Pagination from '../components/Pageing';

type IdParam = {
  id: string;
};

const MovieByGenre = () => {
const [searchParams, setSearchParams] = useSearchParams({page:'1'})
  const page = searchParams.get('page'|| "1")
  const { id } = useParams<IdParam>() ?? '';
  const idValue = id ?? '';
  const pageNumber = Number(page)

  const genreQuery = useQuery(['Genre', idValue], () => getGenreId());
  const genres = genreQuery.data || [];

  const data = useQuery(['GenrePage', idValue, pageNumber | 1], () => getGenre(idValue, pageNumber), {
    enabled: !!idValue,
    keepPreviousData: true,
  });

  const selectedGenre = genres.find((genre) => genre.id === Number(idValue));

  return (
    <>
      {data.isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}
      {data.isFetching && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {selectedGenre && (
        <>
          <h1>{selectedGenre.name}</h1>

          <ListGroup className="mb-6">
            <Container>
              <Row>
                {data.data?.results.map((movie) => (
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
        </>
      )}
         {data.data && ( 
          <Pagination
            totalPages={data.data.total_pages}
            hasPreviousPage={pageNumber > 1}
            hasNextPage={pageNumber  < data.data.total_pages}
            onPreviousPage={() => {setSearchParams({ page: String(pageNumber - 1)}) }}
            onNextPage={() => {setSearchParams({ page: String(pageNumber + 1 ) }) }}
          /> 
					
        )}

    </>
  );
};

export default MovieByGenre;
