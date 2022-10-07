import React, { useState, useEffect } from 'react'
import { ThreeDots } from  'react-loader-spinner'
import { searchImages } from 'shared/API/post';
import { Button } from 'shared/components/Button/Button';
import { Searchbar, ImageGallery } from '../components';
import { AppBox } from './App.styled';

export const App = () => {
  const [items, setItems] = useState([])
  const [totalHits, setTotalHits] = useState(0)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadMore = Boolean(items.length < totalHits)
  const isImages = Boolean(items.length)

  useEffect(()=>{
    if (search === ''){
      return
    }
    fetchImages(search, page)
  },[search, page])

  async function fetchImages (search, page) {
    setLoading(true)
    setError(null)
    try {
      const {data:{totalHits, hits}} = await searchImages(search, page)
      if (totalHits === 0) {
        setError('We did not find any images for your request')
        return
      }
      setItems((prev)=>([...prev, ...hits]))
      setTotalHits(totalHits)
    } catch (error) {
      setError('Whoops something went wrong')
    } finally {
      setLoading(false)
      }
  }

  function onSubmit (query) {
    const normalizedSearch = search.toLocaleLowerCase()
    const normalizedQuery = query.toLocaleLowerCase()
    if (normalizedSearch !== normalizedQuery) {
      setSearch(query)
      setPage(1)
      setItems([])
    }
  }

  function handleClick () {
    setPage((prev)=>(prev + 1)) 
  }

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
      {isImages && loadMore && <Button onClick={handleClick}>Load more</Button>}
    </AppBox>
  )
}
