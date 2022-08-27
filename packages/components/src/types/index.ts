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

/**
 * iProgramGrid
 */
export interface iProgramGrid {
  columns?: GridColumns;
  rows?: IProgram[];
  status: boolean;
}

export type searchStatusType = {
  [key: string]: boolean;
};

/**
 * Form Search type.
 */
export type formSearchType = {
  isFetching?: boolean;
  [key: string]: string | boolean | searchStatusType;
  // name: string;
  // statuses: searchStatusType;
};

