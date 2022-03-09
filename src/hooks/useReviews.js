import { useQuery } from '@apollo/client';

import { GET_REPOSITORY_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      repositoryId: id,
    },
  });

  return { reviews: data?.repository?.reviews, error, loading };
};

export default useReviews;
