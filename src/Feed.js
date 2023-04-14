import React from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className='feed'>
    {/* header */}
    <div className='feed_header'>
    <h2>Home</h2>
    </div>

    {/* tweet box */}
    <TweetBox />

    {/* posts */}

    </div>
  )
}

export default Feed