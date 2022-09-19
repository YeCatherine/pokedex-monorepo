import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

//import { Layout } from '@monorepo/components';
// import Layout from '@/Layout';
import { Container } from '@mui/material';
import Layout from './components/04-Templates/Layout';

//import { ErrorBoundary } from
// '@monorepo/components/src/components/05-Pages/ErrorBoundary/ErrorBoundary';
import { Link, useRoutes } from 'react-router-dom';
function Navigation() {
  return (
    <Container>
      <Link to={'/'}>Home</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/team'}>AboutPage</Link>
    </Container>
  );
}

const Homepage = () => <h1>Homepage</h1>;

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    { path: 'team', element: <AboutPage /> }
  ]);

  return <Layout top={<Navigation />}>{element}</Layout>;
}
const AboutPage = () => <h1>About</h1>;

const Dashboard = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
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

export default App;
