import React, { useState } from 'react'
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Link } from 'react-router-dom';


const DrawerComp = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
        <Drawer PaperProps={{ sx: {backgroundColor:'rgba(9,9,121,1)'}}} open={open} onClose={()=>setOpen(false)}>
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                        <Link to="/">Home</Link>
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                       <Link to="/wwd">What we do?</Link>
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                    <Link to="/services">Services</Link>
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                    <Link to="/about">About Us</Link>
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </List>
        </Drawer>
        <IconButton sx={{marginLeft:'auto'}} onClick={()=> setOpen(!open)}>
            <MenuRoundedIcon/>
        </IconButton>
    </>
  )
}

export default DrawerComp;