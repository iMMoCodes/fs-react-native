import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    height: 90,
    backgroundColor: theme.colors.blackBackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title='Repositories' target='/' />
      <AppBarTab title='Sign in' target='/signin' />
    </View>
  );
};

export default AppBar;
