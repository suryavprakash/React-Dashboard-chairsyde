
import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface ListItemLinkProps extends NavLinkProps {
  icon: React.ReactElement;
  primary: string;
}

const ListItemLink: React.FC<ListItemLinkProps> = ({ icon, primary, ...props }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'>>((linkProps, ref) => (
        <NavLink ref={ref} {...linkProps} {...props} />
      )),
    [props]
  );

  return (
    <ListItem button component={renderLink}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemLink;
