import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BiSearch } from "react-icons/bi";
import { SearchbarBox, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
  const [search, setSearch] = useState('')

  function handleChange ({target:{value}}) {
    setSearch(value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (search) {
      onSubmit(search.trim())
    }
  }

  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearch/>
          </SearchFormButton>

          <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={search}
              onChange={handleChange}
          />
      </SearchForm>
    </SearchbarBox>
  )
}

Searchbar.propTypes ={
  onSubmit: PropTypes.func.isRequired,
}