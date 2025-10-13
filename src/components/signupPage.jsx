import { useFormik } from "formik";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { saveUserDetails } from "../store/userDetailsSlice";
import { useNavigate } from "react-router-dom";

function SignupPage(props) {
  const savedUser = useSelector((state) => state.userDetails.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("saved user details from redux store:", savedUser);
  const savedUserName = savedUser.map((user) => user.userName);
  const savedEmail = savedUser.map((user) => user.email);
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be atmost 15 characters or less";
    } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
      errors.firstName = "First name must only contain letters";
    }
    if (!values.surname) {
      errors.surname = "Surname is required";
    } else if (values.surname.length > 20) {
      errors.surname = "Must be atmost 20 characters or less";
    } else if (!/^[A-Za-z]+$/.test(values.surname)) {
      errors.surname = "surname must contain only letters";
    }
    const userNameRegex = /^(?!.*\.\.)[a-zA-Z][a-zA-Z0-9.]{4,49}$/;
    if (!values.userName) {
      errors.userName = "Username is required";
    } else if (!/^[A-Za-z]+$/.test(values.userName)) {
      errors.userName = "username must start with a letter";
    } else if (/\.{2,}/.test(values.userName)) {
      errors.userName = "username cannot contain consecutive periods";
    } else if (!/^[A-Za-z0-9.]/.test(values.userName)) {
      errors.userName =
        "username can only contain letters, numbers, and periods";
    } else if (values.userName.length < 5 || values.userName.length > 50) {
      errors.userName = "username must be between 5 and 50 characters long";
    } else if (!userNameRegex.test(values.userName)) {
      errors.userName = "invalid username format";
    } else if (savedUserName.some((userName) => userName === values.userName)) {
      errors.userName = "Username already exists, please choose another one";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address format";
    } else if (savedEmail.some((email) => email === values.email)) {
      errors.email =
        "Email already exists, please sign instead or choose another one";
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      userName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(saveUserDetails(values));
      const userNameTest = savedUserName.some(
        (userName) => userName === values.userName
      );
      if (!userNameTest && savedEmail.some((email) => email === values.email)) {
        console.log("Signup successful", values);
        navigate("/login");
      } else {
        console.log("Signup failed", values);
      }
    },
  });

  return (
    <Modal show={props.showModal} onHide={props.closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Welcome to 4nez4Mzansi</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Control
              name="firstName"
              type="text"
              placeholder="first Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error-message">{formik.errors.firstName}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="surname">
            <Form.Control
              name="surname"
              type="text"
              placeholder="surname"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className="error-message">{formik.errors.surname}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Control
              name="userName"
              type="text"
              placeholder="username"
              onChange={formik.handleChange}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="error-message">{formik.errors.userName}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              name="email"
              type="email"
              placeholder="email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
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
              Sign up
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignupPage;
