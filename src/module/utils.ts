/**
 * Given an array and a key function, create a map where the key is the value that
 * gets returned when each item is pushed into the function. Accumulate
 * items in an array that have the same key
 * @param array
 * @param criterion
 * @return
 */
export function groupBy<T, R>(array: T[], criterion: (value: T) => R): Map<R, T[]> {
    const result = new Map<R, T[]>();
    for (const elem of array) {
        const key = criterion(elem);
        if (result.get(key) === undefined) {
            result.set(key, [elem]);
        } else {
            result.get(key)
                .push(elem);
        }
    }
    return result;
}

/**
 * Return a new object that combines all the keys and values from
 * both. If both have the same key, assign the value of the merge function.
 * Example:
 *     // returns {a: 3, b: 5, c: 0}
 *     combineObjects({a: 3, b: 4}, {b: 1, c: 0}, (a, b) => a+b)
 * @param first
 * @param second
 * @param mergeFunction if duplicate keys exist, both values
 * are passed into this function to return the result
 * @return
 */
export function combineObjects<K extends keyof any, V>(
    first: Record<K, V> | {},
    second: Record<K, V> | {},
    mergeFunction: (first: V, second: V) => V,
): Record<K, V> {
    const combinedKeys = new Set([
        ...(Object.keys(first)),
        ...(Object.keys(second)),
    ]);

    const combinedObject = {} as Record<K, V>;
    for (const name of combinedKeys) {
        if (name in first && name in second) {
            combinedObject[name] = mergeFunction(first[name], second[name]);
        } else if (name in first) {
            combinedObject[name] = first[name];
        } else if (name in second) {
            combinedObject[name] = second[name];
        }
    }
    return combinedObject;
}

export type Optional<T> = T | null | undefined;

/**
 * Returns true if the string is null, undefined or only consists of 1..n spaces
 */
export function isBlank(string: Optional<string>) {
    return string === null || string === undefined || string.trim() === '';
}

/**
 * Parses a string, number, null or undefined into a Number
 * @param value
 * @return parsed value or undefined/null if either was provided or
 * undefined if it couldn't be parsed as a number
 */
export function toNumber(value: Optional<string> | Optional<number>): Optional<number> {
    if (value === null || value === undefined || typeof value === 'number') {
        return value as Optional<number>;
    }
    const result = parseInt(value, 10);
    if (Number.isNaN(result)) {
        return undefined;
    }
    return result;
}

/**
 * Used as a function reference
 */
export function add(x: number, y: number): number {
    return x + y;
}


/**
 * Adds a + if positive, nothing if 0 or - if negative
 */
export function addSign(number: number): string {
    if (number < 0) {
        return `${number}`;
    }
    if (number > 0) {
        return `+${number}`;
    }
    return '0';
}