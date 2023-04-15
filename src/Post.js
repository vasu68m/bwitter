import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

function Post({
  quote,
  userName,
  verified,
  link,
  image,
  avatar
}) {
  return (
    <div className='post'>
      <div className='post_avatar'>
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>{userName}<span><VerifiedIcon className='post_badge'/>
            </span></h3>
          </div>
          <div className="post_headerDescription">
          <p>{quote}</p>
            {/* <p>a true ninja never goes back on his words</p> */}
          </div>
          <img src={link} alt="" />
        <div className="post_footer">
        <ChatBubbleOutlineIcon fontSize="small"/>
        <RepeatIcon fontSize='small' />
        <FavoriteBorderIcon fontSize='small'/>
        <PublishOutlinedIcon />

        </div>
        </div>
      </div>
    </div>
  )
}

export default Post