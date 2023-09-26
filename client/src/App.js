import React, { useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './context/StateContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import MediaQuery from 'react-responsive'

//Style
import './App.css';

//Components
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Adresse from './components/Adresse/Adresse';
import AddAdresse from './components/Adresse/AddAdresse/AddAdresse'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import UpdateName from './components/UpdateName/UpdateName';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Confirmation from './components/Confirmation/Confirmation';
import Paiement from './components/Paiement/Paiement'
import PageProduct from './components/PageProduct/PageProduct'
import Footer from './components/Footer/Footer';

//Data
import ProductData from './components/Product/ProductData'
import SmartCart from './components/SmartCart/SmartCart';
import SmartCartLateral from './components/SmartCart/SmartCartLateral/SmartCartLateral';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import PageProductDesktop from './components/PageProduct/PageProductDesktop/PageProductDesktop';


const promise = loadStripe("pk_test_51INdwHEOrvuT1Xf4LQ95OSY8TGsENRZzlK2I3TM99Oklyd5t2A0awML3a8mCpBIu2ySi6Y9iEf1vQJ6EC9vy22QW00fabkJyGD");


function App() {
  const [{cart, user}, dispatch] = useStateValue();
    
  useLayoutEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, ['user', user]);

  useLayoutEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, ['cart', cart]);

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Switch>
          {ProductData.map((product) => {     
              return (
                  <Route path={"/"+product.url} >
                    <Header />
                    <Nav />
                    <PageProduct
                      key={product.id}
                      title={product.title}
                      category={product.category}
                      image={product.image}
                      price={product.price}
                      ratingStar={product.ratingStar}
                      ratingNumber={product.ratingNumber}
                      prime={product.prime}
                      url={product.url}
                    />
                  </Route>
              );
          })}
          <Route path="/paiement">
            <Elements stripe={promise}>
              <Paiement />
            </Elements>
          </Route>
          <Route path="/motdepasseoublie/confirmation">
            <Confirmation />
          </Route>
          <Route path="/motdepasseoublie">
            <ForgotPassword />
          </Route>
          <Route path="/definirnom">
            <UpdateName />
          </Route>
          <Route path="/inscription">
            <Register />
          </Route>
          <Route path="/connexion">
            <Login />
          </Route>
          <Route path="/panier">
            <Header />
            <Nav />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/smart-cart">
            <MediaQuery minDeviceWidth={1025}>
              <div style={{display : "flex"}}>
                <div style={{flex: "1"}}>
                  <Header />
                  <Nav />
                  <SmartCart />
                  <Footer />
                </div>
                <SmartCartLateral />
              </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1024}>
              <Header />
              <Nav />
              <SmartCart />
              <Footer />
            </MediaQuery>
          </Route>
          <Route path="/profil">
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path="/adresse">
            <Header />
            <Adresse />
            <Footer />
          </Route>
          <Route path="/addAdresse">
            <Header />
            <AddAdresse />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Nav />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
