import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { login } from "../Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { Dispatch } from "redux";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
    const [password, setPassword] = useState('');
  const loginData = useSelector(
    (state: any) => state.userLoginReducer.loginInfo
  );


  const handleEmail = (e: any) => {
    setEmail(e.target.value)
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit(true)
    dispatch(login(email, password));
    navigate("/about");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
  
    <div>
      <Typography variant="h3" style={{ margin: "5px" }}>
        Login
      </Typography>
      <Container
        style={{
          marginTop: "50px",
          width: "400px",
          border: "1px solid black",
          padding: "30px",
          borderRadius: "8px",
          background: "linear-gradient(to right, white ,aqua)",
        }}
      >
        <Grid>
          <TextField
            label="Email"
            style={{ margin: "10px" }}
            variant="outlined"
            fullWidth
            onChange={handleEmail}
          />
        </Grid>
        <Grid>
          <TextField
            label="Password"
            variant="outlined"
            style={{ margin: "10px" }}
            type="password"
              value={password}
            fullWidth
            onChange={handlePassword}
          />
        </Grid>
        <Grid>
          <Button
            variant="contained"
              onClick={handleSubmit}
            style={{ marginTop: "25px" }}
          >
            Login
          </Button>
        </Grid>
        <Typography style={{ marginTop: "4px" }}>Not a user?</Typography>
        <Button onClick={goToSignup}>signup</Button>
      </Container>
    </div>
  );
};

export default Login;
