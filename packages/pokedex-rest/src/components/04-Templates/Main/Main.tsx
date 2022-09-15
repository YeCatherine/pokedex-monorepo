import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Header } from '../Header/Header';

type Props = BoxProps & {
  headerProps?: BoxProps;
  children: JSX.Element | JSX.Element[];
};

export function Main({ headerProps, children, ...props }: Props) {
  return (
    <Box {...props}>
      <Header {...headerProps} />
      <Stack component="main" spacing={2}>
        {children}
      </Stack>
    </Box>
  );
}
