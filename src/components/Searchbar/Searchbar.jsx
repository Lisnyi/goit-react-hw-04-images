import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BiSearch } from "react-icons/bi";
import { SearchbarBox, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';

export class Searchbar extends Component {
  state ={
    search: '',
  }

  handleChange = ({target}) => {
    this.setState({
      search: target.value
    })
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props
    const { search } = this.state
    e.preventDefault()
    if (search) {
      onSubmit(search.trim())
    }
  }

  render() {
    const { search } = this.state
    const { handleChange, handleSubmit } = this
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
}

Searchbar.propTypes ={
  onSubmit: PropTypes.func.isRequired,
}