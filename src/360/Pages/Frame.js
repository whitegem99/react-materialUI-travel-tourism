import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { X } from "react-feather";
import * as AFRAME from "aframe";
import * as THREE from "three";
import { media } from "../styled.js";
import { UserContext } from "../context/user";
import Loading from "../Pages/Loading";
import { icons, iconsCustom, actionNames } from "../utils/Constants";
import { getCustomIcon } from "../utils/api/iconApi";
import nadiro from "../Assets/corfu1.jpg";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import { addCustomIcon } from "../../redux/actions/hotspots";

AFRAME.registerComponent("cursor-listener", {
  init: function () {
    var COLORS = ["red", "green", "blue"];
    this.el.addEventListener("mouseup", function (evt) {
      const cameraEl = document.getElementById("tour-cammera");
      if (cameraEl) {
        const curRotationValue = cameraEl.getAttribute("rotation");
        if (
          cameraEl &&
          cameraEl.components["look-controls"] &&
          cameraEl.components["look-controls"].pitchObject &&
          cameraEl.components["look-controls"].yawObject
        ) {
          console.log("camera in mouseup =>", curRotationValue);
          cameraEl.components[
            "look-controls"
          ].pitchObject.rotation.x = THREE.Math.degToRad(curRotationValue.x);
          cameraEl.components[
            "look-controls"
          ].yawObject.rotation.y = THREE.Math.degToRad(curRotationValue.y);

          if (cameraEl.components.animation) {
            console.log("animation in mouseup =>", curRotationValue);
            cameraEl.components.animation.el.setAttribute(
              "from",
              curRotationValue
            );
          }
          // cameraEl.dispatchEvent(new CustomEvent('rotation-begin'));
        }
      }
    });
  },
});

export default function Frame(props) {
  const {
    panoramaId,
    spotActionId,
    image,
    animation,
    fov,
    isMobile,
    // loading,
    // setLoading,
    setActionSpotId,
    setActionSpotType,
    jumpToPanorama,
    cameraRotation,
    applyPanoramaAnnoying,
    trasitionPending,
    isGyroscope,
    rotation,
    // enableClickHotSpot,
    setEnableClickHotSpot,
    currentPanoramaHotSpots,
    spotActionType,
    changePanoramaStarted,
    setChangePanoramaStarted,
    EnableNadir,
    nadirImage,
    nadirScale,
    nadirOpacity,
    setRotation,
    oldRotation,
    setFirstImageLoaded,
    firstImageLoaded
  } = props;

  const initialState = {
    zoom: parseFloat(props.zoom),
  };
  const hotSpots = useSelector((state) => state.hotspots.spots);
  const dispatch = useDispatch();
  const customIcons = useSelector((state) => state.hotspots.customIcons);
  const { id } = useParams();
  const { user } = React.useContext(UserContext);
  const [state, setState] = useState(initialState);
  const [imageLoading, setImageLoading] = useState(true);
  const [skyImage, setSkyImage] = useState(null);
  const [preImage, setPreImage] = useState(null);
  const [rotationEvent, setRotationEvent] = useState("");
  const _firstImageLoaded = useRef(null);
  _firstImageLoaded.current = firstImageLoaded;

  useEffect(() => {
    dispatch(getCustomIcon(id));
    iconsCustom.map((icon) => {
      dispatch(
        addCustomIcon({
          ...icon,
          placeId: id,
          userId: user.user ? user.user._id : "",
        })
      );
    });
    const skyEl = document.getElementById('tour-sky');
    skyEl.addEventListener('materialtextureloaded', function () {
      console.log('materialtextureloaded loaded')      
      if (_firstImageLoaded.current) {// annoying only after first image loaded
        applyPanoramaAnnoying();
      }      
      setFirstImageLoaded(true);
      setChangePanoramaStarted(false);
      if (spotActionType === 4) {
        //action panorama
        setEnableClickHotSpot(true);
        setActionSpotType("");
      } else {
        let intervalEnableClick = 0;
        intervalEnableClick = setInterval(() => {
          setEnableClickHotSpot(true);
          setActionSpotType("");
          clearInterval(intervalEnableClick);
        }, 1500);
      }
    });
    return() => {      
    }
  }, []);

  useEffect(() => {
    triggerCameraRotation();
  }, [rotation]);

  const cameraEl = document.getElementById("tour-cammera");

  useEffect(() => {
    let panoramaTimer = 0;
    panoramaTimer = setInterval(() => {
      if (
        !changePanoramaStarted &&
        cameraEl &&
        cameraRotation &&
        cameraEl.components["look-controls"] &&
        cameraEl.components["look-controls"].pitchObject &&
        cameraEl.components["look-controls"].yawObject
      ) {
        console.log("camera in useEffect =>", cameraRotation);
        cameraEl.components["look-controls"].pitchObject.rotation.x =
          cameraRotation.rotateX;
        cameraEl.components["look-controls"].yawObject.rotation.y =
          cameraRotation.rotateY;
        if (rotation) {
          cameraEl.dispatchEvent(new CustomEvent("rotation-begin"));
          console.log(
            "rotation-begin started, camera rotation =>",
            cameraRotation
          );
        } else {
          setRotationEvent("start");
        }
        // setAnimationDegree(
        //   { x: THREE.Math.radToDeg(cameraRotation.rotateX),
        //     y: THREE.Math.radToDeg(cameraRotation.rotateY),
        //     z: 0});
        clearInterval(panoramaTimer);
        setRotation(oldRotation);
      }
    }, 100);
  }, [changePanoramaStarted]);

  //Skipping first iteration (exactly like componentWillReceiveProps):
  const isFirstRun = React.useRef(true);
  // useEffect(() => {
  //   if (skyImage && skyImage !== "") {
  //     setImageLoading(true);
  //     let d = new Date();
  //     let tick = d.getTime();
  //     console.log("image changed tick=>", tick);
  //     console.log("360 image changed", image);
  //     let waitCount = 0;
  //     let interval = 0;
  //     interval = setInterval(() => {
  //       waitCount += 1;
  //       const imageEl = document.getElementById("check-loading");
  //       if (imageEl) {
  //         d = new Date();
  //         tick = d.getTime();
  //         console.log("imageEl tick=>", tick);
  //         console.log("imageEl => ", imageEl.complete, imageEl.naturalHeight);
  //         const isLoaded = imageEl.complete && imageEl.naturalHeight !== 0;
  //         if (isLoaded) {
  //           let intervalTransition = 0;
  //           intervalTransition = setInterval(() => {
  //             d = new Date();
  //             tick = d.getTime();
  //             console.log("applyPanoramaAnnoying tick=>", tick);
  //             if (firstImageLoaded) {// annoying only after first image loaded
  //               applyPanoramaAnnoying();
  //             }
  //             clearInterval(intervalTransition);
  //             setImageLoading(false);
  //             setChangePanoramaStarted(false);
  //             setPreImage(skyImage);
  //             // setFirstImageLoaded(true);
  //             // setAllEffects();
  //           }, 50);

  //           console.log("spotActionType panorama =>", spotActionType);
  //           if (spotActionType === 4) {
  //             //action panorama
  //             console.log("setEnableClickHotSpot panorama tick=>", tick);
  //             setEnableClickHotSpot(true);
  //             setActionSpotType("");
  //           } else {
  //             let intervalEnableClick = 0;
  //             intervalEnableClick = setInterval(() => {
  //               setEnableClickHotSpot(true);
  //               setActionSpotType("");
  //               clearInterval(intervalEnableClick);
  //             }, 1500);
  //           }

  //           clearInterval(interval);
  //         }
  //       }
  //       if (waitCount > 300) {
  //         // about 60s
  //         alert("Please check network status. Or server doesn't not response");
  //         clearInterval(interval);
  //       }
  //     }, 100);
  //   }
  // }, [skyImage]);

  useEffect(() => {
    function handleWheel(e) {
      const delta = Math.sign(e.wheelDelta);
      let newZoom = state.zoom + parseFloat(delta / 5);
      if (newZoom > 5) newZoom = 5;
      if (newZoom < 0.6) newZoom = 0.6;
      setState({ zoom: newZoom });
    }
    window.addEventListener("wheel", handleWheel);

    return function cleanUpListener() {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [state]);

  const triggerCameraRotation = () => {
    let currentRotationEvent = "";
    const cameraEl = document.getElementById("tour-cammera");
    if (cameraEl) {
      const curRotationValue = cameraEl.getAttribute("rotation");
      if (rotation) {
        if (rotationEvent === "start") {
          currentRotationEvent = "rotation-begin";
          console.log(
            "rotation-begin trigger, curRotationValue =>",
            curRotationValue
          );
          setAnimationDegree(curRotationValue);
        } else {
          // setAnimation({rotateX: THREE.Math.degToRad(curRotationValue.x), rotateY: THREE.Math.degToRad(curRotationValue.y)})
          console.log(
            "rotation-resume trigger, curRotationValue =>",
            curRotationValue
          );
          currentRotationEvent = "rotation-resume";
          // setAnimationDegree(curRotationValue);
          // if (cameraEl &&
          //   cameraEl.components['look-controls'] &&
          //   cameraEl.components['look-controls'].pitchObject &&
          //   cameraEl.components['look-controls'].yawObject) {
          //   // console.log('camera in triggerCameraRotation =>', curRotationValue);
          //   cameraEl.components['look-controls'].pitchObject.rotation.x = THREE.Math.degToRad(curRotationValue.x);
          //   cameraEl.components['look-controls'].yawObject.rotation.y = THREE.Math.degToRad(curRotationValue.y);
          // }
        }
      } else {
        currentRotationEvent = "rotation-pause";
        console.log(
          "rotation-pause trigger, curRotationValue =>",
          curRotationValue
        );
        setAnimationDegree(curRotationValue);

        if (
          cameraEl &&
          cameraEl.components["look-controls"] &&
          cameraEl.components["look-controls"].pitchObject &&
          cameraEl.components["look-controls"].yawObject
        ) {
          // console.log('camera in triggerCameraRotation =>', curRotationValue);
          cameraEl.components[
            "look-controls"
          ].pitchObject.rotation.x = THREE.Math.degToRad(curRotationValue.x);
          cameraEl.components[
            "look-controls"
          ].yawObject.rotation.y = THREE.Math.degToRad(curRotationValue.y);
        }
      }
    }

    setRotationEvent("");
    document
      .getElementById("tour-cammera")
      .dispatchEvent(new CustomEvent(currentRotationEvent));
  };

  const setAnimationDegree = (curRotationValue) => {
    const cameraEl = document.getElementById("tour-cammera");
    const curRotation = AFRAME.utils.coordinates.stringify(curRotationValue);
    if (cameraEl.components.animation) {
      cameraEl.components.animation.el.setAttribute("from", curRotation);
    }
  };

  const handleClose = (e) => {
    setActionSpotId("");
  };
  const showAction = () => {
    const hotSpot = currentPanoramaHotSpots.find(
      (it) => it.id === spotActionId
    );
    if (hotSpot) {
      const { actionType, actionData, actionTitle } = hotSpot;
      const actionIndex = actionNames.indexOf(actionType);
      // setActionSpotType(actionIndex);
      const actionView = (actionIndex) => {
        switch (actionIndex) {
          case 1: // images
            return (
              <div className="actionWindow">
                <span className="view-close">
                  <X size={30} onClick={handleClose} />
                </span>
                <img
                  className="action-image"
                  src={actionData.uploadInfo.secure_url}
                />
                <span className="view-title">
                  <Typography className="image-title">{actionTitle}</Typography>
                </span>
              </div>
            );
            break;
          case 2: //html
            return (
              <div className="html-section">
                <div
                  className="view-html"
                  dangerouslySetInnerHTML={{ __html: actionData }}
                />
                <span className="html-close">
                  <X size={20} onClick={handleClose} />
                </span>
              </div>
            );
            break;
          // case 3: //link
          //   if (actionData.newOpenMode !== null) {
          //     if (actionData.newOpenMode === true || actionData.newOpenMode === 'true') {
          //       window.open(`${actionData.url}`,"_blank");
          //       handleClose();
          //     } else if ( actionData.newOpenMode === false || actionData.newOpenMode === 'false') {
          //       window.open(`${actionData.url}`,"_top");
          //     }
          //   }
          //   break;
          // case 4: //panorama
          //   jumpToPanorama(actionData);
          //   return null;
          //   break;
          case 5: //sound
            return (
              <div>
                {actionData && (
                  <audio id={`action-audio`}>
                    <source
                      src={actionData.uploadInfo.secure_url}
                      type={actionData.type}
                    />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            );
            break;
        }
      };
      return <div>{actionView(actionIndex)}</div>;
    }
  };
  const handleImageLoaded = () => {
    setSkyImage(image);
    // setImageLoading(false);
  };

  console.log("firstImageLoaded=>", firstImageLoaded);
  // console.log("panoramaId=>", panoramaId);
  // console.log('rotation=>', rotation);
  console.log('hotSpots=>', hotSpots);
  // console.log('currentPanoramaHotSpots=>', currentPanoramaHotSpots);
  // console.log('spotActionId => ', spotActionId)

  // console.log("changePanoramaStarted => ", changePanoramaStarted);
  // console.log('imageLoading => ', imageLoading)
  // console.log('trasitionPending => ', trasitionPending)
  return (
    <>
      <a-scene
        id="tour-scene"
        loading-screen="enabled:false"
        embedded
        style={{
          width: "100vw",
          height: "calc(100vh - 0px)",
          // position: "absolute",
        }}
        vr-mode-ui="enabled: false"
        isMobile={isMobile}
        cursor="rayOrigin: mouse"
        raycaster="objects: .clickable"
        // cursor-listener
      >
        {currentPanoramaHotSpots &&
          currentPanoramaHotSpots.map((spot) => {
            // const show = !imageLoading && !trasitionPending && !spot.hide;
            const show = !changePanoramaStarted && !trasitionPending && !spot.hide;
            return (
              <>
                <a-image
                  key={`hotspot-${panoramaId}-${spot.id}`}
                  id={`hotspot-${panoramaId}-${spot.id}`}
                  visible={show}
                  src={
                    spot.iconType === "custom"
                      ? customIcons[spot.iconIndex] &&
                        customIcons[spot.iconIndex].imageUrl
                      : icons[spot.iconIndex].imageUrl
                  }
                  position={
                    spot.position.x.toFixed(2) +
                    " " +
                    spot.position.y.toFixed(2) +
                    " " +
                    spot.position.z.toFixed(2)
                  }
                  rotation={
                    spot.rotation.x.toString() +
                    " " +
                    spot.rotation.y.toString() +
                    " " +
                    spot.rotation.z.toString()
                  }
                  scale={
                    (spot.scale.value / spot.scale.max).toFixed(2) +
                    " " +
                    (spot.scale.value / spot.scale.max).toFixed(2) +
                    " " +
                    (spot.scale.value / spot.scale.max).toFixed(2)
                  }
                  opacity={(spot.opacity.value / spot.opacity.max).toFixed(2)}
                  hotspot={`id: ${spot.id}; tooltip: ${spot.tip}`}
                  class="clickable"
                  animation__scale="property: scale; dir: alternate; dur: 200;
                  easing: linear; loop: true ;from:0.2 0.2 0.2; to:0.21 0.21 0.21; resumeEvents: mouseleave; pauseEvents: mouseenter;"
                  animation__opacity="property: opacity; dir: alternate; dur: 2000;
                  easing: linear; loop: true ;from:1; to:0.7; resumeEvents: mouseleave; pauseEvents: mouseenter;"
                  animation__mouseenter="property: components.material.material.color; type: color; to: #0ca8fd; startEvents: mouseenter; dur: 500"
                ></a-image>
              </>
            );
          })}
        {changePanoramaStarted && <Loading />}
        <a-sky
          id="tour-sky"
          loading-screen="true"
          loading-screen="dotsColor: red; backgroundColor: black"
          shader="flat"
          // src={!changePanoramaStarted ? skyImage : preImage}
          src={image}
        ></a-sky>
        {EnableNadir && (
          <a-image
            src={nadirImage}
            position="0 0 0 "
            rotation="90 0 0"
            // segments-width="1"
            opacity={nadirOpacity}
          ></a-image>
        )}
        <a-entity id="rig" position="0 1.6 0">
          <a-camera
            position="0 0 0"
            id="tour-cammera"
            animation={animation}
            zoom={state.zoom}
            wasd-controls-enabled="false"
            look-controls={`enabled:true; magicWindowTrackingEnabled: ${
              isGyroscope ? "true;" : "false;"
            }`}
            fov={fov}
          ></a-camera>
        </a-entity>
      </a-scene>

      <TourFrame>
        <img
          id="check-loading"
          className="check-loading"
          src={image}
          onLoad={handleImageLoaded}
          // crossorigin="anonymous"
        />
        <div id="tooltip" className="tooltip">
          <span id="tip-text" className="tooltiptext"></span>
        </div>
        {spotActionId !== "" && showAction()}
      </TourFrame>
    </>
  );
}
const TourFrame = styled.div`
  .loading {
    z-index: 1;
  }
  .check-loading {
    width: 0px;
    /* heigh: 0px; */
  }
  .actionWindow {
    width: 98%;
    height: 98%;
    position: absolute;
    border-radius: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 12;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
  .action-image {
    object-fit: cover;
    border-radius: 25px;
  }
  .view-html {
    align-items: center;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    background-color: #fff;
    border-radius: 3px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    /* padding: 5px; */
  }
  .sound-play {
    align-items: center;
    position: absolute;
    top: 25%;
    left: 40%;
    width: auto;
    height: 70px;
    background-color: #00000096;
    color: aqua;
    border-radius: 3px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  .action-image {
    width: 100%;
    height: 100%;
  }
  .view-title {
    position: absolute;
    width: 100%;
    display: flex;
    color: azure;
    justify-content: center;
    bottom: 0px;
    right: 0px;
    z-index: 13;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .view-close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 20;
  }
  .image-title {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding-top: 15px;
  }
  .html-close {
    z-index: 11111;
    position: fixed;
    right: 15px;
    top: 15px;
    max-width: 30px;
    max-height: 30px;
    display: block;
    cursor: pointer;
  }
  .actionWindow svg {
    margin: 0 1px;
    padding: 2px;
    border-radius: 3px;
    align-self: center;
    color: azure;
  }
  .actionWindow svg:hover {
    background-color: #8888;
    border-radius: 3px;
  }

  /* phone media */
  ${media.phone`
  .html-section {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 97%;
    height:  97%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
  `}

  ${media.tablet`
  .html-section {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width:  100%;
    height:  100%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
`}
  ${media.desktop`
  .html-section {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 30%;
    height: 40%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
`}

${media.large`
.html-section {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 30%;
    height: 40%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
`}
`;
