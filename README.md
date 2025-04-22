# cw-range-slider

A highly customizable range and single slider component for React with TypeScript support, dark mode compatibility, and flexible styling options.

![cw-range-slider demo](https://via.placeholder.com/1200x500/1a1a1a/ffffff?text=cw-range-slider+with+Dark+and+Light+Themes)

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

### Props Reference

```props
## Core Props
| Prop            | Type                              | Default            | Description                          |
|-----------------|-----------------------------------|--------------------|--------------------------------------|
| min             | number                            | 0                  | Minimum slider value                 |
| max             | number                            | 100                | Maximum slider value                 |
| step            | number                            | 1                  | Increment step size                  |
| isRange         | boolean                           | true               | true=range, false=single slider      |
| defaultValues   | number \| [number, number]       | min or [min, max]  | Initial value(s)                     |
| onChange        | (value: number \| [number, number]) => void | -       | Change callback                      |
| disabled        | boolean                           | false              | Disable the slider                   |

## Appearance Props
| Prop            | Type                              | Default            | Description                          |
|-----------------|-----------------------------------|--------------------|--------------------------------------|
| sliderColor     | 'grey' \| 'red' \| 'dark-orange' \| 'light-orange' \| 'green' \| 'default' \| string | 'default' | Active track color |
| sliderColorMapping | Record<string, string>         | See Default Colors | Custom color mapping                 |
| marks           | { [key: number]: string }         | {}                 | Custom marks below slider            |

## Formatting Props
| Prop            | Type                              | Default            | Description                          |
|-----------------|-----------------------------------|--------------------|--------------------------------------|
| unit            | string                            | 'default'          | Value formatting type                |
| formatters      | { [key: string]: (val: number) => string } | See Default Formatters | Custom formatting functions    |

```
## Default Colors
```
{
  grey: '#E3E3E3',       // Light grey
  red: '#fb657e',        // Vibrant red
  'dark-orange': '#CB764E', // Deep orange
  'light-orange': '#FA8C5A', // Bright orange
  green: '#50D087',      // Fresh green
  default: '#009CF6'     // Bright blue (default)
}
```

## Default Formatters
```
{
  // Basic number display
  default: (val: number) => val.toString(),
  
  // Currency formatting
  currency: (val: number) => {
    if (val >= 1000000) return `${Math.round(val/10000)/100}Mil`;
    if (val > 1000) return `${val/1000}k`;
    return val.toString();
  },
  
  // Percentage display
  percent: (val: number) => `${val}%`
}
```

## Preview
<img width="825" alt="image" src="https://github.com/user-attachments/assets/ad0a605f-ffb9-46d4-8c5c-24e8974fbfcc" />
