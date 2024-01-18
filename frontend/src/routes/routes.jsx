import { Routes, Route, Link, Outlet } from "react-router-dom";
import Signin from "../components/authentication/signin";
import Signup from "../components/authentication/signup";
import Home from "../components/dashboard/Home";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";

const RouteList = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Route>
          <Route element={<HomeLayout />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </MainLayout>
    </>
  );
};

export default RouteList;
