
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  List,
  ListItem,ListItemIcon,
  
  ListItemText,
  Divider,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// Define the type for the user object
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


interface UserDetailsProps {
  user: User | null;
  onClose: () => void;
}

const useStyles = makeStyles({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
  },
  listItem: {
    justifyContent: "space-between",
  },
});


const formatPhoneNumber = (phoneNumber: string): string => {

  const parts = phoneNumber.split(" x");
  const mainNumber = parts[0].replace(/[^\d]/g, ''); 


  const formattedNumber = mainNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

  if (parts[1]) {
    return `${formattedNumber} ext. ${parts[1]}`;
  } else {
    return formattedNumber;
  }
};

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => {
  const classes = useStyles();

  const getGoogleMapsLink = (lat: string, lng: string): string => {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  };

  return (
    <Dialog open={Boolean(user)} onClose={onClose} maxWidth="sm" fullWidth>
      {user && (
        <>
          <DialogTitle>{user.name}</DialogTitle>
          <DialogContent dividers>
            <List className={classes.dialogContent}>
            <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={<Link href={'mailto:'+user.email} target="_blank" rel="noopener">{user.email}</Link>}
                  className={classes.listItem}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary={formatPhoneNumber(user.phone)}
                  className={classes.listItem}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Website"
                  secondary={
                    <Link href={user.website} target="_blank" rel="noopener">
                      {user.website}
                    </Link>
                  }
                  className={classes.listItem}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Address"
                  secondary={`${user.address.street}, ${user.address.city}`}
                  className={classes.listItem}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Location"
                  secondary={
                    <Link
                      href={getGoogleMapsLink(
                        user.address.geo.lat,
                        user.address.geo.lng
                      )}
                      target="_blank"
                      rel="noopener"
                    >
                      View on Google Maps
                    </Link>
                  }
                  className={classes.listItem}
                />
              </ListItem>
            </List>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default UserDetails;
