import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import * as AFRAME from "aframe";
import anime from "animejs/lib/anime.es.js";
import { UserContext } from "../context/user";
import Frame from "../../360/Pages/Frame";
import { ProductContext } from "../context/products";
import Rotate from "../Assets/rotate.png";
import RotatNo from "../Assets/rotateNo.png";
import RotateBlack from "../Assets/rotateblack.png";
import RotatNoBlack from "../Assets/norotateblack.png";
import Loading from "../Pages/ThreesixtyLoader";
import Loading1 from "../Pages/Loading1";
import Loading2 from "../Pages/Loading2";
import { Fade, Spinner } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import hdLogo from "../Assets/HD.png";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ReactAudioPlayer from "react-audio-player";
import Sound from "react-sound";
import AllProductList from "../../360/Components/Products/AllProductList";
import AllRelatedProductList from "../Components/Products/AllRelatedProductList";
import Related from "../Components/Products/Related";
import More from "../Assets/premium.svg";
import Div100vh from "react-div-100vh";

import { useSpring, animated, config } from "react-spring";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { MyGoogleMap } from "../Components/MyGoogleMap";

import ImageGallery from "../Assets/imagegallerywhite.svg";
import ImageGalleryBlack from "../Assets/imagegalleryblack.svg";
import Hamburger from "../Assets/options1.svg";
import Zoom from "react-reveal/Zoom";
import Fade1 from "react-reveal/Fade";
import Jello from "react-reveal/Jello";
import Flash from "react-reveal/Flash";
import Shake from "react-reveal/Shake";
import Pulse from "react-reveal/Pulse";
import Tada from "react-reveal/Tada";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import Typewriter from "typewriter-effect";
import * as easings from "d3-ease";
import FacebookBtn from "../Assets/facebook.svg";
import TwitterBtn from "../Assets/twitter.svg";
import LinkedBtn from "../Assets/linkedin.svg";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Compas from "../Assets/compass.svg";
import NoCompas from "../Assets/nocompas.svg";
import HdNew from "../Assets/hd.svg";
import Hd720 from "../Assets/720.svg";
import Maxi from "../Assets/max1.svg";
import Mini from "../Assets/min1.svg";
import Info1 from "../Assets/info.svg";
import ShareBlack from "../Assets/shareblack.svg";
import ShareWhite from "../Assets/sharewhite.svg";
import LikeBlack from "../Assets/loveblack.svg";
import LikeFullBlack from "../Assets/loveblackfull.svg";
import { motion } from "framer-motion";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isIOS,
  isTablet,
} from "react-device-detect";
import {
  XCircle,
  ArrowLeft,
  Info,
  Lock,
  Settings,
  Edit,
  PlayCircle,
  PauseCircle,
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  Image,
  MapPin,
} from "react-feather";
import { makeStyles } from "@material-ui/core/styles";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "../../assets/scss/pages/authentication.scss";
import * as THREE from "three";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookShareCount,
  FacebookMessengerShareCount,
  RedditShareCount,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  RedditIcon,
} from "react-share";
import HelmetMetaData from "../Components/HelmetMetaData";
import Heart from "../Assets/playicon/heart.png";
import HeartFull from "../Assets/playicon/heartfull.png";
import {
  transitionTypes,
  transitionDurations,
  actionNames,
} from "../utils/Constants";
import { media } from "../styled.js";
import ContentLoader from "react-content-loader";
import Line1 from "../Assets/line.png";
import Line2 from "../Assets/line2.png";

import {
  addPlaceAllSpots,
  clearAllHotSpots,
} from "../../redux/actions/hotspots";
import { registerHotSpotCompenent } from "../utils/editSpotComponent";
import { CombSpinner } from "react-spinners-kit";

registerHotSpotCompenent();
AFRAME.components["look-controls"].Component.prototype.onTouchMove = function (
  evt
) {
  const PI_2 = Math.PI / 2;
  let deltaX, deltaY;
  const canvas = this.el.sceneEl.canvas;
  const yawObject = this.yawObject;
  const pitchObject = this.pitchObject;
  if (this.touchStarted && this.data.touchEnabled) {
    deltaX =
      (2 * Math.PI * (evt.touches[0].pageY - this.touchStart.y)) /
      canvas.clientHeight;
    deltaY =
      (2 * Math.PI * (evt.touches[0].pageX - this.touchStart.x)) /
      canvas.clientWidth;
    pitchObject.rotation.x += 0.3 * deltaX;
    yawObject.rotation.y += 0.5 * deltaY;
    pitchObject.rotation.x = Math.max(
      -PI_2,
      Math.min(PI_2, pitchObject.rotation.x)
    );
    this.touchStart = {
      x: evt.touches[0].pageX,
      y: evt.touches[0].pageY,
    };
  }
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  root1: {
    width: "90%",
    margin: "1rem",
  },
  margin: {
    height: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "92%",
    marginLeft: 10,
    color: "red",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    "&:before": {
      borderColor: "#000000",
      height: "5px",
    },
    "&:after": {
      borderColor: "#0ca8fd",
      height: "5px",
    },
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: "100%",
    marginLeft: 0,
    color: "red",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    "&:before": {
      borderColor: "#000000",
      height: "5px",
    },
    "&:after": {
      borderColor: "#0ca8fd",
      height: "5px",
    },
  },
  opacitySlider: {
    width: "100%",
  },
  exitbtn: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "0.7rem 0.5rem",
    },

    outline: "none!important",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function ThreeSixtyTour({ viewMode }) {
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => ++value); // update the state to force render
  }
  const forceUpdate = useForceUpdate();
  const location = useLocation();
  // const { producto } = location.state;
  // const { productp } = location.state;

  // const { imgsData } = producto;

  const [params, setparams] = useState({
    direction: "vertical",
    activeSlideKey: "",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const [paramsStoyImages, setparamsStoyImages] = useState({
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const MyLoader = (props) => (
    <ContentLoader
      speed={1}
      width={300}
      height={299}
      viewBox="0 0 400 299"
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

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const query = useQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const hotSpots = useSelector((state) => state.hotspots.spots);
  const { user } = React.useContext(UserContext); // we will use it
  const [userIdFinal, setuserIdFinal] = useState(
    user.user ? user.user._id : ""
  );
  const {
    products,
    likes,
    updateLikes,
    counter,
    // SpinnerType,
    // SpinnerText,
  } = React.useContext(ProductContext);

  const allUserItems = products.filter((item) => item.userId === userIdFinal);

  const [likeavailable, setLikeavailable] = useState(true);
  const [usermailfromuser] = useState(user.user ? user.user.email : "");
  const [tourLikes, setTourLikes] = useState("");
  const handle = useFullScreenHandle();
  const product = products.filter((item) => item.id === id);
  const SpinnerType = product.map((item) => item.SpinnerType);
  const finalSpinner = SpinnerType.toString();

  const SpinnerText = product.map((item) => item.SpinnerText);
  console.log(SpinnerText);

  const [owner, setOwner] = useState(product.map((item) => item.userId));
  const [allUsers, setAllUsers] = useState([]);
  const [title, settitle] = useState(product.map((item) => item.title));
  const [hd, setHd] = useState(false);
  const [description, setdescription] = useState(
    product.map((item) => item.description)
  );
  const [havePassword, sethavePassword] = useState(
    product.map((item) => item.havePassword)
  );
  const [passwordo, setpasswordo] = useState(
    product.map((item) => item.passwordo)
  );
  console.log(havePassword);
  const [featuredImage, setfeaturedImage] = useState(
    product.map((item) => item.image)
  );
  const [featuredImageFinal, setFeaturedImageFinal] = useState();

  const [rotationSpeed, setRotationSpeed] = useState(
    product.map((item) => item.rotationSpeed)
  );
  const [rotation, setRotation] = useState(
    product.map((item) => item.rotation)
  );
  const [rotationWas, setRotationWas] = useState(
    product.map((item) => item.rotation)
  );
  const [openDescription, setopenDescription] = useState(
    product.map((item) => item.openDescription)
  );
  const [loop, setLoop] = useState(product.map((item) => item.loop));
  const [direction, setdirection] = useState(
    product.map((item) => item.direction)
  );
  const [zoom, setZoom] = useState(product.map((item) => item.zoom));
  const [userPassword, setUserPassword] = useState("");
  const [pause, setPause] = useState(product.map((item) => item.pause));
  const [showImageFeaturedInPause, setshowImageFeaturedInPause] = useState(
    product.map((item) => item.showImageFeaturedInPause)
  );
  const [playicon, setplayicon] = useState(
    product.map((item) => item.playicon)
  );
  const [disTourTitle, setdisTourTitle] = useState(
    product.map((item) => item.disTourTitle)
  );

  const [pauseOpacity, setpauseOpacity] = useState(
    product.map((item) => item.pauseOpacity)
  );
  const [cssTourTitle, setCssTourTitle] = useState(
    product.map((item) => item.cssTourTitle)
  );
  const [EnableLine, setEnableLine] = useState(
    product.map((item) => item.EnableLine)
  );
  console.log(EnableLine);
  const [EnableSocial, setEnableSocial] = useState(
    product.map((item) => item.EnableSocial)
  );
  const [EnableCredit, setEnableCredit] = useState(
    product.map((item) => item.EnableCredit)
  );
  const [LineTitle, setLineTitle] = useState(
    product.map((item) => item.LineTitle)
  );
  const [openCarousel, setopenCarousel] = useState(
    product.map((item) => item.openCarousel)
  );

  const [mailuserFromPorduct, setMailuserFromPorduct] = useState(
    product.map((item) => item.email)
  );
  console.log(mailuserFromPorduct);
  const [carouselWasOpen, setCarouselWasOpen] = useState();
  const [infoButtonIsActive, setInfoButtonIsActive] = useState(true);
  const [carouselDesing, setcarouselDesing] = useState(
    product.map((item) => item.carouselDesing)
  );
  const [puplicId, setPuplicId] = useState("");
  const [css, setCss] = useState(true);
  const [css1, setCss1] = useState(true);
  const [loading, setLoading] = useState(true); // this will show the loading component
  const [firstImageLoaded, setFirstImageLoaded] = useState(false); // this will show the loading component
  const [image, setImage] = useState([]); // this we be added with getplaces/ the image we added with addThreeSixty form
  const [imageURL, setImageURL] = useState([]);
  const [imageCard, setImageCard] = useState(null);
  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [imageURLHd, setImageURLHd] = useState({});
  const [imageURLSd, setImageURLSd] = useState({});
  const [displayTitleBesideThumb, setDisplayTitleBesideThumb] = useState(); // difne is to show title beside the thumbnail
  const [showCompanyTitle, setShowCompanyTitle] = useState(true); // define if we wantt to show company title in the pause
  const [compnyTitle, setCompnyTitle] = useState("WALKIN"); // define the company title.
  const [showCompanyTitleWithUrl, setshowCompanyTitleWithUrl] = useState(false); // if we will show company title with url
  const [companyUrl, setcompanyUrl] = useState("https://walkin-360.com/"); // company url,
  const [isMobile, setisMobile] = useState(false); // define if the user use mobile or dekstop
  const [activeImage, setActiveImage] = useState();
  const [panoramaId, setPanoramaId] = useState(0);
  const [spotActionId, setActionSpotId] = useState("");
  const [spotActionType, setActionSpotType] = useState(-1);
  const [isPlaying, setPlaying] = useState(false);
  const [cameraRotation, setCameraRotation] = useState(null);
  const [annoyingAnimation, setAnnoyingAnimation] = useState(null);
  const [transitionEffect, setTransitionEffect] = useState(null);
  const [trasitionPending, setTrasitionPending] = useState(false);
  const [isGyroscope, setGyroscope] = useState(false);
  const [enabelGyro, setenabelGyro] = useState();
  const [EnableHd, setEnableHd] = useState();
  const [EnableFullscreen, setEnableFullscreen] = useState();
  const [EnableLike, setEnableLike] = useState();
  const [ShowImageOnstart, setShowImageOnstart] = useState();
  const [rotationText, setRotationText] = useState(null);
  const [eventListenerAttached, setEventListenerAttached] = useState(false);
  const [enableClickHotSpot, setEnableClickHotSpot] = useState(true);
  const [currentPanoramaHotSpots, setCurrenthotSpots] = useState([]);
  const [currentClickedActionId, setCurrentClickedActionId] = useState("");
  const [changePanoramaStarted, setChangePanoramaStarted] = useState(true);
  const [oldRotation, setOldRotation] = useState(rotation);
  const [EnableShare, setEnableShare] = useState(true);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);
  const [shareUrl, setShareUrl] = useState(
    "https://walkin-prototype.herokuapp.com/"
  );

  const [BackgroundMusic, setBackgroundMusic] = useState();
  const [TourLogo, setTourLogo] = useState();
  const [EnableTourLogo, setEnableTourLogo] = useState();
  const [WebsiteLink, setWebsiteLink] = useState(
    "https://www.theasys.io/signin/"
  );
  const [isPlayingMusicBack, setIsPlayingMusicBack] = useState(true);
  const [EnableMusicBackGround, setEnableMusicBackGround] = useState();
  const [MusicBackgroundLoop, setMusicBackgroundLoop] = useState();
  const [volume1, setVolume1] = useState(1);
  const [MusicVolume, setMusicVolume] = useState("0.3");
  const [loopa, setLoopa] = useState(true);
  const [blackVisible, setBlackVisible] = useState(true);
  // nadir
  const [nadirImage, setNadirImage] = useState("[]");
  const [EnableNadir, setEnableNadir] = useState(true);
  const [nadirScale, setNadirScale] = useState("1,1,1");
  const [nadirOpacity, setNadirOpacity] = useState("1");
  // nadir end

  // story images
  const [storyImages, setStoryImages] = useState([]);
  const [storyTitles, setStoryTitles] = useState([]);
  const [storyDescription, setStoryDescription] = useState([]);
  const [enableImageGallery, setEnableImageGallery] = useState();
  const [showImageGallery, setShowImageGallery] = useState(false);
  //  story images end
  const [enableRelated, setEnableRelated] = useState(false);
  const [showRelated, setShowRelated] = useState(false);
  const [geoLocation, setGeoLocation] = useState(null);
  const [loadedthesky1, setLoadedthesky1] = useState(false);
  // show more button
  const handleShowHideRelated = () => {
    setShowRelated(!showRelated);
  };
  // here you can change the quality when HD is false
  let imageQ = 50;

  // Likes
  const ids = likes.filter((item) => {
    return item.uuid2 === tourLikes;
  });
  const idss = ids.map((item) => {
    return item._id;
  });
  const con = ids.map((item) => {
    return item.count;
  });

  const checkLikes = () => {
    const likeInfo = likes.filter((item) => {
      return item.uuid2 === tourLikes;
    });
    if (likeInfo.length > 0 && likeInfo[0].users && user.user) {
      const users = JSON.parse(likeInfo[0].users);
      const index = users.findIndex((userId) => userId === user.user._id);
      if (index > -1) {
        setLikeavailable(false);
      } else {
        setLikeavailable(true);
      }
    } else {
      setLikeavailable(true);
    }
  };

  const likeadd = (e) => {
    if (user.user === null) {
      history.push("/login");
      return;
    }
    if (!likeavailable) return;
    updateLikes(user.user._id, idss, true);
  };

  const dislike = () => {
    if (likeavailable) return;
    updateLikes(user.user._id, idss, false);
  };

  const HandelInfo = () => {
    setopenDescription(true);
    setInfoButtonIsActive(false);
    if (openCarousel) {
      setCarouselWasOpen(true);
      setopenCarousel(false);
    }
    if (!openCarousel) {
      setCarouselWasOpen(false);
    }

    if (rotation) {
      setRotationWas(true);
      setRotation(false);
    }
    if (!rotation) {
      setRotationWas(false);
    }
  };

  const fadeUser = useSpring({
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
  const fadeCarousel = useSpring({
    config: {
      tension: 0,
      friction: 2,
      precision: 0.1,
      duration: 1000,
      easing: easings.easeBounceOut,
    },
    opacity: openCarousel ? 1 : 0,
    left: openCarousel ? "50%" : "60%",
  });

  const close = () => {
    setopenDescription(false);
    if (carouselWasOpen) {
      setopenCarousel(true);
    }
    if (!carouselWasOpen) {
      setopenCarousel(false);
    }
    if (rotationWas) {
      setRotation(true);
    }
    if (!rotationWas) {
      setRotation(false);
    }
    setInfoButtonIsActive(true);
  };

  const getPlaces = () => {
    setLoading(true);
    dispatch(clearAllHotSpots());
    axios
      .get(`/api/places/${id}`)
      .then((res) => {
        console.log(res.data.place);
        let img = JSON.parse(res.data.place.imgsData[0])[0];
        let qImg = { ...img };
        console.log("place info=>", res.data);
        console.log(JSON.parse(res.data.place.imgsData[0]));
        console.log(img.public_id);
        setImage(JSON.parse(res.data.place.imgsData[0]));
        console.log(JSON.parse(res.data.place.imgsData[0]));
        setImageTitle(JSON.parse(res.data.place.imgsData[0])[0].title);
        setImageDescription(
          JSON.parse(res.data.place.imgsData[0])[0].description
        );
        setImageCard(JSON.parse(res.data.place.image));
        setFeaturedImageFinal(JSON.parse(res.data.place.image));
        console.log("original img =>", img);
        qImg.secure_url = img.secure_url.replace(
          "upload/",
          `upload/q_${imageQ}/`
        );
        setImageURLHd(img);
        setImageURLSd(qImg);
        setImageURL(img);
        setPuplicId(img.public_id);
        settitle(res.data.place.title);
        setRotation(res.data.place.rotation);
        setRotationSpeed(res.data.place.rotationSpeed);
        setdescription(res.data.place.description);
        setopenDescription(res.data.place.openDescription);
        setpasswordo(res.data.place.passwordo);
        sethavePassword(res.data.place.havePassword);
        setfeaturedImage(
          JSON.parse(res.data.place.image).uploadInfo.secure_url
        );
        setOwner(res.data.place.userId);
        setdirection(res.data.place.direction);
        setLoop(res.data.place.loop);
        setZoom(res.data.place.zoom);
        setPause(res.data.place.pause);
        setcarouselDesing(res.data.place.carouselDesing);
        setdisTourTitle(res.data.place.disTourTitle);
        setpauseOpacity(res.data.place.pauseOpacity);
        setEnableLine(res.data.place.EnableLine);
        setEnableSocial(res.data.place.EnableSocial);
        setEnableCredit(res.data.place.EnableCredit);
        setLineTitle(res.data.place.LineTitle);
        setCssTourTitle(res.data.place.cssTourTitle);
        setMailuserFromPorduct(res.data.place.email);
        setshowImageFeaturedInPause(res.data.place.showImageFeaturedInPause);
        setplayicon(res.data.place.playicon);
        setActiveImage(res.data.place.activeImage);
        setTourLikes(res.data.place.uuid2);
        setenabelGyro(res.data.place.EnableGyro);
        setEnableHd(res.data.place.EnableHd);
        setEnableFullscreen(res.data.place.EnableFullscreen);
        setEnableLike(res.data.place.EnableLike);
        setEnableShare(res.data.place.EnableShare);
        setEnableMusicBackGround(res.data.place.EnableMusicBackGround);
        setDisplayTitleBesideThumb(res.data.place.displayTitleBesideThumb);
        setShowImageOnstart(res.data.place.ShowImageOnstart);
        setMusicBackgroundLoop(res.data.place.MusicBackgroundLoop);
        setEnableTourLogo(res.data.place.EnableTourLogo);
        setEnableNadir(res.data.place.EnableNadir);
        setNadirScale(res.data.place.nadirScale);
        setNadirOpacity(res.data.place.nadirOpacity);
        setEnableImageGallery(res.data.place.enableImageGallery);
        setEnableRelated(res.data.place.enableRelated);
        setGeoLocation(res.data.place.location);
        // if (res.data.place.location.coordinates &&
        //   res.data.place.location.coordinates[0] !== 0 &&
        //   res.data.place.location.coordinates[1] !== 0
        //   ) {
        //     setGeoLocation({lng: res.data.place.location.coordinates[0], lat: res.data.place.location.coordinates[1] });
        // }
        // setSpinnerType(res.data.place.SpinnerType);
        if (res.data.place.StoryImages) {
          let storyimages1 = JSON.parse(res.data.place.StoryImages);
          console.log(storyimages1);
          setStoryImages(storyimages1.images ? storyimages1.images : []);
          setStoryTitles(storyimages1.titles ? storyimages1.titles : []);
          setStoryDescription(
            storyimages1.description ? storyimages1.description : []
          );
          console.log(storyTitles);
        }

        if (res.data.place.nadirImage[0] !== "[]") {
          setNadirImage(
            JSON.parse(res.data.place.nadirImage[0]).uploadInfo.secure_url
          );
        }

        if (res.data.place.transitionEffect) {
          setTransitionEffect(JSON.parse(res.data.place.transitionEffect));
        }

        if (res.data.place.hotSpots.length > 0) {
          const allSpots = JSON.parse(res.data.place.hotSpots[0]);
          dispatch(addPlaceAllSpots(allSpots));
        }
        if (res.data.place.BackgroundMusic[0] !== "[]") {
          setBackgroundMusic(
            JSON.parse(res.data.place.BackgroundMusic[0]).uploadInfo.secure_url
          );
        }
        if (res.data.place.TourLogo[0] !== "[]") {
          setTourLogo(
            JSON.parse(res.data.place.TourLogo[0]).uploadInfo.secure_url
          );
        }
        // setLoading(false)
        let interval = 0;
        interval = setInterval(() => {
          setLoading(false);
          clearInterval(interval);
        }, 1000);
      })
      .catch((error) => {
        history.push("/");
      });
  };

  // const getUserDetails =()=>{
  //   axios
  //   .get(`/api/places/${id}`)
  // }

  useEffect(() => {
    setChangePanoramaStarted(true);
    getPlaces();
    setDefaultViewport(panoramaId);
    addSpotEventHandler();
    setisMobile(AFRAME.utils.device.isMobile());
    setBodyOverflowHidden();

    return () => {
      setBodyOverflowHidden(false);
      removeSpotEventHandler();
    };
  }, []);

  useEffect(() => {
    axios.get(`/api/users/`).then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  }, []);

  useEffect(() => {
    checkLikes();
  }, [likes, tourLikes]);

  // This will return true or false depending on if it's full screen or not.
  let fullScreenMode =
    document.fullScreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen;
  useEffect(() => {
    if (!fullScreenMode) setShowFullScreen(false);
  }, [fullScreenMode]);

  useEffect(() => {
    if (spotActionType === 5) {
      //first play sound
      const audio = document.getElementById(`action-audio`);
      if (audio) {
        audio.load();
        handlePlaySound();
      }
    }
  }, [spotActionType, spotActionId]);

  useEffect(() => {
    if (hotSpots.length > 0) {
      setDefaultViewport(panoramaId);
    }
  }, [hotSpots.length]);

  useEffect(() => {
    console.log("hotSpots, panoramaId changed", hotSpots, panoramaId);
    const index = hotSpots.findIndex((it) => it.panoramaId === panoramaId);
    if (index >= 0) {
      setCurrenthotSpots(hotSpots[index].hotSpotsData);
    } else {
      setCurrenthotSpots([]);
    }
  }, [hotSpots, panoramaId]);

  useEffect(() => {
    console.log("useEffect enableClickHotSpot=>", enableClickHotSpot);
    if (enableClickHotSpot && currentClickedActionId !== "") {
      setActionSpotId(currentClickedActionId);
      const hotSpot = currentPanoramaHotSpots.find(
        (it) => it.id === currentClickedActionId
      );
      if (hotSpot) {
        const { actionType, actionData, actionTitle } = hotSpot;
        const actionIndex = actionNames.indexOf(actionType);
        setActionSpotType(actionIndex);
        switch (actionIndex) {
          case 3: //link
            if (actionData.newOpenMode !== null) {
              if (
                actionData.newOpenMode === true ||
                actionData.newOpenMode === "true"
              ) {
                setActionSpotId("");
                window.open(`${actionData.url}`, "_blank");
              } else if (
                actionData.newOpenMode === false ||
                actionData.newOpenMode === "false"
              ) {
                window.open(`${actionData.url}`, "_top");
              }
            }
            break;
          case 4: //panorama
            jumpToPanorama(actionData);
            break;
          default:
        }
      }
    }
    setCurrentClickedActionId("");
  }, [currentClickedActionId]);

  useEffect(() => {
    setChangePanoramaStarted(true);
  }, [hd]);

  const onEventClickHotSpot = (evt) => {
    const spotId = evt.detail.id;
    setCurrentClickedActionId(spotId);
    console.log("onEventClickHotSpot ID=>", spotId);
  };
  const addSpotEventHandler = () => {
    if (!eventListenerAttached) {
      setEventListenerAttached(true);
      document.addEventListener("spot-clicked", onEventClickHotSpot, {
        passive: true,
      });
    }
  };
  const removeSpotEventHandler = () => {
    setEventListenerAttached(false);
    console.log("removeSpotEventHandler ");
    document.removeEventListener("spot-clicked", onEventClickHotSpot, false);
  };

  const setAnimation = ({ rotateX, rotateY }) => {
    setCameraRotation({ rotateX, rotateY });
    const rotationSP = (Number(rotationSpeed) * 3).toString();
    const rotationX = THREE.Math.radToDeg(rotateX).toFixed(0);
    const rotationY = THREE.Math.radToDeg(rotateY).toFixed(0);
    const endY = rotationY - 360;

    setRotationText(
      `property: rotation; startEvents: rotation-begin; pauseEvents: rotation-pause; resumeEvents: rotation-resume; from: ${rotationX} ${rotationY} 0; to: 0 ${endY} 0; loop:${loop}; dur: ${rotationSP}; dir:${direction}; easing :easeOutBack;`
    );
    // setRotationText(
    //   `property: rotation; from: ${rotationX} ${rotationY} 0;  to: 0 ${endY} 0; loop: ${loop}; dur: ${rotationSP}; loop:${loop}; dir:${direction}; easing :easeOutBack	;`
    // )
  };

  const setDefaultViewport = (id) => {
    const curPanorama = hotSpots.find((it) => it.panoramaId === id);
    console.log(
      "setDefaultViewport status =>",
      panoramaId,
      rotation,
      curPanorama
    );
    if (curPanorama && curPanorama.viewport) {
      setAnimation(curPanorama.viewport);
    } else {
      setAnimation({ rotateX: 0, rotateY: 0 });
    }
  };

  const setBodyOverflowHidden = (hidden = true) => {
    document.querySelector("body").style.overflow = hidden ? "hidden" : "auto";
  };
  const applyPanoramaAnnoying = () => {
    const canvasEl = document.querySelector("canvas");
    if (canvasEl) {
      setTrasitionPending(true);
      console.log("transitionEffect=>", transitionEffect);
      console.log("annoyingAnimation=>", annoyingAnimation);
      if (annoyingAnimation) {
        annoyingAnimation.restart();
      } else {
        const annoyingAnimation1 =
          transitionEffect && transitionEffect.type
            ? // const annoyingAnimation1 = true === false
              anime({
                targets: "canvas",
                easing: "easeInOutSine",
                duration: transitionEffect.duration,
                ...transitionEffect.type.animation,
                begin: function (anim) {
                  setTrasitionPending(true);
                },
                complete: function (anim) {
                  setTrasitionPending(false);
                },
              })
            : anime({
                targets: "canvas",
                duration: 1000,
                easing: "easeInOutSine",
                ...transitionTypes[0].animation,
                begin: function (anim) {
                  setTrasitionPending(true);
                },
                complete: function (anim) {
                  setTrasitionPending(false);
                },
              });
        annoyingAnimation1.restart();
        setAnnoyingAnimation(annoyingAnimation1);
      }
    }
  };
  const PasswordCheck = (password, userpassword, css) => {
    console.log(userpassword);
    if (password == userpassword) {
      setCss(false);
      setCss1(false);
    } else console.log("password false");
  };

  const handlePlaySound = () => {
    setPlaying(true);
    const audio = document.getElementById(`action-audio`);
    if (audio) {
      audio.play();
    }
  };
  const handlePauseSound = () => {
    setPlaying(false);
    const audio = document.getElementById(`action-audio`);
    if (audio) audio.pause();
  };

  const handlePlaySoundBack = (x) => {
    setIsPlayingMusicBack(true);
    const audio1 = document.getElementById(`background-music`);
    audio1.volume = x;
    audio1.play();
  };
  const setVolume = (x) => {
    x.volume = 0.1;
  };
  const handlePauseSoundBack = (x) => {
    setIsPlayingMusicBack(false);
    const audio1 = document.getElementById(`background-music`);
    audio1.volume = x;
    audio1.pause();
  };

  const jumpToPanorama = (actionData) => {
    if (actionData) {
      if (changePanoramaStarted) {
        console.log(
          "jumpToPanorama return without change while image loading",
          changePanoramaStarted
        );
        return;
      }
      if (actionData.panoramaId >= 0) {
        setOldRotation(rotation);
        setRotation(false);
        setChangePanoramaStarted(true);
        setActionSpotId("");
        const panorama = image[actionData.panoramaId];
        setPanoramaId(actionData.panoramaId);
        setAnimation(actionData.rotation);
        setZoom(zoom);
        setImageURLHd(panorama);
        let qImg = { ...panorama };

        qImg.secure_url = panorama.secure_url.replace(
          "upload/",
          `upload/q_${imageQ}/`
        );
        setImageURLSd(qImg);
        setImageTitle(panorama.title);
        setImageDescription(panorama.description);
        if (!isMobile) {
          // applyPanoramaAnnoying();
        }
      }
    }
  };

  const handleChangeCarousPanorama = (panorama, id) => (e) => {
    setOldRotation(rotation);
    setRotation(false);
    let d = new Date();
    let tick = d.getTime();
    console.log("handleChangeCarousPanorama tick=>", tick);
    if (changePanoramaStarted) {
      console.log(
        "handleChangeCarousPanorama return without change while image loading",
        changePanoramaStarted
      );
      return;
    }
    const oldPanoramaId = panoramaId;
    if (oldPanoramaId !== id) {
      setEnableClickHotSpot(false);
      setChangePanoramaStarted(true);
    }
    setZoom(zoom);
    // setActionSpotType(-1);
    setActionSpotId("");
    setPlaying(false);
    console.log("handleChangeCarousPanorama panorama, id =>", panorama, id);
    setImageURLHd(panorama);
    let qImg = { ...panorama };

    qImg.secure_url = panorama.secure_url.replace(
      "upload/",
      `upload/q_${imageQ}/`
    );

    setImageURLSd(qImg);
    setImageTitle(panorama.title);
    setImageDescription(panorama.description);
    setPanoramaId(id);
    if (!isGyroscope) {
      setDefaultViewport(id);
      // setRotation(product.map((item) => item.rotation)[0]);
    }
    if (!isMobile) {
      // applyPanoramaAnnoying();
    }
    // setRotation(oldRotation);
  };
  const handleChangeFullScreen = (e) => {
    if (!showFullScreen) {
      handle.enter();
    } else {
      handle.exit();
    }
    setShowFullScreen(!showFullScreen);
  };

  const handleJumpPrePage = (e) => {
    const backPath = query.get("back");
    console.log(`backPath is =>`, backPath);
    if (backPath === "edit") {
      const backId = query.get("id");

      if (backId) {
        history.push(`/EditPictures/${id}`);
      } else {
        history.push("/VirtualTour");
      }
    } else if (backPath === "EditTour") {
      history.push("/EditTour", {
        product: {
          id,
          title,
          image,
        },
      });
    } else {
      history.goBack();
    }
  };
  const handleSetGyroscope = (e) => {
    if (!isGyroscope) setRotation(false);
    setGyroscope(!isGyroscope);
  };
  const handleSetHD = (e) => {
    setHd(!hd);
    setOldRotation(rotation);
    // if (isGyroscope) setRotation(false);
  };
  const handleClickRotate = (e) => {
    if (isGyroscope) return;
    setRotation(!rotation);
  };

  const handleGetShortLink = () => {
    axios.get(`/api/link/${id}`).then((res, err) => {
      if (err) {
        console.log("message=>", res.data);
        console.error(err);
        return;
      }
      console.log("location=>", window.location, res.data);
      const { link } = res.data;
      setShareUrl(
        window.location.protocol + "//" + window.location.host + "/" + link
      );
      // setShareUrl('https://walkin-prototype.herokuapp.com/' + link);
      // setShareUrl(window.location.protocol + '//' + window.location.host + '/view/601a0a1f2970699b40c061fd');
      setOpenShareModal(true);
    });
  };

  const LastFinalUser = allUsers.filter((item) => {
    return item._id === owner;
  });

  // if (loading) {
  //   return (
  //     <div>
  //       {finalSpinner ? (
  //         <>
  //           <Loading spinnerImage={finalSpinner} titleSpiner={SpinnerText} />
  //         </>
  //       ) : (
  //         ""
  //       )}
  //     </div>
  //   );
  // }
  console.log("geoLocation=>", geoLocation);
  return (
    <>
      {!firstImageLoaded &&
        <div>
        {finalSpinner ? (
          <>
            <Loading spinnerImage={finalSpinner} titleSpiner={SpinnerText} />
          </>
        ) : (
          ""
        )}
      </div>
      }
      <Whole >
        <HelmetMetaData
          title={imageTitle}
          description={"This is virtual place to tour anywhere in the world"}
          url={shareUrl}
          image={featuredImage}
          hashtag={`#walkin`}
        />
        {EnableMusicBackGround ? (
          <>
            {BackgroundMusic && !pause && (
              <ReactAudioPlayer
                id="background-music"
                src={BackgroundMusic}
                autoPlay
                loop={MusicBackgroundLoop}
                volume={0.3}
              />
            )}
          </>
        ) : (
          ""
        )}

        {!loading && (
          <div className="all-page" id="page-wrap" style={{visibility: !firstImageLoaded ? 'hidden':'visible' }} >
            <FullScreen handle={handle}>
              {openShareModal && (
                <SweetAlert
                  custom
                  showCloseButton
                  // showCancel
                  showConfirm={false}
                  title={"Share Tour"}
                  onCancel={(e) => setOpenShareModal(false)}
                  reverseButtons={true}
                >
                  {(renderProps) => (
                    <form>
                      <input
                        type={"text"}
                        ref={renderProps.setAutoFocusInputRef}
                        className="form-control"
                        value={shareUrl}
                        onKeyDown={renderProps.onEnterKeyDownConfirm}
                        // onChange={(e) => setShareUrl( e.target.value )}
                        placeholder={"short link"}
                        readOnly
                      />
                      <br />
                      Copy & paste the url above to share or
                      <hr />
                      <div className="d-flex justify-content-around">
                        <div>
                          <FacebookShareButton
                            url={shareUrl}
                            quote={"walkin quote"}
                            title={imageTitle}
                            picture={featuredImage}
                            hashtag={`#walkin`}
                          >
                            <FacebookIcon size={32} round />
                          </FacebookShareButton>
                          <div>
                            <FacebookShareCount url={shareUrl}>
                              {(count) => count}
                            </FacebookShareCount>
                          </div>
                        </div>
                        <div>
                          <FacebookMessengerShareButton
                            url={shareUrl}
                            appId="521270401588372"
                          >
                            <FacebookMessengerIcon size={32} round />
                          </FacebookMessengerShareButton>
                        </div>
                        <div>
                          <TwitterShareButton url={shareUrl} title={title}>
                            <TwitterIcon size={32} round />
                          </TwitterShareButton>
                        </div>
                        <div>
                          <RedditShareButton
                            url={shareUrl}
                            title={title}
                            windowWidth={660}
                            windowHeight={460}
                          >
                            <RedditIcon size={32} round />
                          </RedditShareButton>
                          <div>
                            <RedditShareCount url={shareUrl}></RedditShareCount>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </SweetAlert>
              )}
              <Modal
                isOpen={openMapModal}
                toggle={() => setOpenMapModal(!openMapModal)}
                className="place-map"
              >
                <ModalHeader toggle={() => setOpenMapModal(!openMapModal)}>
                  Place Map View
                </ModalHeader>
                <ModalBody>
                  <div style={{ width: "100%", height: 600 }}>
                    {geoLocation &&
                    <MyGoogleMap
                      isMarkerShown={true}
                      zoom={10}
                      fixed
                      defaultCenter={{
                        lng: geoLocation.coordinates[0],
                        lat: geoLocation.coordinates[1],
                      }}
                      getMapInfo={() => {}}
                      // setMap={setPlaceMap}
                    ></MyGoogleMap>
                    }
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setOpenMapModal(!openMapModal)}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
              <Tour>
                {pause ? (
                  <>
                    <StartUp>
                      {/* pasue screen of 3 pages start */}
                      <Div100vh>
                        <div
                          style={{
                            zIndex: "111111111111111111111111111111",
                            display: "block",
                            position: "fixed",
                            left: "0px",
                            top: "0px",
                            width: "100vw",
                            height: "100vh",
                          }}
                        >
                          <Swiper {...params}>
                            <div
                              style={{ height: "100vh", width: "100vw" }}
                              key="0"
                            >
                              {showImageFeaturedInPause ? (
                                <>
                                  <img
                                    src={featuredImage}
                                    className="image-background-on-pause"
                                  />
                                </>
                              ) : (
                                ""
                              )}

                              <div
                                style={{
                                  backgroundColor: "black",
                                  width: "100%",
                                  height: "100%",
                                  position: "fixed",
                                  left: "0px",
                                  top: "0px",
                                  zIndex: "10",
                                  opacity: pauseOpacity,
                                }}
                              ></div>
                              <div
                                onClick={() => {
                                  return (
                                    setPause(false), setBlackVisible(false)
                                  );
                                }}
                              >
                                <img
                                  src={playicon}
                                  alt="Play"
                                  className="play-btn"
                                />
                              </div>
                              <h2
                                style={{
                                  color: "white",
                                  position: "absolute",
                                  top: "62%",
                                  left: "50%",
                                  color: "#03a9f4",
                                  transform: "translate(-50%,-50%)",
                                  textTransform: "uppercase",
                                  zIndex: "1111111111111111",
                                }}
                              >
                                Let`s explore{" "}
                              </h2>
                              <h1
                                className={cssTourTitle}
                                style={{
                                  paddingTop: "70px",
                                  letterSpacing: "4px",
                                }}
                              >
                                <Jello delay="1000">
                                  {
                                    title // here we checking if we will disply tour title, if not what to show
                                  }
                                </Jello>
                              </h1>

                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "5%",
                                  left: "50%",
                                  transform: "translate(-50%,-50%)",
                                  zIndex: "1111111111",
                                }}
                              >
                                <Fade1
                                  bottom
                                  delay="1000"
                                  duration="1000"
                                  count="4"
                                >
                                  {!isMobile && (
                                    <>
                                      <ChevronDown
                                        size={40}
                                        style={{
                                          color: "white",
                                          cursor: "pointer",
                                        }}
                                        onClick={() =>
                                          setparams({
                                            ...params,
                                            activeSlideKey: "1",
                                          })
                                        }
                                      />
                                    </>
                                  )}
                                </Fade1>
                              </div>
                            </div>

                            <div
                              style={{
                                backgroundColor: "black",
                                height: "100vh",
                                width: "100vw",
                              }}
                              key="1"
                            >
                              {disTourTitle && (
                                <>
                                  <h1
                                    className={cssTourTitle}
                                    style={{
                                      paddingTop: "70px",
                                      position: "absolute",
                                      top: "20%",
                                      left: "50%",
                                    }}
                                  >
                                    <Jello delay="1000">
                                      {
                                        title // here we checking if we will disply tour title, if not what to show
                                      }
                                    </Jello>
                                  </h1>
                                  <p className="aboutDesc">{description}</p>
                                  <div
                                    style={{
                                      position: "absolute",
                                      bottom: "10%",
                                      left: "50%",
                                      transform: "translate(-50%,-50%)",
                                      zIndex: "1111111111",
                                    }}
                                  >
                                    <Fade1
                                      bottom
                                      delay="1000"
                                      duration="1000"
                                      count="4"
                                    >
                                      {" "}
                                    </Fade1>
                                  </div>
                                </>
                              )}

                              {EnableLine ? (
                                <img className="Line" src={LineTitle}></img>
                              ) : (
                                ""
                              )}
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "5%",
                                  left: "50%",
                                  transform: "translate(-50%,-50%)",
                                  zIndex: "1111111111",
                                }}
                              >
                                <Fade1
                                  bottom
                                  delay="1000"
                                  duration="1000"
                                  count="4"
                                >
                                  {!isMobile && (
                                    <>
                                      <ChevronDown
                                        size={40}
                                        style={{
                                          color: "white",
                                          cursor: "pointer",
                                        }}
                                        onClick={() =>
                                          setparams({
                                            ...params,
                                            activeSlideKey: "2",
                                          })
                                        }
                                      />
                                    </>
                                  )}
                                </Fade1>
                              </div>
                            </div>
                            <div
                              style={{
                                backgroundColor: "black",
                                height: "100vh",
                                width: "100vw",
                              }}
                              key="2"
                            >
                              {/* {console.log(finalo)} */}
                              {EnableSocial ? (
                                <Zoom when={true}>
                                  <div className="social-btns">
                                    {/* twitter btn */}

                                    {LastFinalUser.map((item) => {
                                      return item.twitter !== "" ? (
                                        <>
                                          {" "}
                                          <img
                                            src={TwitterBtn}
                                            style={{
                                              width: "50px",
                                              cursor: "pointer",
                                            }}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              window.location.href = `${LastFinalUser.map(
                                                (item) => {
                                                  return item.twitter;
                                                }
                                              )}`;
                                            }}
                                          />
                                        </>
                                      ) : (
                                        ""
                                      );
                                    })}

                                    {/* end twitter btn */}

                                    {/* facebook btn */}
                                    {LastFinalUser.map((item) => {
                                      return item.facebook !== "" ? (
                                        <>
                                          <img
                                            src={FacebookBtn}
                                            style={{
                                              width: "50px",
                                              cursor: "pointer",
                                            }}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              window.location.href = `${LastFinalUser.map(
                                                (item) => {
                                                  return item.facebook;
                                                }
                                              )}`;
                                            }}
                                          />
                                        </>
                                      ) : (
                                        ""
                                      );
                                    })}
                                    {/* end facebook btn */}
                                    {/* linkedin btn */}
                                    {LastFinalUser.map((item) => {
                                      return item.linkid !== "" ? (
                                        <>
                                          {" "}
                                          <img
                                            src={LinkedBtn}
                                            style={{
                                              width: "50px",
                                              cursor: "pointer",
                                            }}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              window.location.href = `${LastFinalUser.map(
                                                (item) => {
                                                  return item.linkid;
                                                }
                                              )}`;
                                            }}
                                          />
                                        </>
                                      ) : (
                                        ""
                                      );
                                    })}
                                    {/* end linkedin btn */}
                                  </div>
                                </Zoom>
                              ) : (
                                ""
                              )}
                              {/* enable credit */}

                              {EnableCredit ? (
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "30%",
                                    transform: "translate(-50%,-50%)",
                                    zIndex: "11111111111",
                                    color: "white",
                                    textTransform: "uppercase",
                                  }}
                                >
                                  <h4 style={{ color: "white" }}>
                                    <Typewriter
                                      options={{
                                        strings: [
                                          "Credit",
                                          ` ${LastFinalUser.map((item) => {
                                            return item.username;
                                          })}`,
                                        ],
                                        autoStart: true,
                                        loop: true,
                                      }}
                                    />
                                  </h4>
                                </div>
                              ) : (
                                " "
                              )}
                              {ShowImageOnstart ? (
                                <animated.div style={fadeUser}>
                                  {" "}
                                  <img
                                    style={{
                                      position: "absolute",
                                      left: "50%",
                                      top: "15%",
                                      width: "100px",
                                      height: "100px",
                                      zIndex: "11111",
                                      borderRadius: "100px",
                                      transform: "translate(-50%,-50%)",
                                      border: "4px solid white",
                                    }}
                                    src={LastFinalUser.map((item) => {
                                      return item.image;
                                    })}
                                  ></img>
                                </animated.div>
                              ) : (
                                ""
                              )}
                              <Fade1 left cascade collapse>
                                <p className="bioDesc">
                                  {LastFinalUser.map((item) => {
                                    return item.bio;
                                  })}
                                </p>
                              </Fade1>

                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "5%",
                                  left: "50%",
                                  transform: "translate(-50%,-50%)",
                                  zIndex: "1111111111",
                                }}
                              >
                                <Fade1
                                  bottom
                                  delay="1000"
                                  duration="1000"
                                  count="4"
                                >
                                  {!isMobile && (
                                    <>
                                      <ChevronUp
                                        size={40}
                                        style={{
                                          color: "white",
                                          cursor: "pointer",
                                        }}
                                        onClick={() =>
                                          setparams({
                                            ...params,
                                            activeSlideKey: "0",
                                          })
                                        }
                                      />
                                    </>
                                  )}
                                </Fade1>
                              </div>
                            </div>
                          </Swiper>
                        </div>
                      </Div100vh>
                      {/* pasue screen of 3 pages end */}
                    </StartUp>
                  </>
                ) : (
                  <div className="not-pause"></div>
                )}

                {blackVisible && pause ? (
                  <>
                    <div
                      style={{
                        zIndex: "1111111111",
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "black",
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                      }}
                    ></div>
                  </>
                ) : (
                  ""
                )}

                {/* related */}

                {enableRelated ? (
                  <>
                    {showRelated ? (
                      <>
                        <Fade1 clear>
                          <div
                            style={{
                              zIndex: "111",
                              display: "block",
                              position: "relative",
                              left: "0px",
                              top: "0px",
                              width: "100%",
                              height: "100%",
                              backgroundColor: "white",
                            }}
                          >
                            {isMobile ? (
                              <>
                                <Carousel
                                  slidesPerPage={1}
                                  draggable
                                  centered
                                  infinite
                                  offset={40}
                                  minDraggableOffset={1}
                                  keepDirectionWhenDragging
                                >
                                  {allUserItems.map((item, index) => {
                                    return (
                                      <>
                                        {/* <h1 style={{ zIndex: "1111111", color: "white" }}>
                                {item.title}
                              </h1> */}
                                        <div>
                                          <Div100vh>
                                            <img
                                              style={{
                                                objectFit: "cover",
                                                padding: "1rem",
                                                width: "100vw",
                                                height: "100%",
                                              }}
                                              src={
                                                JSON.parse(item.image)
                                                  .uploadInfo.url
                                              }
                                            />
                                            {/* nubmer of image */}
                                            <div
                                              style={{
                                                display: "grid",
                                                gridAutoColumns: "1fr 1fr",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  position: "absolute",
                                                  top: "20%",
                                                  right: "50%",
                                                  transform:
                                                    "translate(50%, -50%)",

                                                  zIndex: "111111",
                                                  display: "grid",
                                                  gridTemplateColumns:
                                                    "auto auto",
                                                  gap: "10px",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    alignSelf: "center",
                                                  }}
                                                >
                                                  <Image
                                                    size={20}
                                                    color="white"
                                                  ></Image>
                                                </div>
                                                <div
                                                  style={{ alignSelf: "end" }}
                                                >
                                                  <span
                                                    style={{
                                                      color: "white",
                                                      fontSize: "18px",
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    {
                                                      JSON.parse(item.imgsData)
                                                        .length
                                                    }
                                                  </span>
                                                </div>
                                              </div>
                                            </div>

                                            {/* numbeor of images */}
                                            <div
                                              style={{
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",

                                                backgroundColor: "#00000078",
                                                transform:
                                                  "translate(-50%, -50%)",
                                                top: "50%",
                                                left: "50%",
                                                opacity: "0.65",
                                                border: "1rem solid white",
                                              }}
                                            ></div>
                                          </Div100vh>
                                          <div
                                            style={{
                                              width: "100vw",
                                              height: "100vh",
                                              position: "absolute",
                                              top: "0px",
                                              left: "0px",
                                              // backgroundColor: "#0000006e",
                                              zIndex: "1",
                                              padding: "1rem",
                                            }}
                                          />
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                              zIndex: "111",
                                            }}
                                          >
                                            <h1
                                              style={{
                                                color: "white",
                                                textTransform: "uppercase",
                                                whiteSpace: "nowrap",
                                              }}
                                            >
                                              {item.title}
                                            </h1>
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "65%",
                                              left: "50%",
                                              zIndex: "111",
                                              transform:
                                                "translate(-50%, -50%)",
                                            }}
                                          >
                                            <Button.Ripple
                                              color="primary"
                                              className="mr-1 mb-1"
                                              size="lg"
                                              onClick={() =>
                                                window.open(
                                                  `/placesUsers/${item._id}`
                                                )
                                              }
                                            >
                                              EXPLORE
                                            </Button.Ripple>
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "30px",
                                              right: "30px",
                                              zIndex: "1111111",
                                            }}
                                            onClick={() =>
                                              handleShowHideRelated()
                                            }
                                          >
                                            <X size={30} color="white" />
                                          </div>

                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "30px",
                                              left: "30px",
                                              zIndex: "1111111",
                                            }}
                                          >
                                            <span style={{ color: "white" }}>
                                              {index + 1} /{" "}
                                              {allUserItems.length}
                                            </span>
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "10%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                            }}
                                          >
                                            <img
                                              style={{
                                                width: "80px",
                                                height: "80px",
                                                borderRadius: "80px",
                                                objectFit: "cover",
                                                border: "2px solid white",

                                                justifySelf: "center",
                                              }}
                                              src={LastFinalUser.map(
                                                (item) => item.image
                                              )}
                                            ></img>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </Carousel>
                              </>
                            ) : (
                              <RelatedDesktop>
                                <>
                                  <div
                                    style={{
                                      width: "100vw",
                                      height: "100vh",
                                      // backgroundColor: "#000000d1",
                                      background: "rgb(0,0,0)",
                                      background:
                                        "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                                      position: "fixed",
                                      left: "0px",
                                      top: "0px",
                                    }}
                                  >
                                    <Carousel
                                      className="desktopcarousel"
                                      slidesPerPage={4}
                                      draggable
                                      centered
                                      infinite
                                      offset={120}
                                      itemWidth={300}
                                    >
                                      {allUserItems.map((item) => {
                                        return (
                                          <>
                                            {/* <h1 style={{ zIndex: "1111111", color: "white" }}>
                                {item.title}
                              </h1> */}
                                            <div>
                                              <img
                                                style={{
                                                  width: "400px",
                                                  height: "300px",
                                                  objectFit: "cover",
                                                }}
                                                src={
                                                  JSON.parse(item.image)
                                                    .uploadInfo.url
                                                }
                                              ></img>

                                              <div
                                                style={{
                                                  display: "grid",
                                                  gridAutoColumns: "1fr 1fr",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    position: "absolute",
                                                    top: "10%",
                                                    right: "50%",
                                                    transform:
                                                      "translate(50%, -50%)",

                                                    zIndex: "111111",
                                                    display: "grid",
                                                    gridTemplateColumns:
                                                      "auto auto",
                                                    gap: "10px",
                                                  }}
                                                >
                                                  <div
                                                    style={{
                                                      alignSelf: "center",
                                                    }}
                                                  >
                                                    <Image
                                                      size={14}
                                                      color="white"
                                                    ></Image>
                                                  </div>
                                                  <div
                                                    style={{ alignSelf: "end" }}
                                                  >
                                                    <span
                                                      style={{
                                                        color: "white",
                                                      }}
                                                    >
                                                      {
                                                        JSON.parse(
                                                          item.imgsData
                                                        ).length
                                                      }
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              style={{
                                                position: "absolute",
                                                width: "400px",
                                                height: "300px",

                                                backgroundColor: "black",
                                                transform:
                                                  "translate(-50%, -50%)",
                                                top: "50%",
                                                left: "50%",
                                                opacity: "0.5",
                                                // border: "1rem solid red",
                                              }}
                                            ></div>
                                            <div
                                              style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform:
                                                  "translate(-50%, -50%)",
                                              }}
                                            >
                                              <h2
                                                style={{
                                                  color: "white",
                                                  textTransform: "uppercase",
                                                  whiteSpace: "nowrap",
                                                }}
                                              >
                                                {item.title}
                                              </h2>
                                            </div>

                                            <div
                                              style={{
                                                position: "absolute",
                                                top: "70%",
                                                left: "50%",
                                                transform:
                                                  "translate(-50%, -50%)",
                                                paddingTop: "20px",
                                              }}
                                            >
                                              <Button.Ripple
                                                color="primary"
                                                // className="mr-1 mb-1"
                                                size="md"
                                                onClick={() =>
                                                  window.open(
                                                    `/placesUsers/${item._id}`
                                                  )
                                                }
                                              >
                                                EXPLORE
                                              </Button.Ripple>
                                            </div>
                                          </>
                                        );
                                      })}
                                    </Carousel>
                                  </div>
                                  <div
                                    style={{
                                      position: "fixed",
                                      top: "20px",
                                      right: "20px",
                                      zIndex: "1111111",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleShowHideRelated()}
                                  >
                                    <X size={30} color="white" />
                                  </div>
                                  <div
                                    style={{
                                      position: "fixed",
                                      top: "5%",
                                      left: "50%",
                                      zIndex: "1111111",
                                      cursor: "pointer",
                                      transform: "translate(-50%, 50%)",
                                      display: "grid",
                                      gridTemplateColumns: "1fr",
                                    }}
                                  >
                                    {" "}
                                    <img
                                      style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "80px",
                                        objectFit: "cover",
                                        border: "2px solid white",

                                        justifySelf: "center",
                                      }}
                                      src={LastFinalUser.map(
                                        (item) => item.image
                                      )}
                                    ></img>
                                    <div>
                                      <h4
                                        style={{
                                          color: "white",
                                          textTransform: "uppercase",
                                          paddingTop: "20px",
                                        }}
                                      >
                                        More from :{" "}
                                        {LastFinalUser.map((item) => {
                                          return item.username;
                                        })}
                                      </h4>
                                    </div>
                                    <div
                                      style={{
                                        paddingTop: "20px",
                                        justifySelf: "center",
                                      }}
                                    >
                                      {EnableSocial ? (
                                        <Zoom when={true}>
                                          <div className="social-btns2">
                                            {/* twitter btn */}

                                            {LastFinalUser.map((item) => {
                                              return item.twitter !== "" ? (
                                                <>
                                                  {" "}
                                                  <img
                                                    src={TwitterBtn}
                                                    style={{
                                                      width: "50px",
                                                      cursor: "pointer",
                                                      paddingLeft: "10px",
                                                    }}
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      window.location.href = `${LastFinalUser.map(
                                                        (item) => {
                                                          return item.twitter;
                                                        }
                                                      )}`;
                                                    }}
                                                  />
                                                </>
                                              ) : (
                                                ""
                                              );
                                            })}

                                            {/* end twitter btn */}

                                            {/* facebook btn */}
                                            {LastFinalUser.map((item) => {
                                              return item.facebook !== "" ? (
                                                <>
                                                  <img
                                                    src={FacebookBtn}
                                                    style={{
                                                      width: "50px",
                                                      cursor: "pointer",
                                                      paddingLeft: "10px",
                                                    }}
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      window.location.href = `${LastFinalUser.map(
                                                        (item) => {
                                                          return item.facebook;
                                                        }
                                                      )}`;
                                                    }}
                                                  />
                                                </>
                                              ) : (
                                                ""
                                              );
                                            })}
                                            {/* end facebook btn */}
                                            {/* linkedin btn */}
                                            {LastFinalUser.map((item) => {
                                              return item.linkid !== "" ? (
                                                <>
                                                  {" "}
                                                  <img
                                                    src={LinkedBtn}
                                                    style={{
                                                      width: "50px",
                                                      cursor: "pointer",
                                                      paddingLeft: "10px",
                                                    }}
                                                    onClick={(e) => {
                                                      e.preventDefault();
                                                      window.location.href = `${LastFinalUser.map(
                                                        (item) => {
                                                          return item.linkid;
                                                        }
                                                      )}`;
                                                    }}
                                                  />
                                                </>
                                              ) : (
                                                ""
                                              );
                                            })}
                                            {/* end linkedin btn */}
                                          </div>
                                        </Zoom>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                </>
                              </RelatedDesktop>
                            )}
                          </div>
                        </Fade1>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}

                {/* end related */}

                {/* image gallery start */}
                {storyImages.length > 0 ? (
                  <>
                    {enableImageGallery ? (
                      <>
                        {showImageGallery ? (
                          <>
                            <Fade1>
                              <div
                                style={{
                                  zIndex: "111111111111111111111111111111",
                                  display: "block",
                                  position: "fixed",
                                  left: "0px",
                                  top: "0px",
                                  width: "100vw",
                                  height: "100%",
                                }}
                              >
                                <Swiper {...paramsStoyImages}>
                                  {storyImages.map((item, index) => {
                                    return (
                                      <div
                                        style={{
                                          height: "100vh",
                                          width: "100vw",
                                        }}
                                        key="0"
                                      >
                                        <img
                                          src={item.secure_url}
                                          style={{
                                            backgroundColor: "black",
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                          }}
                                        ></img>
                                        {console.log(
                                          index,
                                          "=>",
                                          storyImages.length
                                        )}

                                        {/* title  and description*/}
                                        {storyTitles !== "" && (
                                          <animated.div style={fadeUser}>
                                            <div className="titleBackground">
                                              <h1 className="titleGallery">
                                                {storyTitles[index]}
                                              </h1>

                                              <div>
                                                <p className="descriptionBackground">
                                                  {storyDescription[index]}
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              style={{
                                                position: "absolute",
                                                top: "16px",
                                                left: "16px",
                                                zIndex: "1111111111",
                                                color: "white",
                                                fontSize: "14px",
                                              }}
                                            >
                                              <span>{index + 1}</span>
                                              <span>/</span>
                                              <span>{storyImages.length}</span>
                                            </div>
                                          </animated.div>
                                        )}

                                        <div
                                          style={{
                                            position: "absolute",
                                            top: "8px",
                                            right: "8px",
                                            zIndex: "1111111111",
                                          }}
                                          onClick={(e) => {
                                            return setShowImageGallery(false);
                                          }}
                                        >
                                          <IconButton
                                            aria-label="delete"
                                            style={{
                                              outline: "none",
                                              backgroundColor:
                                                "rgba(255,0,0,0.0)",
                                            }}
                                          >
                                            <X
                                              size={25}
                                              style={{
                                                color: "white",
                                                backgroundColor:
                                                  "rgba(255,0,0,0.0)",
                                                opacity: "1",
                                              }}
                                            />
                                          </IconButton>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </Swiper>
                              </div>
                            </Fade1>
                            {/* end swiper */}
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}

                {/* image gallery end */}
              </Tour>

              <div onMouseDown={(e) => setRotation(false)}>
                <Frame
                  panoramaId={panoramaId}
                  spotActionId={spotActionId}
                  image={hd ? imageURLHd.secure_url : imageURLSd.secure_url}
                  animation={rotationText}
                  zoom={zoom}
                  EnableNadir={EnableNadir}
                  nadirImage={nadirImage}
                  nadirScale={nadirScale}
                  nadirOpacity={nadirOpacity}
                  isMobile={isMobile}
                  setActionSpotId={setActionSpotId}
                  setActionSpotType={setActionSpotType}
                  jumpToPanorama={jumpToPanorama}
                  cameraRotation={cameraRotation}
                  trasitionPending={trasitionPending}
                  applyPanoramaAnnoying={applyPanoramaAnnoying}
                  isGyroscope={isGyroscope}
                  rotation={rotation}
                  enableClickHotSpot={enableClickHotSpot}
                  setEnableClickHotSpot={setEnableClickHotSpot}
                  currentPanoramaHotSpots={currentPanoramaHotSpots}
                  spotActionType={spotActionType}
                  changePanoramaStarted={changePanoramaStarted}
                  setChangePanoramaStarted={setChangePanoramaStarted}
                  setRotation={setRotation}
                  oldRotation={oldRotation}
                  setAnimation={setAnimation}
                  setFirstImageLoaded={setFirstImageLoaded}
                  firstImageLoaded={firstImageLoaded}
                />
              </div>

              <>              
              {/* description start */}
              <div>
                {openDescription && (
                  // if the information background is open, what to show, here we talk about title of tour and description of tour
                  <div>
                    <Title>
                      <div
                        className="black-background"
                        style={{
                          width: "100vw",
                          height: "100vh",
                          position: "fixed",
                          top: "0px",
                          left: "0px",
                          zIndex: "19",
                        }}
                      ></div>

                      <div className="containers">
                        <X className="close1" onClick={close} color="black" />

                        <div>
                          <Fade1 left delay="100">
                            <img
                              src={imageCard.uploadInfo.secure_url}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                // borderRadius: "25px 0px 0px 25px",
                                objectFit: "cover",
                                justifySelf: "center",
                              }}
                            />
                          </Fade1>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "auto auto auto",
                          }}
                        >
                          <div>
                            <div className="title">
                              <Fade1 top delay="100">
                                {imageTitle ? imageTitle : title}
                              </Fade1>
                            </div>

                            <div className="descrition">
                              <Fade1 bottom delay="200">
                                {imageDescription
                                  ? imageDescription
                                  : description}
                              </Fade1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Title>
                  </div>
                )}
              </div>
              {/* end description */}

              {/* pasue screen start */}
              {!pause && (
                <Btn>
                  <div className="top-shadow" />
                  <Bounce left delay="700">
                    <div className="container-top-left">
                      {console.log(
                        `this is lastfinaluser=>${LastFinalUser.map((item) => {
                          return item.website;
                        })}`
                      )}
                      {user.user && user.user.isEditor ? (
                        <>
                          <IconButton
                            aria-label="delete"
                            style={{
                              outline: "none",
                              backgroundColor: "rgba(255,0,0,0.0)",
                            }}
                          >
                            {" "}
                            <motion.div
                              whileHover={{
                                scale: 1.2,
                                opacity: 0.8,
                              }}
                              whileTap={{
                                scale: 0.9,
                                opacity: 1,
                                color: "black",
                              }}
                              transition={{
                                type: "tween",
                                ease: "circOut",
                              }}
                            >
                              <ArrowLeft
                                onClick={handleJumpPrePage}
                                color="white"
                                size={28}
                                style={{
                                  outline: "none",
                                  backgroundColor: "rgba(255,0,0,0.0)",
                                }}
                              />
                            </motion.div>
                          </IconButton>
                        </>
                      ) : (
                        <IconButton
                          aria-label="delete"
                          style={{
                            outline: "none",
                            backgroundColor: "rgba(255,0,0,0.0)",
                          }}
                        >
                          <ArrowLeft
                            onClick={handleJumpPrePage}
                            color="white"
                            size={28}
                            style={{
                              color: "white",
                              backgroundColor: "rgba(255,0,0,0.0)",
                            }}
                          />
                        </IconButton>
                      )}
                      {EnableTourLogo && !isMobile ? (
                        <>
                          <img
                            src={TourLogo}
                            style={{
                              width: "100px",
                              zIndex: "11111111",
                              marginLeft: "10px",
                            }}
                          ></img>
                          {/* </Link> */}
                        </>
                      ) : (
                        ""
                      )}

                      {infoButtonIsActive ? (
                        <IconButton
                          aria-label="delete"
                          style={{
                            outline: "none",
                            backgroundColor: "rgba(255,0,0,0.0)",
                          }}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              opacity: 0.8,
                            }}
                            whileTap={{
                              scale: 0.9,
                              opacity: 1,
                              color: "black",
                            }}
                            transition={{
                              type: "tween",
                              ease: "circOut",
                            }}
                          >
                            <img
                              src={Info1}
                              onClick={HandelInfo}
                              style={{ width: "26px", height: "26px" }}
                            />
                          </motion.div>
                        </IconButton>
                      ) : (
                        <IconButton
                          disabled
                          aria-label="delete"
                          style={{
                            outline: "none",
                            backgroundColor: "rgba(255,0,0,0.0)",
                          }}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              opacity: 0.8,
                            }}
                            whileTap={{
                              scale: 0.9,
                              opacity: 1,
                              color: "black",
                            }}
                            transition={{
                              type: "tween",
                              ease: "circOut",
                            }}
                          >
                            <Info
                              onClick={HandelInfo}
                              size={25}
                              style={{
                                color: "white",
                                backgroundColor: "rgba(255,0,0,0.0)",
                                opacity: "0.5",
                              }}
                            />
                          </motion.div>
                        </IconButton>
                      )}
                      {/* image gallery */}

                      {/* end image */}
                      {spotActionType === 5 && //play sound
                        (isPlaying ? (
                          <IconButton
                            aria-label="player"
                            style={{
                              outline: "none",
                              backgroundColor: "rgba(255,0,0,0.0)",
                            }}
                          >
                            <PauseCircle
                              onClick={handlePauseSound}
                              size={25}
                              style={{
                                color: "white",
                                backgroundColor: "rgba(255,0,0,0.0)",
                              }}
                            />
                          </IconButton>
                        ) : (
                          <IconButton
                            aria-label="player"
                            style={{
                              outline: "none",
                              backgroundColor: "rgba(255,0,0,0.0)",
                            }}
                          >
                            <PlayCircle
                              onClick={handlePlaySound}
                              size={25}
                              style={{
                                color: "white",
                                backgroundColor: "rgba(255,0,0,0.0)",
                              }}
                            />
                          </IconButton>
                        ))}

                      {/* end exitbtn */}
                      {isMobile == true ? (
                        ""
                      ) : (
                        <div className="title-tour">
                          <h5>{title}</h5>
                        </div>
                      )}
                      {console.log(BackgroundMusic)}
                      {BackgroundMusic !== undefined &&
                      EnableMusicBackGround &&
                      !isMobile ? (
                        <>
                          {isPlayingMusicBack ? (
                            <>
                              <IconButton
                                aria-label="delete"
                                style={{
                                  outline: "none",
                                  backgroundColor: "rgba(255,0,0,0.0)",
                                }}
                                onClick={() =>
                                  handlePauseSoundBack(MusicVolume)
                                }
                              >
                                <PauseCircle
                                  size={25}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                />
                              </IconButton>
                            </>
                          ) : (
                            <>
                              <IconButton
                                aria-label="delete"
                                style={{
                                  outline: "none",
                                  backgroundColor: "rgba(255,0,0,0.0)",
                                }}
                                onClick={() => handlePlaySoundBack(MusicVolume)}
                              >
                                <PlayCircle
                                  onClick={handlePlaySound}
                                  size={25}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                />
                              </IconButton>
                            </>
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </Bounce>

                  <Bounce right delay="700">
                    <div className="top-bar">
                      {/* MENU MOBILE START */}
                      {isMobile ? (
                        <>
                          <div>
                            {["bottom"].map((anchor) => (
                              <div>
                                <React.Fragment key={anchor}>
                                  <Button.Ripple
                                    className="btn-icon"
                                    color="primary"
                                    onClick={toggleDrawer(anchor, true)}
                                  >
                                    {" "}
                                    <Menu size={20} />
                                  </Button.Ripple>
                                  <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                  >
                                    <List>
                                      {/* image gallery */}
                                      {storyImages.length > 0 ? (
                                        <>
                                          {enableImageGallery && (
                                            <>
                                              <Container>
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                  }}
                                                >
                                                  <Row>
                                                    <Col className="mr-0">
                                                      <ListItem>
                                                        <IconButton
                                                          aria-label="delete"
                                                          style={{
                                                            outline: "none",
                                                            backgroundColor:
                                                              "rgba(255,0,0,0.0)",
                                                          }}
                                                        >
                                                          {" "}
                                                          <img
                                                            src={
                                                              ImageGalleryBlack
                                                            }
                                                            onClick={() =>
                                                              setShowImageGallery(
                                                                true
                                                              )
                                                            }
                                                            style={{
                                                              width: "28px",
                                                              height: "28px",
                                                            }}
                                                          />
                                                        </IconButton>
                                                        <ListItemText primary="Show image gallery" />
                                                      </ListItem>
                                                    </Col>
                                                  </Row>
                                                </div>
                                                <Divider />
                                              </Container>
                                            </>
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                      {/* end image gallery */}
                                      {/* rotate mobile  */}
                                      <Container>
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <Row>
                                            <Col className="mr-0">
                                              <ListItem>
                                                {!pause && rotation ? (
                                                  <IconButton
                                                    aria-label="delete"
                                                    style={{
                                                      outline: "none",
                                                      backgroundColor:
                                                        "rgba(255,0,0,0.0)",
                                                    }}
                                                  >
                                                    <img
                                                      src={RotateBlack}
                                                      onClick={
                                                        handleClickRotate
                                                      }
                                                      size={25}
                                                      style={{
                                                        color: "white",
                                                        backgroundColor:
                                                          "rgba(255,0,0,0.0)",
                                                        width: "27px",
                                                        height: "25px",
                                                      }}
                                                    />
                                                  </IconButton>
                                                ) : (
                                                  <IconButton
                                                    aria-label="delete"
                                                    style={{
                                                      outline: "none",
                                                      backgroundColor:
                                                        "rgba(255,0,0,0.0)",
                                                    }}
                                                  >
                                                    <img
                                                      src={RotatNoBlack}
                                                      onClick={
                                                        handleClickRotate
                                                      }
                                                      size={25}
                                                      style={{
                                                        color: "white",
                                                        backgroundColor:
                                                          "rgba(255,0,0,0.0)",
                                                        width: "30px",
                                                        height: "30px",
                                                      }}
                                                    />
                                                  </IconButton>
                                                )}
                                                <ListItemText primary="Enable tour autorotation" />
                                              </ListItem>
                                            </Col>
                                          </Row>
                                        </div>
                                        <Divider />
                                      </Container>
                                      {/* end rotate mobile */}

                                      {/* share mobile */}
                                      {EnableShare && (
                                        <Container className="mb-0">
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "center",
                                            }}
                                          >
                                            <Row className="mb-0">
                                              <Col className="mb-0">
                                                <ListItem>
                                                  <IconButton
                                                    aria-label="share"
                                                    style={{
                                                      outline: "none",
                                                      backgroundColor:
                                                        "rgba(255,0,0,0.0)",
                                                    }}
                                                    onClick={(e) => {
                                                      handleGetShortLink();
                                                    }}
                                                  >
                                                    <img
                                                      src={ShareBlack}
                                                      style={{
                                                        color: "white",
                                                        backgroundColor:
                                                          "rgba(255,0,0,0.0)",
                                                        width: "30px",
                                                        height: "30px",
                                                      }}
                                                    />
                                                  </IconButton>

                                                  <ListItemText primary="Share the tour now" />
                                                </ListItem>
                                              </Col>
                                            </Row>
                                          </div>
                                          <Divider />
                                        </Container>
                                      )}
                                      {/* end share mobile */}

                                      {/* like mobile */}

                                      <Container>
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <Row>
                                            <Col className="mr-0">
                                              <ListItem>
                                                {EnableLike ? (
                                                  <>
                                                    {" "}
                                                    {likeavailable ? (
                                                      <IconButton
                                                        aria-label="delete"
                                                        style={{
                                                          color: "white",
                                                          backgroundColor:
                                                            "rgba(255,0,0,0.0)",
                                                        }}
                                                        onClick={likeadd}
                                                      >
                                                        <span
                                                          style={{
                                                            position:
                                                              "relative",
                                                            top: "-10px",
                                                            right: "-32px",
                                                            color: "black",
                                                            fontSize: "11px",
                                                          }}
                                                        >
                                                          {con}
                                                        </span>
                                                        <img
                                                          src={LikeBlack}
                                                          style={{
                                                            color: "white",
                                                            backgroundColor:
                                                              "rgba(255,0,0,0.0)",
                                                            width: "27px",
                                                            height: "23px",
                                                            opacity: "1",
                                                          }}
                                                        />
                                                      </IconButton>
                                                    ) : (
                                                      <IconButton
                                                        aria-label="delete"
                                                        style={{
                                                          color: "white",
                                                          backgroundColor:
                                                            "rgba(255,0,0,0.0)",
                                                        }}
                                                        onClick={() =>
                                                          dislike()
                                                        }
                                                      >
                                                        <span
                                                          style={{
                                                            position:
                                                              "relative",
                                                            top: "-10px",
                                                            right: "-32px",
                                                            color: "black",
                                                            fontSize: "11px",
                                                          }}
                                                        >
                                                          {con}
                                                        </span>
                                                        <img
                                                          src={LikeFullBlack}
                                                          style={{
                                                            color: "white",
                                                            backgroundColor:
                                                              "rgba(255,0,0,0.0)",
                                                            width: "27px",
                                                            height: "23px",
                                                          }}
                                                        />
                                                      </IconButton>
                                                    )}
                                                  </>
                                                ) : (
                                                  ""
                                                )}
                                                <ListItemText primary="Tour number of likes" />
                                              </ListItem>
                                            </Col>
                                          </Row>
                                        </div>
                                      </Container>

                                      {/* End like mobile */}
                                    </List>
                                  </SwipeableDrawer>
                                </React.Fragment>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <>
                        {/* MENU MOBILE END */}

                        {/* full screen button */}
                        <>
                          {!isMobile && (
                            <>
                              {EnableFullscreen && (
                                <>
                                  {!showFullScreen ? (
                                    <IconButton
                                      aria-label="delete"
                                      style={{
                                        outline: "none",
                                        backgroundColor: "rgba(255,0,0,0.0)",
                                      }}
                                      onClick={handleChangeFullScreen}
                                    >
                                      <motion.div
                                        whileHover={{
                                          scale: 1.2,
                                          opacity: 0.8,
                                        }}
                                        whileTap={{
                                          scale: 0.9,
                                          opacity: 1,
                                          color: "black",
                                        }}
                                        transition={{
                                          type: "tween",
                                          ease: "circOut",
                                        }}
                                      >
                                        <img
                                          src={Maxi}
                                          style={{
                                            width: "28px",
                                            height: "28px",
                                          }}
                                        />
                                      </motion.div>
                                    </IconButton>
                                  ) : (
                                    <IconButton
                                      aria-label="delete"
                                      style={{
                                        outline: "none",
                                        backgroundColor: "rgba(255,0,0,0.0)",
                                      }}
                                      onClick={handleChangeFullScreen}
                                    >
                                      {" "}
                                      <motion.div
                                        whileHover={{
                                          scale: 1.2,
                                          opacity: 0.8,
                                        }}
                                        whileTap={{
                                          scale: 0.9,
                                          opacity: 1,
                                          color: "black",
                                        }}
                                        transition={{
                                          type: "tween",
                                          ease: "circOut",
                                        }}
                                      >
                                        <img
                                          src={Mini}
                                          style={{
                                            width: "28px",
                                            height: "28px",
                                          }}
                                        />
                                      </motion.div>
                                    </IconButton>
                                  )}
                                </>
                              )}
                            </>
                          )}
                          {/* full screen button */}

                          {/* Share button */}
                          {!isMobile && EnableShare && (
                            <IconButton
                              aria-label="share"
                              style={{
                                outline: "none",
                                backgroundColor: "rgba(255,0,0,0.0)",
                              }}
                              onClick={(e) => {
                                handleGetShortLink();
                              }}
                            >
                              {" "}
                              <motion.div
                                whileHover={{
                                  scale: 1.2,
                                  opacity: 0.8,
                                }}
                                whileTap={{
                                  scale: 0.9,
                                  opacity: 1,
                                  color: "black",
                                }}
                                transition={{
                                  type: "tween",
                                  ease: "circOut",
                                }}
                              >
                                <img
                                  src={ShareWhite}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    width: "28px",
                                    height: "28px",
                                    opacity: "1",
                                  }}
                                />
                              </motion.div>
                            </IconButton>
                          )}
                          {/* Share button end*/}

                          {/* rotation btn */}
                          {!isMobile && (
                            <>
                              {!pause && rotation ? (
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                >
                                  {" "}
                                  <motion.div
                                    whileHover={{
                                      scale: 1.2,
                                      opacity: 0.8,
                                    }}
                                    whileTap={{
                                      scale: 0.9,
                                      opacity: 1,
                                      color: "black",
                                    }}
                                    transition={{
                                      type: "tween",
                                      ease: "circOut",
                                    }}
                                  >
                                    {" "}
                                    <Fade1 left>
                                      <img
                                        src={Rotate}
                                        onClick={handleClickRotate}
                                        size={25}
                                        style={{
                                          color: "white",
                                          backgroundColor: "rgba(255,0,0,0.0)",
                                          // width: "28px",
                                          height: "28px",
                                        }}
                                      />
                                    </Fade1>
                                  </motion.div>
                                </IconButton>
                              ) : (
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                >
                                  {" "}
                                  <motion.div
                                    whileHover={{
                                      scale: 1.2,
                                      opacity: 0.8,
                                    }}
                                    whileTap={{
                                      scale: 0.9,
                                      opacity: 1,
                                      color: "black",
                                    }}
                                    transition={{
                                      type: "tween",
                                      ease: "circOut",
                                    }}
                                  >
                                    {" "}
                                    <Fade1 left>
                                      <img
                                        src={RotatNo}
                                        onClick={handleClickRotate}
                                        size={25}
                                        style={{
                                          color: "white",
                                          backgroundColor: "rgba(255,0,0,0.0)",
                                          // width: "28px",
                                          height: "28px",
                                        }}
                                      />
                                    </Fade1>
                                  </motion.div>
                                </IconButton>
                              )}
                            </>
                          )}
                          {/* end rotation btn */}

                          {/* gyroscope button */}
                          {isMobile && (
                            <IconButton
                              aria-label="delete"
                              style={{
                                outline: "none",
                                backgroundColor: "rgba(255,0,0,0.0)",
                                marginBottom: "5px",
                              }}
                              onClick={handleSetGyroscope}
                            >
                              <div style={{ zIndex: "1" }}>
                                {enabelGyro ? (
                                  <>
                                    {" "}
                                    {!isGyroscope ? (
                                      <img
                                        src={NoCompas}
                                        style={{
                                          width: "28px",
                                          height: "28px",
                                          marginRight: "7px",
                                        }}
                                      />
                                    ) : (
                                      <img
                                        src={Compas}
                                        style={{
                                          width: "28px",
                                          height: "28px",
                                          marginRight: "7px",
                                        }}
                                      />
                                    )}{" "}
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            </IconButton>
                          )}
                          {/* end gyroscope button */}

                          {/* HD BUTTON */}

                          {EnableHd ? (
                            <div>
                              {hd ? (
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                  onClick={handleSetHD}
                                >
                                  {" "}
                                  <motion.div
                                    whileHover={{
                                      scale: 1.2,
                                      opacity: 1,
                                    }}
                                    whileTap={{
                                      scale: 0.9,
                                      opacity: 1,
                                      color: "black",
                                    }}
                                    transition={{
                                      type: "tween",
                                      ease: "circOut",
                                    }}
                                  >
                                    {" "}
                                    <Fade1 left>
                                      <img
                                        src={Hd720}
                                        style={{
                                          color: "white",
                                          backgroundColor: "rgba(255,0,0,0.0)",

                                          width: "29px",
                                          height: "32px",
                                          zIndex: "1111111111111111",
                                        }}
                                      ></img>
                                    </Fade1>
                                  </motion.div>
                                </IconButton>
                              ) : (
                                <>
                                  <IconButton
                                    aria-label="delete"
                                    style={{
                                      outline: "none",
                                      backgroundColor: "rgba(255,0,0,0.0)",
                                    }}
                                    onClick={handleSetHD}
                                  >
                                    {" "}
                                    <motion.div
                                      whileHover={{
                                        scale: 1.2,
                                        opacity: 0.8,
                                      }}
                                      whileTap={{
                                        scale: 0.9,
                                        opacity: 1,
                                        color: "black",
                                      }}
                                      transition={{
                                        type: "tween",
                                        ease: "circOut",
                                      }}
                                    >
                                      <Fade1 left>
                                        <img
                                          src={HdNew}
                                          style={{
                                            color: "white",
                                            backgroundColor:
                                              "rgba(255,0,0,0.0)",

                                            width: "29px",
                                            height: "32px",
                                            opacity: "1",
                                          }}
                                        ></img>
                                      </Fade1>
                                    </motion.div>
                                  </IconButton>
                                </>
                              )}
                            </div>
                          ) : (
                            ""
                          )}

                          {/* end HD BUTTON */}

                          {/* rleated button */}

                          {enableRelated ? (
                            <IconButton
                              aria-label="delete"
                              style={{
                                outline: "none",
                                backgroundColor: "rgba(255,0,0,0.0)",
                                zIndex: "111111",
                              }}
                              onClick={() => handleShowHideRelated()}
                              // onClick={() =>
                              //   history.push(`/UserProfileID/${userIdFinal}`)
                              // }
                            >
                              {" "}
                              <motion.div
                                whileHover={{
                                  scale: 1.2,
                                  opacity: 0.8,
                                }}
                                whileTap={{
                                  scale: 0.9,
                                  opacity: 1,
                                  color: "black",
                                }}
                              >
                                <img
                                  src={More}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",

                                    width: "28px",
                                    height: "28px",
                                    zIndex: "1111111111111111",
                                  }}
                                ></img>
                              </motion.div>
                            </IconButton>
                          ) : (
                            ""
                          )}
                          {/* rleated button */}

                          {/* relaed button */}
                          {storyImages.length > 0 ? (
                            <>
                              {!isMobile ? (
                                <>
                                  {enableImageGallery ? (
                                    <>
                                      <IconButton
                                        aria-label="delete"
                                        style={{
                                          outline: "none",
                                          backgroundColor: "rgba(255,0,0,0.0)",
                                        }}
                                      >
                                        {" "}
                                        <motion.div
                                          whileHover={{
                                            scale: 1.2,
                                            opacity: 0.8,
                                          }}
                                          whileTap={{
                                            scale: 0.9,
                                            opacity: 1,
                                            color: "black",
                                          }}
                                          transition={{
                                            type: "tween",
                                            ease: "circOut",
                                          }}
                                        >
                                          <img
                                            src={ImageGallery}
                                            onClick={() =>
                                              setShowImageGallery(true)
                                            }
                                            style={{
                                              width: "28px",
                                              height: "28px",
                                            }}
                                          />
                                        </motion.div>
                                      </IconButton>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                            </>
                          ) : (
                            ""
                          )}

                          {/* end related button */}
                          {/* like button */}
                          {!isMobile && EnableLike ? (
                            <>
                              {" "}
                              {likeavailable ? (
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    outline: "none",
                                    opacity: "1",
                                  }}
                                  onClick={likeadd}
                                >
                                  <span
                                    style={{
                                      position: "relative",
                                      top: "-10px",
                                      right: "-32px",
                                      color: "white",
                                      fontSize: "11px",
                                    }}
                                  >
                                    {con}
                                  </span>
                                  <motion.div
                                    whileHover={{
                                      scale: 1.2,
                                      opacity: 0.8,
                                    }}
                                    whileTap={{
                                      scale: 0.9,
                                      opacity: 1,
                                      color: "black",
                                    }}
                                    transition={{
                                      type: "tween",
                                      ease: "circOut",
                                    }}
                                  >
                                    <img
                                      src={Heart}
                                      style={{
                                        color: "white",
                                        backgroundColor: "rgba(255,0,0,0.0)",
                                        // width: "27px",
                                        height: "23px",
                                        opacity: "1",
                                      }}
                                    />
                                  </motion.div>
                                </IconButton>
                              ) : (
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    color: "white",
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    // width: "27px",
                                    height: "23px",
                                    opacity: "1",
                                  }}
                                  onClick={() => dislike()}
                                >
                                  <span
                                    style={{
                                      position: "relative",
                                      top: "-10px",
                                      right: "-32px",
                                      color: "white",
                                      fontSize: "11px",
                                    }}
                                  >
                                    {con}
                                  </span>
                                  <motion.div
                                    animate={{ scale: 1.1 }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 2,
                                    }}
                                  >
                                    <img
                                      src={HeartFull}
                                      style={{
                                        color: "white",
                                        backgroundColor: "rgba(255,0,0,0.0)",
                                        // width: "27px",
                                        height: "23px",
                                        opacity: "1",
                                      }}
                                    />
                                  </motion.div>
                                </IconButton>
                              )}
                            </>
                          ) : (
                            ""
                          )}
                          {/* end like button */}
                          {geoLocation && geoLocation.coordinates[0] !== 0 && (
                            <IconButton
                              aria-label="delete"
                              style={{
                                outline: "none",
                                backgroundColor: "rgba(255,0,0,0.0)",
                              }}
                              onClick={
                                (e) => setOpenMapModal(true)
                                //   () => {
                                //   history.push("/alltours", {
                                //     geoLocation: geoLocation
                                //     ?
                                //     {
                                //       lng: geoLocation.coordinates[0],
                                //       lat: geoLocation.coordinates[1]
                                //     }
                                //     : null
                                //   });
                                // }
                              }
                            >
                              <motion.div
                                whileHover={{
                                  scale: 1.2,
                                  opacity: 0.8,
                                }}
                                whileTap={{
                                  scale: 0.9,
                                  opacity: 1,
                                  color: "black",
                                }}
                                transition={{
                                  type: "tween",
                                  ease: "circOut",
                                }}
                              >
                                <MapPin
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    // width: "27px",
                                    height: "23px",
                                    opacity: "1",
                                  }}
                                ></MapPin>
                              </motion.div>
                            </IconButton>
                          )}
                          {/* edit buttons */}
                          {/* buttons that will show only for the admin of the tour */}

                          {viewMode === "tour" &&
                            mailuserFromPorduct == usermailfromuser && (
                              <div>
                                <>
                                  <IconButton
                                    aria-label="delete"
                                    style={{
                                      outline: "none",
                                      backgroundColor: "rgba(255,0,0,0.0)",
                                    }}
                                    onClick={() => {
                                      history.push("/EditTour", {
                                        product: {
                                          id,
                                        },
                                      });
                                    }}
                                  >
                                    <Settings
                                      style={{
                                        color: "white",
                                        backgroundColor: "rgba(255,0,0,0.0)",
                                        // width: "27px",
                                        height: "23px",
                                        opacity: "1",
                                      }}
                                    ></Settings>
                                  </IconButton>
                                  <IconButton
                                    aria-label="delete"
                                    style={{
                                      outline: "none",
                                      backgroundColor: "rgba(255,0,0,0.0)",
                                    }}
                                    onClick={() => {
                                      history.push(`/EditPictures/${id}`, {
                                        product: {
                                          id,
                                        },
                                      });
                                    }}
                                  >
                                    <Edit
                                      style={{
                                        color: "white",
                                        backgroundColor: "rgba(255,0,0,0.0)",
                                        // width: "27px",
                                        height: "23px",
                                        opacity: "1",
                                      }}
                                    ></Edit>
                                  </IconButton>
                                  {/* end edit button hotspot and settings  */}
                                </>
                              </div>
                            )}
                        </>
                      </>
                    </div>
                  </Bounce>
                </Btn>
              )}
              {/* pause screen end */}

              {/* carousel start */}
              <Circle1>
                <div>
                  {!pause && openCarousel ? ( // here we define if the carousel is start with open or close status
                    <div className="carousel">
                      {image.length > 1 && (
                        <>
                          {/* <animated.div style={fadeCarousel}> */}
                          <Fade1 bottom>
                            <Carousel
                              className={carouselDesing}
                              slidesPerPage={3}
                              // onChange={() => setActiveImage(true)}
                              offset={10}
                              draggable
                              itemWidth={200}
                              minDraggableOffset={1}
                              keepDirectionWhenDragging
                            >
                              {image.length > 1
                                ? image.map((panorama, index) => {
                                    return (
                                      <>
                                        {loading ? (
                                          <div
                                            key={`panorama-${index}`}
                                            style={{
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                            }}
                                          >
                                            {
                                              <Loading
                                                titleSpiner="why"
                                                spinnerImage="Puff"
                                              />
                                            }
                                          </div>
                                        ) : (
                                          <div
                                            // url image
                                            key={`panorama-${index}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={handleChangeCarousPanorama(
                                              panorama,
                                              index
                                            )}
                                          >
                                            <div>
                                              {(panorama.thumbnail_url !==
                                                imageURLHd.thumbnail_url ||
                                                panorama.thumbnail_url !==
                                                  imageURLSd.thumbnail_url) && (
                                                <div
                                                  style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    top: "0px",
                                                    left: "0px",
                                                    position: "absolute",
                                                    backgroundColor: "black",
                                                    opacity: "0.4",
                                                  }}
                                                ></div>
                                              )}
                                              {(panorama.thumbnail_url ==
                                                imageURLHd.thumbnail_url ||
                                                panorama.thumbnail_url ==
                                                  imageURLSd.thumbnail_url) && (
                                                <div
                                                  style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    top: "0px",
                                                    left: "0px",
                                                    position: "absolute",
                                                    backgroundColor: "black",
                                                    opacity: "0.8",
                                                  }}
                                                ></div>
                                              )}
                                              {(panorama.thumbnail_url ==
                                                imageURLHd.thumbnail_url ||
                                                panorama.thumbnail_url ==
                                                  imageURLSd.thumbnail_url) && (
                                                <Fade1 forever duration="7000">
                                                  <PlayCircle
                                                    size={30}
                                                    className="visited"
                                                    style={{
                                                      color: "white",
                                                      position: "absolute",
                                                      left: "10px",
                                                      top: "10px",

                                                      zIndex: "1111111",
                                                    }}
                                                  ></PlayCircle>
                                                </Fade1>
                                              )}
                                              <div
                                                style={{
                                                  color: "white",
                                                  position: "absolute",
                                                  right: "10px",
                                                  top: "10px",

                                                  zIndex: "1111111",
                                                }}
                                              >
                                                <span>{index + 1}</span>/
                                                <span>{image.length}</span>
                                              </div>
                                              <img
                                                src={panorama.thumbnail_url}
                                                style={{
                                                  width: "200px",
                                                  height: "100px",
                                                  objectFit: "cover",
                                                }}
                                              ></img>
                                              {displayTitleBesideThumb && ( // here we define if there is title inside the carousel
                                                <h1 className="image-title">
                                                  {panorama.title
                                                    ? panorama.title
                                                    : ""}
                                                </h1>
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    );
                                  })
                                : ""}
                            </Carousel>
                          </Fade1>
                          {/* </animated.div> */}
                        </>
                      )}

                      {image.length > 1 && (
                        <animated.div style={fadeUser}>
                          <div
                            className="close-carousel"
                            onClick={() => {
                              return setopenCarousel(false);
                            }}
                          >
                            <ChevronDown size={35} color="white" />
                          </div>
                        </animated.div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="open-carousel"
                      onClick={() => {
                        return setopenCarousel(true);
                      }}
                    >
                      {!pause && (
                        <Fade1 bottom delay="200">
                          <ChevronUp size={35} color="white" />
                        </Fade1>
                      )}
                    </div>
                  )}
                </div>
              </Circle1>

              {/* carouse end */}

              {/* password screen start*/}
              <LockPage>
                {havePassword ? (
                  <>
                    <div
                      className={css1 ? "black-back" : "black-back-none"}
                    ></div>
                    <div
                      className={
                        css ? "lockPage-container" : "lockPage-container-none"
                      }
                    >
                      <div className="left-image">
                        <img
                          src={featuredImageFinal.uploadInfo.secure_url}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            // border: "2px solid black",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div className="main-form-container">
                        <div>
                          <h3 style={{ textTransform: "uppercase" }}>
                            {title}
                          </h3>
                        </div>
                        <div>
                          <h5>Please insert the password</h5>
                        </div>

                        <div>
                          <Row className="justify-content-md-center mt-2">
                            <Col lg="6" md="12" mt="12">
                              <FormGroup className="position-relative form-label-group has-icon-left">
                                <Input
                                  type="text"
                                  value={userPassword}
                                  onChange={(e) =>
                                    setUserPassword(e.target.value)
                                  }
                                  placeholder="Insert Password"
                                />
                                <div className="form-control-position">
                                  <Lock size={15} />
                                </div>
                                <Label>Insert Password</Label>
                              </FormGroup>
                              <Button.Ripple
                                color="primary"
                                onClick={() =>
                                  PasswordCheck(passwordo, userPassword)
                                }
                              >
                                Submit
                              </Button.Ripple>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </LockPage>
              {/* password screen end */}
              </>
            </FullScreen>
          </div>
        )}
      </Whole>
    </>
  );
}

const LockPage = styled.div`
  .black-back {
    position: fixed;
    width: 100%;
    right: 0px;
    top: 0px;
    height: 100%;
    background-color: black;
    z-index: 12;
    opacity: 0.95;
  }
  .black-back-none {
    display: none;
  }
  .lockPage-container {
    background-color: white;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 13;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* border: 2px solid red; */
  }
  .lockPage-container-none {
    display: none;
  }
  .main-form-container {
    width: 100%;
    height: 200px;
    align-self: center;
    justify-self: center;
    text-align: center;

    display: grid;
  }
`;
const Whole = styled.div`
  /* Position and sizing of burger button */

  .MuiList-padding {
    display: none;
  }

  .all-page {
    /* background-color:black; */
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    top: 40px;
  }
  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #0ca8fd !important;
    /* border:3px solid white; */
  }

  .swiper-container-horizontal > .swiper-pagination-progressbar {
    height: 6px;
    background-color: "black";
  }
  ${media.phone`
.titleBackground{
  position:absolute;
  bottom:0px;
  left:0px;
    width:100%;
    max-height:20%;
   padding: 1rem 2rem; 
    overflow: scroll;
}
.related{
  position: absolute;

    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width:auto;
    height:auto;

    z-index: 20;



    background-color: white;
    border-radius: 50px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
}
 
  `}
  ${media.tablet`
.titleBackground{
 

}
.related{
  position: absolute;
   
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width:97vw;
    height: 97%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
}
 
`} 

  ${media.desktop`
  .titleBackground{

}
.related{
  position: absolute;
   
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width:97vw;
    height: 99%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
}
`} 

  ${media.large`
  .titleBackground{
    position:absolute;
  bottom:0px;
  left:0px;

width:100%;
height:20%

padding: 1rem 2rem; 
overflow: auto;

}
.related{
  position: absolute;
   
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width:97vw;
    height: 97%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
}
 
`}   
.titleGallery {
    color: white;
    font-size: 15px;
    text-transform: uppercase;
  }
  .titleBackground {
    padding: 1rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      191deg,
      rgba(0, 0, 0, 0.7150210425967262) 0%,
      rgba(0, 0, 0, 0.5301470930168943) 100%
    );
    text-align: center;
    color: white;
  }
`;
const Title = styled.div`
  .black-background {
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.4713235636051295) 100%
    );
  }

  .cover-about {
    position: fixed;
    padding: 3rem;
    right: 0px;
    top: 52px;
    width: 25%;
    height: 100vh;
    z-index: 10;
    background-color: black;
    opacity: 0.8;
  }
  .close1 {
    z-index: 11111;
    position: fixed;
    right: 15px;
    top: 15px;
    max-width: 30px;
    max-height: 30px;
    display: block;
    cursor: pointer;
  }

  ${media.phone`
  .containers {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: white;
    /* border-radius: 25px; */
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
  .title {
    color: #0ca8fd;
    font-size: 1.5rem;
    text-align: center;
    padding: 5rem 2rem 2rem 2rem;
    white-space: wrap;
    text-transform: uppercase;
    font-weight: bold;
  }

  .descrition {
    color: #787878;
    font-size: 13px;
    position: relative;
    padding: 3rem 2rem;
    text-align:center;
  }
 
  `}

  ${media.tablet`
  .containers {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: white;
    /* border-radius: 25px; */
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
  .title {
    color: #0ca8fd;
    font-size: 20px;
    text-align: center;
    padding: 3rem 5rem;
    white-space: wrap;
    text-transform: uppercase;
    font-weight: bold;
  }

  .descrition {
    color: #787878;
    font-size: 13px;
    position: relative;
    padding: 0rem 5rem;
    text-align:center;
  }
 
  `}


  ${media.desktop`
  .containers {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 60%;
    height: 70%;
    z-index: 20;
    background-color: white;
    /* border-radius: 25px; */
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
  .title {
    color: #0ca8fd;
    font-size: 20px;
    font-weight:bold;
    text-align: left;
    padding: 3rem 5rem;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
  }

  .descrition {
    color: #787878;
    font-size: 13px;
    position: relative;
    padding: 0rem 5rem;
    text-align: left;
  }
  `}


  ${media.large`
  .containers {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: 60%;
    height: 70%;
    z-index: 20;
    background-color: white;
    /* border-radius: 25px; */
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  }
  .title {
    color: #0ca8fd;
    font-size: 20px;
    text-align: left;
    padding: 3rem 5rem;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
  }

  .descrition {
    color: #787878;
    font-size: 13px;
    position: relative;
    padding: 0rem 5rem;
    text-align: left;
  }
  `}
`;
const Btn = styled.div`
  .container-top-left {
    position: absolute;
    left: 8px;
    top: 10px;
    display: flex;
    /* grid-template-columns: auto auto auto; */
    height: 50px;
    align-items: center;

    z-index: 11;
    justify-items: center;
  }
  .title-tour h5 {
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    margin-top: 5px;
    padding-left: 10px;
    /* margin-left: 8px; */
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }

  .btn-info {
    z-index: 11;
    position: absolute;

    width: 30px;
    height: 30px;
    z-index: 10;
    cursor: pointer;
    font-family: "Titillium Web", sans-serif;
  }
  .btn-back {
    z-index: 11;
    position: absolute;

    width: 30px;
    height: 30px;
    z-index: 10;
    cursor: pointer;
    font-family: "Titillium Web", sans-serif;
  }
  .image {
    position: absolute;
    left: 2rem;
    top: 5rem;
    width: 30px;
    height: 30px;
    z-index: 10;
    cursor: pointer;
  }

  .information {
    border: none;
    border-radius: 0px;
    padding: 1rem;
    z-index: 11;
    cursor: pointer;
    background: green;
    font-size: 15px;
    font-weight: bold;
  }
  .top-bar {
    position: fixed;
    right: 10px;
    top: 10px;
    display: flex;
    flex-direction: row-reverse;
    /* grid-template-columns: auto auto auto; */
    height: 50px;
    align-items: center;

    z-index: 11;
  }
  .top-shadow {
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 70px;
    left: 0px;
    z-index: 4;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,ffffff+100&0.54+0,0+100 */
    background: rgb(0, 0, 0);
    background: linear-gradient(
      173deg,
      rgba(0, 0, 0, 0.28644961402529767) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .hd {
    border: none;
    border-radius: 0px;
    padding: 1rem;
    z-index: 11;
    cursor: pointer;
    position: fixed;
    right: 0px;
    top: 112px;
    font-size: 15px;
    font-weight: bold;
  }
  .hd:after {
    content: "HD";
  }
`;
const Tour = styled.div`
  position: absolute; 
  overflow: hidden;
  .pause {
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.6;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10;
  }
  .Line {
    position: absolute;
    left: 50%;
    top: 63%;
    transform: translate(-50%, -50%);
    width: 30%;

    z-index: 10;
  }
  .aboutDesc {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    text-align: center;
    z-index: 10;
    font-size: 16px;
    text-transform: capitalize;
  }

  .bioDesc {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    text-align: center;
    z-index: 10;
    font-size: 16px;
  }
  .social-btns {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, 50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    z-index: 111;
  }

  .pause1 {
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.1;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10;
  }
  .play-btn {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    z-index: 10000;
    cursor: pointer;
  }
  .tour-title {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
    color: White;
    z-index: 110000;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
  }
  .tourShadow {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
    color: White;
    z-index: 110000;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 1);
  }
  .company-title {
    position: absolute;
    left: 5%;
    top: 15%;
    transform: translate(-50%, -50%);
    color: White;
    z-index: 110000;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .not-pause {
    display: none;
  }
  .image-background-on-pause {
    background-position: center;
    background-size: cover;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 1;

    object-fit: cover;
  }
`;
const Circle1 = styled.div`
  .BrainhubCarousel__dot:before {
  }
  .BrainhubCarousel__dots {
    background-color: white;
  }
  .carousel {
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }
  .activeImage {
    background-color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 111111111111111111111;
  }
  .notActiveImage {
    opacity: 1 !important;
  }

  .image-overlay1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: red;
    opacity: 0.6;
  }
  .image-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }

  .small-image-button {
    border: none;
    /* border: 5px solid black; */
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    float: left;
  }

  .small-image-button:hover .image-overlay {
    opacity: 0.5;
    border: 10px solid black;
    box-shadow: inset 0px 0px 0px 2px white;
    box-sizing: border-box; /* Include padding and border in element's width and height */
  }
  .small-image-button1 {
    border: none;

    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    float: left;
  }
  .small-image-button1:hover .image-overlay {
    width: 100%;
    height: 8px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #0ca8fd;
    opacity: 0.9;
  }

  .BrainhubCarousel__container {
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 2;
    -webkit-box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.05);
  }
  .designcarousel1 {
    background-color: rgba(255, 255, 255, 1);
    padding: 0.8rem 0.4rem;
  }
  .designcarousel2 {
    background-color: rgba(0, 0, 0, 1);
    padding: 0.8rem 0.4rem;
  }

  .open-carousel {
    border: none;
    border-radius: 0px;
    padding: 0.3rem;
    z-index: 1;
    cursor: pointer;
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
    font-weight: bold;
    opacity: 1;
    cursor: pointer;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.02+1,0.16+100 */
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0.02) 0%,
      rgba(0, 0, 0, 0.02) 1%,
      rgba(0, 0, 0, 0.16) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.02) 0%,
      rgba(0, 0, 0, 0.02) 1%,
      rgba(0, 0, 0, 0.16) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.02) 0%,
      rgba(0, 0, 0, 0.02) 1%,
      rgba(0, 0, 0, 0.16) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05000000', endColorstr='#29000000',GradientType=0 ); /* IE6-9 */
  }
  .close-carousel {
    border: none;
    border-radius: 0px;
    padding: 0.3rem;
    z-index: 1;
    cursor: pointer;
    position: fixed;
    bottom: 122px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
    font-weight: bold;
    opacity: 1;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.07+1,0.16+100 */
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0.07) 0%,
      rgba(0, 0, 0, 0.07) 1%,
      rgba(0, 0, 0, 0.16) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.07) 0%,
      rgba(0, 0, 0, 0.07) 1%,
      rgba(0, 0, 0, 0.16) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.07) 0%,
      rgba(0, 0, 0, 0.07) 1%,
      rgba(0, 0, 0, 0.16) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#12000000', endColorstr='#29000000',GradientType=0 ); /* IE6-9 */
  }

  .onhoverplay {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0;
  }
  .BrainhubCarouselItem:hover .onhoverplay {
    opacity: 1;
    transition: opacity 0.4s;
  }
  .left-title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 15px;
    transform: translate(-50%, -50%);
    color: white;
    text-transform: uppercase;
    opacity: 1;
  }
  .BrainhubCarouselItem:hover .left-title {
    opacity: 0.1;
    transition: opacity 0.5s;
  }
  .image-title {
    font-size: 12px;
    margin: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    opacity: 1;
  }
`;

const StartUp = styled.div`
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-pagination-bullet {
    background: #0ca8fd !important;
    width: 11px !important;
    height: 11px !important;
  }
`;

const RelatedDesktop = styled.div`
  .BrainhubCarousel__container {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #e4e4e4;
  }
  .social-btns2 {
    justify-self: "center";
  }
`;
