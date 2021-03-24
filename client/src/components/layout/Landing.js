import React from "react";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Landing = (props) => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-content'>
          <h1>Developer Connector Application</h1>
          <h3>Powerful application description</h3>
          <Button as={Link} to='/register' primary size={"medium"}>
            Sing Up
          </Button>
          <Button as={Link} to='/login' size={"medium"}>
            Login
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
