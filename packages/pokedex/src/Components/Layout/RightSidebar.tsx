import React from "react";
import NotCapturedPokemon from "../UI/NotCapturedPokemon";
import CapturedPokemons from "../UI/CapturedPokemons";

const RightSidebar: React.FC = () => {
  return (
    <>
      <NotCapturedPokemon />
      <hr />
      <CapturedPokemons />
    </>
  );
};
export default RightSidebar;
