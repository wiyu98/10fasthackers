import React, { Component } from 'reactn';
import Textbox from './Textbox';

class App extends Component {
  constructor(props) {
    super(props);
  }

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
