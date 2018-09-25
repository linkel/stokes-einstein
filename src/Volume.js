import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './App.css';
import logo from './logo.svg';

class Vertical extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 25,
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }


  render () {
    const { value } = this.state
    return (
        <div>
        <div className="App">
        <header className="App-header">
          <br></br>
          <br></br>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's a particle!</h1>
        </header>
      </div>
      
        <div ClassName='App'>
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value}
              orientation='vertical'
              onChange={this.handleChange}
            />
            <div className='value'>{value}</div>
          </div>

        </div>
      </div>
      </div>
      </div>

    )
  }
}

export default Vertical