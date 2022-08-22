import React, { useState } from 'react';
import {
  ErrorBoundary,
  Layout,
  SearchBox,
  Spinner
} from '@monorepo/components';
// import { Programs as ProgramsPage } from '@/pages';
import { formSearchType } from '@/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { PageContext } from '@/context';
// import PokemonList from './components/05-Pages/PokemonList';
/**
 * Main App.
 *
 * @return {JSX.Element}
 * @constructor
 */
const App = () => {
  const [formState, setFormState] = useState<formSearchType>(
    DEFAULT_SEARCH_PARAMS);

  return (
    <ErrorBoundary>
      <PageContext.Provider value={{ formState, setFormState }}>
        <Layout>
          {/*<PokemonList/>*/}
          <h1>Test</h1>
          <Spinner/>
          <SearchBox handleSearch={() => console.log()} placeholder={'test'}/>
        </Layout>
      </PageContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
