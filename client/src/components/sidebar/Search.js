import React from 'react';
import { SearchForm } from '../../styled/Search';

const Search = ({search, setSearch}) => {
  return (
      <div>
        <SearchForm>
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </SearchForm>
      </div>
  )
}

export default Search