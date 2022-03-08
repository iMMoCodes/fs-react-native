import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    marginTop: 20,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: theme.colors.primary,
    marginTop: 20,
    borderRadius: 5,
  },
  signText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='username'
        placeholder='Username'
        style={styles.input}
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        style={styles.input}
      />
      <Pressable onPress={onSubmit} style={styles.buttonContainer}>
        <Text style={styles.signText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
