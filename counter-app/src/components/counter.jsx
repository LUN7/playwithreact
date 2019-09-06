import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h4>Index : {this.props.id}</h4>
        <div className={this.getClass()}>{this.state.count}</div>
        <button onClick={this.incment} className="btn btn-secondary btn-sm m-1">
          +
        </button>
        <button
          onClick={this.decreasment}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
      </div>
    );
  }

  getClass() {
    let classOfDisplay = "badge m-2 ";
    classOfDisplay +=
      this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classOfDisplay;
  }

  incment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreasment = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default Counter;
