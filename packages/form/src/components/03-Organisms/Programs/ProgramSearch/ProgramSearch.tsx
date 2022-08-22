import React, { useEffect, useContext, useReducer } from 'react';
import { TextField, Box, FormControl, FormGroup } from '@mui/material';
import { ClearButton, SynchronizationIcon, Checkboxes } from '@monorepo/components';
import { PageContext } from '@/context';
import { formSearchReducer, handleFormEvent } from '@/reducers';
import { FormEvent } from '@/constants';

/**
 * Program Search Form.
 */
const ProgramSearch = () => {
  const { formState, setFormState } = useContext(PageContext);

  const [formStateInternal, dispatch] = useReducer(formSearchReducer, formState);

  useEffect(() => {
    setFormState(formStateInternal);
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
          <SynchronizationIcon loading={formState.isFetching} />
        </Box>
        <Checkboxes
          state={formStateInternal.statuses}
          handleChange={handleFormEvent(FormEvent.STATUS, dispatch)}
        />
      </FormGroup>
    </FormControl>
  );
};

export default ProgramSearch;
