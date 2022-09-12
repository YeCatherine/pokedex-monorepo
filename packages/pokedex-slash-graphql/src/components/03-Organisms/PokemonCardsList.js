import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { PokemonCard } from '../02-Molecules/PokemonCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  noResultsContainer: {
    textAlign: 'center',
  },
  noResults: {
    color: '#FFF',
    fontSize: 24,
    textTransform: 'uppercase',
    marginTop: theme.spacing(6),
  },
}))

/**
 * Pokemon Cards List.
 *
 * @param pokedexData
 * @param fetchPokedexData
 * @returns {JSX.Element}
 * @constructor
 */
export function PokemonCardsList({ pokedexData, fetchPokedexData }) {
  const classes = useStyles()

  return pokedexData.length > 0 ? (
    <Grid container className={classes.root} spacing={4}>
      {pokedexData.map((pokemon) => (
        <Grid key={pokemon.name} item xs={12} sm={12} md={6} lg={4}>
          <PokemonCard pokemon={pokemon} fetchPokedexData={fetchPokedexData} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div className={classes.noResultsContainer}>
      <Typography className={classes.noResults}>
        No results. Please try a different filter value.
      </Typography>
    </div>
  )
}
