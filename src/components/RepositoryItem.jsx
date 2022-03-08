import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import RepositoryItemDescription from './RepositoryItemDescription';
import RepositoryItemReviews from './RepositoryItemReviews';
import Text from './Text';
import { openURL } from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  openTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  openText: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    textAlign: 'center',
    flexDirection: 'row',
    width: 300,
    padding: 5,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const RepositoryItem = ({ item, showButton }) => {
  return (
    <View style={styles.container}>
      <RepositoryItemDescription item={item} />
      <RepositoryItemReviews item={item} />
      {showButton && (
        <Pressable onPress={() => openURL(item.url)}>
          <View style={styles.openTextContainer}>
            <Text style={styles.openText}>Open in Github</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
