import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/04-Templates/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import PokemonList from "./components/05-Pages/PokemonList";
import PokemonPage from "./components/05-Pages/PokemonPage";
import PokemonMovePage from "./components/05-Pages/PokemonMovePage";
import Page404 from "./components/05-Pages/Page404";

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
