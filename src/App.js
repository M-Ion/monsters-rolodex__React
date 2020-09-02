import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    
    // When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    this.state = {
      monsters: [ ],
      searchField: '',
    };

  }
  
  // componentDidMount() is invoked immediately after a component is mounted (ro. montat) (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // The json() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON.
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // destructuring <=> const monsters = this.state.monsters; const searchField = this.state.searchField;
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    // setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters..'
          handleChange={ this.handleChange }
        />

        <CardList monsters={ filteredMonsters } />
      </div>
    )
  } 
}

export default App;
