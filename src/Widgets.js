import React from 'react'
import "./Widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function Widgets() {
  return (
    <div className='widgets'>
    <div className="widgets_input">
    <SearchIcon fontSize="large" className='widgets_searchIcon'/>
    <input type="text" placeholder="search twitter"/>
    {/* <div className="widgets_widgetcontainer">
      <h2>what's happening..?</h2>
    </div> */}
    </div>
    <div className="widgets_widgetcontainer">
      <h2>what's happening..?</h2>
      <TravelExploreIcon className='globe' fontSize="large"/>
    </div>
    <img  class="trending" src="https://www.business2community.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-18-at-3.23.18-PM.png" alt="" />
    </div>
  )
}

export default Widgets