import React, { useState } from 'react';
import {
  AppHeader,
  ErrorBoundary,
  formSearchType,
  Layout
} from '@monorepo/components';
import { FormContext } from '@monorepo/components/src/context';
import { Link, useRoutes } from 'react-router-dom';
import { Programs as ProgramsPage } from '@/pages';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { Container } from '@mui/material';
import { Counter } from './features/counter/Counter';

const DashboardMessages = () => <h1>DashboardMessages</h1>;
const DashboardTasks = () => <h1>DashboardTasks</h1>;
const AboutPage = () => <h1>About</h1>;

function Navigation() {
  return (
    <Container>
      <Link to={'/'}>Home</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/table'}>Table</Link>
    </Container>
  );
}


const Dashboard = () => (
  <div className="App">
    <header className="App-header">
      <Counter />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  </div>
);

/**
 * Main App.
 *
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <ProgramsPage />
    },
    {
      path: '/table',
      element: <ProgramsPage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    }
]);

  const [formState, setFormState] = useState<formSearchType>(
    DEFAULT_SEARCH_PARAMS);
  return (
    <ErrorBoundary>
      <FormContext.Provider value={{ formState, setFormState }}>
        <Layout header={<AppHeader/>} top={<Navigation/>}>{element}</Layout>
      </FormContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
