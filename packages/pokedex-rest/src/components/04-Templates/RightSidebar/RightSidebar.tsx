import React from 'react';
import RandomPokemon from '../../02-Organisms/RandomPokemon/RandomPokemon';
import CapturedPokemons from '../../03-Molecules/CapturedPokemons/CapturedPokemons';

const RightSidebar: React.FC = () => {
  return (
    <>
      <RandomPokemon />
      <hr />
      <CapturedPokemons />
    </>
  );
};

export default RightSidebar;
