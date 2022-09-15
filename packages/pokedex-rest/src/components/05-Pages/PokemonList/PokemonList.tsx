import React, { useEffect, useState } from 'react';
import { SearchBox, useLocalStorage } from '@monorepo/components';
import { pokemonListService } from '@/services';
import IPokemonData from '@/types/IPokemonData';
import Grid from '@mui/material/Grid';
import { getIdFromURL } from '@/services/Common';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PokemonCard from '../../02-Organisms/PokemonCard/PokemonCard';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Filters from '@/components/02-Organisms/Filters/Filters';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  noResultsContainer: {
    textAlign: 'center'
  },
  noResults: {
    color: '#FFF',
    fontSize: 24,
    textTransform: 'uppercase',
    marginTop: theme.spacing(6)
  }
}));

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
  const classes = useStyles();

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
  const filterPokemon = (pokemon) => pokemon.name.toLowerCase()
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
    return;
    (
      <div className={classes.noResultsContainer}>
        <Typography className={classes.noResults}>
          No results. Please try a different filter value.
        </Typography>
      </div>
    );
  }

  const handleSortChange = (event) => {
    setSortStatus(event.target.value);
  };

  return (
    <>
      {/* <LanguageSwitcher/> */}
      <Grid container>
        <Filters/>
        <SearchBox placeholder="Pokemon name" handleSearch={handleSearch}/>
        <select onChange={handleSortChange}>
          <option key={SortDirection.SortIDAsc} value={SortDirection.SortIDAsc}>
            Sort by Id: start-end
          </option>
          <option key={SortDirection.SortIDDesc}
                  value={SortDirection.SortIDDesc}>
            Sort by Id: end-start
          </option>
          <option key={SortDirection.SortNameAZ}
                  value={SortDirection.SortNameAZ}>
            Sort by Name: A-Z
          </option>
          <option key={SortDirection.SortNameZA}
                  value={SortDirection.SortNameZA}>
            Sort by Name: Z-A
          </option>
        </select>
      </Grid>
      <Grid container className={classes.root} spacing={4}>
        {pokemons
          .filter(filterPokemon)
          .sort(sortingLogic)
          .map((pokemon, index) => (
            <Grid key={pokemon.name} item xs={12} sm={12} md={6} lg={4}>
              <PokemonCard key={index} pokemon={pokemon}/>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default PokemonList;
