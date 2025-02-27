import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

type Props = {
  menuItems: string[];
  handleAvatarItem: (item: string) => void;
};

export const AvatarMenu: React.FC<Props> = ({
  menuItems,
  handleAvatarItem,
}) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElUser(null);
  };

  const handleAvatarItemClick = (item: string) => {
    handleAvatarItem(item);
  };

  return (
    <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
          <Avatar alt="Avatar" src="." />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseMenu}
      >
        {menuItems.map(item => (
          <MenuItem
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onClickCapture={e => handleAvatarItemClick(item)}
            key={item}
            onClick={handleCloseMenu}
          >
            <Typography sx={{ textAlign: 'center' }}>{item}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
