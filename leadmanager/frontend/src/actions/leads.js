import axios from "axios";
import { GET_LEADS, DELETE_LEADS, ADD_LEADS } from "./types";

//get leads
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete leads
export const deleteLeads = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LEADS,
        payload: id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//add leads
export const addLeads = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch({
        type: ADD_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};