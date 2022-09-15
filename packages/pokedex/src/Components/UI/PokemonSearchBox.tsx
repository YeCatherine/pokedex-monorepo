import React from 'react';
import IPokemonSearchBox from '../../Types/IPokemonSearchBox';

/**
 * Searches pokemon.
 *
 * @param {IPokemonSearchBox} props Pokemon list.
 *
 * @constructor The functional component of PokemonSearchBox.
 */
const PokemonSearchBox: React.FC<IPokemonSearchBox> = (props) => {
  return <input
    className="p-2 flex-grow-1 pokemon-search-name"
    type="search"
    placeholder={props.placeholder}
    onChange={props.handleSearch}/>;
};

export default PokemonSearchBox;
