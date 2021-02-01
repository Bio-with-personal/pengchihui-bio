import { useQuery } from '@apollo/react-hooks'
import { getCurrentUserQuery } from 'shared/graphql/queries/user/getUser'

export default function useCurrentUserState () {
  const { error, data = {}, networkStatus } = useQuery(getCurrentUserQuery)

  if (error) {
    console.log(error)
  }

  const isLoadingCurrentUser = networkStatus === 1 || networkStatus === 2
  const currentUser = data.user || null

  return {
    currentUser,
    isLoadingCurrentUser
  }
}
