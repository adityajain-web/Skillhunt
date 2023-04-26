import React, { useState } from 'react'
import { Avatar, Box, Button, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, styled, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import { Article, ChevronLeft, Email, EmojiObjects, FindInPage, IosShare, LocalPolice, Menu, Person, RocketLaunch, Save, School, Settings, Work } from '@mui/icons-material'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Header = ({ setTab }) => {
    const [open, setOpen] = useState(false);

    const drawerWidth = 220;

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#fff',
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    return (
        <>
            <AppBar position='fixed' open={open}>
                <Toolbar>
                    {
                        !open && <IconButton onClick={() => setOpen(true)}>
                            <Menu />
                        </IconButton>
                    }
                    <Typography variant='h6'>Skillhunt</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Avatar>
                        <Person />
                    </Avatar>
                </Toolbar>
            </AppBar>
            <Drawer variant='permanent' open={open}>
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeft />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {
                        [{ id: 'seeker-dash-menu-1', name: 'Personal Details', icon: <Person /> },
                        { id: 'seeker-dash-menu-2', name: 'Education', icon: <School /> },
                        { id: 'seeker-dash-menu-3', name: 'Experience', icon: <Work /> },
                        { id: 'seeker-dash-menu-4', name: 'Skill', icon: <LocalPolice /> },
                        { id: 'seeker-dash-menu-5', name: 'Project', icon: <RocketLaunch /> },
                        { id: 'seeker-dash-menu-6', name: 'Objective', icon: <EmojiObjects /> },
                        { id: 'seeker-dash-menu-8', name: 'Resume', icon: <Article /> },
                        ].map(item => <ListItem components={Button} key={item.id} onClick={() => setTab(item.name)} sx={{ cursor: "pointer" }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItem>)
                    }
                </List>
                <Divider />
                <List>
                    {
                        [{ id: 'seeker-dash-menu-9', name: 'Jobs Search', icon: <FindInPage /> },
                        { id: 'seeker-dash-menu-10', name: 'Applied Jobs', icon: <IosShare /> },
                        { id: 'seeker-dash-menu-11', name: 'Saved Jobs', icon: <Save /> },
                        { id: 'seeker-dash-menu-12', name: 'Messages', icon: <Email /> },
                        ].map(item => <ListItem components={Button} key={item.id} onClick={() => setTab(item.name)} sx={{ cursor: "pointer" }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItem>)
                    }
                </List>
                <Divider xs={{ width: "2px" }} />
                <Box sx={{ position: 'absolute', bottom: '4%', left: open ? '7%' : '26%' }}>
                    <Button startIcon={<Settings />} onClick={() => setTab('Settings')}>
                        <Typography sx={{ opacity: open ? 1 : 0 }}>Settings</Typography>
                    </Button>
                </Box>
            </Drawer>
        </>
    )
}

export default Header
export { DrawerHeader } 