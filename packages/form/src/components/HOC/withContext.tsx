import * as React from 'react';
import { FormContext } from '@monorepo/components/src/context';

/**
 * Inject Content into the
 *
 * @param Component
 *
 * @returns component with context values inside it.
 */
export default function withContext(Component) {
  return function ComponentWithContext(props) {
    return (
      <FormContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />}
      </FormContext.Consumer>
    );
  };
}
