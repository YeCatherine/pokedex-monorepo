import React from 'react';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
/**
 * @module ClearButton
 */

/**
 * @const Button
 * @param onClick
 * @constructor
 */
export const ClearButton = ({ onClick }) => {
  return <Button startIcon={<ClearIcon />} name="reset" aria-label="Reset" onClick={onClick} />;
};

export default ClearButton;
