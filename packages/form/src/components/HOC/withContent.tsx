import * as React from 'react';

/**
 * Inject Content into the
 *
 * @param Component
 *
 * @returns component with context values inside it.
 */
export default function withContent(Component) {
  return function ComponentWithContent({ formState }) {
    return (<Component formState={formState}/>);
  };
}
