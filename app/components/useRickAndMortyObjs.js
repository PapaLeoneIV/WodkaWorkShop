// useRickAndMortyObjs.js
"use client";
import { useState, useEffect } from 'react';

export default function useRickAndMortyObjs(page, filters) {
    const [datax, setDatax] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    useEffect(() => {
        setLoading(true);
        let url;
        
        if (filters.name) // da implementare la ricerca per nome e la gestione delle carte ia caricate 
            url = new URL(`https://rickandmortyapi.com/api/character?page=${page}&name=${filters.name}`);
        else 
            url = new URL(`https://rickandmortyapi.com/api/character?page=${page}`);

        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    
                }
                return response.json(); 
            })
            .then(data => {
                setDatax(prevData => page === 1 ? data.results : [...prevData, ...data.results]);
                setHasMore(data.info.next != null);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [page, filters]); // Re-run the effect when 'page' or 'filters' change

    return { datax, loading, hasMore };
}
