import React from "react";
import { Route, Routes } from "react-router-dom";
import Appointment from "./component/Appointment";
import Layout from "./component/Layout";
import Special from "../components/Special";
import Doc from "./doccat";
import Docappointment from "./Docappointment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Docappointment" element={<Docappointment />} />
    </Routes>
  );
};

export default AppRoutes;
