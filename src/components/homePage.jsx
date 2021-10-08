import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  let history = useHistory();
  useEffect(() => {
    toast.info("Welcome to Health Calculator!");
  });
  return (
    <div>
      <ToastContainer theme="colored" />
      <button
        onClick={() => {
          history.push("/bmi");
        }}
      >
        bmi
      </button>
      <button
        onClick={() => {
          history.push("/wi");
        }}
      >
        water intake{" "}
      </button>
      <button
        onClick={() => {
          history.push("/idw");
        }}
      >
        ideal weight
      </button>
      <button>coming soon </button>
    </div>
  );
};

export default HomePage;
