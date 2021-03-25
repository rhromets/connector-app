import {BrowserRouter as Router, Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../styles/styles.scss";
import {Container} from "semantic-ui-react";
import {Provider} from "react-redux";
import store from "../store";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
