import React, { useState, useEffect } from "react";
import "aframe";
import "aframe-event-set-component";

export default function Frame(props) {
  const {
    image,
    animation,
    fov,
    zoom,
    className,
    EnableNadir,
    nadirImage,
    nadirOpacity,
    isMobile,
  
    view,
  } = props;

  const initialState = {
    zoom: parseFloat(props.zoom),
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    function handleWheel(e) {
      const delta = Math.sign(e.wheelDelta);
      let newZoom = state.zoom + delta;
      if (newZoom > 5) newZoom = 5;
      if (newZoom < 1) newZoom = 1;
      setState({ zoom: newZoom });
    }

    window.addEventListener("wheel", handleWheel);

    return function cleanUpListener() {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [state]);

  return (
    <>
      <a-scene
        loading-screen="enabled:false"
        embedded
        className={className}
        style={{
          zIndex: "1",
          width: "70%",
          // height: "calc(100vh - 52px)",
          height: "calc(100vh - 0px)",
          position: "absolute",
          right: "0px",
          // top: "52px",
          top: "0px",
        }}
        // style={style}
        vr-mode-ui="enabled: false"
        isMobile={isMobile}
        cursor="rayOrigin: mouse"
        raycaster="objects: .clickable"
      >
        <a-sky
          src={image}
          animation={animation}
          phi-length="360"
          phi-start="0"
          rotation={view}
        ></a-sky>
   {EnableNadir &&         
          <a-image
            src={nadirImage}          
            position="0 0 0 "
            rotation="90 0 0"
      
            
            // segments-width="1"
            opacity={nadirOpacity}
          ></a-image>       
        }
        <a-camera
          id="cam"
          wasd-controls-enabled="false"
          zoom={zoom}
          fov={fov}
        
        ></a-camera>
      </a-scene>
    </>
  );
}
