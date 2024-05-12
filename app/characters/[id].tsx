import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: {
        name: string;
    };
}

const CharacterDetails: React.FC = () => {
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const { id } = router.query; // `id` will be a string or string[]

    useEffect(() => {
        console.log('id:', id);
    }
    , [id]);

    useEffect(() => {
        if (!id || typeof id !== 'string') return; // Ensure id is valid

        const url = new URL(`https://rickandmortyapi.com/api/character/${id}`);
        
        setLoading(true);
        fetch(url.toString())
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCharacter(data); // Assuming the API returns the character directly
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching character details:', error);
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!character) return <div>No character found</div>;

    return (
        <div>
            <h1>Character Details - {character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
    );
}

export default CharacterDetails;
