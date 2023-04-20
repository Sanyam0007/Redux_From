import axios from "axios";
import { Dispatch } from "redux";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../Constants/ActionNames";
// import { type } from 'os';

export const register =
  (name: string, email: string, password: string, phoneNumber: number) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:4000/signup`,
        { name, email, password, phoneNumber },
        config
      );

      localStorage.setItem("info", JSON.stringify(data));

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload: error,
      });
      console.log("error", error);
    }
  };

// LOGIN

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:4000/login`,
        { email, password },
        config
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("info", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: error,
      });
      console.log("error", error);
    }
  };
