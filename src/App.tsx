import { useState } from 'react'
import RangeSlider from './components/RangeSlider'
import './App.scss'

function App() {
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80])
  const [singleValue, setSingleValue] = useState<number>(50)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      
      <h1>cw-range-slider Demo</h1>
      
      <section className="demo-section">
        <h2>Range Slider</h2>
        <div className="value-display">
          Current values: {rangeValue[0]} - {rangeValue[1]}
        </div>
        <RangeSlider
          min={0}
          max={100}
          defaultValues={rangeValue}
          onChange={setRangeValue}
          sliderColor={darkMode ? 'light-orange' : 'default'}
        />
      </section>

      <section className="demo-section">
        <h2>Single Slider</h2>
        <div className="value-display">Current value: {singleValue}</div>
        <RangeSlider
          min={0}
          max={100}
          isRange={false}
          defaultValues={singleValue}
          onChange={setSingleValue}
          sliderColor="green"
        />
      </section>

      <section className="demo-section">
        <h2>Currency Formatter</h2>
        <RangeSlider
          min={0}
          step={1000}
          max={1000000}
          unit="currency"
          marks={{ 
            0: '$0', 
            1000000: '$1M+' 
          }}
          sliderColor="red"
        />
      </section>

      <section className="demo-section">
        <h2>Disabled Slider</h2>
        <RangeSlider
          min={0}
          max={100}
          defaultValues={[30, 70]}
          disabled={true}
          sliderColor="dark-orange"
        />
      </section>
    </div>
  )
}

export default App
