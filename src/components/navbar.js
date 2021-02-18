/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav
      css={css`
        background-color: var(--colorDark);
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
          display: flex;
        }

        li {
          margin-left: 0.5rem;
        }

        a {
          color: var(--colorLight);
        }

        span {
          color: var(--colorPrimary);
        }
      `}
    >
      <Link to="/">
        <h1>
          drink<span>Pal</span>
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  )
}
