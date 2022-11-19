import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/system/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import { css } from '@emotion/react';

import { styled } from '@mui/system';
import { FormControlLabel } from '@material-ui/core';

import { FormControl, FormLabel } from '@mui/material/';

const StyledButton = styled(Button)({
  backgroundColor: 'darkslateblue',
  color: 'white',
  margin: 1
});


const StyledTextfield = styled(TextField)({
  margin: 5
})

const StyledFormControl = styled(FormControl)({
  // here
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


export default function Create() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }

    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details, category)
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
          error={titleError}
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
          error={detailsError}
        />


        <StyledFormControl>
        {/* <FormControl> */}
          <FormLabel>
            Note Category
          </FormLabel>

          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="To do's" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        {/* </FormControl> */}
        </StyledFormControl>

        <br/>

        <StyledButton
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
