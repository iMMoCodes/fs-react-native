import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  title: {
    color: theme.colors.white,
    marginLeft: 10,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBarTab = ({ title, target }) => {
  return (
    <Pressable>
      <Link to={target}>
        <Text style={styles.title}>{title}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
