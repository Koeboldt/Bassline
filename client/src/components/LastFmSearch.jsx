import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

const LastFmSearch = forwardRef((props, ref) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('artist'); // Default to artist initially

  useEffect(() => {
    setSearchType(determineSearchType(searchTerm));
  }, [searchTerm]);

  const determineSearchType = (input) => {
    if (input.includes(':')) {
      const [prefix, term] = input.split(':');
      switch (prefix.toLowerCase()) {
        case 'artist':
          return 'artist';
        case 'album':
          return 'album';
        case 'track':
          return 'track';
        default:
          return 'artist';
      }
    }
    return 'artist';
  };

  const handleSearch = async () => {
    try {
      const apiKey = 'd622889e346a9e1f41da82e9ac409be5';
      const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=${searchType}.search&${searchType}=${searchTerm}&api_key=${apiKey}&format=json`;

      const response = await axios.get(apiUrl);

      if (response.data.results.artistmatches.artist.length > 0) {
        setSearchResults(response.data.results.artistmatches.artist);
      } else {
        console.log(response.data);
        console.error('No matches found in the API response.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useImperativeHandle(ref, () => ({
    handleSearch,
    setSearchTerm,
    setSearchType,
    searchResults,
    searchTerm,
    searchType,
  }));

  return (
    <div className='search-container'>
      <input type="text" placeholder='Search for music' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
        <option value="track">Track</option>
      </select>
      <ul>
        {searchResults.map((artist, artistName) => (
          <li key={artistName}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default LastFmSearch;
