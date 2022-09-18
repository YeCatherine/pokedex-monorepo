import React from 'react';
import Grid, { GridProps } from '@mui/material/Grid';
import { BoxProps } from '@mui/material';
import { Sidebar } from '@/components/04-Templates/Sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';

type SideBarType = JSX.Element | JSX.Element[] | undefined;

/**
 * Lauout type
 */
type Props = GridProps & {
  className?: string;
  headerProps?: BoxProps;
  top?: SideBarType;
  children: JSX.Element | JSX.Element[];
  sidebar?: SideBarType;
  title?: string;
  loading?: boolean;
  logo?: any;

  [key: string]: any;
};

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
    color: '#5db9ff',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  loadingText: {
    marginTop: theme.spacing(2),
  },
}));

/**
 * Sidebar checker will display it if sidebar filled with JSX entities.
 * @param sidebar SideBarType
 * @constructor
 */
const SidebarWrapper = ({ sidebar }: { sidebar: SideBarType }) => {
  if (sidebar === undefined) {
    return null;
  }
  return (
    <Sidebar gridArea="sidebar" display={{ xs: 'none', md: 'block' }}>
      {sidebar}
    </Sidebar>
  );
};

/**
 * Main Layout component.
 *
 * @param children
 *
 * @constructor
 */
const Layout: React.FC<Props> = ({
  className = 'layout',
  headerProps,
  children,
  sidebar,
  top,
  loading = true,
  logo,
  title,
}) => {
  const classes = useStyles();
  let columnSize = 0;

  if (sidebar !== undefined) {
    columnSize = 3;
  }

  console.log(title);
  return (
    <main className={classes.root}>
      <Container>
        {logo && <img src={logo} alt="" className={classes.pokemonLogo} />}
        {title && (
          <Typography variant="srOnly">
            <h1>{title}</h1>
          </Typography>
        )}
        {loading ? (
          <>
            {top && <Card variant="outlined">{top}</Card>}
            <Grid container className={classes.root} spacing={4}>
              <Grid item xs={12} sm={12} md={columnSize} lg={columnSize}>
                <Card variant="outlined">{sidebar}</Card>
              </Grid>
              <Grid item xs={12} sm={12} md={12 - columnSize} lg={12 - columnSize}>
                {children}
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
  );
  //
  // return (
  //   <Grid
  //     className={className}
  //     display="grid"
  //     height="100vh"
  //     width="100%"
  //     minWidth={(theme) => theme.breakpoints.values.sm}
  //     bgcolor="background.paper"
  //     gridTemplateRows="1fr"
  //     gridTemplateColumns={{ xs: '1fr', md: 'auto 1fr' }}
  //     gridTemplateAreas={{ xs: "'main'", md: "'sidebar main'" }}
  //   >
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/captured">Captured</Link>
  //     </nav>
  //     <Main gridArea="main" headerProps={headerProps}>
  //       {children}
  //     </Main>
  //     <SidebarWrapper sidebar={sidebar} />
  //   </Grid>
  // );
};

export default Layout;
