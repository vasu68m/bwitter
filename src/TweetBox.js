import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetbox'>
        <form>
            <div className="tB_input">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1vVLnSwnhqkQW7WxH-As5C3qtV1p7tGU8A&usqp=CAU" />
            <input type="text" placeholder='feel free to imprint your thoughts....' />
            </div>
            <input className='img' type="text" placeholder='Optional: enter image url' />
            <Button className='btn'>Tweet</Button>
            </form>
    </div>
  )
}

export default TweetBox