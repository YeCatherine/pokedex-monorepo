import React from 'react';
import { Box } from '@mui/material';
import { StatusCheckbox } from '../../../../components';

type CheckboxesProps = {
  state: { [key: string]: boolean };
  handleChange: (event: any) => void;
};

export const Checkboxes = ({ state, handleChange }: CheckboxesProps) => {
  return (
    <Box
      id="status-checkboxes"
      sx={{
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-end'
      }}
    >
      {Object.entries(state).map(([name, value]) => (
        <StatusCheckbox key={name} name={name} value={value}
                        handleChange={handleChange}/>
      ))}
    </Box>
  );
};

export default Checkboxes;
