import React, { Component } from 'react'

export class Searchbar extends Component {
  state ={
    search: '',
  }

  handleChange = ({target}) => {
    this.setState({
      search: target.value
    })
  }

  render() {
    const { search } = this.state
    const { onSubmit } = this.props
    const { handleChange } = this
    return (
      <header>
        <form onSubmit={(e) => onSubmit(e, search)}>
            <button type="submit">
            <span>Search</span>
            </button>

            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={search}
                onChange={handleChange}
            />
        </form>
      </header>
    )
  }
}