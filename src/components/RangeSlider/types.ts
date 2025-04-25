export type SliderColor =
  | "grey"
  | "red"
  | "dark-orange"
  | "light-orange"
  | "green"
  | "default";

export interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  isRange?: boolean;
  defaultValues?: number | [number, number];
  onChange?: (values: number | [number, number]) => void;
  disabled?: boolean;
  marks?: Record<number, string>;
  sliderColor?: SliderColor | string;
  sliderColorMapping?: Record<string, string>;
  formatters?: Record<string, (val: number) => string>;
}

export const SLIDER_COLOR_MAPPING: Record<SliderColor, string> = {
  grey: "#E3E3E3",
  red: "#fb657e",
  "dark-orange": "#CB764E",
  "light-orange": "#FA8C5A",
  green: "#50D087",
  default: "#009CF6",
};

export const DEFAULT_FORMATTERS = {
  default: (val: number) => val.toString(),
  currency: (val: number) => {
    if (val >= 1000000) {
      return `${Math.round(val / 10000) / 100}Mil`;
    }
    if (val > 1000) {
      return `${val / 1000}k`;
    }
    return val.toString();
  },
  percent: (val: number) => `${val}%`,
};
