import React, { useEffect, useState } from 'react';

import { getIdFromURL } from '@/services/Common';
import IPokemonSimpleComponent from '@/types/IPokemonSimpleComponent';
import CardMedia from '@mui/material/CardMedia';

/**
 * Gets the image of the pokemon from services.
 * @param props
 * @constructor The functional component for PokemonImage.
 */
const PokemonImage: React.FC<IPokemonSimpleComponent> = (props) => {
  const { pokemon } = props;
  /**
   * Pokemon Id.
   */
  const [pokemonImageURL, setPokemonImageURL] = useState<string>('');
  const [pokemonFallbackImageURL, setFallbackPokemonImageURL] = useState<string>('');

  useEffect(() => {
    let pokemonId: number | undefined;
    if (typeof pokemon.id !== 'undefined') {
      pokemonId = pokemon.id;
    } else {
      pokemonId = getIdFromURL(pokemon.url);
    }

    if (typeof pokemon.sprites?.other?.front_default?.front_default !== 'undefined') {
      setPokemonImageURL(pokemon.sprites.other.front_default.front_default);
    } else {
      setPokemonImageURL(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      );
    }

    if (typeof pokemon.sprites?.other?.front_default?.front_default !== 'undefined') {
      setPokemonImageURL(pokemon.sprites.front_default);
    } else {
      setFallbackPokemonImageURL(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      );
    }
  }, [pokemon]);

  return <CardMedia component="img" height="200" image={pokemonImageURL} alt={pokemon.name} />;
};

export default PokemonImage;
