export type SliderColor = "grey" | "red" | "dark-orange" | "light-orange" | "green" | "default";
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
export declare const SLIDER_COLOR_MAPPING: Record<SliderColor, string>;
export declare const DEFAULT_FORMATTERS: {
    default: (val: number) => string;
    currency: (val: number) => string;
    percent: (val: number) => string;
};
