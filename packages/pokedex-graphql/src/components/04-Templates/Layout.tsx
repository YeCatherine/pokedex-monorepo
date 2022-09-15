import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import { GridSize } from '@material-ui/core/Grid/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  },
  pokemonLogo: {
    maxWidth: '90%',
    width: 400
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 24,
    textTransform: 'uppercase'
  },
  loadingText: {
    marginTop: theme.spacing(2)
  }
}));

export const Layout = ({ top, sidebar, children, loading, logo, title }) => {
  const classes = useStyles();
  let columnSize = 0 as GridSize;
  let contentSize = 12 as GridSize;
  if (sidebar !== undefined) {
    columnSize = 3 as GridSize;
    contentSize = 9 as GridSize;
  }

  // @ts-ignore
  return (
    <main className={classes.root}>
      <Container>
        <img src={logo} alt="" className={classes.pokemonLogo}/>
        <Typography variant="srOnly">
          <h1>{title}</h1>
        </Typography>
        {loading ? (
          <>
            {top}
            <Grid container className={classes.root} spacing={4}>
              <Grid
                item
                xs={12}
                sm={12}
                md={columnSize}
                lg={columnSize}
              >
                <Card variant="outlined">{sidebar}</Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={contentSize}
                lg={contentSize}
              >
                {children}
              </Grid>
            </Grid>
          </>
        ) : (
          <div className={classes.loadingContainer}>
            <CircularProgress color="inherit" size={60}/>
            <Typography className={classes.loadingText}>Loading</Typography>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Layout;
