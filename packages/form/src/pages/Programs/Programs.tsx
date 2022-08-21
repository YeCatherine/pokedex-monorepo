import React from 'react';
import { ProgramSearch, ProgramsTable } from '@/components';

/**
 * Programs page.
 *
 * Consists of 2 main components ProgramsSearch and PragramTable.
 * Search updates global form state.
 * Table - shows data according current form state
 *
 * @constructor
 */
export const Programs = () => {
  return (
    <>
      <ProgramSearch />
      <ProgramsTable />
    </>
  );
};
