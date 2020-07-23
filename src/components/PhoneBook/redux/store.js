import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/appReducer";

const middleware = [thunk];

export const store = configureStore({
  reducer: reducers,
  middleware,
  // composeWithDevTools(applyMiddleware(...middleware)),
});
// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
//   );
