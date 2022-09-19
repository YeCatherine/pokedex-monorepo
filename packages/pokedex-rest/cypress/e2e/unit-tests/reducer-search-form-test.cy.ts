// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

const { DEFAULT_SEARCH_PARAMS, FormEvent } = require('@/constants');
const { formSearchReducer } = require('@/reducers');

const defaultEvent = {
  target: {
    value: '',
    checked: false
  }
};

describe('Reducer | form search testing', () => {
  it('Check Text Reducer', () => {
    const state = DEFAULT_SEARCH_PARAMS;
    const action = {
      type: FormEvent.TEXT,
      event: defaultEvent
    };

    // Check that word will be updated.
    const testWord = 'hello world';
    // Check that statuses will not be changed.
    const statuses = state.statuses;
    action.event.target.value = testWord;

    const newState = formSearchReducer(state, action);
    //
    expect(newState.name).to.equal(testWord, 'Text Should be updated');
    expect(newState.statuses).to.equal(statuses, 'checkboxes should be the same');

    action.type = FormEvent.RESET;

    // Check Cleared state.
    const clearedState = formSearchReducer(state, action);
    expect(clearedState).to.equal(DEFAULT_SEARCH_PARAMS, 'Reset results');
  });

  it('Check checkboxes Reducer', () => {
    const state = DEFAULT_SEARCH_PARAMS;

    const action = {
      type: FormEvent.STATUS,
      event: defaultEvent
    };

    state.statuses['active'] = true;
    //action.event.target. = testWord;
    const newState = formSearchReducer(state, action);
    expect(newState.statuses['active']).to.equal(true);
    expect(newState.statuses['paused']).to.equal(false);
    expect(newState.statuses['pause_scheduled']).to.equal(false);

    action.type = FormEvent.RESET;

    // Check Cleared state.
    const clearedState = formSearchReducer(state, action);
    expect(clearedState).to.equal(DEFAULT_SEARCH_PARAMS, 'Reset results');
  });
});
