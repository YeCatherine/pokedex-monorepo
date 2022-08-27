import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary, Page404 } from '@monorepo/components';
import Layout from '@/components/04-Templates/Layout/Layout';
import { formSearchType } from '@monorepo/components/src/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { PageContext } from '@/context';
// import { , PokemonPage } from '@/components/05-Pages';
import RandomPokemon from '@/components/02-Organisms/RandomPokemon/RandomPokemon';
import CapturedPokemons from '@/components/03-Molecules/CapturedPokemons/CapturedPokemons';
import { DEFAULT_LANGUAGE, MyGlobalContext } from '@/context/LanguageContext';

/**
 * SidebarContent
 *
 * @return {JSX.Element}
 */
const SidebarContent = () => (
  <>
    <RandomPokemon />
    <hr />
    <CapturedPokemons />
  </>
);

const PokemonList = React.lazy(() => import('@/components/05-Pages/PokemonList/PokemonList'));
const PokemonMovePage = React.lazy(
  () => import('@/components/05-Pages/PokemonMovePage/PokemonMovePage'),
);
const PokemonPage = React.lazy(() => import('@/components/05-Pages/PokemonPage/PokemonPage'));
const PokemonTable = React.lazy(() => import('@/components/05-Pages/PokemonTable/PokemonTable'));

/**
 * Main App.
 *
 * @return {JSX.Element}
 * @constructor
 */
const App = () => {
  const [formState, setFormState] = useState<formSearchType>(DEFAULT_SEARCH_PARAMS);
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  return (
    <ErrorBoundary>
      <PageContext.Provider value={{ formState, setFormState }}>
        <MyGlobalContext.Provider value={{ language, setLanguage }}>
          <Suspense>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout sidebar={<SidebarContent />}>
                      <PokemonList />
                    </Layout>
                  }
                />
                <Route
                  path="/pokemon/:name"
                  element={
                    <Layout sidebar={<SidebarContent />}>
                      <PokemonPage />
                    </Layout>
                  }
                />
                <Route
                  path="/move/:name"
                  element={
                    <Layout sidebar={<SidebarContent />}>
                      <PokemonMovePage />
                    </Layout>
                  }
                />
                <Route
                  path="/captured"
                  element={
                    <Layout sidebar={<SidebarContent />}>
                      <PokemonTable />
                    </Layout>
                  }
                />
                <Route element={<Page404 />} />
              </Routes>
            </Router>
          </Suspense>
        </MyGlobalContext.Provider>
      </PageContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
