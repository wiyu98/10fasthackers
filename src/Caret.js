import React, { Component } from 'react';

class Caret extends Component {
  constructor(props) {
    super(props);

    this.blink = this.blink.bind(this);

    this.state = {
      on: true
    }
  }

  componentDidMount() {
    setInterval(this.blink, 500)
  }

  blink() {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <span>
        {this.state.on && <span>&#9646;</span>}
      </span>
    );
  }
}

export default Caret;
