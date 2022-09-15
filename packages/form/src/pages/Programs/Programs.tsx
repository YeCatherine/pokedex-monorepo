import React from 'react';
import {
  DataTable,
  serverResouce,
  withContent,
  withContext
} from '@monorepo/components';

import { ProgramSearch } from '@/components';

const WrapProgramSearch = withContext(ProgramSearch);

// Wrap Page data with Context and ServerFunction.
const WrapProgramsTable = withContext(withContent(DataTable, serverResouce));

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
      <WrapProgramSearch/>
      <WrapProgramsTable/>
    </>
  );
};
