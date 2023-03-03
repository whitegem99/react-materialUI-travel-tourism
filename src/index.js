import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Layout } from "./utility/context/Layout";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/storeConfig/store";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import Loading from "./360/Pages/Loading";
import "./index.scss";
import "./@fake-db";
import UserProvider from "../src/360/context/user";
import ProductProvider from "../src/360/context/products";

const LazyApp = lazy(() => import("./App"));

// configureDatabase()
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <ProductProvider>
        <UserProvider>
          <Layout>
            <LazyApp />
          </Layout>
        </UserProvider>
      </ProductProvider>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
