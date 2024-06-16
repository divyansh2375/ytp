import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos , setVideo] = useState([])

  useEffect(() => {
    getVideos();
  } ,[])

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json =  await data.json();
    console.log(json.items)
    setVideo(json.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map(video => < VideoCard key={video.id} info={video} />)}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  )
}

export default VideoContainer