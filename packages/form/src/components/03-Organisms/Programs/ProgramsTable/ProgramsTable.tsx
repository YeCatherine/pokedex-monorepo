import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { formSearchType } from '@/types';
import { DataLoading } from '@monorepo/components';
import { prepareUrlLink } from '@/services';
import { useDebounce } from '@/hooks/useDebounce/useDebounce';
import { GridColumns } from '@mui/x-data-grid/models/colDef/gridColDef';
import useDataSource, { serverResouce } from '@/hooks/useDataSource/useDataSource';
import { prepareProductsData } from '@monorepo/components/src/services';

/**
 * Program Table component.
 *
 * @param formState - state of the form search
 *
 * @constructor
 */
export interface IProgram {
  [key: string]: string;
}

export interface iProgramGrid {
  columns?: GridColumns;
  rows?: IProgram[];
  status: boolean;
}

const ProgramsTable = ({ formState }) => {
  const [preparedProducts, setPreparedProducts] = useState<iProgramGrid | null>(
    { status: false });
  const debouncedFormState = useDebounce<formSearchType>(formState, 500);
  const href = prepareUrlLink(debouncedFormState);
  const data = useDataSource<iProgramGrid>(serverResouce, { href },
    { status: false });

  useEffect(() => {
    // (async () => {
    // const data = await fetch(href).then((response) => response.json());
    const productTable = prepareProductsData(data);

    if (productTable.status) {
      setPreparedProducts(productTable);
    }
    // })();
  }, [data]);

  if (!preparedProducts.status) {
    return <DataLoading/>;
  }

  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto'
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
