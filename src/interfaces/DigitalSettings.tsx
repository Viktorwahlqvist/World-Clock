type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type ClockColor = RGB | RGBA | HEX;

export type TextColor = ClockColor;

export default interface DigitalSettings {
  textColor: ClockColor;
}
