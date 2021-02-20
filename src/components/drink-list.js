/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Drink } from '../components/drink'
import { Loading } from '../components/loading'
import { useGlobalContext } from '../context/context'

export const DrinkList = () => {
  const { drinks, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (drinks.length < 1) {
    return (
      <p
        css={css`
          margin-top: 10vh;
          text-align: center;
        `}
      >
        no search matches found
      </p>
    )
  }

  return (
    <section
      css={css`
        text-align: center;

        h2 {
          margin: 1rem auto 3rem;
          border-bottom: 1px solid var(--colorMed);
          width: 50%;
        }
        .drink-container {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          display: grid;
          grid-gap: 1rem;
        }
      `}
    >
      <h2>Drink List</h2>
      <div className="drink-container">
        {drinks.map(drink => (
          <Drink key={drink.id} {...drink} />
        ))}
      </div>
    </section>
  )
}
