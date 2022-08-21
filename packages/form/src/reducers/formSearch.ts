import React from 'react';
import { DEFAULT_SEARCH_PARAMS, FormEvent } from '@/constants';

/**
 * Form Search Reducer Callback.
 *
 * @param state current form state
 * @param action form dispatcher action
 */
// :<{event:Event, type:FormEvent}>
export const formSearchReducer = (state, action) => {
  const event = action.event as React.ChangeEvent<HTMLInputElement>;
  const componentName = event.target.name;

  switch (action.type) {
    case FormEvent.STATUS:
      return {
        name: state.name,
        statuses: {
          ...state.statuses,
          [componentName]: event.target.checked,
        },
        isFetching: true,
      };

    case FormEvent.TEXT:
      return {
        name: event.target.value,
        statuses: state.statuses,
        isFetching: true,
      };

    case FormEvent.RESET:
      return DEFAULT_SEARCH_PARAMS;

    default:
      return state;
  }
};

/**
 * Handle Form Event.
 *
 * Used currying to simplify approach to simplify reusability.
 * Type is part of Form Event Enum to simplify visibility.
 *
 * @param type FormEvent
 * @param dispatch - formReducer dispatcher
 */
export const handleFormEvent =
  (type: FormEvent, dispatch) => (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type,
      event,
    });
