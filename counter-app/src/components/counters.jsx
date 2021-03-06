import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} id={counter.id}/>

        ))}
      </div>
    );
  }
}

export default Counters;
