import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import CustomCard from './CustomCard'; // Import your CustomCard component

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
      let apiUrl = '';

      if (searchType === 'toptracks') {
        apiUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${searchTerm}&api_key=${apiKey}&format=json`;
      } else {
        apiUrl = `https://ws.audioscrobbler.com/2.0/?method=${searchType}.search&${searchType}=${searchTerm}&api_key=${apiKey}&format=json`;
      }

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
    <div>
      <h1>Last.fm Search</h1>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
        <option value="track">Track</option>
      </select>
      <div>
        {searchResults.map((result, index) => (
          <CustomCard key={index} result={result} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
});

export default LastFmSearch;
