/**
 * Base Form state.
 */
export const DEFAULT_SEARCH_PARAMS = {
  name: '',
  statuses: {
    active: false,
    paused: false,
    pause_scheduled: false,
  },
  isFetching: true,
};

// @ts-ignore
export const FETCH_SUCCESS_STATUS = 'success';

/**
 * Form Event Enum
 *
 * Define actions:
 *  - Reset - to reset form
 *  - Status - to update statuses
 *  - Text to update text
 */
export enum FormEvent {
  RESET = 'reset',
  STATUS = 'status',
  TEXT = 'text',
}
