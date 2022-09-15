import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Filters } from './components/02-Molecules/Filters'
import { PokemonCardsList } from './components/03-Organisms/PokemonCardsList'
import pokemonLogo from './assets/pokemon-logo.png'
import { fetchPokemon } from './services/graphQLUtils'
// import {DataLoading} from '@monorepo/components'
import Layout from './components/04-Templates/Layout'

export default function App() {
  const [pokedexData, setPokedexData] = React.useState(null)
  const [pokemonTypeFilter, setPokemonTypeFilter] = React.useState('Any')
  const [capturedFilter, setCapturedFilter] = React.useState('Any')

  const fetchPokedexData = React.useCallback(async () => {
    const { errors, data } = await fetchPokemon({
      pokemonType: pokemonTypeFilter,
      isCaptured: capturedFilter,
    })

    if (errors) {
      console.error(errors)
    }

    const result = data.queryPokemon.sort(
      (pokemonA, pokemonB) => pokemonA.id - pokemonB.id
    )

    setPokedexData(result)
  }, [pokemonTypeFilter, capturedFilter])

  React.useEffect(() => {
    fetchPokedexData()
  }, [fetchPokedexData])

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
      <PokemonCardsList
        pokedexData={pokedexData}
        fetchPokedexData={fetchPokedexData}
      />
    </Layout>
  )
}
