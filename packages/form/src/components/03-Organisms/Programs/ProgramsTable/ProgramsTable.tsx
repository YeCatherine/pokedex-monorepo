import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { PageContext } from '@/context';
import { iProgramGrid } from '@/types';
import { DataLoading } from '@/components';
import { FETCH_SUCCESS_STATUS } from '@/constants';
import { prepareProductsData } from '@/services';
import { usePrograms } from '@/hooks/usePrograms';

const ProgramsTable = () => {
  const { formState, setFormState } = useContext(PageContext);
  const [preparedProducts, setPreparedProducts] = useState<iProgramGrid | null>({ status: false });

  const { status, data, error, isFetching } = usePrograms(formState);

  useEffect(() => {
    if (status === FETCH_SUCCESS_STATUS && isFetching === false) {
      const productTable = prepareProductsData(data);
      if (productTable.status) {
        setPreparedProducts(productTable);
      }

      setFormState({
        ...formState,
        isFetching,
      });
    }
  }, [status, data, error, isFetching]);

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
