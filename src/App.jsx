import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import ContactUs from './components/ContactUs';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));
const Cart = lazy(() => import('./components/Cart'));

const AppLayout = ()=>{

  const [ userName , setUserName ] = useState();

  useEffect(()=>{
    // Making an Dummy  API call to fetch user data 
    const data = {
      name: "Sandeep",
    }
    setUserName(data.name);
  },[])


  return (
    // connecting the Store 
    <Provider store={appStore}>
       {/* Example of useContext  */}
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>,
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
