import React, { useEffect, useState } from 'react';
import PokemonListService from '@/services/pokemonListService';
import usePokemonCapture from '@/hooks/usePokemonCapture';
import IPokemonData from '@/types/IPokemonData';
import PokemonCard from './PokemonCard';
import {Spinner} from '@monorepo/components';

/**
 * Functional component for random notcaptured pokemon.
 * @param props Captured pokemon.
 * @constructor of NotCapturedPokemon.
 */
const NotCapturedPokemon: React.FC = (props) => {
  const [pokemons, setPokemons] = useState<Array<IPokemonData>>([]);
  const { capturedPokemons } = usePokemonCapture();
  const [randomPokemon, setRandomPokemon] = useState<IPokemonData>();

  /**
   * Gets the all pokemon.
   */
  useEffect(() => {
    PokemonListService.getAll()
      .then((response: any) => {
        setPokemons(response.data.results);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  /**
   * Gets the random pokemon.
   */
  useEffect(() => {
    let captured: Array<IPokemonData> = Array.from(capturedPokemons);

    const freePokemons = pokemons.filter(x => {
      for (let capturedIndex in captured) {
        if (captured[capturedIndex].name === x.name) {
          // Remove captured from the list of comparison to reduce task
          // complexity.
          captured = captured.splice(0, 1);
          return false;
        }
      }
      return x;
    });

    setRandomPokemon(
      freePokemons[Math.floor(Math.random() * freePokemons.length)]);

  }, [capturedPokemons, pokemons]);

  if (!randomPokemon) {
    return (<Spinner/>);
  }

  return (
    <>
      <h4>See also</h4>
      <div
        className="list-group d-flex flex-wrap flex-row justify-content-center">
        <PokemonCard pokemon={randomPokemon}/>
      </div>
    </>
  );
};

export default NotCapturedPokemon;
