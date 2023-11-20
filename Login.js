import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
const Login = () => {
  const [inpval, setInpval] = useState({
    password: "",
    email: "",
  });
  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container mt-3">
        <section>
          <div className="left_data mt-3"></div>
          <h3 className="text-center col-lg-6"> Sign </h3>
          <Form>
            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"
              id="sun"
            >
              <Form.Control
                type="text"
                name="name"
                onChange={getdata}
                placeholder="User name"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-4"
              controlId="formBasicEmail"
              id="sun"
            >
              {/* <img src={email} alt=""></img> */}
              <Form.Control
                type="email"
                name=" email"
                onChange={getdata}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-lg-6"
              controlId="formBasicEmail"
              id="sun"
            >
              {/* <img src={select} alt=""></img> */}
            </Form.Group>

            <Button variant="primary" className="col-lg-4" type="submit">
              Submit
            </Button>
            <p className="mt-3">
              {" "}
              Already Have an Account <span>SignIn</span>
            </p>
          </Form>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
