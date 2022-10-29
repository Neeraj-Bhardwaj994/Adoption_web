import React, { useState } from "react";
import * as S from "./style";
import { ANYNAME } from "../Footer/config/data";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";

function Adminauth({setLoggedUser}) {
  const navigate = useNavigate();
  
  // const [logged, setLogged] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  let value;
  const handleData = (e) => {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  };

    const getCred = (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/login", data)
      .then(response => {
        alert(response.data.message);
        setLoggedUser(response.data.data);
        navigate("/admin&931Ea1nz7B&");
        // window.localStorage.setItem("token", data.username);
        // window.localStorage.setItem("isLoggedIn", true);
      })
  }


  return (
    <S.Wrap>
      <Header />
      <S.SecSection>
        <S.UppertextSec>Admin Credentials</S.UppertextSec>
        <Form
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
        >
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Username"
                  type="text"
                  value={data.username}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            
            
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="text"
                  value={data.password}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            
          
            <S.ButtonWrap>
              <Button
                variant="text"
                style={{ color: "#FFF" }}
                type="button"
                onClick={() => {
                  navigate('/');
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "yellow", color: "black" }}
                type="submit"
                onClick={e => getCred(e)}
              >
                Get in
              </Button>
            </S.ButtonWrap>
        </Form>
      </S.SecSection>
    </S.Wrap>
  );
}

export default Adminauth;