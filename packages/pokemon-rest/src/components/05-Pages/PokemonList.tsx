import React, { useEffect, useState } from 'react';
import { SearchBox, Spinner } from '@monorepo/components';
import { pokemonListService } from '@/services';
import IPokemonData from '@/types/IPokemonData';
import PokemonCard from '../02-Organisms/PokemonCard/PokemonCard';
import Grid from '@mui/material/Grid';
import useLocalStorage from '@/hooks/useLocalStorage';
import { getIdFromURL } from '@/services/Common';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// import { LanguageSwitcher } from
// '../01-Atoms/Form/LanguageSwitcher/LanguageSwitcher';

enum SortDirection {
  SortIDAsc = 'SortIDAsc',
  SortIDDesc = 'SortIDDesc',
  SortNameAZ = 'SortNameAZ',
  SortNameZA = 'SortNameZA',
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
/**
 * Generates the list of pokemon.
 *
 * @param props The list of pokemon.
 *
 * @constructor The functional component of PokemonList.
 */
export const PokemonList: React.FC = (props) => {
  const [pokemons, setPokemons] = useLocalStorage<Array<IPokemonData>>(
    'pokemonsList', []);
  const [searchPokemon, setSearchPokemon] = useState<string>('');
  const [sortStatus, setSortStatus] = useState<string>(SortDirection.SortIDAsc);

  /**
   * Retrieves all pokemons and extract ids.
   */
  useEffect(() => {

    if (pokemons.length) {
      return;
    }

    pokemonListService.getAll()
      .then((response: any) => {
        const responsePoke = response.data.results.map(poke => {
          poke.id = getIdFromURL(poke.url);
          return poke;
        });
        setPokemons(responsePoke);
      })
      .catch((e: any) => {
        console.warn(e);
      });

  }, []);

  /**
   * Handles search on input.
   * @param e Event.
   */
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchPokemon(e.target.value.toLowerCase());
  };

  /**
   * Filter pokemon by name in SearchBox.
   * @param pokemon All pokemons.
   */
  const filterPokemon = pokemon => pokemon.name.toLowerCase()
    .includes(searchPokemon);

  /**
   * Sorts pokemon by ID or Name Desc and Asc.
   *
   * @param a Previous item.
   * @param b Next item.
   */
  const sortingLogic = (a: IPokemonData, b: IPokemonData) => {
    switch (sortStatus) {
      case SortDirection.SortIDAsc:
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        break;

      case SortDirection.SortIDDesc:
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        break;

      case SortDirection.SortNameAZ:

        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        break;

      case SortDirection.SortNameZA:
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }

        break;
    }

    return 0;
  };

  if (!pokemons || typeof pokemons === 'undefined') {
    return (
      <h1><Spinner/>Loading...</h1>);
  }

  const handleSortChange = (event) => {
    setSortStatus(event.target.value);
  };

  return (
    <>
      {/*<LanguageSwitcher/>*/}
      <SearchBox placeholder="Pokemon name"
                 handleSearch={handleSearch}/>
      <select onChange={handleSortChange}>
        <option
          key={SortDirection.SortIDAsc}
          value={SortDirection.SortIDAsc}>Sort by Id: start-end
        </option>
        <option
          key={SortDirection.SortIDDesc}
          value={SortDirection.SortIDDesc}>Sort
          by Id: end-start
        </option>
        <option
          key={SortDirection.SortNameAZ}
          value={SortDirection.SortNameAZ}>Sort
          by Name: A-Z
        </option>
        <option
          key={SortDirection.SortNameZA}
          value={SortDirection.SortNameZA}>Sort
          by Name: Z-A
        </option>
      </select>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {pokemons.filter(filterPokemon)
            .sort(sortingLogic)
            .map((pokemon, index) =>
              <Grid item xs={2}>
                <PokemonCard key={index} pokemon={pokemon}/>
              </Grid>
            )}
        </Grid>
      </Box>
    </>
  );
};

export default PokemonList;
