import React, { useState , useEffect} from 'react';
import axios from 'axios';

const LastFmSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchType, setSearchType] = useState('artist'); // Default to artist initially
  
    useEffect(() => {
      // Detect search type based on the input format
      const determineSearchType = (input) => {
        // Simple logic to determine the search type based on input
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
              return 'artist'; // Default to artist if no valid prefix is found
          }
        }
        return 'artist'; // Default to artist if no specific format is detected
      };
  
      setSearchType(determineSearchType(searchTerm));
    }, [searchTerm]);
  
//This function will handle search results.

const handleSearch = async ()=>{
    determineSearchType();
    try{

        const apiKey = 'd622889e346a9e1f41da82e9ac409be5';
        const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=${searchType}.search&${searchType}=${searchTerm}&api_key=${apiKey}&format=json`;

        const response = await axios.get(apiUrl);

        setSearchResults(response.data.results[searchType].matches);


    } catch (error){
        console.error(error);
    };
    return(
        <div>
            <h1>Last.fm Search</h1>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="track">Track</option>
            </select>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.name}>{result.name}</li>
                ))}
            </ul>
        </div>

    )

} 

};

export default LastFmSearch;