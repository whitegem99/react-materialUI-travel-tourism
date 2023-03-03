import React from "react";
import Loader from "react-loader-spinner";
import { useSpring, animated } from "react-spring";
import * as easings from "d3-ease";
import Zoom from "react-reveal/Zoom";

export default function ThreesixtyLoader(props) {
  const { spinnerImage, titleSpiner } = props;
  const TitleAnimation = useSpring({
    config: {
      tension: 0,
      friction: 2,
      precision: 0.1,
      duration: 1200,
      easing: easings.easeBounceOut,
    },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <animated.div style={TitleAnimation}>
        <h1
          style={{
            position: "absolute",
            top: "65%",
            right: "50%",
            transform: "translate(50%,-50%)",
            color: "#00BFFF",
            letterSpacing: "2px",
            textAlign: "center",
            WebkitFontSmoothing: "antialiased!important",
            textRendering: "optimizeLegibility !important",
          }}
        >
          {titleSpiner}
        </h1>
      </animated.div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%)",
        }}
      >
        <Loader type={spinnerImage} color="#00BFFF" height={80} width={80} />
      </div>
    </div>
  );
}
