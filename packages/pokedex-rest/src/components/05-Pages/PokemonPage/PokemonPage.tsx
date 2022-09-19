import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pokemonListService } from '@/services';
import { List as Ul, ListItemText as Li } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useGlobalContext } from '@/context/LanguageContext';
import { Spinner } from '@monorepo/components';
import EvolutionChain from '../../02-Organisms/EvolutionChain/EvolutionChain';
import PokemonCard from '../../02-Organisms/PokemonCard/PokemonCard';
import IPokemonData from '../../../types/IPokemonData';

/**
 * Outputs the list of pokemon weight, height, order, type name, abilities,
 * moves.
 * @param props The pokemon.
 * @constructor Functional component of pokemon page.
 */
export const PokemonPage: React.FC = (props) => {
  const params = useParams<any>();
  const [pokemon, setPokemon] = useState<IPokemonData>();
  const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonData>();
  const [name, setName] = useState<string>('');
  const { language } = useGlobalContext();

  useEffect(() => {
    pokemonListService
      .get(params.name)
      .then((response: any) => {
        setPokemon(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });

    pokemonListService
      .getSpecies(params.name)
      .then((response: any) => {
        setPokemonSpecies(response.data);
        const translatedName = response.data.names.filter(
          (lang) => lang.language.name === language
        );
        setName(translatedName[0].name ? translatedName[0].name : params.name);
      })
      .catch((e: any) => {
        console.warn(e);
      });
  }, [language, params.name]);

  if (typeof pokemon === 'undefined' || typeof pokemonSpecies === 'undefined') {
    return (
      <h1>
        <Spinner />
        Loading...
      </h1>
    );
  }

  return (
    <Container>
      <Box className="row">
        <Box className="pokemon">
          <h1>{`My name is "${pokemon.name}"`}</h1>
          <PokemonCard pokemon={pokemon} />
        </Box>
        <Box className="card card-header text-dark text-center">
          <h3>Base stats</h3>
          <Ul className="pokemon-base-stats flex-wrap">
            {pokemon.stats.map((st) => (
              <Li key={st.stat.name}>
                {st.stat.name} -{st.base_stat}
              </Li>
            ))}
          </Ul>
          <hr />
          <h3>Abilities</h3>
          <Ul className="pokemon-abilities flex-wrap">
            {pokemon.abilities.map((ability) => (
              <Li key={ability.ability.name}>{ability.ability.name}</Li>
            ))}
          </Ul>
          <hr />
          <h3>Properties</h3>
          <Ul className="pokemon-properties flex-wrap">
            <Li>{`weight - ${pokemon.weight}`}</Li>
            <Li>{`height - ${pokemon.height}`}</Li>
            <Li>{`order - ${pokemon.order}`}</Li>
          </Ul>
          <hr />
          <h3>Types</h3>
          <Ul className="pokemon-types flex-wrap">
            {pokemon.types.map((typ) => (
              <Li key={typ.type.name}>{typ.type.name}</Li>
            ))}
          </Ul>
          <hr />
        </Box>
      </Box>
      <Box className="row">
        <Box>
          <EvolutionChain pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
        </Box>
      </Box>
      <Box className="row">
        <Box>
          <h3>Moves</h3>
          <Ul className="pokemon-moves flex-wrap">
            {pokemon.moves.map((move) => (
              <Li key={move.move.name}>
                <Link to={`/move/${move.move.name}`}>
                  <h5>{move.move.name}</h5>
                </Link>
              </Li>
            ))}
          </Ul>
        </Box>
      </Box>
    </Container>
  );
};

export default PokemonPage;
