import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from '@mui/material';
import { FormLabel } from '@mui/material/';
import StyledButton from '../components/styledComponents/StyledButton';
import StyledFormControl from '../components/styledComponents/StyledFormControl';


export default function Create() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('events')

  const navigate = useNavigate()

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
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category })
      }).then(() => navigate('/'))
    }
  }

  return (
    <Container size="sm">
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

        <TextField
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
          <FormLabel
          >
            <Typography
              color="textSecondary"
            >
              Note Category
            </Typography>
          </FormLabel>

          <RadioGroup
            value={category}
            onChange={
              (e) => setCategory(e.target.value)
            }
          >
            <FormControlLabel value="events" control={<Radio />} label="Events" />
            <FormControlLabel value="todos" control={<Radio />} label="To do's" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </StyledFormControl>

        <br />

        <StyledButton
          type="submit"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </StyledButton>

      </form>
    </Container>
  )
}
