/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { DrinkList } from '../components/drink-list'
import { SearchForm } from '../components/search-form'

export const Home = () => {
  return (
    <main
      css={css`
        padding: 1rem;
      `}
    >
      <SearchForm />
      <DrinkList />
    </main>
  )
}
