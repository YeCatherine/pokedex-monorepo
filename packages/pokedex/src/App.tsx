import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
// import {Route, Switch} from "react-router-dom";
import PokemonList from "./Components/Pages/PokemonList";
import PokemonPage from "./Components/Pages/PokemonPage";
import PokemonMovePage from "./Components/Pages/PokemonMovePage";
import Page404 from "./Components/Pages/Page404";

/**
 * The App functional component.
 * @constructor
 */
function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
        <Route path="/move/:name" element={<PokemonMovePage />} />
        <Route element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
