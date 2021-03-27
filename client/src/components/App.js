import {BrowserRouter as Router, Route} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import {setCurrentUser} from "../actions/authActions";

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

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

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
