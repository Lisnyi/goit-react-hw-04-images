import React, { Component } from 'react'

export class Searchbar extends Component {
  state ={
    search: '',
  }

  render() {
    const { onSubmit } = this.props
    return (
      <header>
        <form onSubmit={onSubmit}>
            <button type="submit">
            <span>Search</span>
            </button>

            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
      </header>
    )
  }
}


