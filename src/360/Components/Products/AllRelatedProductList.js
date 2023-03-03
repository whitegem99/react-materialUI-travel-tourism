import React from "react";
import styled from "styled-components";
import { media } from "../../styled";
import MainProductCard from "../Products/MainProductCard";
import { UserContext } from "../../context/user";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import Related from "../Products/Related";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isIOS,
  isTablet,
} from "react-device-detect";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Div100vh from "react-div-100vh";
export default function AllProductList({ products, counter, likes }) {
  const { user } = React.useContext(UserContext);
  let [productUser, setproductUser] = React.useState([]);
  // console.log(products);
  // console.log(user);
  const PublishTours = products.filter((item) => item.publish === true);
  console.log(PublishTours);

  return (
    <RoomsCenter>
      {isMobile ? (
        <>
          <Carousel
            slidesPerPage={1}
            // onChange={() => setActiveImage(true)}

            draggable
            clickToChange
          >
            {PublishTours.map((product, index) => {
              return (
                <Related
                  key={`${product.id}-${index}`}
                  {...product}
                  pr={product}
                  index={index}
                  counter={counter}
                  likes={likes}
                />
              );
            })}
          </Carousel>
        </>
      ) : (
        <>
          <Carousel
            slidesPerPage={3}
            // onChange={() => setActiveImage(true)}
            offset={10}
            draggable
            itemWidth={300}
          >
            {PublishTours.map((product, index) => {
              return (
                <Related
                  key={`${product.id}-${index}`}
                  {...product}
                  pr={product}
                  index={index}
                  counter={counter}
                  likes={likes}
                />
              );
            })}
          </Carousel>
        </>
      )}
    </RoomsCenter>
  );
}
const RoomsCenter = styled.div`
  ${media.phone`
  .BrainhubCarousel__container {
    position: absolute;
   
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width:100vw;
    height:100vh;
    z-index: 20;
    background-color:white;
  }

  `}

  ${media.tablet`
  .BrainhubCarousel__container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 15%);
    width:100vw;
  }
  `}

  ${media.desktop`
  .BrainhubCarousel__container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 15%);
    width:100vw;
  }
  `}

  ${media.large`
  .BrainhubCarousel__container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 15%);
    width:100vw;
  }

  `}
`;
