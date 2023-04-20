import React, { useState } from "react";
import { Container, Avatar, Grid, TextField } from "@mui/material";
import { useEffect } from "react";



interface User {
  name: string;
  email: string;
  phoneNumber: string;
}
export const About = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = localStorage.getItem("info");
        if (userData !== null) {
          const jsondata = JSON.parse(userData)
          setUser(jsondata.user);
        }
        console.log("userdata is->", userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log('user is->>',user)
  return (
    <div>
      <Container
        style={{
          width: "50%",
          height: "400px",
          border: "1px solid black",
          padding: "30px",
          borderRadius: "8px",
          background: "linear-gradient(to right, #C5DDF9 ,#F4F99F)",
        }}
      >
        <Avatar
          style={{ margin: "auto", height: "70px", width: "70px" }}
        ></Avatar>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={user.name}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={user.email}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              value={user.phoneNumber}
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
