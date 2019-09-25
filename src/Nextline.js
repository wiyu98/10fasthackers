import React, { Component } from 'react';
import Caret from "./Caret"

const maxLength = (window.innerWidth - 200) / 11

class Nextline extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      text: "",
      numChars: 0
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
      numChars: e.target.value.length
    })
  }

  // Ensures the user cannot click and edit middle of the input field
  handleClick() {
    const input = document.getElementById("nextline")
    input.selectionStart = input.selectionEnd = input.value.length
  }

  render() {
    return (
      <div>
        >> <input
          id="nextline"
          className="line"
          maxLength={maxLength}
          onChange={this.handleChange}
          onClick={this.handleClick}
          style={{ width: this.state.numChars + "ch" }}
          autoFocus
          /><Caret />
      </div>
    );
  }
}

export default Nextline;
