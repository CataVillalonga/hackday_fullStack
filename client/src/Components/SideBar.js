import React from 'react'
import { useNavigate } from 'react-router';

function SideBar({video,index}) {
  const videoInfo = video.name.split('-')
  const navigate = useNavigate();

  const sidebarHandler = () => {
    navigate('/video')
  }
  return (
    <div key={`sidebar-el-${index}`}className='sidebar-element' onClick={sidebarHandler}>
      <iframe src={`https://www.youtube.com/embed/${video.id}`} title='banana' className='sidebar-iframe'></iframe>
      <div className='sidebar-details'>
      <h1>{videoInfo[1]}</h1>
      <p>{videoInfo[0]}</p>
      </div>
    </div>
  )
}

export default SideBar