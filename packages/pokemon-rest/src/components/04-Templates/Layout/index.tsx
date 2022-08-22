// import Grid, { GridProps } from '@mui/material/Grid';
// import { BoxProps } from '@mui/material';
// import { Main } from '../Main/Main';
// import { Sidebar } from '../Sidebar/Sidebar';
//
// type Props = GridProps & {
//   headerProps?: BoxProps;
//   children: JSX.Element | JSX.Element[];
//   sidebar?: JSX.Element | JSX.Element[] | null;
// };
//
// export function Layout({ headerProps, children, sidebar }: Props) {
//   return (
//     <Grid
//       display="grid"
//       height="100vh"
//       width="100%"
//       minWidth={(theme) => theme.breakpoints.values.sm}
//       bgcolor="background.paper"
//       gridTemplateRows="1fr"
//       gridTemplateColumns={{ xs: '1fr', md: 'auto 1fr' }}
//       gridTemplateAreas={{ xs: '\'main\'', md: '\'sidebar main\'' }}
//     >
//       (sidebar? &
//       <Sidebar gridArea="sidebar" display={{ xs: 'none', md: 'block' }}>
//         {sidebar}
//       </Sidebar>
//       )
//       <Main gridArea="main" headerProps={headerProps}>
//         {children}
//       </Main>
//     </Grid>
//   );
// }

export * from './Layout'
