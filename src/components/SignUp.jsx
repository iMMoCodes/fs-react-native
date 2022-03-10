import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';
import SignUpForm from './SignUpForm';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirmation is required'),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
});

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
