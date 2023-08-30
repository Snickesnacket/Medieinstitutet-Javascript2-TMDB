import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { getGenre } from '../services/TMDB';
import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import MoviesCard from '../components/MoviesCard';

const MovieByGenre = () => {
  const { id } = useParams() ?? '';
  const idValue = id ?? '';
  console.log('the id', idValue);
  const data = useQuery(['GenrePage/:id', idValue], () => getGenre(idValue), {
    enabled: !!idValue
  });

  console.log('the data', data.data);
  console.log('id', idValue);
  return (
    <>
      {data.isError && (
        <Alert variant="warning">Ooops, something went wrong!</Alert>
      )}
      {data.isFetching ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        data.data?.map((movie) => (
          <ListGroup className="mb-6">
            <Container>
              <Row>
                <MoviesCard
                  key={movie.id}
                  poster_path={movie.poster_path!}
                  title={movie.title!}
                  overview={movie.overview!}
                  release_date={movie.release_date!}
                  vote_average={movie.vote_average!}
                  id={movie.id!}
                />
              </Row>
            </Container>
          </ListGroup>
        ))
      )}
    </>
  );
};

export default MovieByGenre;

/* 
        SearchPage 
	//* Keeping track of search query and page
	const query = searchParams.get("query") ?? "";
	const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

	//* Data
	const { data, isLoading, isError, error, isSuccess } = useSearch(page, query);

	//* Click event to set params
	const handleSearch = async (query: string) => {
		setSearchParams({ page: "1", query });
	};

    HOOKS 
    import { IGenres } from './../interfaces/IGenres';
    import { useQuery } from '@tanstack/react-query';
    import TMDB from '../services/TMDBAPI';

    const useGenresList = () => {
      return useQuery<IGenres[]>(['genres-list'], TMDB.getGenresList);
    };

    export default useGenresList;

 
   */
