import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { setuser } from "./redux/action";
import { Loading } from "./components/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth
      .onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(setuser(authUser))
        } else {
          dispatch(setuser(null));
        }
      });
  }, [dispatch]);

  const promise = loadStripe(
    "pk_test_51MzyZySEqYUPU3aRLfrn61TFS8F04St8cvZvSgdE4Qwb6Dgo2wa0XH2EZe2elJ2mHhWMhDMf6Vvb3F7cGGFahmXI00U7N9hCBt"
   );

  return (
    <BrowserRouter>
      <div className="App">
      <Suspense fallback={<Loading/>}>
            
             <Routes>
              <Route path="/payment" element={<Elements stripe={promise}>
                <Payment /></Elements>} 
              />
             </Routes> 


            <Routes>
              <Route path="/orders" element={<Orders />} />
            </Routes>
            <Routes>
              <Route path="/orders" element={<Header />} />
            </Routes>
            {/* <Routes>
              <Route path="/payment" element={<Payment />}/>
            </Routes> */}

            <Routes>
              <Route path="/checkout" element={<Checkout />} />
            </Routes>

            <Routes>
              <Route path="/product/:id" element={<Header />} />
            </Routes>

            <Routes>
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>

            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>

            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>

            <Routes>
              <Route path="/" element={<Header />} />
            </Routes>

            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;


// <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />