import {
  Button,
  Card,
  TextField,
  Typography,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Dispatch } from "redux";
import { register } from "../Actions/actions";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhone] = useState(0);


  const goToSignUp = () => {
    navigate("/login");
  };
  const dispatch: Dispatch<any> = useDispatch();

 

  const handleName=(e:any)=>{
    setName(e.target.value)
  }
  const handleEmail=(e:any)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e:any)=>{
    setPassword(e.target.value)
  }
  const handlePhone=(e:any)=>{
    setPhone(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(register(name, email, password, phoneNumber));
    navigate("/about");
  };
  return (
    <form>
      <Card
        style={{
          border: "1.5px solid black",
          width: "450px",
          backgroundImage: "linear-gradient(to right, white , blue)",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "15px",
          height: "550px",
        }}
      >
        <Typography
          variant="h4"
          style={{
            margin: "8px",
            color: "#0a061d",
            borderRadius: "5px",
            padding: "4px",
            fontFamily: "Segoe UI",
          }}
        >
          Sign Up
        </Typography>
        <CardContent>
          <TextField
            label="Name"
            //   value={name}
              onChange={handleName}
            required={true}
            fullWidth
          />
        </CardContent>
        <CardContent>
          <TextField
            label="Email"
            type="email"
            //   value={email}
            required={true}
            fullWidth
              onChange={handleEmail}
          />
        </CardContent>
        <CardContent>
          <TextField
            label="Password"
            type="password"
            //   value={password}
              onChange={handlePassword}
            required={true}
            fullWidth
          />
        </CardContent>
        <CardContent>
          <TextField
            label="Phone"
            type="number"
              value={phoneNumber}
              onChange={handlePhone}
            required={true}
            fullWidth
          />
        </CardContent>
        <Button
          style={{ margin: "20px", width: "150px" }}
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Typography>
          Already have an account? {<Button style={{background:'yellow',margin:'10px'}} onClick={goToSignUp}>Login</Button>}
        </Typography>
      </Card>
    </form>
  );
};
