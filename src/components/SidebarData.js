import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Mailbox",
        icon: <MailIcon />,
        link: "/mail"
    },
    {
        title: "Create",
        icon: <AddCircleOutlineIcon />,
        link: "/create"
    },
    {
        title: "Notes",
        icon: <TextSnippetIcon />,
        link: "/notes"
    }
]