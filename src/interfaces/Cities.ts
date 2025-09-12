export type TimeZone = `${string}/${string}`;

export default interface Cities {
  city: string;
  country: string;
  countryCode: string;
  timeZone: TimeZone;
  hour12: boolean;
  defaultpic?: boolean;
}
//  Omit so we don't have to type hour12 when we submit a new timeZone
export type newTimeZone = Omit<Cities, "hour12">;
