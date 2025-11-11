import { useFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../store/authSlice";

function LoginPage(props) {
  // Get saved user details from Redux store
  const savedUser = useSelector((state) => state.userDetails.userDetails);

  // React Router hook to navigate programmatically
  const navigate = useNavigate();

  // Redux dispatch function to trigger actions
  const dispatch = useDispatch();

  console.log("saved user details from redux store:", savedUser);

  // Validation function for Formik
  const validate = (values) => {
    const errors = {};

    // Check if username is empty
    if (!values.userName) {
      errors.userName = "Username is required";
    }
    // Check if password is empty
    else if (!values.password) {
      errors.password = "Password is required";
    }
    // Check if username exists and password matches
    else {
      const matchedUser = savedUser.find(
        (user) => user.userName === values.userName
      );

      if (!matchedUser) {
        errors.userName =
          "There's no existing account linked to the username you provided, please try again or signup to create an account";
      } else if (matchedUser.password !== values.password) {
        errors.password =
          "Wrong password, please try again or click forgot password to start password recovery";
      }
    }

    return errors; // Return errors object to Formik
  };

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      userName: "", // initial username value
      password: "", // initial password value
    },
    validate, // assign the validate function
    onSubmit: (values) => {
      // Find matching user from saved users
      const matchedUser = savedUser.find(
        (user) => user.userName === values.userName
      );

      // If credentials match, log in the user
      if (matchedUser && matchedUser.password === values.password) {
        dispatch(loginSuccess(matchedUser)); // update Redux auth state
        console.log("Login successful", values);
        props.closeModal(); // close modal
        navigate("/"); // navigate to home page
      } else {
        console.log("Login failed", values);
      }
    },
  });

  return (
    // Modal to display login form
    <Modal
      show={props.showModal} // control modal visibility from parent
      onHide={props.closeModal} // close modal on outside click or X button
      centered
      className="prompt-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Formik form */}
        <Form onSubmit={formik.handleSubmit}>
          {/* Username input */}
          <Form.Group className="mb-3" controlId="userName">
            <Form.Control
              name="userName"
              type="text"
              placeholder="enter your username"
              onChange={formik.handleChange} // handle input change
              value={formik.values.userName} // bind value from Formik state
              onBlur={formik.handleBlur} // track if field has been touched
            />
            {/* Show validation error if any */}
            {formik.touched.userName && formik.errors.userName ? (
              <div className="error-message">{formik.errors.userName}</div>
            ) : null}
          </Form.Group>

          {/* Password input */}
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              name="password"
              type="password"
              placeholder="enter your password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {/* Show validation error if any */}
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </Form.Group>

          {/* Submit button */}
          <div className="d-flex flex-column align-items-center">
            <Button variant="dark" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// Export the component for use in other parts of the app
export default LoginPage;
