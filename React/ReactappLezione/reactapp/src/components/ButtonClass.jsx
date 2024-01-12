import { React, Component } from "react";

class ButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <button onClick={this.incrementCount}>
        il conteggio ButtonClass è {this.state.count}
      </button>
    );
  }
}

export default ButtonClass;
