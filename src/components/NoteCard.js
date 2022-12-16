import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Avatar, IconButton } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { yellow, green, pink, blue } from '@mui/material/colors'

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          avatar={
            <Avatar
              sx={{

                // color changer for notecard avatars does not work for some reason
                // note.category is undefined in the console.
                // all default to blue[700]
                backgroundColor: (note) => {
                  console.log("test me out: ", note.category)
                  if (note.category == "events") {
                    return yellow[700]
                  }
                  if (note.category == "todos") {
                    return green
                  }
                  if (note.category == "reminders") {
                    return pink[500]
                  }
                  return blue[700]
                }
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
