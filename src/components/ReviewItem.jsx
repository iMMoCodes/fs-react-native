import { format } from 'date-fns';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  ratingArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 60 / 2,
    marginRight: 10,
  },
  ratingText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
  },
  textArea: {
    display: 'flex',
  },
  userName: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
  reviewArea: {
    flexDirection: 'row',
    width: 250,
  },
  reviewText: {
    fontSize: theme.fontSizes.subheading,
    flex: 1,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingArea}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.userName}>{review.user.username}</Text>
        <Text>{format(new Date(review.createdAt), 'dd.MM.yyy')}</Text>
        <View style={styles.reviewArea}>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
