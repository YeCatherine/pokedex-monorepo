import React from 'react';
import { Link } from 'react-router-dom';
import PokemonImage from './PokemonImage';
import CaptureButton from './CaptureButton';
import IPokemonSimpleComponent from '../../Types/IPokemonSimpleComponent';
import { Card } from 'react-bootstrap';
import Spinner from './Spinner';

/**
 * The pokemon card.
 *
 * @param props Pokemon.
 *
 * @constructor the functional component for pokemon card.
 */
const PokemonCard: React.FC<IPokemonSimpleComponent> = (props) => {
  const { pokemon } = props;
  if (!pokemon) {
    return <Spinner/>;
  }

  return (
    <Card style={{ width: '18rem' }}
          className="pokemon-card card text-dark text-center">
      <Card.Body>
        <Card.Title className="pokemon-name">
                    <span>
                        {pokemon.name}
                      {pokemon.id &&
                      <><br/><span
                        className="pokemon-id">(#{pokemon.id})</span></>}
                    </span>
        </Card.Title>
        <Card.Text>
          <Link className=""
                to={`/pokemon/${pokemon.name}`}>
            <PokemonImage pokemon={pokemon}/>
          </Link>
        </Card.Text>

        <CaptureButton pokemon={pokemon}/>
      </Card.Body>
    </Card>);
};

export default PokemonCard;
