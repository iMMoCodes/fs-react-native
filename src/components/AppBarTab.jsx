import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  title: {
    color: theme.colors.white,
    marginLeft: 10,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBarTab = ({ title, target, logout }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (logout) {
    return (
      <Pressable>
        <Link to={target}>
          <Text style={styles.title} onPress={handleLogout}>
            {title}
          </Text>
        </Link>
      </Pressable>
    );
  } else {
    return (
      <Pressable>
        <Link to={target}>
          <Text style={styles.title}>{title}</Text>
        </Link>
      </Pressable>
    );
  }
};

export default AppBarTab;
