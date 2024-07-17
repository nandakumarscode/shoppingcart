import {Routes, Route} from "react-router-dom";
import {Home, Cart} from "../pages"

import React from 'react';

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}
