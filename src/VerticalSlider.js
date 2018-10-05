import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./App.css";
import "typeface-raleway";
import MathJax from "react-mathjax";

const tex = `r_h = \\frac{kT}{6 \\pi \\eta D}`;

class Vertical extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.handleButtonRelease = this.handleButtonRelease.bind(this)
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

  handleButtonPress () {
    this.buttonPressTimer = setTimeout(() => alert('long press activated'), 500);
  }

  handleButtonRelease () {
    clearTimeout(this.buttonPressTimer);
  }

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
            Current Particle Size: {(value * 0.1).toFixed(2)} Angstroms
            <br />
            <br />
            <svg
              className="Particle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 1600"
            >
              <defs>
                <radialGradient id="redGold">
                  <stop offset="10%" stopColor="#fcd237" />
                  <stop offset="95%" stopColor="#9e3f09" />
                </radialGradient>
              </defs>
              <g fill="#647156">
                <circle fill="url(#redGold)" cx="400" cy="800" r={value} />
              </g>
            </svg>
          </header>
          <div className="AppEq">
            <MathJax.Provider>
              <div>
                <br />
                Stokes-Einstein equation:
                <MathJax.Node formula={tex} />
              </div>
            </MathJax.Provider>
          </div>
        </div>
        <div className="AppSlide">
          <div className="slider orientation-reversed">
            <div className="slider-group">
              <div className="slider-vertical">
                <div>
                  <MathJax.Provider>
                    <div>
                      {" "}
                      <MathJax.Node inline formula={"D"} />
                    </div>
                  </MathJax.Provider>
                  Translational Diffusion Coefficient
                </div>
                <Slider
                  min={1}
                  max={100}
                  value={diffusioncoeff}
                  orientation="vertical"
                  onChange={this.handleChange}
                  onMouseDown={this.handleButtonPress}
                  onMouseUp={this.handleButtonRelease}
                />
                <div className="value">
                  {diffusioncoeff} x 10^-11 m^2 per second
                </div>
              </div>
              <div className="slider-vertical">
                <div>
                  <MathJax.Provider>
                    <div>
                      {" "}
                      <MathJax.Node inline formula={"T"} />
                    </div>
                  </MathJax.Provider>
                  Temperature
                </div>
                <Slider
                  min={1}
                  max={500}
                  value={kelvin}
                  orientation="vertical"
                  onChange={this.handleChangeKelvin}
                />
                <div className="value">{kelvin} Kelvin</div>
              </div>
              <div className="slider-vertical">
                <div>
                  <MathJax.Provider>
                    <div>
                      {" "}
                      <MathJax.Node inline formula={"\\eta"} />
                    </div>
                  </MathJax.Provider>
                  Viscosity (Dynamic Viscosity)
                </div>
                <Slider
                  min={1}
                  max={100}
                  value={viscosity}
                  orientation="vertical"
                  onChange={this.handleChangeViscosity}
                />
                <div className="value">{viscosity} x 10^-4 Pa*s</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Explanatory">
          <h1>Theory</h1>
          <p>
            Have you ever heard of Brownian motion? Brownian motion is the
            random movement of particles caused by collisions with the other
            molecules around them. The speed of this Brownian motion is affected
            by the particle size, viscosity of the fluid medium, and the
            temperature. The smaller the particle, the speedier the Brownian
            motion. Think of tiny mosquitos whizzing around, versus bumbling
            flies whirling lazily about.
          </p>

          <p>
            This means that if we know the velocity of the Brownian motion, the
            temperature, and the viscosity, we can calculate the particle size.
            This knowledge is exploited in dynamic light scattering, a technique
            used in chemistry and physics to measure the hydrodynamic size of a
            molecule. This allows formulation scientists in the pharmaceutical
            industry to monitor drug molecule sizes to track aggregation or
            micelle formation.
          </p>

          <p>
            By using a dynamic light scattering instrument to measure the
            backscatter of light off of particles in solution and to run
            autocorrelation calculations on the results, we obtain a value for
            the translational diffusion coefficient, D. This is plugged into the
            Stokes-Einstein equation along with viscosity and temperature to
            obtain particle size results.
          </p>

          <p>
            The sliders above control each indicated variable, and changing the
            sliders demonstrates each variable's influence on particle size.
            Note that as your diffusion coefficient increases (i.e., your
            "speed"), the particle is measured to be smaller--this is because
            smaller particles move faster. As your temperature rises, the
            particle is measured to be bigger--this is because at a higher
            temperature, if a particle moves the same speed as another one at a
            lower temperature, the particle must be bigger (since it needs more
            kinetic energy to get to the same speed). Lastly, as your viscosity
            rises, the particle is measured to be smaller--this is because at a
            higher viscosity, if a particle moves the same speed as another one
            at a lower viscosity, the particle must be bigger.
          </p>
        </div>
      </div>
    );
  }
}

export default Vertical;
