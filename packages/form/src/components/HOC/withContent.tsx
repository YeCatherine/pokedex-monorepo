import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDebounce } from '@monorepo/components/src/hooks/useDebounce/useDebounce';
import { formSearchType } from '@/types';
import { useDataSource } from '@monorepo/components/src/hooks/useDataSource/useDataSource';
import { prepareProductsData } from '@monorepo/components/src/services/prepareData/prepareProductsData';
import { iProgramGrid } from '@/components/03-Organisms/Programs/ProgramsTable/ProgramsTable';
import { prepareUrlLink } from '../../services/prepareUrlLink/prepareUrlLink';

/**
 * Inject Content into the
 *
 * @param Component
 *
 * @returns component with context values inside it.
 */
export function withContent(Component, searchCallback) {
  return function ComponentWithContent({ formState }) {
    const [preparedProducts, setPreparedProducts] = useState<iProgramGrid | null>({
      status: false,
    });
    const debouncedFormState = useDebounce<formSearchType>(formState, 500);
    const href = prepareUrlLink(debouncedFormState);
    const data = useDataSource<iProgramGrid>(searchCallback, { href }, { status: false });

    useEffect(() => {
      const productTable = prepareProductsData(data);

      if (productTable.status) {
        setPreparedProducts(productTable);
      }
    }, [data]);
    return <Component preparedProducts={preparedProducts} />;
  };
}
