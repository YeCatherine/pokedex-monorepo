import React from 'react';

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
  active: boolean;
  paused: boolean;
  pause_scheduled: boolean;
};

export type formSearchType = {
  name: string;
  statuses: searchStatusType;
  isFetching?: boolean;
};

export type Context = {
  formState: formSearchType[];
  setFormState: React.Dispatch<React.SetStateAction<formSearchType[]>>;
};
