import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
const navigate = useNavigate()
  const goToLogin=()=>{
    navigate('/login')
  }
  const goToSignup=()=>{
    navigate('/signup')
  }
  return (
    <>
      <Card
        style={{
          background: "pink",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "300px",
        }}
      >
        <Typography variant="h3">This is a home page</Typography>
        <Button
          style={{ background: "yellow", margin: "20px" }}
          onClick={goToSignup}
        >
          Got to signup
        </Button>
        <br />
        <Button style={{ background: "red" }} onClick={goToLogin}>
          Go to Login
        </Button>
      </Card>
    </>
  );
};
