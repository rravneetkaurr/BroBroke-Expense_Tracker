import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import Layout from "./../components/Layout/Layout";
import "../styles/RegisterPage.css";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      //await axios.post("https://expense-tracker-lqgn.onrender.com/api/v1/users/register", values);
       await axios.post("http://localhost:8080/api/v1/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
    <Layout >
      <div className="register-page ">
        <div className="container">
          {loading && <Spinner />}
          <div className=" register-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Register</h1>
              <Form.Item label="Name" name="name">
                <Input type="text" required />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <div className="d-flex justify-content-between gap-5">
                <Link to="/login">Already a user ? Click Here to login !</Link>
                <button className="btn">Register</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Register;
