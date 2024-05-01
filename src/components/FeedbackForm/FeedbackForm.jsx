import { Formik, Form } from 'formik';
// import s from './FeedbackForm.module.css';

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
