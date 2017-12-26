import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
<<<<<<< Updated upstream
=======
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  state = {
    videos: []
  }

  componentWillMount = () => {
    YTSearch({ key: API_KEY_YOUTUBE,  term: 'SJW' }, videos => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={videos} />
        <VideoDetail video={videos[0]} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
