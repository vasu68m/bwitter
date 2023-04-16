import React from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'

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
    <Post avatar="https://staticg.sportskeeda.com/editor/2022/04/e24b4-16509080253473-1920.jpg" userName="Naruto" quote="sasuke....come back to leaf village" link="https://media.tenor.com/7bAchGtIRR8AAAAC/naruto-angry.gif"/>
    <Post avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd11fen-9b801f57-3fd9-45b3-a933-54d64d913802.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQxMWZlbi05YjgwMWY1Ny0zZmQ5LTQ1YjMtYTkzMy01NGQ2NGQ5MTM4MDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Pv54IbHGYhLdAqqxO-OQegL7APD1GmTgRGCLPKn8pqE" userName="Sasuke" quote="don't come in my way Naruto" link="https://media.tenor.com/9nD_209JkdcAAAAC/uchiha-sasuke-sasuke.gif"/>
    <Post avatar="https://www.kindpng.com/picc/m/325-3257489_render-sakura-haruno-childhood-by-marcinha20-d4fd378-naruto.png" userName="Sakura" quote="ohh sasuke please.....don't leave us" link="https://media.tenor.com/0UJ12fmOtdcAAAAC/sakura-crying.gif"/>
    <Post avatar="https://qph.cf2.quoracdn.net/main-qimg-2b5fc064cb1cfed401c8b9c2a446321c-lq" userName="Kakashi" quote="u know sasuke that if u leave, there is no coming back" link="https://media.tenor.com/_KsnH9YVT5QAAAAC/kakashi.gif"/>
    <Post avatar="https://wallpapercave.com/wp/wp9177239.jpg" userName="Hinata" quote="naruto do something to stop him" link="https://media.tenor.com/iGyOzGf5LacAAAAC/hinata-hinata-hyuga.gif"/>
    <Post avatar="https://qph.cf2.quoracdn.net/main-qimg-edd5748057a8ba0e37ac30fc4af21d2b-lq" userName="Tsunade" quote="orochimaru.... don't spoil the kids future the way u have spoiled yours!" link="https://64.media.tumblr.com/896cc09420244cab1bf3b59a4dddf278/tumblr_p61qj9DZ1Y1vhmmrto1_540.gif"/>
    <Post avatar="https://wallpapercave.com/wp/wp9253530.jpg" userName="Jiraiya" quote="orochimaru..u didn't changed a bit, even after soo many years. it's sadenning" link="https://i.pinimg.com/originals/8f/f3/f3/8ff3f3766883aa28da9930f0b055c7c3.gif"/>
    <Post avatar="https://steamuserimages-a.akamaihd.net/ugc/947338758891814809/2FD79E41D7F8A366D6C676410912A5A630B44E57/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" userName="Orochimaru" quote="the boy wants power, which u weaklings don't posses." link="https://animesher.com/orig/0/52/527/5279/animesher.com_long-hair-badass-orochimaru-527963.gif"/>
    
    </div>
  )
}

export default Feed