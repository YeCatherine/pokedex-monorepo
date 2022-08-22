import React from 'react';
import NotCapturedPokemon from '../../02-Organisms/NotCapturedPokemon';
import CapturedPokemons
  from '../../03-Molecules/CapturedPokemons/CapturedPokemons';

const RightSidebar: React.FC = () => {
  return (
    <>
      <NotCapturedPokemon/>
      <hr/>
      <CapturedPokemons/>
    </>
  );
};
export default RightSidebar;