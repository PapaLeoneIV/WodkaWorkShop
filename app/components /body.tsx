"use client";
import { Cardo } from 'next/font/google';
import React, { useEffect, useState } from 'react';

function useRickAndMortyObjs(page) {
    const [datax, setDatax] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                setDatax(prevData => [...prevData, ...data.results]); // Concatenate new results to existing data
                setHasMore(data.info.next != null); // Check if there is a next page
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [page]); // Depend on 'page' so it fetches new data when 'page' changes

    return { datax, loading, hasMore };
}

function Body() {
    const [page, setPage] = useState(1); // Initial page
    const { datax, loading, hasMore } = useRickAndMortyObjs(page);

    const loadMore = () => {
        if (hasMore && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    }

    return (
        <div className="body-content">
            <div className="card-container">
                {datax.map(character => (
                    <div key={character.id} className="character-card">
                        <img src={character.image} alt={character.name} className="card-image" />
                        <div className="card-text">
                            <h3 className="card-title">{character.name}</h3>
                            <p className="card-info">Status: {character.status}</p>
                            <p className="card-info">Species: {character.species}</p>
                            <p className="card-info">Type: {character.type || 'N/A'}</p>
                            <p className="card-info">Gender: {character.gender}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={loadMore} className="load-more-btn" disabled={!hasMore || loading}>
                {loading ? "Loading..." : "Load More"}
            </button>
        </div>
    ); 
}
export default Body;