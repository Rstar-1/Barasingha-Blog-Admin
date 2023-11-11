import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userRegisterLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  userRegisterLogin: userRegisterLoginReducer,
});

//To Store the data of local/session storage in redux
//Get user data from local storage
const userInfoInLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : {};

const INITIAL_STATE = {
  //init state for user reducer
  userRegisterLogin: { userInfo: userInfoInLocalStorage },
};

//Apply thunk middleware
const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
