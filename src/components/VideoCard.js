import React from 'react'

const VideoCard = ({info}) => {
  const {snippet, statistics} = info
  const {channelTitle,title,thumbnails} = snippet
  return (
    <div className='mt-4 p-2 w-80'>
      <img src={thumbnails?.medium?.url} alt="thumbnail" className='rounded-lg'/>
      <p className='mt-2 font-bold'>{title}</p>
      <p className='text-xs text-gray-500 mt-2'>{channelTitle}</p>
      <p className='text-xs text-gray-500'>views : {statistics.viewCount}</p>
    </div>
  )
}

export default VideoCard
