/**
 * Program Search Component.
 * Profile form that handle all program operations.
 * @module
 */
import React, { useEffect, useReducer } from 'react';
import { TextField, Box, FormControl, FormGroup } from '@mui/material';
import { ClearButton, Checkboxes } from '@monorepo/components';
import { formSearchReducer, handleFormEvent } from '@/reducers';
import { FormEvent } from '@/constants';

/**
 * Program Search Form.
 *
 * Support Search by Text and filter by status operations.
 * Work with HOC "withContext"
 */
const ProgramSearch = ({ formState, setFormState }) => {
  const [formStateInternal, dispatch] = useReducer(formSearchReducer, formState);

  useEffect(() => {
    // Set only when different.
    if (formState !== formStateInternal) {
      setFormState(formStateInternal);
    }
  }, [formStateInternal]);

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" style={{ width: '100%' }}>
      <FormGroup row>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <ClearButton onClick={handleFormEvent(FormEvent.RESET, dispatch)} />
          <TextField
            id="outlined-basic"
            label="Search By Name"
            variant="outlined"
            name="name"
            value={formStateInternal.name}
            onChange={handleFormEvent(FormEvent.TEXT, dispatch)}
          />
        </Box>
        <Checkboxes
          state={formStateInternal.statuses}
          handleChange={handleFormEvent(FormEvent.STATUS, dispatch)}
        />
      </FormGroup>
    </FormControl>
  );
};

// @ts-ignore
export default ProgramSearch;
