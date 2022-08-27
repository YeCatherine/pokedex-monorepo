import React, { useState } from 'react';
import { DEFAULT_LANGUAGE, MyGlobalContext } from '@/context/Context';
import Grid, { GridProps } from '@mui/material/Grid';
import { BoxProps } from '@mui/material';
import { Sidebar } from '@/components/04-Templates/Sidebar/Sidebar';
import { Main } from '@/components/04-Templates/Main/Main';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

type SideBarType = JSX.Element | JSX.Element[] | undefined;

/**
 * Lauout type
 */
type Props = GridProps & {
  className?: string;
  headerProps?: BoxProps;
  children: JSX.Element | JSX.Element[];
  sidebar?: SideBarType;
};

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
const Layout: React.FC<Props> = ({ className = 'layout', headerProps, children, sidebar }) => {
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);

  return (
    <MyGlobalContext.Provider value={{ language, setLanguage }}>
      <Grid
        className={className}
        display="grid"
        height="100vh"
        width="100%"
        minWidth={(theme) => theme.breakpoints.values.sm}
        bgcolor="background.paper"
        gridTemplateRows="1fr"
        gridTemplateColumns={{ xs: '1fr', md: 'auto 1fr' }}
        gridTemplateAreas={{ xs: "'main'", md: "'sidebar main'" }}
      >
        <nav>
          <Link to="/">Home</Link>
          <Link to="/captured">Captured</Link>
        </nav>
        <Main gridArea="main" headerProps={headerProps}>
          {children}
        </Main>
        <SidebarWrapper sidebar={sidebar} />
      </Grid>
    </MyGlobalContext.Provider>
  );
};

export default Layout;
