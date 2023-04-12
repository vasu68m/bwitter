import React from 'react'
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Sidebar() {
  return (
    <div className='sidebar'>
    {/* twitter icon */}
    <TwitterIcon />
     
     {/* sidebar option */}
     <HomeIcon/>
    <SidebarOption Icon={<HomeIcon/>} text="Home"/>
    <ExploreIcon/>
    <SidebarOption Icon={<ExploreIcon/>} text="Explore"/>
    <NotificationsActiveIcon/>
    <SidebarOption Icon={<NotificationsActiveIcon/>} text="Notifications"/>
    {/* <SidebarOption text=""/>
    <SidebarOption text=""/>
    <SidebarOption text=""/> */}
  
  </div>
  )
}

export default Sidebar