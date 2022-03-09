import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';
import useCreateReview from '../hooks/useCreateReview';

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner's username is required"),
  repositoryName: yup.string().required("Repository's name is required"),
  rating: yup.number().min(0).max(100).required('Rating is required (0-100)'),
  text: yup.string(),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
});

export const ReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    const ratingValue = parseInt(rating);
    try {
      await createReview({ ownerName, repositoryName, ratingValue, text });
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
