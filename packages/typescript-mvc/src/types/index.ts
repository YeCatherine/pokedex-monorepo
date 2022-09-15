/**
 * Types.
 *
 * @file
 */

/**
 * Declaration of Host Add Data item.
 */
export type HostAppDataType = {
  name: string;
  contributors: string[];
  version: number;
  apdex: number;
  host: string[];
};

/**
 * Element click event.
 */
export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

/**
 * Declaration of CLickEvent.
 */
export type ClickEventHandler = (e: MouseEvent) => {};

/**
 * Declaration of Host Grouped Type Item.
 */
export type HostGroupedTypeItem = {
  name: string;
  version: number;
  app_key: number;
  apdex: number;
};

/**
 * Declaration of the final prepared hosts array.
 */
export type HostGroupedType = {
  [host: string]: HostGroupedTypeItem[];
};
