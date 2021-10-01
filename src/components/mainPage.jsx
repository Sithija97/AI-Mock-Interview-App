import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  let history = useHistory();
  useEffect(() => {
    toast.info("Welcome to Health Calculator!");
  });
  return (
    <React.Fragment>
      <ToastContainer theme="colored" />


      <div class="row">
      <Grid
        style={{ padding: "10vh" }}
        // container
        // direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
          <div className="column">
          <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#dc60fb" }}
          >
           <div className="circular--portrait" ></div>
    {/* <p>Some text..</p> */}
    <button
    className="button button1"
        onClick={() => {
          history.push("/bmi");
        }}
      >
        Get your BMI Index Value
      </button>

        </Container>
        </Grid>
  </div>
  
  <div className="column">
          <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#8cfb60" }}
          >
           <div className="circular--portrait2" ></div>
    {/* <p>Some text..</p> */}
    <button
    className="button button2"
        onClick={() => {
          history.push("/wi");
        }}
      >
        know your water intake level
      </button>
          </Container>
        </Grid>
  </div>
  
  <div className="column">
          <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#60d9fb" }}
          >
              <div className="circular--portrait3" ></div>
    {/* <p>Some text..</p> */}
    <button
    className="button button3"
        onClick={() => {
          history.push("/idw");
        }}
      >
        get your ideal weight
      </button>
          </Container>
        </Grid>
  </div>
  
  <div className="column">
          <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#fbeb60" }}
          >
              <div className="circular--portrait4" ></div>
    {/* <p>Some text..</p> */}
    <button
    className="button button4"
        onClick={() => {
          history.push("/idw");
        }}
      >
        get your ideal weight
      </button>
          </Container>
        </Grid>
  </div>

        </Grid>

</div>
       {/* <button
        onClick={() => {
          history.push("/bmi");
        }}
      >
        get your bmi value
      </button>
      <br />
      <button
        onClick={() => {
          history.push("/wi");
        }}
      >
        know your water intake level
      </button>
      <br />
      <button
        onClick={() => {
          history.push("/idw");
        }}
      >
        get your ideal weight
      </button>
      <br /> */}
    </React.Fragment>
  );
};

export default MainPage;
