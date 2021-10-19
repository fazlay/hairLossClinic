import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/Login/LogIn';
import PrivateRoute from './component/PrivetRoute/PrivetRoute';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Services from './component/Services/Services';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/shop'>
              <Shop></Shop>
            </PrivateRoute>
            <PrivateRoute path='/appoinment'>
              <Contact></Contact>
            </PrivateRoute>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
