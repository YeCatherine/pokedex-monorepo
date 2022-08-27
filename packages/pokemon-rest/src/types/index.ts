/**
 * Shared typescript types.
 *
 * @module
 */
import React from 'react';

export interface IProgram {
  [key: string]: string;
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

export * from './ICaptureButton';
export * from './iGeneralPokemonDataItem';
export * from './IPokemonData';
export * from './IPokemonSimpleComponent';
