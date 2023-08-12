//3cc2f8f2
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import Moviecard from './Moviecard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896197&apikey=3cc2f8f2'

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMov = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect (() => {
        searchMov('Spiderman');
    }, []);
    return (
        <div className = "app">
            <h1>Movie Lab</h1>

            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img src={searchIcon}
                alt="search"
                onClick={() => searchMov(searchTerm)}
                />
            </div>
            
            {movies?.length > 0 ?
                 (
                    <div className="container">
                        {movies.map((movie) => (
                            <Moviecard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                        
                    </div>
                )}
        </div>
    );
};


export default App;