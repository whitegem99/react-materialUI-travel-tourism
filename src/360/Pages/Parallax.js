// import React from 'react'
// import { Parallax,ParallaxBanner } from 'react-scroll-parallax';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import imago from '../Assets/corfu1.jpg'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import styled from "styled-components";
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// export default function Parallax1() {
//     const params = {
//         // container: ".container",
//         // pagination: ".swiper-pagination",
//         // paginationClickable: true,
//         // direction: "vertical",
//         mouseWheel: true, // https://idangero.us/swiper/api/#mousewheel
//         slidesPerView:"1",
//         autoHeight:true,
//         pagination:{clickable:true},
//         direction: "vertical",
//         parallax: true,

//       };
//     return (
// <Whole>
// <Swiper

//       {...params}
//     >
//       <SwiperSlide >
//           <div style={{backgroundColor:'black', height:'100vh'}}>Slide 1</div> </SwiperSlide>
//           <SwiperSlide >
//           <div style={{backgroundColor:'black' ,height:'100vh'}}>Slide 2</div> </SwiperSlide>
//           <SwiperSlide >
//           <div style={{backgroundColor:'black',height:'100vh'}}>Slide 3</div> </SwiperSlide>
//           <SwiperSlide >
//           <div style={{backgroundColor:'black',height:'100vh'}}>Slide 4</div> </SwiperSlide>

//     </Swiper>
//     </Whole>

//     )
// }
// const   Whole = styled.div`
// .swiper-container{
//     height:100vh;
//     z-index:1111111111111111111111;
// }
// `;

import React from "react";
import Frame from "../Pages/videoAframe";
import vid from "../Assets/vid.mp4";
export default function Parallax() {
  return (
    <div>
      <Frame image={vid} vr-mode-ui />
    </div>
  );
}
