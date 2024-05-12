
import React, { useEffect, useState } from 'react';
import useRickAndMortyObjs from './useRickAndMortyObjs';  // Correct the import path as necessary
import body_styles from '../../styles/body.module.css';  
import card_styles from '../../styles/card.module.css';
import lm_btn from '../../styles/load-more-btn.module.css';
function Body({ filters }: { filters: any }) {  // Destructure 'filters' from props correctly  // Ensure this logs changes correctly by listing 'filters' as a dependency
    const [page, setPage] = useState(1);
    const { datax, loading, hasMore } = useRickAndMortyObjs(page, filters);

    const loadMore = () => {
        if (hasMore && !loading) {
                setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className={body_styles.body_content}>
            <div className={card_styles.card_container}>
                {(datax as any[]).map(character => (
                    <div key={character.id} className={card_styles.character_card}>
                        <img src={character.image} alt={character.name} className={card_styles.card_image} />
                        <div className={card_styles.card_text}>
                            <h3 className={card_styles.card_title}>{character.name}</h3>
                            <p className={card_styles.card_info}>Status: {character.status}</p>
                            <p className={card_styles.card_info}>Species: {character.species}</p>
                            <p className={card_styles.card_info}>Origin: {character.origin.name || 'N/A'}</p>
                            <p className={card_styles.card_info}>Gender: {character.gender}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={loadMore} className={lm_btn.load_more_btn} disabled={!hasMore || loading}>
                {loading ? "Loading..." : "Load More"}
            </button>
        </div>
    ); 
}

export default Body;
