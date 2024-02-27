import React, { useRef, useState } from 'react';
import LastFmSearch from '../components/LastFmSearch';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const lastfmSearchRef = useRef();

  const handleSearch = () => {
    lastfmSearchRef.current.handleSearch();
  }

  return (
    <div>
      <h1>Search Page</h1>
      <LastFmSearch ref={lastfmSearchRef} />
    </div>
  )
};

export default SearchPage;
