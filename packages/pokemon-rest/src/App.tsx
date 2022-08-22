import React, { useState } from 'react';
import { ErrorBoundary } from '@monorepo/components';
import Layout from '@/components/04-Templates/Layout/Layout';
import { formSearchType } from '@/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { PageContext } from '@/context';
import PokemonList from './components/05-Pages/PokemonList';
import NotCapturedPokemon from './components/02-Organisms/NotCapturedPokemon';
import CapturedPokemons
  from './components/03-Molecules/CapturedPokemons/CapturedPokemons';

/**
 * Main App.
 *
 * @return {JSX.Element}
 * @constructor
 */
const App = () => {
    const [formState, setFormState] = useState<formSearchType>(
      DEFAULT_SEARCH_PARAMS);

    const SidebarContent = () => (
      <>
        <NotCapturedPokemon/>
        <hr/>
        <CapturedPokemons/>
      </>
    );

    return (
      <ErrorBoundary>
        <PageContext.Provider value={{ formState, setFormState }}>
          <Layout sidebar={<SidebarContent/>}>
            <PokemonList/>
          </Layout>
        </PageContext.Provider>
      </ErrorBoundary>
    );
  }
;

export default App;
