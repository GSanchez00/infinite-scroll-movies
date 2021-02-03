import React from 'react';
import './App.css';
import PopularMovies from './Pages/PopularMovies'
import Movie from './Pages/Movie'
import Navigation from "./components/Navigation/Navigation";
import NotFound from './components/NotFound'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/popular" />
          <Route exact path="/popular" component={PopularMovies} />
          <Route path='/popular/:id' component={Movie}/>
          <Route path='/infinite-scroll-movies' component={PopularMovies}/>
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
