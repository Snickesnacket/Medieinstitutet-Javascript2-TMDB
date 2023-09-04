import { useSearchParams } from 'react-router-dom';
import Pagination from '../components/Pageing';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getSearch } from '../services/TMDB';
import DataHandeling from '../components/DataMovieCard';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
    page: '1'
  });
  const page = searchParams.get('page' || '1');
  const query = searchParams.get('query') ?? '';
  const pageNumber = Number(page);
  const [searchInput, setSearchInput] = useState('');

  const { data, isError, isFetching, isSuccess } = useQuery(
    ['SearchPage', { query, pageNumber }],
    () => getSearch(query, pageNumber),
    {
      enabled: !!query,
      keepPreviousData: true
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchInput.trim().length) {
      return;
    }

    setSearchParams({ query: searchInput, page: '1' });
  };

  return (
    <>
      <Form className="mb-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="searchQuery">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter your search query"
            required
            type="text"
            value={searchInput}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button
            variant="success"
            type="submit"
            disabled={!searchInput.trim().length}
          >
            Search
          </Button>
        </div>
      </Form>

      <p>Showing search results for "{query}"...</p>
      <DataHandeling
        isError={isError}
        isLoading={isFetching}
        data={data?.results}
        isSuccess={isSuccess}
      />

      {data && query && (
        <>
          <Pagination
            totalPages={data.total_pages}
            hasPreviousPage={pageNumber > 1}
            hasNextPage={pageNumber < data.total_pages}
            onPreviousPage={() => {
              setSearchParams({ query: query, page: String(pageNumber - 1) });
            }}
            onNextPage={() => {
              setSearchParams({ query: query, page: String(pageNumber + 1) });
            }}
          />
        </>
      )}
    </>
  );
};
