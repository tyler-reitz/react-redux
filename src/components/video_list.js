import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = ({
  videos, onSelectVideo, ...props
}) => (
  <ul className="col-md-4 list-group">
    {videos.map(({etag, id, ...props}) => (
      <VideoListItem key={etag} onSelectVideo={() => onSelectVideo(id.videoId)} {...props} />
    ))} 
  </ul>
)

export default VideoList
