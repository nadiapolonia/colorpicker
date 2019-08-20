import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: 50,
    userInput: '',
    hueInput: '',
    saturationInput: '',
    lightnessInput: ''
  }

  saveUserHueInput = event => {
    console.log(event.target.value, 'Hue')
    this.setState({
      hueInput: event.target.value,
      hue: this.state.hueInput
    })
  }
  saveUserSaturationInput = event => {
    console.log(event.target.value, 'Saturation')
    this.setState({
      saturationInput: event.target.value,
      saturation: this.state.saturationInput
    })
  }
  saveUserLightnessInput = event => {
    console.log(event.target.value, 'Lightness')
    this.setState({
      lightnessInput: event.target.value,
      lightness: this.state.lightnessInput
    })
  }

  randomHue = event => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100)
    })
  }

  render() {
    return (
      <main>
        <div
          style={{
            backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${
              this.state.lightness
            }%)`
          }}
          className="box"
        />

        <h1>Color Picker</h1>
        <p>
          Current Color: HSL {this.state.hue}, {this.state.saturation},{' '}
          {this.state.lightness}
        </p>

        <div className="hue-picker">
          <h2>Hue</h2>
          <input
            type="range"
            className="slider"
            max="360"
            value={this.state.hue}
            onChange={this.saveUserHueInput}
          />
        </div>

        <div className="saturation-picker">
          <h2>Saturation</h2>
          <input
            type="range"
            className="slider"
            value={this.state.saturation}
            onChange={this.saveUserSaturationInput}
          />
        </div>

        <div className="lightness-picker">
          <h2>Lightness</h2>
          <input
            type="range"
            className="slider"
            value={this.state.lightness}
            onChange={this.saveUserLightnessInput}
          />
        </div>
        <div>
          <button onClick={this.randomHue}>Random Color</button>
        </div>

        <footer
          style={{
            backgroundColor: `hsl(${this.hueRandom},${this.saturationRandom}%,${
              this.lightnessRandom
            }%)`
          }}
          className="box2"
        />
      </main>
    )
  }
}

export default App
