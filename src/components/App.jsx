import React, { Component } from 'react'
import { searchImages } from 'shared/API/post';
import { Searchbar, ImageGallery } from '../components';

export default class App extends Component {
  state = {
    items: [],
    page: 1,
  }

  async fetchImages () {
    try {
      const data = await searchImages("cat", 1)
      this.setState({
        items: data.data.hits
      })
    } catch (error) {
      console.log(error)
    }
  }

  onSubmit (e) {
    e.preventDefault()
  }

  render() {
    const { onSubmit } = this
     return (
      <>
        <Searchbar onSubmit={onSubmit}/>
        <ImageGallery/>
      </>
    )
  }
}
