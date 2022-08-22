import React, { useEffect, useState } from 'react';
import IPokemonData from '@/types/IPokemonData';
import { getIdFromURL } from '@/services/Common';
import PokemonListService from '@/services/pokemonListService';
import PokemonCard from '../PokemonCard';
import { ListGroup as Ul, ListGroupItem as Li } from 'react-bootstrap';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
/**
 * Item of chain evolution sequence.
 */
interface IEvolutionChainItem {
  species: IPokemonData | null;
  evolves_to: Array<IEvolutionChainItem>;
}

interface IEvolutionComponent {
  pokemon: IPokemonData;
  pokemonSpecies: IPokemonData;
}

/**
 * Retrieves evolution chain.
 * @param props The pokemon.
 * @constructor The functional component of EvolutionChain.
 */
const EvolutionChain: React.FC<IEvolutionComponent> = (props) => {
  const { pokemonSpecies } = props;
  const [evolution, setEvolution] = useState<Array<IPokemonData>>([]);

  useEffect(() => {
    // Get evolution id.
    if (pokemonSpecies.evolution_chain?.url) {
      const evolutionId = getIdFromURL(pokemonSpecies.evolution_chain?.url);
      if (typeof evolutionId === 'undefined') {
        return undefined;
      }

      PokemonListService.getEvolutionChain(evolutionId)
        .then((response: any) => {
          // Restructure chain.
          if (typeof response.data.chain === 'undefined') {
            return;
          }

          const evolutionChain = response.data.chain;
          const evolutionList: Array<IPokemonData> = [];
          if (typeof evolutionChain === 'undefined') {
            return;
          }

          (function getItem(chainItem: IEvolutionChainItem): any {
              if (chainItem.species) {
                evolutionList.push(chainItem.species);
                if (chainItem.evolves_to.length) {
                  getItem(chainItem.evolves_to[0]);
                }
              }
            }
          )(evolutionChain);
          setEvolution(evolutionList);

        })
        .catch((e: any) => {
          console.log(e);
        });
    }
  }, [pokemonSpecies]);

  /**
   * Get Evolution sequence.
   * @param {Array} evolution - List of related pokemons evolution.
   */
  if (evolution.length <= 1) {
    return null;
  }
  return (
    <>
      <h3>Evolution Chain</h3>
      <List>
      {/*<Ul horizontal className="card text-dark text-center">*/}
        {evolution.map((currentPokemon, index) => {
          return (<ListItemText>
            <PokemonCard
              key={index}
              pokemon={currentPokemon}/>
          </ListItemText>);
        })}
      {/*</Ul>*/}
      </List>
    </>
  );
};
export default EvolutionChain;
