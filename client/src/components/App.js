import "semantic-ui-css/semantic.min.css";
import "../styles/styles.scss";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};

export default App;
