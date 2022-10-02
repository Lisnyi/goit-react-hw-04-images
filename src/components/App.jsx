import React, { Component } from 'react'
import { searchImages } from 'shared/API/post';
import { Searchbar, ImageGallery } from '../components';

export default class App extends Component {
  state = {
    items: [],
    page: 1,
    search: '',
  }

  componentDidUpdate (prevProps, prevState) {
    const {page, search} = this.state
    if (prevState.page !== page) {
      this.fetchImages (search, page)
    }
    if (prevState.search !== search) {
      this.setState({
        items: []
      })
    }
  }

  async fetchImages (seach, page) {
    try {
      const {data} = await searchImages(seach, page)
      this.setState(({items})=>({
        items: [...items, ...data.hits]
      }))
    } catch (error) {
      console.log(error)
    }
  }

  onSubmit = (e, search) => {
    e.preventDefault()
    const {page} = this.state
    this.setState({
      search,
    })
    this.fetchImages(search, page)
  }

  handleClick = () => {
    this.setState(({page})=>(
      {
        page: page + 1,
      }
    )) 
  }

  render() {
    const { onSubmit } = this
    const { items } = this.state
     return (
      <>
        <Searchbar onSubmit={onSubmit}/>
        <ImageGallery images={items}/>
        <button onClick={this.handleClick}></button>
      </>
    )
  }
}
