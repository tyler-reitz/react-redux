import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  render() {
    const { term } = this.state

    return (
      <div>
        <input 
          value={term}
          onChange={e => this.setState({ term: e.target.value })} 
        />
      </div>
    )
  }
}

export default SearchBar
