import { Text } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return <RepositoryItem item={repository} showButton={true} />;
};

export default SingleRepository;
