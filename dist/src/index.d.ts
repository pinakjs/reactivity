/**
 * @repup/reactivity - A lightweight, smaller javascript reactivity system.
 *
 * @author Anuj Kumar <thestackmastery@gmail.com>
 * @link https://github.com/thestackmastery/reactivity
 * @license MIT https://github.com/thestackmastery/reactivity/LICENSE
 * @version 1.0.0
 */
import type { Getter, ObserveFn, ObserveResult, Signal } from "../types";
/**
 * Create a `signal` by passing the initial value of the signal.
 * @param initialValue The initial value of the `signal`.
 * @param equals Either a boolean or a function which returns a boolean value.
 *               If set to `false` or evaluates to `false`, it will notify all its subscribers on any value change.
 * @returns An array containing two functions: a getter and a setter for the signal.
 */
export declare const createSignal: <T>(initialValue: T, equals?: boolean | ((prev: T, curr: T) => boolean)) => Signal<T>;
/**
 * Observe a `signal` inside a function and register the provided function
 * to run whenever the `signal` changes.
 * @param fn The function representing the signal being observed.
 * @param dummyFn An optional function to trigger the tracking of the `signal`.
 *                When provided, the changes are reacted based on the signal used inside 'dummyFn',
 *                otherwise, it reacts on the basis of 'signalUpdate' itself.
 * @returns The result of the `dummyFn` or `signalUpdate` function.
 */
export declare const observeSignal: <T>(fn: ObserveFn<T>, dummyFn?: ObserveFn<T> | undefined) => ObserveResult<T>;
/**
 * Get the values of `signals` without adding them as `subscriber`.
 * @param signalGetter The getter function of any `signal`.
 * @returns The value obtained from the `signal` without tracking it.
 *
 * @remarks
 * This function temporarily disables tracking of `signals` to obtain their values without adding them as `subscriber`.
 * It can be used when you want to access a `signal`'s value without triggering any side effects.
 */
export declare const untrackSignal: <T>(signalGetter: Getter<T>) => T;
/**
 * Change `signals` value without running the batch process.
 * @param fn A function which may change `signals`.
 */
export declare const withoutBatch: (fn: Function) => void;
