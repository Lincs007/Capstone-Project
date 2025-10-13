import { useFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const savedUser = useSelector((state) => state.userDetails.userDetails);
  const navigate = useNavigate();
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
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const matchedUser = savedUser.find(
        (user) => user.userName === values.userName
      );
      if (matchedUser && matchedUser.password === values.password) {
        console.log("Login successful", values);
        navigate("/");
      } else {
        console.log("Login failed", values);
      }
    },
  });
  return (
    <Modal show={props.showModal} onHide={props.closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
}

export default LoginPage;
