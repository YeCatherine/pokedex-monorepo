import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DataLoading } from '@monorepo/components';
import { serverResouce, useDataSource, useDebounce } from '@monorepo/components/src/hooks';
import { prepareProductsData } from '@monorepo/components/src/services';
import { formSearchType } from '@/types';

import { prepareUrlLink } from '@/services';

import { GridColumns } from '@mui/x-data-grid/models/colDef/gridColDef';

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

const ProgramsTable = ({ preparedProducts }) => {
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
