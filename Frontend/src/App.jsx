import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages"
import MyGigs from "./pages/myGigs/MyGigs";
import Message from "./pages/message/Message";
import Orders from "./pages/orders/Orders";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import './App.scss';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/Gigs",
          element: <Gigs />,
        },

        {
          path: "/gig/:id",
          element: <Gig />,
        },

        {
          path: "/orders",
          element: <Orders />,
        },

        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },

        {
          path: "/messages",
          element: <Messages />,
        },

        {
          path: "/messages/:id",
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
