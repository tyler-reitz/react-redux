import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import debounce from 'lodash.debounce'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  state = {
    videos: [],
  }

  componentWillMount = () => {
    this.onVideoSearch('SJW')
  }

  onVideoSearch = debounce((term) => {
    YTSearch({ key: API_KEY_YOUTUBE,  term }, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      })
    })
  }, 300)

  setSelectedVideo = (selectedId, e) => {
    const { videos } = this.state

    const [ selectedVideo ] = videos
      .filter(video  => video.id.videoId === selectedId )

    this.setState({ selectedVideo })
  }

  render() {
    const { state: { videos, selectedVideo }, setSelectedVideo, onVideoSearch } = this

    return (
      <div>
        <SearchBar onSearchTermChange={(term) => onVideoSearch(term)} />
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
