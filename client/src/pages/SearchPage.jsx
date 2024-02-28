import React, { useRef, useState } from 'react';
import LastFmSearch from '../components/LastFmSearch';
import backgroundImage from '../components/assets/img/Head_of_Five_Strings_Bass_Guitar_51875534926.jpg'
import { Button } from 'antd';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const lastfmSearchRef = useRef();

  const handleSearch = () => {
    lastfmSearchRef.current.handleSearch();
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '10px' }}>
      <h1 style={{ color: 'white'}}>Search Page</h1>
      <div style={{ marginBottom: '10px' }}>
        <Button type='primary' onClick={handleSearch}></Button>
      </div>
      <LastFmSearch ref={lastfmSearchRef} />
    </div>
  )
};

export default SearchPage;
