import React, { Component } from 'react'
import throttle from 'lodash.throttle'

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange = (term) => {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render() {
    const { state: { term }, onInputChange } = this

    return (
      <div className="search-bar">
        <input 
          value={term}
          onChange={(e) => onInputChange(e.target.value)} 
        />
      </div>
    )
  }
}

export default SearchBar
