import React, { Component } from 'react'
import { searchImages } from 'shared/API/post';
import { Searchbar, ImageGallery } from '../components';
import { AppBox } from './App.styled';
export default class App extends Component {
  state = {
    items: [],
    totalHits: 0,
    page: 1,
    search: '',
    status: 'idle',
    error: null,
  }

  componentDidUpdate (prevProps, prevState) {
    const {page, search} = this.state
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages(search, page)
    }
  }

  async fetchImages (seach, page) {
    this.setState({
      status: 'pending'
    })
    try {
      const {data} = await searchImages(seach, page)
      if (data.totalHits === 0) {
        this.setState({
          status: 'rejected'
        })
        return
      }
      this.setState(({items})=>({
        items: [...items, ...data.hits],
        status: 'resolved',
        totalHits: data.totalHits,
      }))
    } catch (error) {
      this.setState({
        error,
        status: 'rejected',
      })
    }
  }

  onSubmit = (search) => {
    this.setState({
      search,
      page: 1,
      items: [],
    })
  }

  handleClick = () => {
    this.setState(({page})=>(
      {
        page: page + 1,
      }
    )) 
  }

  render() {
    const { onSubmit, handleClick } = this
    const { items, status, totalHits } = this.state
    const loadMore = Boolean(items.length < totalHits)
    return (
      <AppBox>
        <Searchbar onSubmit={onSubmit}/>
        <ImageGallery images={items} status={status} handleClick={handleClick} loadMore={loadMore}/>
      </AppBox>
    )
  }
}
