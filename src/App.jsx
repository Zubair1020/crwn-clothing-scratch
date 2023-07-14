import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUserId } from "./redux-store/user/user.selector";
import { fetchCategoriesStart } from "./redux-store/categories/category.action";
import { checkUserSession } from "./redux-store/user/user.action";

import GlobalStyle from "./global.style";
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Shop from "./components/routes/shop/shop.component";
import Auth from "./components/routes/auth/auth.component";
import CheckOut from "./components/routes/checkout/checkout.component";
import Profile from "./components/routes/profile/profile.component";

const App = () => {
  const isLoggedIn = useSelector(selectCurrentUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/shop/*"
          element={<Shop />}
        />
        {!isLoggedIn ? (
          <Route
            path="/auth"
            element={<Auth />}
          />
        ) : (
          <Route
            path="/profile"
            element={<Profile />}
          />
        )}
        <Route
          path="/checkout"
          element={<CheckOut />}
        />
      </Routes>
    </>
  );
};

export default App;
