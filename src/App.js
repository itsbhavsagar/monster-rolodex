import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
// State fusion at legit slice
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '123eff',
        },
        {
          name: 'Frank',
          id: '123e2wff',
        },
        {
          name: 'Jacky',
          id: '123e56ff',
        },
        {
          name: 'Andrei',
          id: '123ef87f',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
