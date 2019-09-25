import React, { Component } from 'react';
import Textline from "./Nextline"

class Textbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: []
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{color: "green"}}>>> [SUCCESS] You have successfully penetrated the system</div>
        <div style={{color: "orange"}}>>> [WARNING] Your keystrokes are being monitored</div>

        {this.state.lines.map(line => <div key={line}>>> {line}</div>)}
        <Textline />
      </div>
    );
  }
}

export default Textbox;
