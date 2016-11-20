// Enable access to logic required in other JS modules ref node_modules
// Library Dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Component Dependencies
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Google Youtube API Key
const API_KEY = 'AIzaSyDvrQm4LR_fl475KxvIsHPokdsLWLJk95k';

// Example of how the youtube-api-search works
// YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
//   console.log(data);
// });

// Create new component. It should produce HTML
// const - ES6 declares a variable with a constant value. Don't expect this constant value to change.
// this creates a class, a factory that produces instances of the components that are rendered to the DOM
// <App /> is an instance of the class
// const App = function () {
//   // function returns JSX - produces HTML that will be rendered into the DOM
//   // Babel transpiles the JSX into JS
//   // Webpack builds all the JS into a single file
//   return <div>Hi!</div>;
// }

// ES6 function keyword syntax
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// class-based component
// App needs to keep track of the state so it needs to be a class-based component
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // asynchoronous api request - component should not render until the data has been received
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // ES6 syntax - videos: videos not needed when key and property are the same variable name
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={ term => this.videoSearch(term) } />
        // pass videos as props to the video list
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={ this.state.videos } />
      </div>
    );
  }  
}

// Add the new component's generated HTML to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));