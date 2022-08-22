import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IPokemonData from '../../types/IPokemonData';
import { pokemonListService } from '@/services';
import {
  Col,
  Container,
  ListGroup as Ul,
  ListGroupItem as Li,
  Row
} from 'react-bootstrap';
import EvolutionChain from '../02-Organisms/EvolutionChain/EvolutionChain';
import { useGlobalContext } from '@/context/Context';
import PokemonCard from '../02-Organisms/PokemonCard';
import { Spinner } from '@monorepo/components';

/**
 * Outputs the list of pokemon weight, height, order, type name, abilities,
 * moves.
 * @param props The pokemon.
 * @constructor Functional component of pokemon page.
 */
const PokemonPage: React.FC = (props) => {
  const params = useParams<any>();
  const [pokemon, setPokemon] = useState<IPokemonData>();
  const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonData>();
  const [name, setName] = useState<string>('');
  const { language } = useGlobalContext();

  useEffect(() => {
    pokemonListService.get(params.name)
      .then((response: any) => {
        setPokemon(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });

    pokemonListService.getSpecies(params.name)
      .then((response: any) => {
        setPokemonSpecies(response.data);
        const translatedName = response.data.names.filter(
          lang => lang.language.name === language);
        setName(
          (translatedName[0].name) ? translatedName[0].name : params.name);
      }).catch((e: any) => {
      console.warn(e);
    });
  }, [language, params.name]);

  if (typeof pokemon === 'undefined' || typeof pokemonSpecies ===
    'undefined') {
    return (
      <h1><Spinner/>Loading...</h1>);
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="pokemon">
            <h1>{`My name is "${name}"`}</h1>
            <PokemonCard pokemon={pokemon}/>
          </Col>
          <Col className="card card-header text-dark text-center">
            <h3>Base stats</h3>
            <Ul className="pokemon-base-stats flex-wrap" horizontal>
              {pokemon.stats.map(st => (
                <Li key={st.stat.name}>{st.stat.name} - {st.base_stat}</Li>))}
            </Ul>
            <hr/>
            <h3>Abilities</h3>
            <Ul className="pokemon-abilities flex-wrap" horizontal>
              {pokemon.abilities.map(ability => (
                <Li key={ability.ability.name}>{ability.ability.name}</Li>))}
            </Ul>
            <hr/>
            <h3>Properties</h3>
            <Ul className="pokemon-properties flex-wrap" horizontal>
              <Li>{`weight - ${pokemon.weight}`}</Li>
              <Li>{`height - ${pokemon.height}`}</Li>
              <Li>{`order - ${pokemon.order}`}</Li>
            </Ul>
            <hr/>
            <h3>Types</h3>
            <Ul className="pokemon-types flex-wrap" horizontal>
              {pokemon.types.map(typ => (
                <Li key={typ.type.name}>{typ.type.name}</Li>))}
            </Ul>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
            <EvolutionChain pokemon={pokemon}
                            pokemonSpecies={pokemonSpecies}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Moves</h3>
            <Ul className="pokemon-moves flex-wrap" horizontal>
              {pokemon.moves.map(move => (
                <Li key={move.move.name}>
                  <Link
                    to={`/move/${move.move.name}`}>
                    <h5>{move.move.name}</h5>
                  </Link>
                </Li>))}
            </Ul>
          </Col>
        </Row>


      </Container>
    </>);
};

export default PokemonPage;
