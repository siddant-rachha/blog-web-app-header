import React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props extends BoxProps {
  navItems: string[];
  navActive: string;
  handleNavItem: (item: string) => void;
}

export const NavBarItems: React.FC<Props> = ({
  navItems,
  handleNavItem,
  navActive,
  ...rest
}) => {
  const handleNavItemClick = (item: string) => {
    handleNavItem(item);
  };
  return (
    <Box {...rest}>
      {navItems.map(item => (
        <Button
          key={item}
          sx={{
            color: '#fff',
            borderRadius: 0,
            borderBottom: navActive === item ? '2px solid #fff' : null,
          }}
          onClick={() => handleNavItemClick(item)}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};
