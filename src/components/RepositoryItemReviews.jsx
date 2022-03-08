import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import { kFormatter } from '../utils/kFormatter';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  singleContainer: {
    flexDirection: 'column',
  },
  number: {
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
});

const RepositoryItemReviews = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.singleContainer}>
        <Text style={styles.number}>{kFormatter(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.singleContainer}>
        <Text style={styles.number}>{kFormatter(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.singleContainer}>
        <Text style={styles.number}>{kFormatter(item.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.singleContainer}>
        <Text style={styles.number}>{item.ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemReviews;
