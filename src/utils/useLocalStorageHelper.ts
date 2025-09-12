// Saves a value to localstorage with a sspecified key.
// function is generic so it can store any type of value.
export function saveToLocalTimeZone<T>(itemKey: string, value: T): void {
  const stored = localStorage.getItem(itemKey);
  const timeZones = stored ? JSON.parse(stored) : [];

  timeZones.push(value);
  localStorage.setItem(itemKey, JSON.stringify(timeZones));
}

// an own localstorage for color since we dont want it to keep the old value.
export function saveToLocalColor<T>(itemKey: string, value: T): void {
  localStorage.setItem(itemKey, JSON.stringify(value));
}
// gets a value from localstorage by key.
// Generic ensures that the returned value has correct type.
export function getFromStorage<T>(itemKey: string): T[] {
  const stored = localStorage.getItem(itemKey);
  return stored ? (JSON.parse(stored) as T[]) : [];
}
