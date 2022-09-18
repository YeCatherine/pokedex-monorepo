import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '@monorepo/components/src/hooks/useLocalStorage/useLocalStorage';
import { DataTable } from '@monorepo/components';
import { getIdFromURL } from '@/services/Common';
import IPokemonData from '../../../types/IPokemonData';
import { pokemonListService } from '../../../services/pokemonListService';
// import usePokemonCapture from '@/hooks/usePokemonCapture';
// const { capturedPokemons } = usePokemonCapture();

// console.log(capturedPokemons);

// const WrapProgramsTable = () => (<DataTable
// preparedData={capturedPokemons}/>);

/**
 * Programs page.
 *
 * Consists of 2 main components ProgramsSearch and ProgramTable.
 * Search updates global form state.
 * Table - shows data according current form state
 *
 * @constructor
 */
export const PokemonTable = () => {
  const [preparedData, serPreparedData] = useState({});
  // const [pokemons, setPokemons] =
  // useLocalStorage<Array<IPokemonData>>('capturedPokemonList', []);
  const [pokemons, setPokemons] = useLocalStorage<Array<IPokemonData>>('pokemonsList', []);
  /**
   * Retrieves all pokemons and extract ids.
   */
  useEffect(() => {
    if (pokemons.length) {
      return;
    }

    pokemonListService
      .getAll()
      .then((response: any) => {
        const responsePoke = response.data.results.map((poke) => {
          poke.id = getIdFromURL(poke.url);
          return poke;
        });
        setPokemons(responsePoke);
      })
      .catch((e: any) => {
        console.warn(e);
      });
  }, []);

  const WrapProgramsTable = (pokemons) => <DataTable preparedData={pokemons} />;
  return <>{/* <WrapProgramsTable pokemons={pokemons}/> */}</>;
};

export default PokemonTable;
