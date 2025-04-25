import React, { useCallback, useEffect, useState } from 'react'
import './styles/index.scss'
import {
  RangeSliderProps,
  SLIDER_COLOR_MAPPING,
  DEFAULT_FORMATTERS,
  SliderColor
} from './types'

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  unit = 'default',
  isRange = true,
  defaultValues = isRange ? [min, max] : min,
  onChange,
  disabled = false,
  marks = {},
  sliderColor = 'default',
  sliderColorMapping = SLIDER_COLOR_MAPPING,
  formatters = DEFAULT_FORMATTERS
}) => {
  const [values, setValues] = useState<number | [number, number]>(defaultValues)
  const [dragging, setDragging] = useState({ left: false, right: false })
  
  const formatValue = useCallback((value: number) => {
    const formatFn = formatters[unit] || formatters.default
    return formatFn(value)
  }, [unit, formatters])

  useEffect(() => {
    const handleMouseUp = () => {
      setDragging({ left: false, right: false })
    }

    if (dragging.left || dragging.right) {
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging.left, dragging.right])

  const tooltipStyle = useCallback(
    (value: number) => ({
      left: `${((value - min) / (max - min)) * 100}%`,
      opacity: dragging.left || dragging.right ? 1 : 0,
      display: dragging.left || dragging.right ? 'block' : 'none',
      border: `1px solid ${sliderColorMapping[sliderColor as SliderColor] || sliderColorMapping.default}`
    }),
    [dragging.left, dragging.right, min, max, sliderColor, sliderColorMapping]
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, thumb?: number) => {
    const newValue = Number(event.target.value)

    if (isRange && thumb !== undefined) {
      setValues((prev) => {
        if (Array.isArray(prev)) {
          const newValues = [...prev] as [number, number]
          newValues[thumb] = newValue
          if (newValues[0] > newValues[1]) return prev // Prevent crossover
          if (onChange) onChange(newValues)
          return newValues
        }
        return prev
      })
    } else {
      setValues(newValue)
      if (onChange) onChange(newValue)
    }
  }

  return (
    <div className={`slider ${sliderColor && sliderColor !== 'default' ? `slider--${sliderColor}` : ''} ${disabled ? 'slider--disabled' : ''}`}>
      <div className="slider__track-wrapper">
        <div
          className="slider__track"
          style={{
            background: isRange && Array.isArray(values)
              ? `linear-gradient(to right, #ddd ${((values[0] - min) / (max - min)) * 100}%, ${
                  sliderColorMapping[sliderColor as SliderColor] || sliderColorMapping.default
                } ${((values[0] - min) / (max - min)) * 100}%, ${
                  sliderColorMapping[sliderColor as SliderColor] || sliderColorMapping.default
                } ${((values[1] - min) / (max - min)) * 100}%, #ddd ${((values[1] - min) / (max - min)) * 100}%)`
              : `linear-gradient(to right, ${
                  sliderColorMapping[sliderColor as SliderColor] || sliderColorMapping.default
                } ${((Number(values) - min) / (max - min)) * 100}%, #ddd ${
                  ((Number(values) - min) / (max - min)) * 100
                }%)`
          }}
        >
          {isRange && <span className="slider__track--dot-left" />}
          <span className="slider__track--dot-right" />
        </div>

        {!isRange ? (
          <>
            <input
              type="range"
              disabled={disabled}
              min={min}
              max={max}
              step={step}
              value={values as number}
              className="slider__input slider__input--single"
              onChange={handleChange}
              onMouseDown={() => setDragging({ left: true, right: false })}
            />
            <div style={tooltipStyle(values as number)} className="slider__tooltip">
              {formatValue(values as number)}
            </div>
          </>
        ) : (
          <>
            <input
              type="range"
              disabled={disabled}
              min={min}
              max={max}
              step={step}
              value={(values as [number, number])[0]}
              className="slider__input"
              onChange={(e) => handleChange(e, 0)}
              onMouseDown={() => setDragging({ left: true, right: false })}
            />
            <div style={tooltipStyle((values as [number, number])[0])} className="slider__tooltip">
              {formatValue((values as [number, number])[0])}
            </div>

            <input
              type="range"
              disabled={disabled}
              min={min}
              max={max}
              step={step}
              value={(values as [number, number])[1]}
              className="slider__input"
              onChange={(e) => handleChange(e, 1)}
              onMouseDown={() => setDragging({ left: false, right: true })}
            />
            <div style={tooltipStyle((values as [number, number])[1])} className="slider__tooltip">
              {formatValue((values as [number, number])[1])}
            </div>
          </>
        )}
      </div>
      <div className="slider__values">
        <span>{marks[min]}</span>
        <span>{marks[max]}</span>
      </div>
    </div>
  )
}

export default RangeSlider