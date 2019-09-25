import React, { Component } from 'react';
import Textbox from './Textbox';

class App extends Component {
  focus() {
    document.getElementById("nextline").focus()
  }

  render() {
    return (
      <div className="body-content" onClick={this.focus}>
        <Textbox />
      </div>
    );
  }
}

export default App;
