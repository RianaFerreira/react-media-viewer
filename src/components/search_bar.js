import React, { Component } from 'react';

// Define component
// functional component, some info goes in JSX comes out, not self-aware
// do not have state
// const SearchBar = () => {
//   // just return JSX
//   return <input />;
// };
// vs
// class-based component, has some internal record keeping
// class SearchBar extends React.Component {
//   // all class-based components must have a render method
//   render () {
//     return (<input />);
//   }
// }

// state is a plain JS object used to record and react to user events
// each class-based component has it's own state object
// every time state changes the compoent and any children re-render
// state needs to be initialized in the constructor


// ES6 class-based component syntax
class SearchBar extends Component {
  constructor(props) {
    // Component has its own constructor method, this calls the parent method
    super(props);

    // instantiate state with an object
    this.state = { term: '' };
  }

  render() {
    // return <input onChange={ this.onInputChange } />;
    // controlled form element - value is derived from component state
    // ES6 syntax for binding handler to self and updating state with input value
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value }) }/>
      </div>
    );
  }

  // listen for events that are triggered by the user interacting with the component
  // inlined ES6 syntax on input onChange property
  // onInputChange(event) {
  //   // event describes content of the event that was triggered
  //   console.log(event.target.value);
  // }
}

// Export the module
// expose a reference to the component that other components can use to render it
export default SearchBar;