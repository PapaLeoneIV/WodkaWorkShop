import React, { useState } from 'react';
import useRickAndMortyObjs from './useRickAndMortyObjs'; // Correct the import path as necessary
import body_styles from '../../styles/body.module.css';  
import card_styles from '../../styles/card.module.css';
import lm_btn from '../../styles/load_more_btn.module.css';
import Card from './card'; // Import the Card component

function Body({filters}: {filters:any}) {
    const [page, setPage] = useState(1);
    const { datax, loading, hasMore } = useRickAndMortyObjs(page, filters, setPage);

    const loadMore = () => {
        if (hasMore && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className={body_styles.body_content}>
            <div className={card_styles.card_container}>
                {(datax as any).map(character  => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
            <button onClick={loadMore} className={lm_btn.load_more_btn} disabled={!hasMore || loading}>
                {loading ? "Loading..." : "Load More"}
            </button>
        </div>
    );
}

export default Body;