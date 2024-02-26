import React, { useState } from 'react';
import axios from 'axios';

const LastFmSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState('[]');
    const [searchType, setSearchType] = useState('');

const determineSearchType = () => {
    if (lowerCaseTerm.includes('artist')){
        setSearchType('artist');
    }else if (lowerCaseTerm.includes('album')){
        setSearchType('album');
    }else if (lowerCaseTerm.includes('track') || lowerCaseTerm.includes('song')){
        setSearchType('track');
    }else{
        //default to artist if no search type is found.
        setSearchType('artist');
    }
};

};