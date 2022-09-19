import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Link, useRoutes } from 'react-router-dom';
//import { Layout } from '@monorepo/components';
import Layout from '@/Layout';
import { Container } from '@mui/material';


//import { ErrorBoundary } from
// '@monorepo/components/src/components/05-Pages/ErrorBoundary/ErrorBoundary';

function Navigation() {
  return (<Container>
    <Link to={'/'}>Dashboard</Link>
    <Link to={'/team'}>AboutPage</Link>
  </Container>);
}

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Dashboard/>,
      children: [
        {
          path: 'messages',
          element: <DashboardMessages/>
        },
        { path: 'tasks', element: <DashboardTasks/> }
      ]
    },
    { path: 'team', element: <AboutPage/> }
  ]);

  return (
    <Layout
      top={<Navigation/>}
    >
      {element}
    </Layout>);
}

const DashboardMessages = () => (<h1>DashboardMessages</h1>);
const DashboardTasks = () => (<h1>DashboardTasks</h1>);
const AboutPage = () => (<h1>About</h1>);
// const Dashboard = () => (<h1>Dashboard</h1>);

const Dashboard = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <Counter/>
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
