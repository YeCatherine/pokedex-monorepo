import { useLocalStorage } from '@monorepo/components';
import IPokemonData from '../types/IPokemonData';

interface CapturedPokemonType {
  capturedPokemons: Array<IPokemonData>;
  setCapturedPokemons: (pokemon: IPokemonData) => void;
  checkCapturedPokemon: (pokemon: IPokemonData) => boolean;
}

/**
 * The usePokemonCapture declaration.
 */
export default function usePokemonCapture(): CapturedPokemonType {
  const [capturedPokemons, setCapturedPokemonList] = useLocalStorage<Array<IPokemonData>>(
    'capturedPokemonList',
    []
  );

  /**
   * Checks if the pokemon is captured.
   * @param {IPokemonData} pokemon The pokemon.
   */
  const checkCapturedPokemon = (pokemon: IPokemonData): boolean => {
    const finding = capturedPokemons.find(
      (currentPokemon) => currentPokemon.name === pokemon.name);
    return typeof finding === 'object';
  };

  /**
   * Sets the pokemon to captured list if the pokemon is captured.
   * @param {IPokemonData} pokemon The pokemon.
   */
  const setCapturedPokemons = (pokemon: IPokemonData): void => {
    if (checkCapturedPokemon(pokemon)) {
      setCapturedPokemonList(
        capturedPokemons.filter(
          (currentPokemon) => currentPokemon.name !== pokemon.name)
      );
    }
    else {
      setCapturedPokemonList([...capturedPokemons, pokemon]);
    }
  };

  return { capturedPokemons, setCapturedPokemons, checkCapturedPokemon };
}
