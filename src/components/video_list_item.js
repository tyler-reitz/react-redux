import React from 'react'

const VideoListItem = ({video: { snippet: { title, thumbnails }}, ...props}) => (
  <li className="list-group-item">
    <div className="video-list media">

      <div className="media-left">
        <img src={thumbnails.default.url} className="media-object" alt="thumb" />
      </div>

      <div className="media-body">
        <div className="media-heading">
          {title}
        </div>
      </div>

    </div>
  </li>
)

export default VideoListItem
