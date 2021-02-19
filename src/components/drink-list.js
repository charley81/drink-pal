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
    <section>
      <h2>drinks</h2>
      <div>
        {drinks.map(drink => (
          <Drink key={drink.id} {...drink} />
        ))}
      </div>
    </section>
  )
}
