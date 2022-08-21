import React, { createContext } from 'react';
import { formSearchType } from '@/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';

export type Context = {
  formState: formSearchType;
  setFormState: React.Dispatch<React.SetStateAction<formSearchType>>;
};

const defaultContent: Context = {
  formState: DEFAULT_SEARCH_PARAMS,
  setFormState: () => {},
};

export const PageContext = createContext<Context>(defaultContent);

export default PageContext;
