import React, { useState, useEffect } from 'react'

const ColorHook = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(50)

  const RandomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <main>
        <section>
          <div
            style={{
              backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`
            }}
            className="box"
          />
          <h1>Color Picker</h1>
          <p>
            Current Color: HSL {hue}, {saturation},{lightness}
          </p>

          <div className="hue-picker">
            <h2>Hue</h2>
            <input
              type="range"
              className="slider"
              max="360"
              value={hue}
              onChange={e => {
                setHue(e.target.value)
              }}
            />
          </div>

          <div className="saturation-picker">
            <h2>Saturation</h2>
            <input
              type="range"
              className="slider"
              value={saturation}
              onChange={e => {
                setSaturation(e.target.value)
              }}
            />
          </div>

          <div className="lightness-picker">
            <h2>Lightness</h2>
            <input
              type="range"
              className="slider"
              value={lightness}
              onChange={e => {
                setLightness(e.target.value)
              }}
            />
          </div>

          <div>
            <button onClick={() => RandomColor()}>Random Color</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default ColorHook
