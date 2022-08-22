import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { toTitleCase } from '../../../../../services';

type StatusCheckboxProps = {
  name: string;
  value: boolean;
  handleChange: (event: any) => void;
};
/**
 * Component - Status Checkbox
 * @param name Machine Name
 * @param value
 * @param handleChange
 * @constructor
 */
export default function StatusCheckbox({
  name,
  value,
  handleChange
}: StatusCheckboxProps) {

  const label: string = toTitleCase(name.replace('_', ' '));

  return (
    <FormControlLabel
      sx={{ justifyContent: 'space-around' }}
      key={name}
      control={
        <Checkbox id={`status-${name}`} checked={value} onChange={handleChange}
                  name={name}/>
      }
      label={label}
    />
  );
}
