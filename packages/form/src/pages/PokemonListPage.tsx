import React from 'react';
import { fetchPokemon } from '@/services/graphQLUtils';
import { Layout } from '@monorepo/components';
import { Filters } from '@/components/02-Molecules/Filters';
import pokemonLogo from '@/assets/pokemon-logo.png';
import { PokemonCardsList } from '@/components/03-Organisms/PokemonCardsList';

export const PokemonListPage = () => {
  const [pokedexData, setPokedexData] = React.useState(null);
  const [pokemonTypeFilter, setPokemonTypeFilter] = React.useState('Any');
  const [capturedFilter, setCapturedFilter] = React.useState('Any');

  const fetchPokedexData = React.useCallback(async () => {
    const { errors, data } = await fetchPokemon({
      pokemonType: pokemonTypeFilter,
      isCaptured: capturedFilter
    });

    if (errors) {
      console.error(errors);
    }

    const result = data.queryPokemon.sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id);

    setPokedexData(result);
  }, [pokemonTypeFilter, capturedFilter]);

  React.useEffect(() => {
    fetchPokedexData();
  }, [fetchPokedexData]);

  return (
    <Layout
      title={'Pokémon Pokédex'}
      top={
        <Filters
          pokemonTypeFilter={pokemonTypeFilter}
          setPokemonTypeFilter={setPokemonTypeFilter}
          capturedFilter={capturedFilter}
          setCapturedFilter={setCapturedFilter}
        />
      }
      sidebar={<h2>Section under construction.</h2>}
      logo={pokemonLogo}
      loading={pokedexData}
    >
      <PokemonCardsList listData={pokedexData} />
    </Layout>
  );
};
export default PokemonListPage;
