import React from "react";
import {Button} from "semantic-ui-react";

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-content'>
          <h1>Developer Connector Application</h1>
          <h3>Powerful application description</h3>
          <Button primary size={"medium"}>
            Sing Up
          </Button>
          <Button size={"medium"}>Login</Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
