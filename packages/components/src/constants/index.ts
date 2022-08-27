/**
 * Base Form state.
 * Contains name and basic statuses.
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

/**
 * Form Event Enum
 *
 * @enum
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
