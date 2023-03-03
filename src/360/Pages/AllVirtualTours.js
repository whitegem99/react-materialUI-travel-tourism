import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../context/products";
import { UserContext } from "../context/user";
import Pagination from "../../components/@vuexy/Pagination/Pagination";
import AllProductList from "../../360/Components/Products/AllProductList";
import axios from "axios";
import styled from "styled-components";
import { Container, Row } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from "../../components/@vuexy/spinner/Loading-spinner";
import Swiper from "react-id-swiper";
import ContentLoader, { Facebook } from "react-content-loader";
import { sortTypes } from "../utils/Constants";
import {
  MyGoogleMap,
  getIpLocation,
  getGeoLocationFromGoogle,
  PlacesMap,
} from "../Components/MyGoogleMap";
import { geolocationOption } from "../utils/Constants";
// import Spinner from '../../components/@vuexy/spinner/Loading-spinner';
import useLockBodyScroll from "../Components/useLockBodyScroll";
import Loader from "react-loader-spinner";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isIOS,
  isTablet,
} from "react-device-detect";
import { Col } from "react-bootstrap";
export default function AllVirtualTours(props) {
  useLockBodyScroll();
  const { products, counter, likes } = React.useContext(ProductContext);
  const { user } = React.useContext(UserContext);
  const [productso, setProductso] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);
  const [productTotal, setProductTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortIndex, setSortIndex] = useState(0);
  const [loadedEnd, setLoadingEnd] = useState(false);
  const [bSingleMap, setSingleMap] = useState(false);
  const [ipLocation, setLocation] = useState(() =>
    props.location ? props.location : null
  );
  // const [markers, setMarkers] = useState([]);
  const navLocation = useLocation();
  const geoLocation = navLocation.state ? navLocation.state.geoLocation : null;

  React.useEffect(() => {
    setLocation(geoLocation);
    if (geoLocation) {
      setSingleMap(true);
      console.log("geoLocation=>", geoLocation);
      setSortIndex(4);
      // handleChangeSort(4);
    }
  }, [geoLocation]);

  React.useEffect(() => {
    if (sortIndex !== undefined && sortIndex > -1) {
      showPlaces();
    }
  }, [sortIndex]);

  const getLocation = () => {
    (async () => {
      const position = await getGeoLocationFromGoogle();
      console.log("position=>", position);
      if (!position) {
        setLocation({ lng: position.location.lng, lat: position.location.lat });
      } else {
        const location = await getIpLocation();
        setLocation({ lng: location.longitude, lat: location.latitude });
      }
    })();
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   setLocation({lng: position.coords.longitude, lat: position.coords.latitude });
    // }, (async (err) => {
    //   console.log('location error=>', err);
    //   if (err.code === 1) {
    //     alert('Please allow location known!');
    //   } else {
    //     alert(`${err.code}:${err.message}`);
    //   }
    //   const location = await getIpLocation();
    //   setLocation({lng: location.longitude, lat: location.latitude });
    // }), geolocationOption);
  };

  const showPlaces = () => {
    if (!loading || !loadedEnd) {
      setLoading(true);
      axios
        .get(`/api/places`, {
          params: {
            currentPage: currentPage + 1,
            pageSize,
            sortIndex,
            ipLocation: JSON.stringify(ipLocation),
          },
        })
        .then((res) => {
          console.log("places=>", res.data);
          setProductTotal(productTotal + res.data.length);
          setProductso(productso.concat(res.data));
          setCurrentPage(currentPage + 1);
          setLoading(false);
          if (res.data.length < pageSize) {
            setLoadingEnd(true);
          }
        });
    }
  };

  const handleChangeSort = (index) => {
    setCurrentPage(0);
    setProductTotal(0);
    setLoadingEnd(false);
    setProductso([]);
    setSortIndex(index);
    if (index === 4) {
      setSingleMap(false);
      getLocation();
    }
  };
  const params = {
    slidesPerView: 2,
    spaceBetween: 0,
  };
  const sortTabDiv = () => {
    return (
      <Whole>
        <Container>
          <div style={{ overflowX: "hidden" }}>
            <div
              style={{
                backgroundColor: "white",
                position: "fixed",
                top: "80px",
                left: "0px",
                width: "100%",
                zIndex: "111",
                borderBottom: "1px solid #cacaca",
              }}
            >
              <Row className="justify-content-center">
                {isMobile ? (
                  <>
                    <Swiper {...params}>
                      {sortTypes.map((type, index) => (
                        <div
                          style={{}}
                          sm="12"
                          md="3"
                          key={`${type}-${index}`}
                          onClick={(e) => handleChangeSort(index)}
                          style={{ borderBottom: "1px solid #cacaca" }}
                        >
                          <p
                            style={{
                              color:
                                sortIndex === index ? "#0ca8fd" : "#a0a0a0",
                              padding: "10px",
                              cursor: "pointer",
                              borderRadius: 4,
                              margin: "10px 10px 10px 30px",
                              textAlign: "center",

                              // backgroundColor: sortIndex === index ? '#0ca8fd':'white'
                            }}
                          >
                            {type.name}
                          </p>
                        </div>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <>
                    {sortTypes.map((type, index) => (
                      <div
                        sm="12"
                        md="3"
                        key={`${type}-${index}`}
                        onClick={(e) => handleChangeSort(index)}
                      >
                        <p
                          style={{
                            color: sortIndex === index ? "#0ca8fd" : "#a0a0a0",
                            padding: "5px",
                            cursor: "pointer",
                            borderRadius: 4,
                            margin: "20px 20px",
                            // backgroundColor: sortIndex === index ? '#0ca8fd':'white'
                          }}
                        >
                          {type.name}
                        </p>
                      </div>
                    ))}{" "}
                  </>
                )}
              </Row>
            </div>
            <Row>
              {isMobile && sortIndex !== 4 ? (
                <>
                  <div>
                    <h2
                      style={{
                        textAlign: "center",
                        marginTop: "14rem",
                        fontWeight: "bold",
                      }}
                    >
                      {sortTypes[sortIndex].name}
                    </h2>
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "2rem",
                        padding: "2rem 3rem",
                        color: "black",
                      }}
                    >
                      {sortTypes[sortIndex].desc}
                    </p>
                  </div>
                </>
              ) : (
                sortIndex !== 4 && (
                  <div style={{ borderTop: "1px solid #c9c9c9" }}>
                    <h2
                      style={{
                        textAlign: "center",
                        marginTop: "14rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {sortTypes[sortIndex].name}
                    </h2>
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "2rem",
                        padding: "2rem 30rem",
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      {sortTypes[sortIndex].desc}
                    </p>
                  </div>
                )
              )}
            </Row>
          </div>
        </Container>
      </Whole>
    );
  };
  const getPlacesMap = () => {
    const markers = products
      .filter((product) => product.location.coordinates[0] !== 0)
      .map((it) => ({
        title: it.title,
        longitude: Number(it.location.coordinates[0]),
        latitude: Number(it.location.coordinates[1]),
      }));
    const places = products.filter(
      (product) => product.location.coordinates[0] !== 0
    );
    return ipLocation ? (
      <PlacesMap
        isMarkerShown={true}
        zoom={10}
        defaultCenter={ipLocation}
        single={bSingleMap}
        getMapInfo={() => {}}
        markers={markers}
        places={places}
        counter={counter}
        likes={likes}
      />
    ) : (
      <div
        style={{
          position: "absolute",
          top: 180,
          display: "flex",
          justifyContent: "center",
          paddingBottom: "2rem",
        }}
      >
        <Loader
          type="ThreeDots"
          color="#0ca8fd"
          height={70}
          width={70}
          // timeout={3000} //3 secs
        />
      </div>
    );
  };
  // console.log('ipLocation=>', ipLocation);
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      {sortTabDiv()}
      {sortIndex === 4 ? (
        <div
          style={{
            padding: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {getPlacesMap()}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={productTotal}
          next={showPlaces}
          hasMore={!loadedEnd}
          // hasChildren={false}
          // loader={<div className="m-5" > <Spinner type='grow' color='primary' /></div>}
          loader={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "2rem",
              }}
            >
              <Loader
                type="ThreeDots"
                color="#0ca8fd"
                height={70}
                width={70}
                // timeout={3000} //3 secs
              />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>All tours are loaded</b>
            </p>
          }
        >
          <AllProductList
            products={productso}
            counter={counter}
            likes={likes}
          />
        </InfiniteScroll>
      )}
    </div>
  );
}

const Whole = styled.div`
  .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
  }
  .scrolling-element {
    overflow-x: scroll; /* Must be 'scroll' not 'auto' */
    -webkit-overflow-scrolling: touch;
  }
  .container {
    padding-left: 0px !important;
    padding-right: 0px !important;
    max-width: 99.5% !important;
  }
`;
