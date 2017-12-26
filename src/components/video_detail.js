import React from 'react'

const VideoDetail = ({
  video: { 
    snippet: { title = '', description = '' } = {},
    id: { videoId = '' } = {}
  } = {},
  ...props
}) => ( 
  videoId 
    ? ( <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <div className="embed-responsive-item">
              <iframe 
                className="embed-responsive-item" 
                src={`https://www.youtube.com/embed/${videoId}`} 
                frameBorder="0" 
              />
            </div>
          </div>
          <div className="details">
            <div>{title}</div>
            <div>{description}</div>
          </div>
        </div>
      ) 
    : ( <div>'…Loading'</div> )
)

export default VideoDetail
