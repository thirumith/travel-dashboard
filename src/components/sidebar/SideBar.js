import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CommuteIcon from '@material-ui/icons/Commute';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" to="/login" />
        </ListItem>
        <ListItem button component={Link} to="/travel">
            <ListItemIcon>
                <CommuteIcon />
            </ListItemIcon>
            <ListItemText primary="Travel" />
        </ListItem>
    </div>
);