import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

function LoginPage() {
  const savedUser = useSelector((state) => state.userDetails);
  console.log("saved user details from redux store:", savedUser);
  const validate = (values) => {
    const errors = {};

    if (!values.userName) {
      errors.userName = "Username is required";
    } else if (!values.password) {
      errors.password = "Password is required";
    } else {
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
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Login form data has been submitted", values);
    },
  });
  return (
    <Container className="form-container py-5">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Control
            name="userName"
            type="text"
            placeholder="enter your username"
            onChange={formik.handleChange}
            value={formik.values.userName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="error-message">{formik.errors.userName}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            name="password"
            type="password"
            placeholder="enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </Form.Group>
        <div className="d-flex flex-column align-items-center">
          <Button variant="dark" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default LoginPage;
