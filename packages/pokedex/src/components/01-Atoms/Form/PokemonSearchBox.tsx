import React from 'react';
import IPokemonSearchBox from '../../../types/IPokemonSearchBox';

/**
 * Searches pokemon.
 *
 * @param {IPokemonSearchBox} props Pokemon list.
 *
 * @constructor The functional component of SearchBox.
 */
const PokemonSearchBox: React.FC<IPokemonSearchBox> = (props) => {
  return <input
    className="p-2 flex-grow-1"
    type="search"
    placeholder={props.placeholder}
    onChange={props.handleSearch}/>;
};

export default PokemonSearchBox;
