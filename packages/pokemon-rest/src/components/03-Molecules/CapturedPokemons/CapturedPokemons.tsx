import React from 'react';
import PokemonCard from '../../02-Organisms/PokemonCard/PokemonCard';
import usePokemonCapture from '../../../hooks/usePokemonCapture';

/**
 * Functional component for list of captured pokemon.
 * @param props Captured pokemon.
 * @constructor of CapturedPokemons.
 */
const CapturedPokemons: React.FC = (props) => {
  const { capturedPokemons } = usePokemonCapture();
  const list = capturedPokemons.map((currentPokemon, index) =>
    <PokemonCard key={index} pokemon={currentPokemon}/>
  );

  return (
    <>
      <h4>Captured</h4>
      <div
        className="list-group d-flex flex-wrap flex-row justify-content-center">{list}</div>
    </>
  );
};
export default CapturedPokemons;
