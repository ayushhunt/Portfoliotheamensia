import "./App.css";

// App.jsx
import Header from './comp/Layout/Header.jsx';
import Home from './pages/Home';
import Wwd from "./pages/wwd.jsx";
import Aboutus from "./pages/aboutus.jsx"
import Services from "./pages/services.jsx";
import Footer from './comp/Layout/Footer.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//hi
//hi
// App Starts here...
const App = () => {
  return (
    //Layout of the website
    <Router>
    <div className="wrapper">
      <Header className="header"/>
      <main className="main">
       <RoutesContainer/>
      </main>
      <Footer className="footer"/>
    </div>
    </Router>
  );
};

const RoutesContainer = () => {
  const location = useLocation(); // Get the current location

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} exact />
          <Route path="/wwd" element={<Wwd />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
