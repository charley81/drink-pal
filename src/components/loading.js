/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import img from '../images/loader.gif'

export const Loading = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <img src={img} alt="loading" />
    </div>
  )
}
