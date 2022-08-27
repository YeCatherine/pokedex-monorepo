import React from 'react';
import { ProgramSearch, ProgramsTable } from '@/components';
import { withContent, withContext } from '@/components/HOC';
import { serverResouce } from '@monorepo/components/src/hooks/useDataSource/useDataSource';

const WrapProgramSearch = withContext(ProgramSearch);
// Wrap Page data with Context and ServerFunction.
const WrapProgramsTable = withContext(withContent(ProgramsTable, serverResouce));

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
