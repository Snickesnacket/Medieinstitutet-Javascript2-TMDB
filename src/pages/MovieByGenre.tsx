import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { getGenre } from '../services/TMDB';
import { Alert, Container, ListGroup,  Row, Spinner } from 'react-bootstrap';
import { MovieCard } from '../components/MovieCard';
import { useState } from 'react';
import  Pagination  from '../components/Pageing'

const MovieByGenre = () => {
 const [searchParams, setSearchParams] = useSearchParams({idValue: '', page:'1'})
 const page = searchParams.get('page'|| "1")
 const pageNumber = Number(page)
  const { id } = useParams() ?? '';
  const idValue = id ?? '';


  const data = useQuery(['GenrePage/:id', idValue, pageNumber], () => getGenre(idValue, pageNumber), {
    enabled: !!idValue, keepPreviousData: true
  });

  console.log('the data', data.data);
  console.log('id', idValue);


  return (
    <>
      {data.isError && (
        <Alert variant="warning">Ooops, something went wrong!</Alert>
      )}
      {data.isFetching && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {data && (
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
      )}
        {data.data && ( 
          <Pagination
            totalPages={data.data.total_pages}
            hasPreviousPage={pageNumber > 1}
            hasNextPage={pageNumber  < data.data.total_pages}
            onPreviousPage={() => {setSearchParams({ idValue: idValue || '', page: String(pageNumber - 1)}) }}
            onNextPage={() => {setSearchParams({idValue: idValue|| '', page: String(pageNumber + 1 ) }) }}
          /> 
					
        )}

    </>
  );
};

export default MovieByGenre;

