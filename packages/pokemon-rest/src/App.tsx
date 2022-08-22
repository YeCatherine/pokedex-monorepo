import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary, Page404 } from '@monorepo/components';
import Layout from '@/components/04-Templates/Layout/Layout';
import { formSearchType } from '@/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { PageContext } from '@/context';
import PokemonList from '@/components/05-Pages/PokemonList';
import NotCapturedPokemon from '@/components/02-Organisms/NotCapturedPokemon';
import CapturedPokemons from '@/components/03-Molecules/CapturedPokemons/CapturedPokemons';
import PokemonPage from '@/components/05-Pages/PokemonPage';
import PokemonMovePage from '@/components/05-Pages/PokemonMovePage';

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
            <Switch>
              <Route path="/" exact>
                <PokemonList/>
              </Route>
              <Route path="/pokemon/:name">
                <PokemonPage/>
              </Route>
              <Route path="/move/:name">
                <PokemonMovePage/>
              </Route>
              <Route component={Page404}/>
            </Switch>
          </Layout>
        </PageContext.Provider>
      </ErrorBoundary>
    );
  }
;

export default App;
