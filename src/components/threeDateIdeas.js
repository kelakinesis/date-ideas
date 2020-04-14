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