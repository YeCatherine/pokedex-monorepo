/**
 * Shared typescript types.
 *
 * @module
 */
// import React from 'react';

export interface IProgram {
  id: string;
  currency: string;
  name: string;
  return_percentage: string;
  threshold: string;
  status: string;
  pause_at: string;
}

export interface iProgramGrid {
  columns?: any;
  rows?: IProgram[];
  status: boolean;
}

export type searchStatusType = {
  [key: string]: boolean;
};

export type formSearchType = {
  isFetching?: boolean;
  [key: string]: string | boolean | searchStatusType;
  // name: string;
  // statuses: searchStatusType;
};

//
// export type Context = {
//   formState: formSearchType[];
//   setFormState: React.Dispatch<React.SetStateAction<formSearchType[]>>;
// };
