import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
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
    );
}

export default App;
