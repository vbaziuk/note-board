import { ClassNames } from '@emotion/react'
import React from 'react'
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const drawerWidth = 240

const StyledDiv = styled('div')({
  background: '#f9f9f9',
  width: '100%'
})

const FlexDiv = styled('div')({
  display: 'flex'
})

const StyledDrawer = styled(Drawer)({
  width: drawerWidth
})

export default function Layout({ children }) {
  return (
    <FlexDiv>

      {/* app bar  */}

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
      </StyledDrawer>

      <StyledDiv>
        {children}
      </StyledDiv>
    </FlexDiv>
  )
}
