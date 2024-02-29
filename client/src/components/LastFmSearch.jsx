import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import CustomCard from './card'; // Make sure to adjust the path based on your file structure

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
  
      if (response.data.results) {
        let matches = [];
        console.log(response.data.results);
        if (searchType === 'artist' && response.data.results.artistmatches) {
          matches = response.data.results.artistmatches.artist;
        } else if (searchType === 'album' && response.data.results.albummatches) {
          matches = response.data.results.albummatches.album;
        } else if (searchType === 'track' && response.data.results.trackmatches) {
          matches = response.data.results.trackmatches.track;
        }
  
        if (matches.length > 0) {
          setSearchResults(matches);
        } else {
          console.log(response.data.results);
          console.error('No matches found in the API response.');
        }
      } else {
        console.log(response.data.results);
        console.error('No matches found in the API response.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardClick = async (artistName) => {
    // Handle the card click for the artist search (e.g., fetch top songs)
    
    console.log(`Clicked on artist: ${artistName}`);
    // Add your logic for handling the artist click
    const apiKey = 'd622889e346a9e1f41da82e9ac409be5';
     let apiUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${apiKey}&format=json`;

    const response = await axios.get(apiUrl);
    console.log (response.data);
    if (response.data.toptracks) {
      let matches = response.data.toptracks.track;
      if (matches.length > 0) {
        setSearchResults(matches);
      } else {
        console.error('No matches found in the API response.');
      }
    } else {
      console.error('No matches found in the API response.');
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
        {searchResults.map((searchResults, index) => (
          <CustomCard key={index} result={searchResults} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
});

export default LastFmSearch;
