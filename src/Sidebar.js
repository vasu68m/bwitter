import React from 'react'
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
    {/* twitter icon */}
    <TwitterIcon  className='twitterlogo'/>
     
     {/* sidebar option */}
     
    <SidebarOption active Icon={HomeIcon} text="Home"/>
    {/* <SidebarOption Icon={<HomeIcon/>} text="Home"/> */}
    
    <SidebarOption Icon={ExploreIcon} text="Explore"/>
    
    <SidebarOption Icon={NotificationsActiveIcon} text="Notifications"/>
    
    <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
    
    <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
    
    <SidebarOption Icon={ListAltIcon} text="List"/>
    
    <SidebarOption Icon={AccountBoxIcon} text="Profile"/>
    
    <SidebarOption Icon={MoreHorizIcon} text="More"/>

    <Button variant='outlined' fullWidth className='tweet'>Tweet</Button>


  </div>
  )
}

export default Sidebar