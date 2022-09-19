import React, { useEffect, useState } from 'react';
import { useDebounce } from '@monorepo/components/src/hooks/useDebounce/useDebounce';
import { useDataSource } from '@monorepo/components/src/hooks/useDataSource/useDataSource';
import { prepareProductsData } from '@monorepo/components/src/services/prepareData/prepareProductsData';
import { prepareUrlLink } from '@monorepo/form/src/services/prepareUrlLink/prepareUrlLink';

import { formSearchType, iProgramGrid } from '../../types';

/**
 * Inject Content into the
 *
 * @param Component
 *
 * @returns component with context values inside it.
 */
export function withContent(Component, searchCallback) {
  return function ComponentWithContent({ formState }) {
    const [preparedData, setPreparedData] = useState<iProgramGrid | null>({
      status: false
    });

    const debouncedFormState = useDebounce<formSearchType>(formState, 500);
    const href = prepareUrlLink(debouncedFormState);
    const data = useDataSource<iProgramGrid>(searchCallback, { href }, { status: false });

    useEffect(() => {
      const productTable = prepareProductsData(data);

      if (productTable.status) {
        setPreparedData(productTable);
      }
    }, [data]);
    return <Component preparedData={preparedData} />;
  };
}
