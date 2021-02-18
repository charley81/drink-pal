/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <section
      css={css`
        text-align: center;
        margin: 10vh auto 0;

        h2 {
          margin-bottom: 2rem;
        }

        .btn {
          color: var(--colorDark);
          cursor: pointer;
          background: var(--colorDark);
          color: var(--colorPrimary);
          padding: 0.5rem 1rem;
          border-radius: var(--borderRadius);
          transition: var(--transition);

          &:hover {
            background: transparent;
            color: var(--colorDark);
            border: 1px solid var(--colorDark);
          }
        }
      `}
    >
      <h2>something went wrong...</h2>
      <Link className="btn" to="/">
        ← back home
      </Link>
    </section>
  )
}
