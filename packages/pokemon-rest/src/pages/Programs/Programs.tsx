import React from 'react';
import { ProgramSearch, ProgramsTable } from '@/components';
import withContext from '@/components/HOC/withContext';

const WrapProgramSearch = withContext(ProgramSearch);
const WrapProgramsTable = withContext(ProgramsTable);

/**
 * Programs page.
 *
 * Consists of 2 main components ProgramsSearch and ProgramTable.
 * Search updates global form state.
 * Table - shows data according current form state
 *
 * @constructor
 */
export const Programs = () => {
  return (
    <>
      <WrapProgramSearch />
      <WrapProgramsTable />
    </>
  );
};
