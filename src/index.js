import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
<<<<<<< HEAD
=======
import VideoDetail from './components/video_detail'
>>>>>>> feature/app_shell

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
    const { videos } = this.state

    return (
      <div>
        <SearchBar />
        <VideoList videos={videos} />
<<<<<<< HEAD
=======
        <VideoDetail video={videos[0]} />
>>>>>>> feature/app_shell
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
