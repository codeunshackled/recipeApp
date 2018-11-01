import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes'; 

const API = '8845b93eff7aa762de8544c9a5075ae5';

class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName);
    const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API}&q=${recipeName}&count=10`);
    const data = await API_CALL.json();
    this.setState({
      recipes: data.recipes
    })
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
