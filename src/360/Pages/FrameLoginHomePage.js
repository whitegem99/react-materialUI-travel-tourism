// import React, { useState, useEffect } from "react";
// import "aframe";
// import "aframe-event-set-component";
// import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";

// export default function Frame(props) {
//   const {
//     image,

//     fov,
//     zoom,
  
//     enabled,
//   } = props;

//   const initialState = {
//     zoom: parseFloat(props.zoom),
//   };

//   const [state, setState] = useState(initialState);


//   return (
//     <>
//       <a-scene
//         loading-screen="enabled:false"
//         embedded
//         style={{
//           zIndex: "1",
//           width: "100%",
//           height: "100%",
//           position: "absolute",
//           right: "0px",
//         }}
   
//         vr-mode-ui="enabled: false "
//       >
//         <a-sky
//           src={image}
//           animation={`property: rotation;  to: 0 360 0; loop: true; dur: 40000; enabled:${enabled};`}
//           phi-length="360"
//           phi-start="0"
//         ></a-sky>


//       </a-scene>
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import { Pannellum, PannellumVideo } from "pannellum-react";

import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function Frame(props) {
  const {
    image,

    fov,
    zoom,
  
    enabled,
  } = props;

  const initialState = {
    zoom: parseFloat(props.zoom),
  };

  const [state, setState] = useState(initialState);


  return (
    <>
    
        <Pannellum
          image={image}

  
          width="100vw!important"
          autoLoad
          showControls={false}
          autoRotate={5}	
          height="100vh!important">
          </Pannellum>


   
    </>
  );
}