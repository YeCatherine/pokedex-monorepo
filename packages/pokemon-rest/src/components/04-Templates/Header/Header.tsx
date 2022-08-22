import Box, { BoxProps } from '@mui/material/Box';

type Props = BoxProps;

export function Header({ ...props }: Props) {
  return (
    <Box
      component="header"
      borderBottom={1}
      borderColor="grey.300"
      p={2}
      {...props}
    >
      Header
    </Box>
  );
}
