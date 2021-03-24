import {BrowserRouter as Router, Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../styles/styles.scss";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import {Container} from "semantic-ui-react";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Container>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
