import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    display: 'flex',
    marginLeft: 10,
  },
  fullName: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  descContainer: {
    width: 250,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  description: {
    flex: 1,
  },
  languageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    width: 100,
    padding: 5,
  },
  language: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const RepositoryItemDescription = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <View style={styles.descContainer}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItemDescription;
