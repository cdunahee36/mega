import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import WelcomeG from './components/WelcomeG';
import WelcomeW from './components/WelcomeW';
import WelcomeM from './components/WelcomeM';
import WelcomeJ from './components/WelcomeJ';
import SearchG from './components/SearchG';
import SearchW from './components/SearchW';
import SearchM from './components/SearchM';
import SearchJ from './components/SearchJ';
import ClearG from './components/ClearG';
import ClearW from './components/ClearW';
import ClearM from './components/ClearM';
import ClearJ from './components/ClearJ';
import DisplayG from './components/DisplayG';
import DisplayW from './components/DisplayW';
import DisplayM from './components/DisplayM';
import DisplayJ from './components/DisplayJ';
import About from './components/About';
import Nav from './components/Nav';

export default function App() {
  const [formFields, setFormFields] = useState({ input: "" , limit: ""});
  const [gifs, setGifs] = useState([])
  const [formWeather, setFormWeather] = useState({ input: ""});
  const [weather, setWeather] = useState([])
  const [formMovie, setFormMovie] = useState({ input: ""});
  const [movie, setMovie] = useState([])
  const [joke, setJoke] = useState([])
  
  const clearGifs = () => {
    setGifs([])
  }

  const clearWeather = () => {
    setWeather([])
  }

  const clearMovie = () => {
    setMovie([])
  }

  const clearJoke = () => {
    setJoke([])
  }

  const getGifs = async () => {
    try {
      const searchString = `https://api.giphy.com/v1/gifs/search?api_key=n1KJJd4OuR7OqooR0bsuUvS2hwBXOwDn&q=${formFields.input}&limit=${formFields.limit}&offset=0&rating=g&lang=en`
      const response = await fetch(searchString)
      const myStuff = await response.json()
      setGifs(myStuff.data)
    } 
      catch (err){
    }
  }

  const getWeather = async () => {
    try {
      const searchString = `https://api.openweathermap.org/data/2.5/weather?q=${formWeather.input}&units=Imperial&appid=c637f35cbbd54d5df03028c0eebbdc31`
      const response = await fetch(searchString)
      const myStuff = await response.json()
      setWeather(myStuff.main)
    } 
      catch (err){
    }
  }

  const getMovie = async () => {
    try {
      const searchString = `https://www.omdbapi.com/?t=${formMovie.input}&apikey=ff5ff98c&`
      const response = await fetch(searchString)
      const myStuff = await response.json()
      setMovie(myStuff)
    } 
      catch (err){
    }
  }

  const getJoke = async () => {
    try {
      const searchString = `https://official-joke-api.appspot.com/random_ten`
      const response = await fetch(searchString)
      const myStuff = await response.json()
      setJoke(myStuff[0])
    } 
      catch (err){
    }
  }

  //Joke API
  const handleSearch4 = (event) => {
    event.preventDefault();
    getJoke();
  }
  //Joke API

  //Movie API
  const handleSearch3 = (event) => {
    event.preventDefault();
    getMovie();
  }

  const handleInput3 = (event) => {
    setFormMovie({...formMovie, input: event.target.value})
  }
  //Movie API

  //Weather API
  const handleSearch2 = (event) => {
    event.preventDefault();
    getWeather();
  }

  const handleInput2 = (event) => {
    setFormWeather({...formWeather, input: event.target.value})
  }
  //Weather API

  //Giphy API
  const handleSearch = (event) => {
    event.preventDefault();
    getGifs();
  }

  const handleInput = (event) => {
    setFormFields({...formFields, input: event.target.value})
  }

  const handleLimit = (event) => {
    setFormFields({ ...formFields, limit: event.target.value });
  };
  //Giphy API


  

  return (
    <Router>
    <Nav />
    <Switch>
      <Route path="/giphy">
        <div>
        <WelcomeG/>
        <div class="container" id="gif-form">
          <div class="row" id="grow">
            <div class="col-sm">
              <SearchG submit={handleSearch} change={handleInput} limit={handleLimit} valueLim={formFields.limit} value={formFields.input}/>
            </div>
            <div class="col-sm">
              <ClearG onClick={clearGifs}/>
            </div>
          </div>
        </div>
        <br />
        <DisplayG gif={gifs} get={getGifs}/>
        </div>
      </Route>
      <Route path="/weather">
        <div>
        <WelcomeW/>
        <div class="container" id="gif-form">
          <div class="row" id="grow">
            <div class="col-sm">
              <SearchW submit={handleSearch2} change={handleInput2} value={formWeather.input}/>
            </div>
            <div class="col-sm">
              <ClearW onClick={clearWeather}/>
            </div>
          </div>
        </div>
        <br />
        <DisplayW weth={weather} getWeth={getWeather}/>
        </div>
      </Route>
      <Route path="/movies">
        <div>
        <WelcomeM/>
        <div class="container" id="gif-form">
          <div class="row" id="grow">
            <div class="col-sm">
              <SearchM submit={handleSearch3} change={handleInput3} value={formMovie.input}/>
            </div>
            <div class="col-sm">
              <ClearM onClick={clearMovie}/>
            </div>
          </div>
        </div>
        <br />
        <DisplayM mov={movie} getMovie={getMovie}/>
        </div>
      </Route>
      <Route path="/jokes">
        <div>
        <WelcomeJ />
        <div class="container" id="gif-form">
          <div class="row" id="grow">
            <div class="col-sm">
              <SearchJ submit={handleSearch4}/>
            </div>
            <div class="col-sm">
              <ClearJ onClick={clearJoke}/>
            </div>
          </div>
        </div>
        <br />
        <DisplayJ jo={joke} getJoke={getJoke}/>
        </div>
      </Route>
    </Switch>
  </Router>
   
  );
}