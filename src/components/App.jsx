import { Component } from 'react';
import Searchbar from './Searchbar';

class App extends Component {
  state = {value:""};

  render() {
    return <Searchbar
      value={this.state.value} />;
  }
}


export default App;