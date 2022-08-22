import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Spinner } from '@monorepo/components';
import PokemonImage from './PokemonImage';
import CaptureButton from '../01-Atoms/Form/CaptureButton/CaptureButton';
import IPokemonSimpleComponent from '@/types/IPokemonSimpleComponent';

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
    <Card
          className="pokemon-card card text-dark text-center">
      <CardActionArea>
        <PokemonImage pokemon={pokemon}/>
        <CardContent>
          <Typography className="pokemon-name" gutterBottom variant="h5"
                      component="div">
            {pokemon.name}
            {pokemon.id &&
            <><br/><span className="pokemon-id">(#{pokemon.id})</span></>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CaptureButton pokemon={pokemon}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


export default PokemonCard;
