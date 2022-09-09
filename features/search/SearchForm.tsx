import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { searchAlbums } from './searchSlice';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(searchAlbums(query));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="query">Search Albums</label>
          <input
            type="text"
            name="query"
            id="query"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
