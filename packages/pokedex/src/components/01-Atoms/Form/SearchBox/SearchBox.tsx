import React from 'react';
// import ISearchBox from '../../../../types/ISearchBox';

/**
 * The ISearchBox type interface.
 */
export type SearchBoxType = {
  placeholder: string;
  handleSearch: (e) => void;
}

/**
 * Searches pokemon.
 *
 * @param {SearchBoxType} props Pokemon list.
 *
 * @constructor The functional component of SearchBox.
 */
export const SearchBox: React.FC<SearchBoxType> = (props) => {
  return <input
    className="p-2 flex-grow-1"
    type="search"
    placeholder={props.placeholder}
    onChange={props.handleSearch}/>;
};

export default SearchBox;
