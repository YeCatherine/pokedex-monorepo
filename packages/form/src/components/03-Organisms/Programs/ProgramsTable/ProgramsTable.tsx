import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { formSearchType, iProgramGrid } from '@/types';
import { DataLoading } from '@monorepo/components';
import { prepareProductsData, prepareUrlLink } from '@monorepo/components/src/services';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';

/**
 * Program Table component.
 *
 * @param formState - state of the form search
 *
 * @constructor
 */
const ProgramsTable = ({ formState }) => {
  const [preparedProducts, setPreparedProducts] = useState<iProgramGrid | null>({ status: false });
  const debouncedFormState = useDebounce<formSearchType>(formState, 500);

  useEffect(() => {
    const href = prepareUrlLink(debouncedFormState);

    (async () => {
      const data = await fetch(href).then((response) => response.json());
      const productTable = prepareProductsData(data);

      if (productTable.status) {
        setPreparedProducts(productTable);
      }
    })();
  }, [debouncedFormState]);

  if (!preparedProducts.status) {
    return <DataLoading />;
  }

  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            className="programs-datagrid"
            columns={preparedProducts.columns}
            rows={preparedProducts.rows}
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
export default ProgramsTable;
