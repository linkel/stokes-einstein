import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./App.css";

class Vertical extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 25
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <br />
            <br />
            <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
              <g fill="#647156">
                <circle cx="420.9" cy="300" r={value} />
              </g>
            </svg>
            <h1 className="App-title">It's a resizeable particle!</h1>
          </header>
        </div>

        <div ClassName="App">
          <div className="slider orientation-reversed">
            <div className="slider-group">
              <div className="slider-vertical">
                <Slider
                  min={1}
                  max={200}
                  value={value}
                  orientation="vertical"
                  onChange={this.handleChange}
                />
                <div className="value">{value}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vertical;
