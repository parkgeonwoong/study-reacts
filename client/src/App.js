//import logo from './logo.svg';
import './App.css';
// react-router-dom 임포트 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// 페이지들 import 
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import NavBar from './components/views/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />

          {/* <Route path="/register">
            <RegisterPage />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

