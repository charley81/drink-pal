/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

export const Drink = ({ id, image, glass, info, name }) => {
  return (
    <article
      css={css`
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color: var(--colorLight);

        .img-container {
          text-align: center;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: var(--borderRadius);
        }

        .info {
          padding: 1rem;
          text-align: left;
        }

        .btn {
          display: block;
          text-align: center;
          margin: 1rem auto;
          background: var(--colorDark);
          color: var(--colorPrimary);
          border-radius: var(--borderRadius);
          border: 1px solid transparent;
          transition: var(--transition);

          &:hover {
            background: transparent;
            border: 1px solid var(--colorDark);
            color: var(--colorDark);
          }
        }
      `}
    >
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <p>Name: {name}</p>
        <p>Glass: {glass}</p>
        <p>Info: {info}</p>
        <Link to={`/drink/${id}`} className="btn">
          more info
        </Link>
      </div>
    </article>
  )
}
