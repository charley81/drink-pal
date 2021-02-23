/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context/context'

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  const searchDrinks = () => {
    setSearchTerm(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current.focus()
  })

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={css`
        margin: 2rem 0;

        input {
          display: block;
          width: 100%;
          padding: 0.5rem;
          border: transparent;
          border-bottom: 1px solid var(--colorMed);
        }
      `}
    >
      <label htmlFor="search">
        <input
          type="text"
          placeholder="enter search element"
          ref={searchValue}
          onChange={searchDrinks}
        />
      </label>
    </form>
  )
}
