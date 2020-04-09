import React from 'react';
import logo from './tinypotato.png';
import './App.css';

const dateIdeas = [
  'Go to Duke\'s Refresher',
  'Watch a movie',
  'Go to Soos',
  'Get Bubble Tea',
  'Go to Pai',
  'Bake something gluten-free',
  'Create a cocktail',
  'Take a coffee workshop',
  'Try a new fitness class',
  'Netflix and Chill'
]

var threeIdeas = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class DateIdea extends React.Component {
  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}

class ThreeDateIdeas extends React.Component {
  renderIdea(i) {
    return <DateIdea value={i} />
  }

  getThreeUniqueIdeas() {
    let ideas = dateIdeas.slice();
    shuffle(ideas);
    threeIdeas = ideas.slice(0,3);
  }

  render() {
    this.getThreeUniqueIdeas()
    return (
      <ul>
        {this.renderIdea(threeIdeas[0])}
        {this.renderIdea(threeIdeas[1])}
        {this.renderIdea(threeIdeas[2])}
      </ul>
    );
  }
}

function App() { 

  const dateIdeaList = dateIdeas.map((idea) =>
    <li>{idea}</li>
  );

  let randomIdea = '';

  function getNextRandomIdea() {
    randomIdea = dateIdeas[Math.floor(Math.random() * (dateIdeas.length))];
    alert(randomIdea)
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>I'm a tiny potato. You can do the thing.</h1>
        <h2>"What do you wanna do?"</h2>
      </header>

    <div className="App-body">
      <button onClick={getNextRandomIdea}>Pick 1 random idea</button>
      <h3>Three random date ideas:</h3>
      <ThreeDateIdeas />
      {/* <button onClick={() => pickThreeNewIdeas}>Pick 3 new ideas</button> */}
      <h3>Full list of ideas:</h3>
      <ul>{dateIdeaList}</ul>
    </div>
    </div>
  );
}

export default App;
