import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Events = lazy(() => import("./pages/Events"));
const Register = lazy(() => import("./pages/Register"));
const View = lazy(() => import("./pages/View"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Events />} />
          <Route path="/event/:id/register" element={<Register />} />
          <Route path="/event/:id" element={<View />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
