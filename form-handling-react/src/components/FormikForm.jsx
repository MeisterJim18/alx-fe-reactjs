import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

const FormikForm = () => {
  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Mock API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Formik registration successful:', result);
        alert('Registration with Formik successful!');
        // Reset form after successful submission
        resetForm();
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>Registration (Formik)</h2>
      
      {/* Formik wrapper component */}
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            {/* Username field with Formik */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  marginTop: '5px',
                  border: errors.username && touched.username ? '1px solid red' : '1px solid #ccc'
                }}
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>

            {/* Email field with Formik */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  marginTop: '5px',
                  border: errors.email && touched.email ? '1px solid red' : '1px solid #ccc'
                }}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>

            {/* Password field with Formik */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  marginTop: '5px',
                  border: errors.password && touched.password ? '1px solid red' : '1px solid #ccc'
                }}
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>

            {/* Submit button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: isSubmitting ? '#ccc' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Registering...' : 'Register with Formik'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;