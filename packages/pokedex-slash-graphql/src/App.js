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

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  pokemonLogo: {
    maxWidth: '90%',
    width: 400,
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  loadingText: {
    marginTop: theme.spacing(2),
  },
}))

export default function App() {
  const classes = useStyles()

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
    <main className={classes.root}>
      <Container>
        <img src={pokemonLogo} alt="" className={classes.pokemonLogo} />
        <Typography variant="srOnly">
          <h1>Pokémon Pokédex</h1>
        </Typography>
        {pokedexData ? (
          <>
            <Filters
              pokemonTypeFilter={pokemonTypeFilter}
              setPokemonTypeFilter={setPokemonTypeFilter}
              capturedFilter={capturedFilter}
              setCapturedFilter={setCapturedFilter}
            />
            <Grid container className={classes.root} spacing={4}>
              <Grid item xs={12} sm={12} md={3} lg={3}> 
                <Card  variant="outlined">
                  <h2>Section under construction.</h2>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <PokemonCardsList
                  pokedexData={pokedexData}
                  fetchPokedexData={fetchPokedexData}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <div className={classes.loadingContainer}>
            <CircularProgress color="inherit" size={60} />
            <Typography className={classes.loadingText}>Loading</Typography>
          </div>
        )}
      </Container>
    </main>
  )
}
