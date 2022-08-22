import Box, { BoxProps } from '@mui/material/Box';

export const container: BoxProps = {
  component: 'aside',
  sx: {
    width: '15rem',
    p: 2,
    bgcolor: 'background.paper',
    borderRight: 1,
    borderColor: 'grey.300'
  }
};

type Props = BoxProps | { children: JSX.Element | JSX.Element[] }

export function Sidebar({ children, ...props }: Props) {
  return (
    <Box {...container} {...props}>
      {children}
    </Box>
  );
}

export default Sidebar;
