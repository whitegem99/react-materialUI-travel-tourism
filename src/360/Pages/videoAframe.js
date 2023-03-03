import React, { useState, useEffect } from "react";
import "aframe";
import "aframe-event-set-component";
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
      <a-scene vr-mode-ui="enabled:true" style={{}}>
        <a-videosphere
          autoplay={true}
          loop
          src={image}
          webkit-playsinline
          playsinline
        ></a-videosphere>
      </a-scene>
    </>
  );
}
