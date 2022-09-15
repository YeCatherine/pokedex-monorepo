import * as React from 'react';
import { PageContext } from '@/context/PageContext';

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
      <PageContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />}
      </PageContext.Consumer>
    );
  };
}
