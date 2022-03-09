import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const navigate = useNavigate();
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    fetchPolicy: 'network-only',
    // onCompleted: () => navigate(`/${result}`),
    onCompleted: () => navigate(`/`),
  });

  const createReview = async ({
    ownerName,
    repositoryName,
    ratingValue,
    text,
  }) => {
    const response = await mutate({
      variables: {
        review: { ownerName, repositoryName, rating: ratingValue, text },
      },
    });
    return response?.data?.repositoryId;
  };
  return [createReview, result];
};

export default useCreateReview;
