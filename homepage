import { Typography, Input, Button } from "@mui/material";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const gotoRegister = useNavigate();
  return (
    <div>
      <h1>hello home how are you page</h1>
      <div>
        <h4>Welcome!</h4>
        <Link to="/about">
          <h4>about me </h4>
        </Link>
        <Link to="/register">
          <h4>ragister here</h4>
        </Link>
        <Link to="/contact">
          <h4>contact</h4>
        </Link>
      </div>
      <div>
        <div>
          hello man my company is a human seviceses agency my company sevices is free sevices , as provide your kneed day proudact with add my provide
          my suggest product ofcourse govment registri and real product verifying , my site provide proudact no scam
          <h3>if you understand my company plese press about me button</h3>
          <Button
            variant="contained"
            onClick={() => {
              gotoRegister("/register");
            }}
            size="small"
            color="primary"
          >
            about me
          </Button>
        </div>
      </div>
      <div>
        my app use free, any human health sevices center ,but your center ofcourse govment registre
        <p> if you register done press register button</p>
        <Button
          variant="contained"
          onClick={() => {
            gotoRegister("/register");
          }}
          size="small"
          color="primary"
        >
          register here
        </Button>
      </div>
      <div>
        my contact anytime mett or cocialmedia or hansone for open any person
        <p>if you amader shathe meet shomporke bistaritho janthe press contacy me button</p>
        <Button
          variant="contained"
          onClick={() => {
            gotoRegister("/contact");
          }}
          size="small"
          color="primary"
        >
          contac me
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
