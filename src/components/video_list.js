import React from 'react'

const VideoList = ({videos}) => (
  <ul className="col-md-4 list-group">
    {videos.map(video => (
      <li key={video.etag} >
        {video.snippet.title}
      </li>
    ))} 
  </ul>
)

export default VideoList
