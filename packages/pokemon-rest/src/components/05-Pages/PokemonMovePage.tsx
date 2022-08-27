import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPokemonData } from '@/types';
import { pokemonListService } from '@/services';

import { List as Ul, ListItemText as Li } from '@mui/material';
import Container from '@mui/material/Container';
import PokemonCard from '../02-Organisms/PokemonCard/PokemonCard';

/**
 * Functional component for pokemon move page.
 * @param props Pokemon move name.
 * @constructor The functional component for pokemon move page.
 */
export const PokemonMovePage: React.FC = (props) => {
  const params = useParams<any>();
  const [move, setMove] = useState<IPokemonData>();

  /**
   * Gets all pokemon moves.
   */
  useEffect(() => {
    pokemonListService
      .getMove(params.name)
      .then((response: any) => {
        setMove(response.data);
      })
      .catch((e: any) => {
        console.warn(e);
      });
  }, [params.name]);

  /**
   * Retrieves the list of pokemon moves.
   * @param props The pokemon.
   * @constructor Functional component of pokemon moves.
   */
  const Move = (props) => {
    return (
      <>
        <h3>Related Pokemon</h3>
        <Container>
          <div className="list-group d-flex flex-wrap flex-row">
            {props?.move?.learned_by_pokemon &&
              props?.move?.learned_by_pokemon.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
              ))}
          </div>
        </Container>
      </>
    );
  };

  /**
   * Returns the move details.
   * @param props The move.
   * @constructor
   */
  const MoveDetailes = (props) => {
    const { move } = props;
    const traverseObject = ['contest_type', 'damage_class', 'generation', 'target', 'type'];
    if (!move) {
      return null;
    }
    return (
      <>
        <p className="card-header">{move.effect_entries && move.effect_entries[0].effect}</p>
        <div className="list-group d-flex flex-wrap flex-row justify-content-center">
          <Ul className="card-header text-dark text-center">
            <Li>
              <strong>
                Power-
                {move.power}
              </strong>
            </Li>
            {traverseObject.map((item) => (
              <Li>
                <strong>{item}</strong> -{move[item].name}
              </Li>
            ))}
          </Ul>
        </div>
      </>
    );
  };

  return (
    <div>
      <div>
        <h1>{`"${params.name}" move`}</h1>
        <MoveDetailes move={move} />
        <Move move={move} />
      </div>
    </div>
  );
};

export default PokemonMovePage;
