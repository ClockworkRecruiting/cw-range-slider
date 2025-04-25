# cw-range-slider

A highly customizable range and single slider component for React with TypeScript support, dark mode compatibility, and flexible styling options.


## Features

- 🎛️ **Dual Mode** - Supports both range and single slider configurations
- 🛠️ **Customizable** - Control colors, formatting, steps, and more
- 📱 **Responsive** - Works on all screen sizes
- 💅 **Stylish** - Clean, modern UI with smooth animations
- 🏷️ **Type Safe** - Built with TypeScript for better developer experience
- ⚡ **Performance** - Optimized with React hooks and minimal re-renders

## Installation

```bash
npm install cw-range-slider
# or
yarn add cw-range-slider
# or
pnpm add cw-range-slider
```

### 🔧 Core Props

Props Reference
Prop	Type	Default	Description
Core Props			
min	number	0	Minimum slider value
max	number	100	Maximum slider value
step	number	1	Increment step size
isRange	boolean	true	true for range slider, false for single slider
defaultValues	number | [number, number]	min or [min, max]	Initial value(s)
onChange	(value: number | [number, number]) => void	-	Callback when value changes
disabled	boolean	false	Disable the slider
Appearance			
sliderColor	'grey' | 'red' | 'dark-orange' | 'light-orange' | 'green' | 'default' | string	'default'	Active track color
sliderColorMapping	Record<string, string>	See below	Custom color mapping
marks	{ [key: number]: string }	{}	Custom marks below slider
Formatting			
unit	string	'default'	Value formatting type
formatters	{ [key: string]: (val: number) => string }	See below	Custom formatting functions