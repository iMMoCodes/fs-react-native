import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

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
  const { data, loading } = useQuery(GET_ME);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  const user = data.me;
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title='Repositories' target='/' />
        {user ? (
          <>
            <AppBarTab title='Create a review' target='/createReview' />
            <AppBarTab title='Sign out' target='/' logout={true} />
          </>
        ) : (
          <AppBarTab title='Sign in' target='/signin' />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
