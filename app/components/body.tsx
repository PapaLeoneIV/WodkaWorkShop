
import React, { useEffect, useState } from 'react';
import useRickAndMortyObjs from './useRickAndMortyObjs';  // Correct the import path as necessary

function Body({ filters }: { filters: any }) {  // Destructure 'filters' from props correctly  // Ensure this logs changes correctly by listing 'filters' as a dependency

    const [page, setPage] = useState(1);
    const { datax, loading, hasMore } = useRickAndMortyObjs(page, filters);

    const loadMore = () => {
        if (hasMore && !loading) {
                setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className="body-content">
            <div className="card-container">
                {(datax as any[]).map(character => (
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
