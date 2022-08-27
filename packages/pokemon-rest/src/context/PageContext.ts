import React, { createContext } from 'react';
import { formSearchType } from '@monorepo/components/src/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';

/**
 * Basic description of the Context type.
 */
export type Context = {
  formState: formSearchType;
  setFormState: React.Dispatch<React.SetStateAction<formSearchType>>;
};

/**
 * Default Context values.
 */
const defaultContent: Context = {
  formState: DEFAULT_SEARCH_PARAMS,
  setFormState: () => {},
};

export const PageContext = createContext<Context>(defaultContent);
