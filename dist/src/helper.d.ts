export declare const __DEV__ = false;
/**
 * Sets a property on an object with the specified key and value.
 * @param o - The object to which the property will be added.
 * @param key - The key for the new property.
 * @param value - The value for the new property.
 * @param writable - The value is writable or not
 * @returns The object with the new property added.
 */
export declare const def: <T>(o: object, key: PropertyKey, value: T, writable?: boolean) => object;
/**
 * Checks if a value is a function.
 * @param v - The value to check.
 * @returns True if the value is a function, otherwise false.
 */
export declare const isFunction: (v: any) => v is Function;
/**
 * Checks if a value is a string.
 * @param v - The value to check.
 * @returns True if the value is a string, otherwise false.
 */
export declare const isString: (v: any) => v is string;
/**
 * Checks if a value is a boolean.
 * @param v - The value to check.
 * @returns True if the value is a boolean, otherwise false.
 */
export declare const isBool: (v: any) => v is boolean;
/**
 * Always returns false.
 * @returns False.
 */
export declare const falsy: () => boolean;
/**
 * Compares two values for equality.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are equal, otherwise false.
 */
export declare const isEqual: (a: any, b: any) => boolean;
