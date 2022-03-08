import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  title: {
    color: theme.colors.white,
    marginLeft: 10,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBarTab = ({ title }) => {
  return (
    <Pressable>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default AppBarTab;
