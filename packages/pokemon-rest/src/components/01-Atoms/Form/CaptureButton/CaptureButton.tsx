import React from 'react';
import usePokemonCapture from '@/hooks/usePokemonCapture';
import IPokemonSimpleComponent from '@/types/IPokemonSimpleComponent';
import { Button } from '@mui/material';

export const CaptureToggler = ({ pokemon }) => {
  // <img alt="Free" src={pokeball}/>
  // <img alt="Capture" src={pokeballOpened}/>
  const { checkCapturedPokemon } = usePokemonCapture();

  if (checkCapturedPokemon(pokemon)) {
    return (<><span>&nbsp;free</span></>);
  }
  return (<><span>&nbsp;capture</span></>);

};

/**
 * The capture button functional component.
 * @param props The button status.
 * @constructor of CaptureButton.
 */
export const CaptureButton: React.FC<IPokemonSimpleComponent> = (props) => {
  const { setCapturedPokemons } = usePokemonCapture();
  const { pokemon } = props;

  return (
    <Button className="capture-free-button"
            onClick={() => setCapturedPokemons(pokemon)}>
      <CaptureToggler pokemon={pokemon}/>

    </Button>);
};

export default CaptureButton;
