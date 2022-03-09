import { Pressable, Text, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';

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
  createText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
  },
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='ownerName'
        placeholder='Repository owner name'
        style={styles.input}
      />
      <FormikTextInput
        name='repositoryName'
        placeholder='Repository name'
        style={styles.input}
      />
      <FormikTextInput
        name='rating'
        placeholder='Rating between 0 and 100'
        style={styles.input}
      />
      <FormikTextInput
        name='text'
        placeholder='Review'
        style={styles.input}
        multiline={true}
      />
      <Pressable onPress={onSubmit} style={styles.buttonContainer}>
        <Text style={styles.createText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
