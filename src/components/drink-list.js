import { Drink } from '../components/drink'
import { Loading } from '../components/loading'
import { useGlobalContext } from '../context/context'

export const DrinkList = () => {
  const { drinks, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  return <div>drink list component</div>
}
