import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
