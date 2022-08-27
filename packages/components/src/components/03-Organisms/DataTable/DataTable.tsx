import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DataLoading } from '@monorepo/components';
// import {iProgramGrid} from '@/types';
// import { GridColumns } from '@mui/x-data-grid/models/colDef/gridColDef';

export const DataTable = ({ preparedData: preparedData }) => {

  if (!preparedData.status) {
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
            columns={preparedData.columns}
            rows={preparedData.rows}
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
