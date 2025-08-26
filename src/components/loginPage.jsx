import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const validate = (values) => {
  const errors = {};
  const savedUser = useSelector((state) => state.userDetails);

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
};
function LoginPage() {
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
    <Container className="login-container">
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column align-items-center">
          <input
            name="userName"
            id="userName"
            type="text"
            placeholder="enter your username"
            onChange={formik.handleChange}
            value={formik.values.userName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName & formik.errors.userName ? (
            <div className="error-message">{formik.errors.userName}</div>
          ) : null}
        </div>
        <div className="d-flex flex-column align-items-center">
          <input
            name="password"
            id="password"
            type="password"
            placeholder="enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>
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
