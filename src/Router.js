import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { UserContext } from "../src/360/context/user";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import Loading from "./360/Pages/Loading";
import { ContextLayout } from "./utility/context/Layout";
import HomePage from "../src/360/Pages/Home";
import Login from "../src/360/Pages/Login";
import ThreeSixtyTour from "../src/360/Pages/ThreeSixtyTour";
import AllVirtualTours from "../src/360/Pages/AllVirtualTours";
import Edite360Tour from "../src/360/Pages/Edite360Tour";
import HeaderTranspernat from "../src/360/Components/HeaderTransperant";
import BasicHeader from "../src/360/Components/Header";
import Navbar from "../src/360/Components/Navbar";
import Virtual from "./views/pages/VirtualTour";
import EditHotSpot from "../src/360/Pages/EditHotSpot";
import BasicContact from "../src/360/Pages/Contact";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "../src/360/Pages/Parallax";

function Routersecond() {
  const {
    user,
    userLogin,
    userLogout,
    alert,
    showAlert,
    hideAlert,
  } = React.useContext(UserContext);
  const login = lazy(() => import("./views/pages/authentication/login/Login"));

  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: grey,
    },
    status: {
      danger: "orange",
    },
  });
  // const Virtual = lazy(() => import("./views/pages/VirtualTour"));

  // const Subscription = lazy(() => import("./views/pages/subscription"));

  // const Payments = lazy(() => import("./views/pages/payments"));

  const MyAccount = lazy(() =>
    import("./views/pages/account-settings/AccountSettings.js")
  );

  const History = lazy(() => import("./views/pages/history"));

  const Faq = lazy(() => import("./views/pages/faq/FAQ"));

  const Contact = lazy(() => import("./views/pages/contact"));

  const Home = lazy(() =>
    import("../src/views/dashboard/analytics/AnalyticsDashboard")
  );
  const UserProfile = lazy(() => import("../src/views/pages/profile/Profile"));
  // const UserProfile = lazy(() => import("../src/360/Pages/UserProfile"));
  const AllUser = lazy(() => import("./360/Pages/AllUser"));
  const UserProfileId = lazy(() =>
    import("../src/views/pages/profile/ProfileId")
  );
  const AddPlace = lazy(() => import("../src/360/Pages/AddPlace.js"));

  const CopyMe = lazy(() => import("./360/Components/copyme.js"));

  // Set Layout and Component Using App Route
  const RouteConfig = ({
    component: Component,
    fullLayout,
    permission,
    user,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) => {
        return (
          <ContextLayout.Consumer>
            {(context) => {
              let LayoutTag =
                fullLayout === true
                  ? context.fullLayout
                  : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout;
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              );
            }}
          </ContextLayout.Consumer>
        );
      }}
    />
  );
  const mapStateToProps = (state) => {
    return {
      user: state.auth.login.userRole,
    };
  };

  const AppRoute = connect(mapStateToProps)(RouteConfig);
  return (
    // Set the directory path if you are deploying in sub-folder

    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/">
            <HeaderTranspernat />
            <HomePage />
          </AppRoute>

          <AppRoute exact path="/login">
            <HeaderTranspernat />
            <Login />
          </AppRoute>

          <AppRoute exact path="/alltours">
            <BasicHeader />
            <AllVirtualTours />
          </AppRoute>

          <AppRoute path="/places/:id">
            <ThreeSixtyTour viewMode="tour" />
          </AppRoute>
          <AppRoute path="/placesUsers/:id">
            {/* <ThreeSixtyTourAllUsers /> */}
            <ThreeSixtyTour viewMode="allTour" />
          </AppRoute>

          <AppRoute path="/EditPictures/:id">
            {/* <BasicHeader /> */}
            <EditHotSpot />
          </AppRoute>

          <AppRoute path="/EditTour">
            {/* <BasicHeader /> */}
            <Edite360Tour />
          </AppRoute>
          <AppRoute path="/contactus">
            <HeaderTranspernat />
            <BasicContact />
          </AppRoute>
          {/* test */}
          <AppRoute path="/parallax">
            <Parallax />
          </AppRoute>
          {/* end test */}

          {/*  */}
          <AppRoute path="/UserProfileID/:id">
            <HeaderTranspernat />
            <UserProfileId />
          </AppRoute>

          {/*  */}
          <AppRoute path="/VirtualTour" component={Virtual} />
          {/* <AppRoute path="/subscription" component={Subscription} /> */}
          {/* <AppRoute path="/payments" component={Payments} /> */}
          <AppRoute path="/myacount" component={MyAccount} />
          <AppRoute path="/history" component={History} />
          <AppRoute path="/faq" component={Faq} />
          <AppRoute path="/contact" component={Contact} />
          <AppRoute path="/pages/login" component={login} fullLayout />
          <AppRoute path="/pages/HomePage" component={Home} />
          <AppRoute path="/AllUser" component={AllUser} />

          <AppRoute path="/UserProfile/:id" component={UserProfile} />
          <AppRoute path="/AddPlace" component={AddPlace} />
          <AppRoute path="/CopyMe" component={CopyMe} />
          <AppRoute path="/view/:id">
            <ThreeSixtyTour viewMode="allTour" />
          </AppRoute>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default Routersecond;
