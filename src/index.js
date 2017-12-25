import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

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
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
