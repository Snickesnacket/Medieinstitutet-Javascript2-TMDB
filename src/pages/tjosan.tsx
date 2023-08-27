// Import statements and type definitions
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { getPopular } from '../services/GetMoviesAPI';
import { Alert, ListGroup } from 'react-bootstrap';
import { IMovie } from '../types/Movie.types';

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

      <ListGroup className="mb-6">
        {data?.results.map((data) => (
          <ListGroup.Item
            action
            as={Link}
            key={data.id}
            variant="success"
            to={`/films/${data.id}`}
          >
            <h2 className="h3">{data.title}</h2>
            <p className="text-muted small mb-0">
              created: {data.release_date}
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default PopularPage;
