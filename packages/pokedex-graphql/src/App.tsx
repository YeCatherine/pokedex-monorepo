import React from 'react';
import { Filters } from './components/02-Molecules/Filters';
import { PokemonCardsList } from './components/03-Organisms/PokemonCardsList';
import pokemonLogo from './assets/pokemon-logo.png';
import { fetchPokemon } from './services/graphQLUtils';
// import {DataLoading} from '@monorepo/components'
import Layout from './components/04-Templates/Layout';
import PokemonListPage from './pages/PokemonListPage';
export default function App() {
  return (<PokemonListPage/>);
}
