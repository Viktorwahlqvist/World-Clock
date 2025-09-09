
export function saveToLocal<T>(itemKey: string, value: T): void {
    const stored = localStorage.getItem(itemKey);
    const timeZones = stored ? JSON.parse(stored) : [];

    timeZones.push(value);
    localStorage.setItem(itemKey, JSON.stringify(timeZones))
}

export function getFromStorage<T>(itemKey:string ) : T[] {
    const stored = localStorage.getItem(itemKey);
    return stored ? JSON.parse(stored) as T[]: []
}