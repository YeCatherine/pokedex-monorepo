import React from 'react';
import usePokemonCapture from '../../../../hooks/usePokemonCapture';
import IPokemonSimpleComponent from '../../../../types/IPokemonSimpleComponent';
import { Button, Image } from 'react-bootstrap';
import pokeball from '../../../../assets/pokeboll-closed.png';
import pokeballOpened from '../../../../assets/pokeball-opened.png';

/**
 * The capture button functional component.
 * @param props The button status.
 * @constructor of CaptureButton.
 */
const CaptureButton: React.FC<IPokemonSimpleComponent> = (props) => {
  const { setCapturedPokemons, checkCapturedPokemon } = usePokemonCapture();
  const { pokemon } = props;

  return (
    <Button color="success" className="capture-free-button" variant="light"
            onClick={() => setCapturedPokemons(pokemon)}>

      {checkCapturedPokemon(pokemon) ?
        <><Image alt="Free" src={pokeball}/><span>&nbsp;free</span></> :
        <><Image alt="Capture"
                 src={pokeballOpened}/><span>&nbsp;capture</span></>
      }
    </Button>);
};

export default CaptureButton;
