import { Text, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading: loadingRepository } = useRepository(id);
  const { reviews, loading: loadingReviews } = useReviews(id);

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  if (loadingRepository || loadingReviews) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showButton={true} />
      )}
    />
  );
};

export default SingleRepository;
