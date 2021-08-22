import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

// import  {isTokenExpired} from "./services/Util";

import PokemonList from './pages/pokemon/PokemonList';
import MyPokemonList from './pages/pokemon/MyPokemonList';
import PokemonDetails from './pages/pokemon/PokemonDetails';

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route { ...rest } render={ matchProps => (
            <DefaultLayout>
                <Component { ...matchProps } />
            </DefaultLayout>
        ) }/>
    );
};

class Root extends Component {
    render() {
        // const token = JSON.parse(localStorage.getItem('token'));
        return (
            <Router>
                <Switch>
                  <PublicRoute exact path="/pokemons" component={ PokemonList }/>
                  <PublicRoute exact path="/my-pokemons" component={ MyPokemonList }/>
                  <PublicRoute exact path="/pokemons/:name" component={ PokemonDetails }/>
                  <PublicRoute path="/" component={ PokemonList }/>
                </Switch>
            </Router>
        );
    }
}

export default Root;
