import React from 'react'
import SideBar from './SideBar'

function Main({videos}) {
  console.log(videos)
  return (
    <div className='main-container'>
      {videos?.map((video,index) => {
        if(index === 0) {
          return (
            <div className='video-container'>
            <iframe src={`https://www.youtube.com/embed/${video.id}`} title='banana' className='main-iframe'></iframe>
            <h1>{video.name}</h1>
            <p>{video.description}</p>
            </div>
          )
        }
      })}
    <div className='sidebar-container'>
      {videos?.map((video,index) => {
        if(index !== 0) {
          return (
            <div>
              <SideBar video={video} index={index}/>
            </div>
          )
        }
      })}
    </div>
    </div>
  )
}

export default Main