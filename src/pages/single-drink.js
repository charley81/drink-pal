/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { Loading } from '../components/loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const SingleDrink = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [drink, setDrink] = useState('')

  useEffect(() => {
    setLoading(true)
    async function getDrink() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]

          const newDrink = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setDrink(newDrink)
        } else {
          setDrink(null)
        }
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }
    getDrink()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!drink) {
    return <h2>No drink to display</h2>
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = drink

  return (
    <section
      css={css`
        padding: 1rem;
        margin: 2rem auto 0;
        max-width: var(--maxWidth);

        .image {
          display: block;
          margin: 0 auto 1rem;
        }

        .btn {
          display: block;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 2rem;
          border: 1px solid var(--colorDark);
          color: var(--colorDark);
          border-radius: var(--borderRadius);
          transition: var(--transition);

          &:hover {
            background: var(--colorDark);
            color: var(--colorLight);
          }
        }

        p {
          margin: 0.5rem 0;
        }

        .bold {
          background: var(--colorDark);
          color: var(--colorLight);
          padding: 0 0.5rem;
        }

        @media screen and (min-width: 992px) {
          .drink {
            display: grid;
            grid-template-columns: 2fr 3fr;
            gap: 3rem;
            align-items: center;
          }
        }
      `}
    >
      <Link to="/" className="btn">
        Back Home
      </Link>
      <h2>{name}</h2>
      <div className="drink">
        <img src={image} alt={name} className="image" />
        <div className="drink-info">
          <p>
            <span className="bold">name:</span> {name}
          </p>
          <p>
            <span className="bold">category:</span> {category}
          </p>
          <p>
            <span className="bold">info:</span> {info}
          </p>
          <p>
            <span className="bold">glass:</span> {glass}
          </p>
          <p>
            <span className="bold">instructions:</span> {instructions}
          </p>
          <p>
            <span className="bold">ingredients:</span>
            {'  '}
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
