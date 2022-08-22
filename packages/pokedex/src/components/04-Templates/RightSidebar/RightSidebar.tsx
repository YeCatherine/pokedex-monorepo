import React from "react";
import NotCapturedPokemon from "../../01-Atoms/UI/NotCapturedPokemon";
import CapturedPokemons from "../../01-Atoms/UI/CapturedPokemons";

const RightSidebar: React.FC = () => {
    return (
        <>
            <NotCapturedPokemon/>
            <hr/>
            <CapturedPokemons/>
        </>
    )
};
export default RightSidebar;
