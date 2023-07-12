import { compose, applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const middleWare = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWare));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(reduxStore);
