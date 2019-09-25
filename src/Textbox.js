import React, { Component } from 'reactn';
import Caret from "./Caret"

const maxLength = (window.innerWidth - 200) / 11

class Textbox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      lines: [
        {
          "text": "[SUCCESS] You have successfully penetrated the system",
          "color": "green"
        },
        {
          "text": "[WARNING] Your keystrokes are being monitored",
          "color": "orange"
        },
        {
          "text": "",
          "color": "white"
        }
      ],
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

  handleKeyDown(e) {
    if (e.key === 'Enter' && this.state.text !== "") {
      document.getElementById("nextline").value = ""

      var newLines = this.state.lines
      newLines.shift();
      
      newLines.push({
        "text": this.state.text,
        "color": "white"
      });
      
      this.setState({
        lines: newLines,
        text: "",
        numChars: 0
      })
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.lines.map(line =>
          <div style={{ color: line.color }} key={line.text}>
            >> {line.text}
          </div>
        )}
        <div>
          >> <input
            id="nextline"
            className="line"
            maxLength={maxLength}
            onChange={this.handleChange}
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            style={{ width: this.state.numChars + "ch" }}
            autoFocus
          /><Caret />
        </div>
      </div>
    );
  }
}

export default Textbox;
