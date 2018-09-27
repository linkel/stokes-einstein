import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./App.css";
import pic from './stokeseinstein.png';

class Vertical extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      diffusioncoeff: 49,
      value: 50,
      boltz: 1.38064852 * 10 ** -23,
      kelvin: 298.15,
      sixpi: 6 * 3.14159,
      viscosity: 8.9
    };
  }

  handleChange = diffusioncoeff => {
    this.setState({
      diffusioncoeff: diffusioncoeff,
      boltz: 1.38064852 * 10 ** -23,
      kelvin: this.state.kelvin,
      sixpi: 6 * 3.14159,
      viscosity: 8.9,
      value:
        ((this.state.boltz * this.state.kelvin) /
          (this.state.sixpi *
            (this.state.viscosity * 10 ** -4) *
            (diffusioncoeff * 10 ** -11))) *
        10 ** 11
    });
  };

  handleChangeKelvin = kelvin => {
    this.setState({
      diffusioncoeff: this.state.diffusioncoeff,
      boltz: 1.38064852 * 10 ** -23,
      kelvin: kelvin,
      sixpi: 6 * 3.14159,
      viscosity: 8.9,
      value:
        ((this.state.boltz * kelvin) /
          (this.state.sixpi *
            (this.state.viscosity * 10 ** -4) *
            (this.state.diffusioncoeff * 10 ** -11))) *
        10 ** 11
    });
  };

  handleChangeViscosity = viscosity => {
    this.setState({
      diffusioncoeff: this.state.diffusioncoeff,
      boltz: 1.38064852 * 10 ** -23,
      kelvin: this.state.kelvin,
      sixpi: 6 * 3.14159,
      viscosity: viscosity,
      value:
        ((this.state.boltz * this.state.kelvin) /
          (this.state.sixpi *
            (viscosity * 10 ** -4) *
            (this.state.diffusioncoeff * 10 ** -11))) *
        10 ** 11
    });
  };

  render() {
    const { value } = this.state;
    const { kelvin } = this.state;
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
              viewBox="0 0 840 1300"
            >
              <g fill="#647156">
                <circle cx="420" cy="650" r={value} />
              </g>
            </svg>
            <h1 className="App-title"><img src={pic}></img></h1>
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
                  {diffusioncoeff} x 10^-11 m^2 per second
                </div>
              </div>
              <div className="slider-vertical">
                <div>
                  <br />
                  Temperature
                </div>
                <Slider
                  min={1}
                  max={500}
                  value={kelvin}
                  orientation="vertical"
                  onChange={this.handleChangeKelvin}
                />
                <div className="value">
                  {kelvin} Kelvin
                </div>
              </div>
              <div className="slider-vertical">
                <div>
                  <br />
                  Viscosity (Dynamic Viscosity)
                </div>
                <Slider
                  min={1}
                  max={100}
                  value={viscosity}
                  orientation="vertical"
                  onChange={this.handleChangeViscosity}
                />
                <div className="value">
                  {viscosity} x 10^-4 Pa*s
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
