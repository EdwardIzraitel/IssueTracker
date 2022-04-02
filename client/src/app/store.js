import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import userSlicer from "./features/user.auth.js/userSlicer";
import thunk from "redux-thunk";

export default createStore(userSlicer, applyMiddleware(thunk));
