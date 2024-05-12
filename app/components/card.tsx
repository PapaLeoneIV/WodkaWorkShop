import React from 'react';
import Link from 'next/link';
import card_styles from '../../styles/card.module.css';

// Define the type for the character prop
interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  origin: { name: string };
  image: string;
  gender: string;
}

interface CardProps {
  character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <Link href={`/characters/${character.id}`} passHref>
      <div className={card_styles.character_card}>
        <img src={character.image} alt={character.name} className={card_styles.card_image} />
        <div className={card_styles.card_text}>
          <h3 className={card_styles.card_title}>{character.name}</h3>
          <p className={card_styles.card_info}>Status: {character.status}</p>
          <p className={card_styles.card_info}>Species: {character.species}</p>
          <p className={card_styles.card_info}>Origin: {character.origin.name || 'N/A'}</p>
          <p className={card_styles.card_info}>Gender: {character.gender}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;