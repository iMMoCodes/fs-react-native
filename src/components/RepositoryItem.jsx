import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryItemDescription from './RepositoryItemDescription';
import RepositoryItemReviews from './RepositoryItemReviews';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
});

const RepositoryItem = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <RepositoryItemDescription item={item} />
      <RepositoryItemReviews item={item} />
    </View>
  );
};

export default RepositoryItem;
