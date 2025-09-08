type HexColor = `#${string}`;
type RGBColor = `rgb(${number}, ${number}, ${number})`;
type ClockColor = HexColor | RGBColor;

export type TextColor = ClockColor;

export default interface AnalogSettings {
  // textColor: ClockColor;
  borderColor: ClockColor;
  backgroundColor: ClockColor;
}
