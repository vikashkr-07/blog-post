import React from 'react';
import Blog from '../blog/Blog';
import './Feed.css'

class Feed extends React.Component{
    
 state={
     feeds : [
         {
             id:1,
             title: "Ratan Tata",
             caption:"None can destroy iron, but its own rust can! Likewise none can destroy a person, but its own mindset can.",
             url:"https://images.financialexpress.com/2020/06/ratan-tata-reuters1-big.jpg?w=1200&h=800&imflag=true"
         }
        ,
        {
            id: 2,
            title:"Steve Jobs",
            caption: "Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me.",
            url:"https://cdn.vox-cdn.com/thumbor/WqMY2QINJvS9H0tqdrFBXsg2ghk=/0x86:706x557/1200x800/filters:focal(0x86:706x557)/cdn.vox-cdn.com/imported_assets/847184/stevejobs.png"
        },

        {
            id: 3,
            title:"Elon Musk",
            caption: "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
            url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"  
        },

        {
            id: 4,
            title:"Cristiano Ronaldo",
            caption: "If you don’t believe you are the best, then you will never achieve all that you are capable of.",
            url:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093" 
        },
     ]
 }

 render(){
     return(
         <div className="feed">
            {
                this.state.feeds.map((feed)=>(
                   <Blog feed={feed}/> 
                ))
            }
         </div>
     )
 }

}

export default Feed;