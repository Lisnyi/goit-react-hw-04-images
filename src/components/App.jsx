import React, { Component } from 'react'
import { ThreeDots } from  'react-loader-spinner'
import { searchImages } from 'shared/API/post';
import { Button } from 'shared/components/Button/Button';
import { Searchbar, ImageGallery } from '../components';
import { AppBox } from './App.styled';
export default class App extends Component {
  state = {
    items: [],
    totalHits: 0,
    page: 1,
    search: '',
    loading: false,
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
      loading: true,
      error: null
    })
    try {
      const {data} = await searchImages(seach, page)
      if (data.totalHits === 0) {
        this.setState({
          error: 'We did not find any images for your request'
        })
        return
      }
      this.setState(({items})=>({
        items: [...items, ...data.hits],
        totalHits: data.totalHits,
      }))
    } catch (error) {
      this.setState({
        error: 'Whoops something went wrong',
      })
    } finally {
        this.setState({
          loading: false,
        })
      }
  }

  onSubmit = (search) => {
    const normalizedStateSearch = this.state.search.toLocaleLowerCase()
    const normalizedSearch = search.toLocaleLowerCase()
    if (normalizedStateSearch !== normalizedSearch) {
      this.setState({
        search,
        page: 1,
        items: [],
      })
    }
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
    const { items, totalHits, loading, error } = this.state
    const loadMore = Boolean(items.length < totalHits)
    const isImages = Boolean(items.length)
    return (
      <AppBox>
        <Searchbar onSubmit={onSubmit}/>
        {isImages && <ImageGallery images={items}/>}
        {error && <h2>{error}</h2>}
        {loading && <ThreeDots 
                      height="80" 
                      width="80" 
                      radius="9"
                      color="#9b2a4c" 
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                      />}
        {isImages && loadMore && <Button type={'button'} onClick={handleClick}>Load more</Button>}
      </AppBox>
    )
  }
}