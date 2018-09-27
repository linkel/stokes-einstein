import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./App.css";

class Vertical extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      diffusioncoeff: 49,
      value: 50,
      boltz: 1.38064852 * 10 ** -23,
      kelvin: 298.15,
      sixpi: 6 * 3.14159,
      viscosity: 8.9 * 10 ** -4
    };
  }

  handleChange = diffusioncoeff => {
    this.setState({
      diffusioncoeff: diffusioncoeff,
      boltz: 1.38064852 * 10 ** -23,
      kelvin: 298.15,
      sixpi: 6 * 3.14159,
      viscosity: 8.9 * 10 ** -4,
      value:
        ((this.state.boltz * this.state.kelvin) /
          (this.state.sixpi *
            this.state.viscosity *
            (diffusioncoeff * 10 ** -11))) *
        10 ** 11
    });
  };

  render() {
    const { value } = this.state;
    const { boltz } = this.state;
    const { kelvin } = this.state;
    const { sixpi } = this.state;
    const { viscosity } = this.state;
    const { diffusioncoeff } = this.state;

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <br />
            {(value * 0.1).toFixed(2)} Angstroms
            <br />
            <svg
              className="App-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 841.9 1295.3"
            >
              <g fill="#647156">
                <circle cx="420.9" cy="300" r={value} />
              </g>
            </svg>
            <h1 className="App-title">It's a resizeable particle!</h1>
          </header>
        </div>

        <div className="App">
          <div className="slider orientation-reversed">
            <div className="slider-group">
              <div className="slider-vertical">
                <div>
                  <br />
                  Translational Diffusion Coefficient
                </div>
                <Slider
                  min={1}
                  max={100}
                  value={diffusioncoeff}
                  orientation="vertical"
                  onChange={this.handleChange}
                />
                <div className="value">
                  {diffusioncoeff} x 10^-11 meters squared per second
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vertical;
