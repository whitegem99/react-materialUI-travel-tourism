import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SalesCard from "./SalesCard";
import axios from "axios";
import { UserContext } from "../../../360/context/user";
import { ProductContext } from "../../../360/context/products";
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained";
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived";
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions";
// import AvgSession from "../"
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker";
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders";
import SalesStat from "../../ui-elements/cards/analytics/Sales";
import ActivityTimeline from "./ActivityTimeline";
import DispatchedOrders from "./DispatchedOrders";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import { Link } from "react-router-dom";
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import "../../../assets/scss/pages/users.scss";
import ContentLoader, { Facebook } from "react-content-loader";
import imgetest from "../../../360/Assets/360i.jpg";
import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardBody,
  Row,
  Col,
  Button,
  CardHeader,
  Media,
} from "reactstrap";
import {
  Layers,
  ChevronRight,
  Settings,
  Eye,
  Type,
  RotateCw,
  Edit,
  Plus,
  Image,
  MapPin,
  HelpCircle,
  Mail,
  Heart,
  ArrowUp,
  Star,
  Briefcase,
  Trash,
  Lock,
  Check,
  PlayCircle,
  PlusCircle,
} from "react-feather";
let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff";

export default function AnalyticsDashboard() {
  const { user } = React.useContext(UserContext);
  const [id, setId] = useState(user.user._id);

  const [loading, setloading] = useState(false);
  const [count, setCount] = useState([]);
  const { products, likes, updateLikes } = React.useContext(ProductContext);
  const product = products.filter((item) => item.userId === user.user._id);
  console.log(product);
  const [finalTours, setFinalTours] = useState([]);
  const [featuredImageFinal, setFeaturedImageFinal] = useState([""]);
  const history = useHistory();
  const MyLoader = (props) => (
    <ContentLoader
      speed={2}
      width={1200}
      height={500}
      viewBox="0 0 1200 500"
      backgroundColor="#0ca8fd"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </ContentLoader>
  );
  const getCounter = () => {
    axios.get("/api/counter").then((res) => {
      console.log(res.data);
      setCount(res.data);
    });
  };

  const getPlaces = () => {
    axios.get(`/api/places/user/${user.user._id}`).then((res) => {
      console.log(res.data);
      setFinalTours(res.data);
    });
  };

  useEffect(() => {
    getCounter();
    getPlaces();
  }, []);

  const finalCounter = count.filter((item) => {
    return item.userId === user.user._id;
  });

  const finalCountArray = finalCounter.map((item) => {
    return item.count;
  });
  const myTotal = (total, num) => {
    return total + num;
  };

  const FinalnumberofViews = finalCountArray.reduce(myTotal, 0);

  const NumberTours = finalTours.length;

  const mostView = Math.max(...finalCountArray);

  const mostViewDetails = finalCounter.filter((item) => {
    return item.count === mostView;
  });

  const mostViewUuid1 = mostViewDetails.map((item) => {
    return item.uuid1;
  });

  const mostViewFinalDetails = finalTours.filter((item) => {
    return item.uuid1 == mostViewUuid1;
  });

  const NameoftheMostViewTour = mostViewFinalDetails.map((item) => {
    return item.title;
  });

  const LinkBtn = mostViewFinalDetails.map((item) => {
    return item._id;
  });

  const DescoftheMostViewTour = mostViewFinalDetails.map((item) => {
    return item.description;
  });

  const imago = mostViewFinalDetails.map((item) => {
    return JSON.parse(item.image);
  });

  const finalooo = imago.map((item) => {
    return item.uploadInfo.secure_url;
  });

  // const image1 = JSON.parse(imago);
  // if (loading) {
  //   return MyLoader();
  // }
  // {
  //   setInterval(() => {
  //     setloading(false);
  //   }, 1000);
  // }
  return (
    <div>
      <React.Fragment>
        {/* {console.log(user.filter((item)=>{
           return item.username
         }))} */}
        {console.log(imago)}
        {/* {console.log(fuck)} */}
        {console.log(finalooo)}
        {console.log(user.user.username)}
        {/* {console.log(count.filter((item)=>{
           return item.userId === user.user._id
         }))} */}

        <Row className="match-height">
          <Col lg="6" md="12">
            <SalesCard />
          </Col>
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={
                <PlusCircle
                  className="primary"
                  size={50}
                  onClick={() => history.push("/AddPlace")}
                />
              }
              // stat='10'
              statTitle="ADD NEW TOUR"
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={
                <Layers
                  className="primary"
                  size={22}
                  onClick={() => history.push("/VirtualTour")}
                />
              }
              stat={product.length}
              statTitle="Total Virtual Tours"
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Eye className="primary" size={22} />}
              stat={FinalnumberofViews}
              statTitle="total of views of your virtuals tours"
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={
                <HelpCircle
                  className="primary"
                  size={22}
                  onClick={() => history.push("/faq")}
                />
              }
              statTitle="Faq"
            />
          </Col>

          <Col lg="6" md="12" sm="12">
            <Card className="text-white overlay-img-card">
              <div
                onClick={() => history.push(`/places/${LinkBtn}`)}
                style={{
                  cursor: "pointer",
                  height: "200px",
                  maxHeight: "200px",
                }}
              >
                <CardImg
                  src={finalooo}
                  alt="overlay img"
                  style={{
                    cursor: "pointer",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <CardImgOverlay className="overlay-black d-flex flex-column justify-content-between">
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    TOP VIEW
                  </h1>
                  <p style={{ color: "white", textAlign: "center" }}>
                    This tour have the most views{" "}
                  </p>
                  <CardTitle
                    className="text-white"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <h1
                      style={{
                        textAlign: "center",
                        color: "white",
                        textTransform: "uppercase",
                      }}
                    >
                      {NameoftheMostViewTour}
                    </h1>
                  </CardTitle>

                  <p>{DescoftheMostViewTour}</p>
                </CardImgOverlay>
              </div>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={user.user.image}
                          alt="Generic placeholder image"
                          height="112"
                          width="112"
                        />
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Username
                                </div>
                                <div>{user.user.username}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Name
                                </div>
                                <div>{user.user.name}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div className="text-truncate">
                                  <span>{user.user.email}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Status
                                </div>
                                <div>active</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Role
                                </div>
                                <div>admin</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Website
                                </div>
                                <div>
                                  <span>{user.user.website}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple
                      className="mr-1"
                      color="primary"
                      outline
                      onClick={() => history.push("/myacount")}
                    >
                      <Link to="/app/user/edit">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Edit</span>
                      </Link>
                    </Button.Ripple>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6" md="12" sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  {user.user.twitter !== "" ? (
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Twitter
                      </div>
                      <div className="text-truncate">
                        <span>{user.user.twitter}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {user.user.facebook !== "" ? (
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Facebook
                      </div>
                      <div className="text-truncate">
                        <span>{user.user.facebook}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {user.user.instagram !== "" ? (
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Instagram
                      </div>
                      <div className="text-truncate">
                        <span>{user.user.instagram}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {user.user.google !== "" ? (
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Instagram
                      </div>
                      <div className="text-truncate">
                        <span>{user.user.instagram}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {user.user.google !== "" ? (
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        Google+
                      </div>
                      <div className="text-truncate">
                        <span>{user.user.google}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {user.user.linkid !== "" ? (
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        linkid
                      </div>
                      <div className="text-truncate">
                        <span>{user.user.linkid}</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12" sm="12">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={
                <Mail
                  className="primary"
                  size={22}
                  onClick={() => history.push("/contact")}
                />
              }
              // stat='10'
              statTitle="Contact us"
            />
          </Col>
        </Row>
      </React.Fragment>
    </div>
  );
}
