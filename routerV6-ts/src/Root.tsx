import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Router from "./Router";

function Root() {
  return (
    <div>
      {/* BrowserRouter */}
      {/* <Router /> */}
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
