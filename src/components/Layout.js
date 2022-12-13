import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { SubjectOutlined, AddCircleOutlineOutlined } from '@mui/icons-material';
import { useNavigate, redirect } from 'react-router-dom';
import StyledDiv from './styledComponents/StyledDiv';
import FlexDiv from './styledComponents/FlexDiv';
import StyledDrawer from './styledComponents/StyledDrawer';

// this const also defined in StyledDrawer.js
const drawerWidth = 240;

export default function Layout({ children }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    }
  ]

  return (
    <FlexDiv>
      {/* side drawer */}
      <StyledDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5">
            Better Notepad
          </Typography>
        </div>


        {/* list links */}
        <List>
          {menuItems.map(item => (
            <ListItem
              // button
              // <ListItemButton>
              
              // </ListItemButton>
              key={item.text}
              onClick={() => navigate(item.path)}   // this is where the page switch happens
              // onClick={() => redirect(item.path)}
            // currently, the navbar does not retain css when switching between pages
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>

          ))}
        </List>
      </StyledDrawer>

      <StyledDiv>
        {children}
      </StyledDiv>
    </FlexDiv>
  )
}
