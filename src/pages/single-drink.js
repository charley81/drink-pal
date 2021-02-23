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

  console.log(drink)

  return (
    <section>
      <Link to="/">Back Home</Link>
      <h2>{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            name: <span>{name}</span>
          </p>
          <p>
            category: <span>{category}</span>
          </p>
          <p>
            info: <span>{info}</span>
          </p>
          <p>
            glass: <span>{glass}</span>
          </p>
          <p>
            instructions: <span>{instructions}</span>
          </p>
          <p>
            ingredients:{' '}
            <span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
