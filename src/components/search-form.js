/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useGlobalContext } from '../context/context'

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  return (
    <form
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
        <input type="text" placeholder="enter search element" />
      </label>
    </form>
  )
}
