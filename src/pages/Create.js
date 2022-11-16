import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/system/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
// import { css } from '@emotion/react';

import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: 'darkslateblue',
  color: 'white',
  margin: 1
});


const StyledTextfield = styled(TextField)({
  margin: 5
})


export default function Create() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && details) {
      console.log(title, details)
    }
  }


  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>


      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={true}
        />


        <StyledTextfield
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          minRows={4}
          fullWidth
          required
          margin='normal'
        />


        <StyledButton
          onClick={() => console.log("test me out!!")}
          type="submit"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </StyledButton>
      </form>

    </Container>
  )
}
