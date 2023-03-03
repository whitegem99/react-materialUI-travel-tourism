import React, { useState, useEffect, Component, useRef } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
import Frame from "./FrameAddTour";
import styled from "styled-components";
import axios from "axios";
import { media } from "../styled";
// import ContentLoader, { Facebook } from "react-content-loader";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import hdLogo from "../Assets/HD.png";
import Rotate from "../Assets/rotate.png";
import RotatNo from "../Assets/rotateNo.png";
import { UncontrolledTooltip } from "reactstrap";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Zoom from "react-reveal/Zoom";
import { ProductContext } from "../context/products";
import { FaLayerGroup, FaPlayCircle } from "react-icons/fa";
import { RiRotateLockLine, RiRestartLine } from "react-icons/ri";
import { FiImage, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import IconButton from "@material-ui/core/IconButton";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import "@brainhubeu/react-carousel/lib/style.css";
import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";
import Loading from "./Loading";
import imga from "../Assets/corfu1.jpg";
import ReactAudioPlayer from "react-audio-player";
import Maxi from "../Assets/max1.svg";
import HdNew from "../Assets/hd.svg";
import Compas from "../Assets/compass.svg";
import Info1 from "../Assets/info.svg";
import SpinnerLoader from "./ThreesixtyLoader";
import More from "../Assets/premium.svg";
import ImageGallery from "../Assets/imagegallerywhite.svg";
import {
  EyeExplainer,
  ReseatEaplainer,
  EditHotspotExplainer,
} from "../utils/Constants";
import ShareWhite from "../Assets/sharewhite.svg";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import Loader from "react-loader-spinner";
import { useSpring, animated } from "react-spring";
import SpinnerIcon from "../Assets/waiting.svg";
import { ClassicSpinner, FillSpinner } from "react-spinners-kit"; //spiners
// slider
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import PlayButton0 from "../Assets/music-player-play-button.png";
import PlayButton1 from "../Assets/playicon/play (1).png";
import PlayButton2 from "../Assets/playicon/play (2).png";
import Line1 from "../Assets/line.png";
import Line2 from "../Assets/line2.png";
//

import {
  Col,
  Button,
  FormGroup,
  Input,
  Row,
  Label,
  Container,
  Card,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
} from "reactstrap";
import { Formik, Field, Form } from "formik";
// accordion
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import anime from "animejs/lib/anime.es.js";

import {
  Upload,
  File,
  XCircle,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowLeft,
  Info,
  MoreVertical,
  ChevronsRight,
  Disc,
  CheckCircle,
  Lock,
  Type,
  Send,
  Home,
  Settings,
  Layers,
  UploadCloud,
  RotateCw,
  Eye,
  RefreshCcw,
  BookOpen,
  PlayCircle,
  Image,
  FileText,
  Underline,
  RotateCcw,
  Edit,
  Compass,
  Maximize,
  Music,
  X,
  Target,
  PauseCircle,
  Heart,
  Bookmark,
  Minimize,
  Share2,
  Twitter,
  Linkedin,
  Link,
  Facebook,
  Camera,
  Repeat,
} from "react-feather";
import {
  transitionTypes,
  transitionDurations,
  geolocationOption,
} from "../utils/Constants";
import Fade1 from "react-reveal/Fade";
import Jello from "react-reveal/Jello";
import FacebookBtn from "../Assets/facebook.svg";
import TwitterBtn from "../Assets/twitter.svg";
import LinkedBtn from "../Assets/linkedin.svg";
import Typewriter from "typewriter-effect";

import * as easings from "d3-ease";

import ScrollableAnchor from "react-scrollable-anchor";
import { map } from "jquery";
import {
  MyGoogleMap,
  getIpLocation,
  getGeoLocationFromGoogle,
} from "../Components/MyGoogleMap";
const Scrollto = document.getElementById("Scrollto");

const paramsImageStory = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

// slider

function valuetext(value) {
  return `${value}°C`;
}

// slider

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
  root3: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export default function Edite360Tour() {
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => ++value); // update the state to force render
  }
  //here you can change cloudinary settings to be yours
  // --------------------------------------------------
  // const cloudName = "dfjgtalry";
  // const uploadPreset = "ahmedImageUpload";

  const cloudName = "dx1zby8rs";
  const uploadPreset = "uploaded_from_react";
  //---------------------------------------------------

  const forceUpdate = useForceUpdate();
  let featuredOptions = {
    cloudName,
    uploadPreset,
    thumbnailTransformation: [{ width: 400, crop: "scale" }],
    sources: ["local"],
    styles: {
      palette: {
        window: "#F5F5F5",
        sourceBg: "#FFFFFF",
        windowBorder: "#c0c0c0",
        tabIcon: "#0094c7",
        inactiveTabIcon: "#69778A",
        menuIcons: "#0094C7",
        link: "#0ca8fd",
        action: "#F5F5F5",
        inProgress: "#0194c7",
        complete: "#53ad9d",
        error: "#c43737",
        textDark: "#000000",
        textLight: "#FFFFFF",
      },
    },
    maxFiles: 1,
    maxImageFileSize: 7000000,
    singleUploadAutoClose: true,
  };

  let storyImagesWidget = {
    cloudName,
    uploadPreset,
    sources: ["local"],
    styles: {
      palette: {
        window: "#F5F5F5",
        sourceBg: "#FFFFFF",
        windowBorder: "#c0c0c0",
        tabIcon: "#0094c7",
        inactiveTabIcon: "#69778A",
        menuIcons: "#0094C7",
        link: "#0ca8fd",
        action: "#F5F5F5",
        inProgress: "#0194c7",
        complete: "#53ad9d",
        error: "#c43737",
        textDark: "#000000",
        textLight: "#FFFFFF",
      },
    },
    maxFiles: 3,
    maxImageFileSize: 7000000,
    singleUploadAutoClose: true,
    return_delete_token: true,
  };

  let openWidget = () => {
    let featuredWidget = window.cloudinary.createUploadWidget(
      featuredOptions,
      (error, result) => {
        error ? console.log(result) : console.log("he");
        error ? console.log("error.status") : console.log("non");
        console.log(result.event);
        if (!error && result && result.event === "queues-end") {
          console.log(result.event);
          console.log(result.info.files[0].uploadInfo.url);
          result.info.files[0].uploadInfo != null &&
            setMainFeaturedImage(result.info.files[0]);
          setfeaturedImage1(result.info.files[0].uploadInfo.url);
          //  forceUpdate(setfeaturedImage(JSON.parse(mainFeaturedImge).uploadInfo.url))
          forceUpdate();
        }
      }
    );
    featuredWidget.open();
  };
  let addMusic = () => {
    let featuredWidget = window.cloudinary.createUploadWidget(
      featuredOptions,
      (error, result) => {
        error ? console.log(result) : console.log("he");
        error ? console.log("error.status") : console.log("non");
        console.log(result.event);
        if (!error && result && result.event === "queues-end") {
          console.log(result.event);
          console.log(result.info.files[0].uploadInfo.url);
          result.info.files[0].uploadInfo != null &&
            setBackgroundMusic(result.info.files[0]);
          setBackgroundMusicTest(result.info.files[0].uploadInfo.url);
          // setfeaturedImage1(result.info.files[0].uploadInfo.url)
          //  forceUpdate(setfeaturedImage(JSON.parse(mainFeaturedImge).uploadInfo.url))
          forceUpdate();
        }
      }
    );
    featuredWidget.open();
  };

  let addLogo = () => {
    let featuredWidget = window.cloudinary.createUploadWidget(
      featuredOptions,
      (error, result) => {
        error ? console.log(result) : console.log("he");
        error ? console.log("error.status") : console.log("non");
        console.log(result.event);
        if (!error && result && result.event === "queues-end") {
          console.log(result.event);
          console.log(result.info.files[0].uploadInfo.url);
          result.info.files[0].uploadInfo != null &&
            setTourLogo(result.info.files[0]);
          console.log(result.info.files[0].uploadInfo.url);
          setTourLogoTest(result.info.files[0].uploadInfo.url);
          // setBackgroundMusicTest(result.info.files[0].uploadInfo.url);
          // setfeaturedImage1(result.info.files[0].uploadInfo.url)
          //  forceUpdate(setfeaturedImage(JSON.parse(mainFeaturedImge).uploadInfo.url))
          forceUpdate();
        }
      }
    );
    featuredWidget.open();
  };

  let addnadir = () => {
    let featuredWidget = window.cloudinary.createUploadWidget(
      featuredOptions,
      (error, result) => {
        error ? console.log(result) : console.log("he");
        error ? console.log("error.status") : console.log("non");
        console.log(result.event);
        if (!error && result && result.event === "queues-end") {
          console.log(result.event);
          console.log(result.info.files[0].uploadInfo.url);
          result.info.files[0].uploadInfo != null &&
            setNadirImage(result.info.files[0]);
          console.log(result.info.files[0].uploadInfo.url);
          setNadirImageTest(result.info.files[0].uploadInfo.secure_url);
          // setBackgroundMusicTest(result.info.files[0].uploadInfo.url);
          // setfeaturedImage1(result.info.files[0].uploadInfo.url)
          //  forceUpdate(setfeaturedImage(JSON.parse(mainFeaturedImge).uploadInfo.url))
          forceUpdate();
        }
      }
    );
    featuredWidget.open();
  };

  let addStoryImages = () => {
    let featuredWidget = window.cloudinary.createUploadWidget(
      storyImagesWidget,
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          storyImages.push(result.info);
          storyTitles.push("");
          storyDescription.push("");
          // storyImagesTest.push(result.info);
          console.log(result.info);
          forceUpdate();
        } else if (!error && result && result.event === "queues-end") {
          // featuredWidget.close();
          forceUpdate();
          handelSubmit();
        }
      }
    );
    featuredWidget.open();
  };

  const [mainFeaturedImge, setMainFeaturedImage] = useState(null);
  const [featuredImage1, setfeaturedImage1] = useState();
  const classes = useStyles();
  const history = useHistory();
  const { user } = React.useContext(UserContext);
  const { products, likes, updateLikes } = React.useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { product } = location.state;
  const format2 = "YYYY-MM-DD HH:mm:ss";
  var date2 = new Date();
  const dateTime2 = moment(date2).format(format2);
  const [lastEdit, setlastEdit] = useState(dateTime2);
  const [imageCard, setImageCard] = useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [image, setImage] = useState([]); // this we be added with getplaces/ the image we added with addThreeSixty form
  const [place, setPlace] = useState(null);
  const [imageURL, setImageURL] = useState([]);
  const [id, setId] = useState(product.id);
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [havePassword, sethavePassword] = useState();
  const [publish, setPublish] = useState();
  const [passwordo, setpasswordo] = useState("");
  const [rotation, setRotation] = useState();
  const [rotatioTest, setRotatioTest] = useState();
  const [rotationSpeed, setrotationSpeed] = useState("");
  const [openDescription, setOpenDescription] = useState();
  const [openDescriptionEdit, setOpenDescriptionEdit] = useState();
  const [loop, setLoop] = useState();
  const [direction, setDirection] = useState("");
  const [zoom, setZoom] = useState("");
  const [pause, setPause] = useState();
  const [pauseTest, setPauseTest] = useState();
  const [showImageFeaturedInPause, setShowImageFeaturedInPause] = useState();
  const [playicon, setplayicon] = useState("");
  const [disTourTitle, setDisTourTitle] = useState();
  const [cssTourTitle, setCssTourTitle] = useState("");
  const [pauseOpacity, setPauseOpacity] = useState("");
  // const [submitTime, setSubmitTime] = useState(dateTime1);
  const [EnableLine, setEnableLine] = useState();
  const [EnableSocial, setEnableSocial] = useState();
  const [LineTitle, setLineTitle] = useState("");
  const [openCarousel, setopenCarousel] = useState();
  const [openCarouselTest, setopenCarouselTest] = useState(false);
  const [carouselDesing, setCarouselDesing] = useState("designcarousel1");
  const [nadir, setnadir] = useState(true);

  const [spinnerColor, setspinnerColor] = useState("#008000"); // spinner color
  const [spinnerSize, setSpinnerSize] = useState("100");
  const [preloaderIcon, setpreloaderIcon] = useState(
    <FillSpinner color={spinnerColor} size={spinnerSize} />
  );
  const [css, setCss] = useState(true);
  const [css1, setCss1] = useState(true);
  // const [style1, setStyle1] = useState("small-image-button1");

  const [activeImageCarousel, setActiveImageCarousel] = useState(false);
  const [displayTitleBesideThumb, setDisplayTitleBesideThumb] = useState();

  // const [nadirScale, setnadirScale] = useState(".5 .5 .5 ");
  // const [nadirOpacity, setnadirOpacity] = useState("0.5");
  const [view, setView] = useState("70 0 0");
  const [showCompanyTitle, setShowCompanyTitle] = useState(true);
  const [compnyTitle, setCompnyTitle] = useState("WALKIN");
  const [showCompanyTitleWithUrl, setshowCompanyTitleWithUrl] = useState(false);
  const [companyUrl, setcompanyUrl] = useState("https://walkin-360.com/");
  const [featuredImage, setfeaturedImage] = useState();
  const [userPassword, setUserPassword] = useState("");
  const [showpasswordDesign, setShowpasswordDesign] = useState();
  const [hotSpots, setHotSpots] = useState([]);
  const [transitionType, setTransitionType] = useState(transitionTypes[0]);
  const [transitionDuration, setTransitionDuration] = useState(
    transitionDurations[0]
  );
  const [annoyingAnimation, setAnnoyingAnimation] = useState(null);
  const [EnableGyro, setEnableGyro] = useState();
  const [EnableHd, setEnableHd] = useState();
  const [EnableFullscreen, setEnableFullscreen] = useState();
  const [EnableLike, setEnableLike] = useState();
  const [DisplayTourDescription, setDisplayTourDescription] = useState();
  const [DisplayBio, setDisplayBio] = useState();
  const [EnableCredit, setEnableCredit] = useState();
  const [ShowImageOnstart, setShowImageOnstart] = useState();
  const [BackgroundMusic, setBackgroundMusic] = useState([]);
  const [BackgroundMusicTest, setBackgroundMusicTest] = useState();
  const [MusicVolume, setMusicVolume] = useState();
  const [EnableMusicBackGround, setEnableMusicBackGround] = useState();
  const [MusicBackgroundLoop, setMusicBackgroundLoop] = useState();
  const [TourLogo, setTourLogo] = useState([]);
  const [EnableTourLogo, setEnableTourLogo] = useState();
  const [TourLogoTest, setTourLogoTest] = useState();
  // Image story
  const [storyImages, setStoryImages] = useState([]);
  const [enableImageGallery, setEnableImageGallery] = useState(false);
  const [storyTitles, setStoryTitles] = useState([]);
  const [storyDescription, setStoryDescription] = useState([]);
  const [showImageGallery, setShowImageGallery] = useState(true);
  const [showmeImageGallery, setShowmeImageGallery] = useState(false);
  const [filterdImage, setFilterdImage] = useState(null);
  // const [imageStoryTitle, setImageStoryTitle] = useState("");
  // Image story

  // nadir
  const [nadirImage, setNadirImage] = useState([]);
  const [nadirImageTest, setNadirImageTest] = useState();
  const [EnableNadir, setEnableNadir] = useState(true);
  const [nadirScale, setNadirScale] = useState("1,1,1");
  const [nadirOpacity, setNadirOpacity] = useState("1");
  const [EnableShare, setEnableShare] = useState(true);
  const [SpinnerText, setSpinnerText] = useState("");
  const [SpinnerType, setSpinnerType] = useState();
  const [showSpinnerDesign, setShowSpinnerDesign] = useState(false);
  const [enableRelated, setEnableRelated] = useState();
  // end nadir
  const [isMobile, setIsMobile] = useState();
  const [owner, setOwner] = useState(() => {
    const ownProduct = products.filter((item) => item.id === id);
    return ownProduct.map((item) => item.userId);
  });
  const [allUsers, setAllUsers] = useState([]);
  // const [transitionEffect, setTransitionEffect] = useState(null);
  const [placeLocation, setLocation] = useState(null);
  const fadeUser = useSpring({
    config: {
      tension: 0,
      friction: 2,
      precision: 0.1,
      duration: 3000,
      easing: easings.easeBounceOut,
    },
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleChangeCurrParonamaTitle = (e) => {
    setFilterdImage({ ...filterdImage, title: e.target.value });
  };
  const handleChangeCurrParonamaDescription = (e) => {
    setFilterdImage({ ...filterdImage, description: e.target.value });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // slider change function rotatio speed

  const handleChangeSlider = (event, newValue) => {
    setrotationSpeed(newValue);
  };

  const handleChangeOpacityNadir = (event, newValue) => {
    setNadirOpacity(newValue);
  };

  const handleChangeVolume = (event, newValue) => {
    setMusicVolume(newValue);
  };
  //  end slider change function rotatio speed

  // opacity of start up on pause
  const handleOpacityStart = (event, newValue) => {
    setPauseOpacity(newValue);
    setparams({ ...params, activeSlideKey: "0" });
  };
  // end opacity of start up on pause

  // change zoom

  const handleChangeZoom = (event, newValue) => {
    setZoom(newValue);
  };
  // end zoom

  // rotatio direction
  const handelDirection = (event) => {
    setDirection(event.target.value);
  };
  // end rotatio direction

  // tour title

  const handelTourTitle = (event) => {
    setCssTourTitle(event.target.value);
    setparams({ ...params, activeSlideKey: "0" });
  };
  //end tour title

  //  line title
  const handelLineTitle = (event) => {
    setLineTitle(event.target.value);
    setparams({ ...params, activeSlideKey: "1" });
  };
  //end  line title

  // change play icon
  const handelPlayIcon = (event) => {
    setplayicon(event.target.value);
  };
  // end change play icon
  // change spinner design
  const handelSpinner = (event) => {
    setSpinnerType(event.target.value);
  };

  // end spinner design
  // spinner text
  const handelSpinnerText = (event) => {
    setSpinnerText(event.target.value);
    // setparams({...params,activeSlideKey:'0'})
  };
  // end spinner text
  //  open close description
  const HandelInfo = () => {
    setOpenDescription(!openDescription);
  };
  const HandelInfoEdit = () => {
    setOpenDescriptionEdit(!openDescriptionEdit);
  };

  const HandelStartUp = () => {
    setPauseTest(!pauseTest);
  };

  const close = () => {
    setOpenDescriptionEdit(!openDescriptionEdit);
  };

  const HnadelPasswordWindow = () => {
    setShowpasswordDesign(!showpasswordDesign);
  };
  // change carousel design
  const handelCarouselDesign = (event) => {
    setCarouselDesing(event.target.value);
  };

  const HandelOpenCarouselTest = () => {
    setopenCarouselTest(!openCarouselTest);
  };
  const [params, setparams] = useState({
    direction: "vertical",
    activeSlideKey: "",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: [],
  });

  React.useEffect(() => {
    getPlaces();
    axios.get(`/api/users/`).then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  }, []);

  const getPlaces = () => {
    setLoading(true);
    axios
      .get(`/api/places/${id}`)
      .then((res) => {
        console.log("places data=>", res.data.place);
        console.log(JSON.parse(res.data.place.image).uploadInfo.url);
        setImageCard(JSON.parse(res.data.place.image));
        if (res.data.place.StoryImages) {
          console.log(res.data.place.StoryImages);
          const storyImages1 = JSON.parse(res.data.place.StoryImages);
          console.log(storyImages1.titles);
          setStoryImages(storyImages1.images ? storyImages1.images : []);
          setStoryTitles(storyImages1.titles ? storyImages1.titles : []);
          setStoryDescription(
            storyImages1.description ? storyImages1.description : []
          );
        }

        setPlace(res.data.place);
        setPause(res.data.place.pause);
        setPauseTest(res.data.place.pause);
        setImage(JSON.parse(res.data.place.imgsData[0]));

        setImageURL(JSON.parse(res.data.place.imgsData[0])[0]);
        settitle(res.data.place.title);
        setDescription(res.data.place.description);
        sethavePassword(res.data.place.havePassword);
        setPublish(res.data.place.publish);
        setpasswordo(res.data.place.passwordo);
        setRotation(res.data.place.rotation);
        setRotatioTest(res.data.place.rotation);
        setrotationSpeed(res.data.place.rotationSpeed);
        setOpenDescription(res.data.place.openDescription);
        setLoop(res.data.place.loop);
        setDirection(res.data.place.direction);
        setZoom(res.data.place.zoom);
        setOwner(res.data.place.userId);
        setopenCarousel(res.data.place.openCarousel);
        setopenCarouselTest(res.data.place.openCarousel);
        setCarouselDesing(res.data.place.carouselDesing);
        setfeaturedImage(JSON.parse(res.data.place.image).uploadInfo.url);
        setfeaturedImage1(JSON.parse(res.data.place.image).uploadInfo.url);
        console.log(JSON.parse(res.data.place.image).uploadInfo.url);
        setShowImageFeaturedInPause(res.data.place.showImageFeaturedInPause);
        setplayicon(res.data.place.playicon);
        setDisTourTitle(res.data.place.disTourTitle);
        setPauseOpacity(res.data.place.pauseOpacity);
        setCssTourTitle(res.data.place.cssTourTitle);
        setEnableLine(res.data.place.EnableLine);
        setEnableSocial(res.data.place.EnableSocial);
        setLineTitle(res.data.place.LineTitle);
        // setlastEdit(res.data.place.lastEdit);
        setEnableGyro(res.data.place.EnableGyro);
        setEnableHd(res.data.place.EnableHd);
        setEnableFullscreen(res.data.place.EnableFullscreen);
        setEnableLike(res.data.place.EnableLike);
        setEnableShare(res.data.place.EnableShare);
        setDisplayTourDescription(res.data.place.DisplayTourDescription);
        setDisplayBio(res.data.place.DisplayBio);
        setDisplayTitleBesideThumb(res.data.place.displayTitleBesideThumb);
        setEnableMusicBackGround(res.data.place.EnableMusicBackGround);
        setMusicBackgroundLoop(res.data.place.MusicBackgroundLoop);
        setEnableCredit(res.data.place.EnableCredit);
        setShowImageOnstart(res.data.place.ShowImageOnstart);
        setHotSpots(JSON.parse(res.data.place.hotSpots));
        setEnableTourLogo(res.data.place.EnableTourLogo);
        setEnableNadir(res.data.place.EnableNadir);
        setNadirScale(res.data.place.nadirScale);
        setNadirOpacity(res.data.place.nadirOpacity);
        setSpinnerType(res.data.place.SpinnerType);
        console.log(res.data.place.SpinnerType);
        setSpinnerText(res.data.place.SpinnerText);
        setEnableImageGallery(res.data.place.enableImageGallery);
        setEnableRelated(res.data.place.enableRelated);
        if (res.data.place.transitionEffect) {
          setTransitionType(JSON.parse(res.data.place.transitionEffect).type);
          setTransitionDuration(
            JSON.parse(res.data.place.transitionEffect).duration
          );
        }
        if (
          res.data.place.location.coordinates &&
          res.data.place.location.coordinates[0] !== 0 &&
          res.data.place.location.coordinates[1] !== 0
        ) {
          setLocation({
            lng: res.data.place.location.coordinates[0],
            lat: res.data.place.location.coordinates[1],
          });
        }

        // tour logo
        if (res.data.place.TourLogo[0] == []) {
          return;
        }
        if (res.data.place.TourLogo[0].length > 2) {
          setTourLogoTest(
            JSON.parse(res.data.place.TourLogo[0]).uploadInfo.url
          );
        }

        if (res.data.place.TourLogo[0].length > 2) {
          setTourLogo(JSON.parse(res.data.place.TourLogo[0]));
        }
        // tour logo
        // nadir
        if (res.data.place.nadirImage[0] == []) {
          return;
        }
        if (res.data.place.nadirImage[0].length > 2) {
          setNadirImage(JSON.parse(res.data.place.nadirImage[0]));
        }
        if (res.data.place.nadirImage[0].length > 2) {
          setNadirImageTest(
            JSON.parse(res.data.place.nadirImage[0]).uploadInfo.secure_url
          );
        }

        // nadir end

        // story images

        // nadir end

        if (res.data.place.BackgroundMusic[0] == []) {
          return;
        }
        if (res.data.place.BackgroundMusic[0].length > 2) {
          setBackgroundMusicTest(
            JSON.parse(res.data.place.BackgroundMusic[0]).uploadInfo.url
          );
        }

        if (res.data.place.BackgroundMusic[0].length > 2) {
          setBackgroundMusic(JSON.parse(res.data.place.BackgroundMusic[0]));
        }
        setMusicVolume(res.data.place.MusicVolume);
        console.log(res.data.place.lastEdit);
        // setSubmitTime(res.data.place.time);
        setInterval(() => {
          setLoading(false);
        }, 0);
      })
      .catch((error) => {
        history.push("/");
      });
  };

  useEffect(() => {
    axios.get(`/api/users/`).then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  }, []);

  const handelSubmit = () => {
    let form = new FormData();
    form.append("title", title);
    form.append("description", description);
    form.append("havePassword", havePassword);
    form.append("publish", publish);
    form.append("passwordo", passwordo);
    form.append("rotation", rotation);
    form.append("lastEdit", lastEdit);
    form.append("rotationSpeed", rotationSpeed);
    form.append("openDescription", openDescription);
    form.append("loop", loop);
    form.append("direction", direction);
    form.append("zoom", zoom);
    form.append("pause", pause);
    form.append("showImageFeaturedInPause", showImageFeaturedInPause);
    form.append("playicon", playicon);
    form.append("disTourTitle", disTourTitle);
    form.append("pauseOpacity", pauseOpacity);
    form.append("cssTourTitle", cssTourTitle);
    form.append("EnableLine", EnableLine);
    form.append("EnableSocial", EnableSocial);
    form.append("LineTitle", LineTitle);
    // form.append("time", dateTime1);
    form.append("openCarousel", openCarousel);
    form.append("carouselDesing", carouselDesing);
    form.append("imgsData", JSON.stringify(image));
    form.append("EnableGyro", EnableGyro);
    form.append("EnableHd", EnableHd);
    form.append("EnableFullscreen", EnableFullscreen);
    form.append("EnableLike", EnableLike);
    form.append("EnableShare", EnableShare);
    form.append("DisplayTourDescription", DisplayTourDescription);
    form.append("DisplayBio", DisplayBio);
    form.append("displayTitleBesideThumb", displayTitleBesideThumb);
    form.append("EnableCredit", EnableCredit);
    form.append("ShowImageOnstart", ShowImageOnstart);
    form.append("BackgroundMusic", JSON.stringify(BackgroundMusic));
    form.append("TourLogo", JSON.stringify(TourLogo));
    form.append("EnableTourLogo", EnableTourLogo);
    form.append("MusicVolume", MusicVolume);
    form.append("MusicBackgroundLoop", MusicBackgroundLoop);
    form.append("EnableMusicBackGround", EnableMusicBackGround);
    form.append("nadirImage", JSON.stringify(nadirImage));
    form.append(
      "StoryImages",
      JSON.stringify({
        images: storyImages,
        titles: storyTitles,
        description: storyDescription,
      })
    );
    form.append("EnableNadir", EnableNadir);
    form.append("nadirScale", nadirScale);
    form.append("nadirOpacity", nadirOpacity);
    form.append("SpinnerText", SpinnerText);
    form.append("SpinnerType", SpinnerType);
    form.append("enableImageGallery", enableImageGallery);
    form.append("enableRelated", enableRelated);
    if (mainFeaturedImge) {
      form.append("featuredImage", JSON.stringify(mainFeaturedImge));
    }

    form.append(
      "transitionEffect",
      JSON.stringify({ type: transitionType, duration: transitionDuration })
    );
    form.append("hotSpots", JSON.stringify(hotSpots));
    form.append("location", JSON.stringify(placeLocation));
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const URL = `/api/places/${id}`;
    console.log(URL);
    axios
      .put(URL, form, config)
      .then((res) => {
        console.log(res);
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };

  const resetAll = (e) => {
    console.log("button clicked");

    axios
      .put(`/api/places/${id}`, {
        ...place,
        title: title,
        description: description,
        havePassword: false,
        passwordo: "",
        publish: true,
        rotation: true,
        rotationSpeed: "70000",
        openDescription: false,
        loop: true,
        direction: "normal",
        zoom: "0.6",
        pause: false,
        showImageFeaturedInPause: false,
        playicon: PlayButton0,
        disTourTitle: false,
        LineTitle: Line1,
        pauseOpacity: "0.3",
        cssTourTitle: "tourShadow",
        openCarousel: false,
        carouselDesing: "designcarousel2",
        EnableGyro: true,
        EnableHd: true,
        EnableFullscreen: true,
        EnableLike: true,
        EnableShare: true,
        DisplayTourDescription: true,
        DisplayBio: false,
        SpinnerText: "",
        SpinnerType: "ThreeDots",
        displayTitleBesideThumb: true,
        EnableCredit: false,
        ShowImageOnstart: false,
        EnableSocial: false,
        transitionEffect: JSON.stringify({
          type: transitionTypes[0],
          duration: transitionDurations[0],
        }),
      })
      .then((res) => {
        console.log(res);
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };
  const PasswordCheck = (password, userpassword, css) => {
    console.log(userpassword);
    if (password == userpassword) {
      console.log("password correct");
      // setCss(false);
      // setCss1(false);
      HnadelPasswordWindow();
    } else console.log("password false");
  };

  const handleChangeTransitionType = (e) => {
    e.preventDefault();
    const index = transitionTypes.findIndex((it) => it.name === e.target.value);
    setTransitionType(transitionTypes[index]);
    const canvasEl = document.querySelector("canvas");
    if (canvasEl) {
      setAnnoyingAnimation(
        anime({
          targets: "canvas",
          easing: "easeInOutSine",
          duration: transitionDuration,
          ...transitionTypes[index].animation,
        })
      );
    }
  };

  const handleChangeTransitionDuaration = (e) => {
    e.preventDefault();
    const index = transitionDurations.indexOf(e.target.value);
    setTransitionDuration(e.target.value);
    const canvasEl = document.querySelector("canvas");
    if (canvasEl) {
      setAnnoyingAnimation(
        anime({
          targets: "canvas",
          easing: "easeInOutSine",
          duration: e.target.value,
          ...transitionType.animation,
        })
      );
    }
  };

  const applyPanoramaAnnoying = () => {
    const canvasEl = document.querySelector("canvas");
    if (canvasEl) {
      if (annoyingAnimation) {
        annoyingAnimation.restart();
        return;
      }
      const annoyingAnimation1 = transitionType
        ? anime({
            targets: "canvas",
            easing: "easeInOutSine",
            duration: transitionDuration,
            ...transitionType.animation,
          })
        : anime({
            targets: "canvas",
            duration: 1000,
            easing: "easeInOutSine",
            ...transitionTypes[0].animation,
          });
      annoyingAnimation1.restart();
      setAnnoyingAnimation(annoyingAnimation1);
    }
  };

  const getPlaceLocationFromMap = (mapInfo) => {
    setLocation(mapInfo.location);
  };

  const getLocation = () => {
    (async () => {
      const position = await getGeoLocationFromGoogle();
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
    //     alert(err.message);
    //   }
    //   const location = await getIpLocation();
    //   setLocation({lng: location.longitude, lat: location.latitude });
    // }), geolocationOption);
  };

  const handleChangeMapView = (event, isExpanded) => {
    handleChange("panela23")(event, isExpanded);
    if (!placeLocation) {
      getLocation();
    }
  };
  const LastFinalUser = allUsers.filter((item) => {
    return item._id === owner;
  });

  const myRef = useRef(null);

  const handleChangeStoryTitle = (index) => (e) => {
    storyTitles[index] = e.target.value;
  };
  const handleChangeStoryDescription = (index) => (e) => {
    storyDescription[index] = e.target.value;
  };
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
  const [paramsStoyImages, setparamsStoyImages] = useState({
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <WholePage>
      {console.log(image.length)}
      <div className="whole-page">
        <div className="ImageTour">
          {showmeImageGallery ? (
            <>
              <Fade1>
                <div
                  style={{
                    zIndex: "111",
                    display: "block",
                    position: "fixed",
                    right: "0px",
                    top: "0px",
                    width: "65%",
                    height: "100%",
                  }}
                >
                  <Swiper {...paramsStoyImages}>
                    {storyImages.map((item, index) => {
                      return (
                        <div
                          style={{ height: "100vh", width: "100vw" }}
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
                          {console.log(index, "=>", storyImages.length)}

                          {/* title  and description*/}
                          <animated.div style={fadeUser}>
                            <div className="titleBackground">
                              <h1>{storyTitles[index]}</h1>

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

                          <div
                            style={{
                              position: "absolute",
                              top: "8px",
                              right: "8px",
                              zIndex: "1111111111",
                            }}
                            onClick={(e) => {
                              return setShowmeImageGallery(false);
                            }}
                          >
                            <IconButton
                              aria-label="delete"
                              style={{
                                outline: "none",
                                backgroundColor: "rgba(255,0,0,0.0)",
                              }}
                            >
                              <X
                                size={25}
                                style={{
                                  color: "white",
                                  backgroundColor: "rgba(255,0,0,0.0)",
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
          {showSpinnerDesign ? (
            <>
              <div
                style={{
                  zIndex: "111111111",
                  width: "65%",
                  height: "100%",
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  backgroundColor: "white",
                }}
              >
                <animated.div style={TitleAnimation}>
                  <h1
                    style={{
                      position: "absolute",
                      top: "80%",
                      right: "50%",
                      transform: "translate(50%,-50%)",
                      color: "#00BFFF",
                      letterSpacing: "2px",
                    }}
                  >
                    {SpinnerText}
                  </h1>
                </animated.div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Loader
                    type={SpinnerType}
                    color="#00BFFF"
                    height={100}
                    width={100}
                    // timeout={3000} //3 secs
                  />
                </div>
                <div
                  style={{
                    position: "fixed",
                    top: "8px",
                    right: "8px",
                    zIndex: "1111111111",
                  }}
                  onClick={(e) => {
                    return setShowSpinnerDesign(false);
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    style={{
                      outline: "none",
                      backgroundColor: "rgba(255,0,0,0.0)",
                    }}
                  >
                    <X
                      size={25}
                      style={{
                        color: "black",
                        backgroundColor: "rgba(255,0,0,0.0)",
                        opacity: "1",
                      }}
                    />
                  </IconButton>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <>
            <div className="all-page">
              <div>
                <div>
                  {openDescriptionEdit && (
                    // if the information background is open, what to show, here we talk about title of tour and description of tour
                    <div>
                      <Title>
                        <div></div>
                        <div className="containers">
                          <XCircle
                            className="close1"
                            onClick={close}
                            color="#0ca8fd"
                          />
                          <div>
                            <img
                              src={imageCard.uploadInfo.secure_url}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "25px 0px 0px 25px",
                                objectFit: "cover",
                                justifySelf: "center",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "auto auto auto",
                            }}
                          >
                            <div>
                              <div className="title">{title}</div>

                              <div className="descrition">{description}</div>
                            </div>
                          </div>
                        </div>
                      </Title>
                    </div>
                  )}
                </div>

                {!pauseTest && ( // if we are on pause, mean we have pasue start screen. if we are not on pause screen then to show home and dinfromation buttons
                  <Btn>
                    <div className="top-shadow" />
                    <div className="container-top-left">
                      <div className={classes.exitbtn}>
                        <IconButton
                          aria-label="delete"
                          style={{
                            outline: "none",
                            backgroundColor: "rgba(255,0,0,0.0)",
                          }}
                        >
                          <ArrowLeft
                            id="arrowbutton"
                            // onClick={() => {
                            //   history.push("/VirtualTour");
                            // }}
                            size={25}
                            style={{
                              color: "white",
                              backgroundColor: "rgba(255,0,0,0.0)",
                              outline: "none",
                            }}
                          />
                          <UncontrolledTooltip
                            placement="right-start"
                            target="arrowbutton"
                          >
                            {" "}
                            This button will exit the tour{" "}
                          </UncontrolledTooltip>
                        </IconButton>

                        <IconButton
                          aria-label="delete"
                          style={{
                            outline: "none",
                            backgroundColor: "rgba(255,0,0,0.0)",
                          }}
                        >
                          {EnableTourLogo ? (
                            <>
                              <img
                                src={TourLogoTest}
                                style={{
                                  width: "100px",
                                  zIndex: "11111111",
                                  marginRight: "10px",
                                }}
                              ></img>
                              {/* </Link> */}
                            </>
                          ) : (
                            ""
                          )}
                          <img
                            src={Info1}
                            id="infobutton"
                            style={{ width: "25px", height: "25px" }}
                          />
                          <UncontrolledTooltip
                            placement="right-start"
                            target="infobutton"
                          >
                            {" "}
                            This button will show the tour description, and also
                            the image description if there is{" "}
                          </UncontrolledTooltip>
                        </IconButton>
                      </div>
                      <div className="title-tour">
                        <h5>{title}</h5>
                      </div>
                      {EnableMusicBackGround ? (
                        <>
                          <IconButton
                            aria-label="delete"
                            style={{
                              outline: "none",
                              backgroundColor: "rgba(255,0,0,0.0)",
                            }}
                          >
                            <PlayCircle
                              size={25}
                              style={{
                                color: "white",
                                backgroundColor: "rgba(255,0,0,0.0)",
                              }}
                            />
                          </IconButton>
                        </>
                      ) : (
                        ""
                      )}

                      <div className="top-bar">
                        <div className={classes.exitbtn}>
                          <>
                            {" "}
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
                                  <img
                                    id="gallerybutton"
                                    src={ImageGallery}
                                    onClick={() => setShowImageGallery(true)}
                                    style={{ width: "24px", height: "24px" }}
                                  />
                                  <UncontrolledTooltip
                                    placement="left-start"
                                    target="gallerybutton"
                                  >
                                    Add image gallery to your tour
                                  </UncontrolledTooltip>
                                </IconButton>
                              </>
                            ) : (
                              ""
                            )}
                            {enableRelated && (
                              <IconButton
                                aria-label="share"
                                style={{
                                  outline: "none",
                                  backgroundColor: "rgba(255,0,0,0.0)",
                                }}
                              >
                                <img
                                  id="relatedbutton"
                                  src={More}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    width: "24px",
                                    height: "24px",
                                    opacity: "1",
                                  }}
                                />
                                <UncontrolledTooltip
                                  placement="left-start"
                                  target="relatedbutton"
                                >
                                  Enable your user to show more tour that you
                                  created
                                </UncontrolledTooltip>
                              </IconButton>
                            )}
                            {EnableShare && (
                              <IconButton
                                aria-label="share"
                                style={{
                                  outline: "none",
                                  backgroundColor: "rgba(255,0,0,0.0)",
                                }}
                              >
                                <img
                                  id="sharebutton"
                                  src={ShareWhite}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    width: "24px",
                                    height: "24px",
                                    opacity: "1",
                                  }}
                                />
                                <UncontrolledTooltip
                                  placement="left-start"
                                  target="sharebutton"
                                >
                                  Enable share button for your users
                                </UncontrolledTooltip>
                              </IconButton>
                            )}
                            {EnableGyro ? (
                              <>
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                >
                                  <img
                                    id="gyrobutton"
                                    src={Compas}
                                    style={{ width: "24px", height: "24px" }}
                                  />
                                  <UncontrolledTooltip
                                    placement="left-start"
                                    target="gyrobutton"
                                  >
                                    {" "}
                                    This button will enable gyroscpoe sensors,
                                    this is only for mobiles and touch devices{" "}
                                  </UncontrolledTooltip>
                                </IconButton>
                              </>
                            ) : (
                              ""
                            )}
                            {EnableLike ? (
                              <>
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                >
                                  <Heart
                                    id="likebutton"
                                    style={{
                                      color: "white",
                                      backgroundColor: "rgba(255,0,0,0.0)",
                                      width: "24px",
                                      height: "24px",
                                      opacity: "1",
                                      outline: "none",
                                    }}
                                  ></Heart>
                                  <UncontrolledTooltip
                                    placement="left-start"
                                    target="likebutton"
                                  >
                                    {" "}
                                    This button will show Like counter for your
                                    tourm, and will give the option for the user
                                    to add like for your tour{" "}
                                  </UncontrolledTooltip>
                                </IconButton>
                              </>
                            ) : (
                              ""
                            )}
                            {EnableFullscreen ? (
                              <>
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                >
                                  <img
                                    src={Maxi}
                                    style={{ width: "24px", height: "24px" }}
                                    id="fullbutton"
                                  />
                                  <UncontrolledTooltip
                                    placement="left-start"
                                    target="fullbutton"
                                  >
                                    {" "}
                                    This button will toggle between full and
                                    regular screen of the tour{" "}
                                  </UncontrolledTooltip>
                                </IconButton>
                              </>
                            ) : (
                              ""
                            )}
                            {/* hd button */}
                            {EnableHd ? (
                              <>
                                <IconButton
                                  aria-label="delete"
                                  style={{
                                    outline: "none",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                  }}
                                >
                                  <img
                                    id="hdbutton"
                                    src={HdNew}
                                    style={{
                                      color: "white",
                                      backgroundColor: "rgba(255,0,0,0.0)",

                                      width: "24px",
                                      height: "24px",
                                      zIndex: "1111111111111111",
                                    }}
                                  ></img>{" "}
                                  <UncontrolledTooltip
                                    placement="left-start"
                                    target="hdbutton"
                                  >
                                    if you enable Hd button, this will show the
                                    best image quality{" "}
                                  </UncontrolledTooltip>
                                </IconButton>
                              </>
                            ) : (
                              ""
                            )}
                            {/* rotation button */}
                            {!pauseTest && rotatioTest ? (
                              <IconButton
                                aria-label="delete"
                                style={{
                                  outline: "none",
                                  backgroundColor: "rgba(255,0,0,0.0)",
                                }}
                              >
                                <img
                                  id="positionTop"
                                  src={Rotate}
                                  onClick={() => {
                                    // return setRotatioTest(false);
                                  }}
                                  size={25}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    width: "25px",
                                    height: "24px",
                                  }}
                                />
                                <UncontrolledTooltip
                                  placement="left-start"
                                  target="positionTop"
                                >
                                  This button will enable and disable the
                                  autorotation of the tour
                                </UncontrolledTooltip>
                              </IconButton>
                            ) : (
                              <IconButton
                                aria-label="delete"
                                style={{
                                  outline: "none",
                                  backgroundColor: "rgba(255,0,0,0.0)",
                                }}
                              >
                                <img
                                  id="positionTop"
                                  src={RotatNo}
                                  onClick={() => {
                                    // return setRotatioTest(true);
                                  }}
                                  size={25}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(255,0,0,0.0)",
                                    width: "27px",
                                    height: "25px",
                                  }}
                                />
                                <UncontrolledTooltip
                                  placement="left-start"
                                  target="positionTop"
                                >
                                  This button will enable and disable the
                                  autorotation of the tour
                                </UncontrolledTooltip>
                              </IconButton>
                            )}
                          </>
                        </div>
                      </div>
                    </div>
                  </Btn>
                )}

                <Tour>
                  {/* // if we define to have rotation the 360 , then what will show, we will go for checking the nadir , if we have nadir or not. */}

                  {!loading && nadir && rotatioTest && !pauseTest ? (
                    <Frame
                      image={imageURL.secure_url}
                      animation={`property: rotation; from:0 0 0; to: 0 360 0; dir:${direction}; loop: ${loop}; dur: ${rotationSpeed};`}
                      zoom={zoom}
                      EnableNadir={EnableNadir}
                      nadirImage={nadirImageTest}
                      nadirScale={nadirScale}
                      nadirOpacity={nadirOpacity}
                      view={view}
                      isMobile={isMobile}
                      onClick={() => console.log("elias")}
                    />
                  ) : (
                    <Frame
                      image={imageURL.secure_url}
                      zoom={zoom}
                      isMobile={isMobile}
                    />
                  )}

                  {/* {!pause && showCompanyTitleWithUrl && showCompanyTitle ? (
                    <div className="company-title">
                      <p>
                        <a href={companyUrl}>{compnyTitle}</a>
                      </p>
                    </div>
                  ) : (
                    ""
                  )} */}

                  {pauseTest ? ( // here we checking if we are in pasue , if yes , then we will go for other check, if we will show featured image in the pause screen, if not to show him image that we will define, background, black screen, we need to dfine those
                    <>
                      <StartUp>
                        <Swiper {...params}>
                          <div key="0">
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
                                right: "0px",
                                top: "0px",
                                zIndex: "10",
                                opacity: pauseOpacity,
                              }}
                            ></div>
                            <div
                              onClick={() => {
                                return setPauseTest(false);
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
                            {disTourTitle ? (
                              <>
                                <h1
                                  className={cssTourTitle}
                                  style={{
                                    paddingTop: "70px",
                                    letterSpacing: "4px",
                                  }}
                                >
                                  <Jello delay="1000">{title}</Jello>
                                </h1>
                              </>
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
                                {" "}
                                <ChevronDown
                                  size={40}
                                  style={{ color: "white", cursor: "pointer" }}
                                  onClick={() =>
                                    setparams({
                                      ...params,
                                      activeSlideKey: "1",
                                    })
                                  }
                                />
                              </Fade1>
                            </div>
                          </div>

                          <div style={{ backgroundColor: "black" }} key="1">
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
                                    {" "}
                                    <ChevronDown
                                      size={40}
                                      style={{ color: "white" }}
                                    />
                                  </Fade1>
                                </div>
                              </>
                            )}
                            {DisplayTourDescription ? (
                              <>
                                <p className="aboutDesc">{description}</p>
                              </>
                            ) : (
                              ""
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
                                {" "}
                                <ChevronDown
                                  size={40}
                                  style={{ color: "white", cursor: "pointer" }}
                                  onClick={() =>
                                    setparams({
                                      ...params,
                                      activeSlideKey: "2",
                                    })
                                  }
                                />
                              </Fade1>
                            </div>
                          </div>

                          <div style={{ backgroundColor: "black" }} key="2">
                            <div
                              style={{
                                backgroundColor: "black",
                                height: "100vh",
                                width: "100vw",
                              }}
                            >
                              {/* {console.log(finalo)} */}
                              {EnableSocial ? (
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
                              {DisplayBio ? (
                                <>
                                  <p className="bioDesc">
                                    {LastFinalUser.map((item) => {
                                      return item.bio;
                                    })}
                                  </p>
                                </>
                              ) : (
                                ""
                              )}
                            </div>
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
                                {" "}
                                <ChevronUp
                                  size={40}
                                  style={{ color: "white", cursor: "pointer" }}
                                  onClick={() =>
                                    setparams({
                                      ...params,
                                      activeSlideKey: "0",
                                    })
                                  }
                                />
                              </Fade1>
                            </div>
                          </div>
                        </Swiper>
                      </StartUp>
                    </>
                  ) : (
                    <div className="not-pause"></div>
                  )}
                </Tour>
                {/* // here we define if not pause, to show the carousel */}
                <Circle1>
                  {image.length > 1 ? (
                    <>
                      <div>
                        {!pauseTest && openCarouselTest ? ( // here we define if the carousel is start with open or close status
                          <div>
                            <Carousel
                              className={carouselDesing}
                              slidesPerPage={3}
                              offset={10}
                              draggable
                              itemWidth={200}
                            >
                              {image.length > 0
                                ? image.map((p) => {
                                    return (
                                      <>
                                        {loading ? (
                                          <div
                                            style={{
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                            }}
                                          >
                                            {preloaderIcon}
                                          </div>
                                        ) : (
                                          <div
                                            // url image
                                            style={{ cursor: "pointer" }}
                                            onDoubleClick={() => {
                                              // setLoading(true);
                                              // setActiveImageCarousel(true);
                                              setImageURL(p);
                                              applyPanoramaAnnoying();
                                              // setInterval(() => {
                                              //   setLoading(false);
                                              // }, 500);
                                            }}
                                          >
                                            <div
                                              className={`picture-image ${
                                                p.thumbnail_url ==
                                                imageURL.thumbnail_url
                                                  ? "activeImage"
                                                  : "notActiveImage"
                                              }`}
                                            >
                                              {p.thumbnail_url !==
                                                imageURL.thumbnail_url && (
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
                                              {p.thumbnail_url ==
                                                imageURL.thumbnail_url && (
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
                                              {p.thumbnail_url ==
                                                imageURL.thumbnail_url && (
                                                <Settings
                                                  size={20}
                                                  className="visited"
                                                  style={{
                                                    color: "white",
                                                    position: "absolute",
                                                    left: "10px",
                                                    top: "10px",
                                                    color: "#0ca8fd",
                                                  }}
                                                ></Settings>
                                              )}
                                              <img
                                                //thumb
                                                src={p.thumbnail_url}
                                                className="picture-image"
                                                width="200"
                                              />{" "}
                                              {p.thumbnail_url !==
                                                imageURL.thumbnail_url && (
                                                <Settings
                                                  size={40}
                                                  className="onhoverplay"
                                                />
                                              )}
                                              {/* <div className="image-overlay" /> */}
                                              {displayTitleBesideThumb && ( // here we define if there is title inside the carousel
                                                <h1 className="image-title">
                                                  {p.title ? p.title : ""}
                                                </h1>
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    );
                                  })
                                : console.log("no")}
                            </Carousel>

                            <div
                              className="close-carousel"
                              onClick={() => {
                                return setopenCarouselTest(false);
                              }}
                            >
                              <Image size={35} color="white" />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="open-carousel"
                            onClick={() => {
                              return setopenCarouselTest(true);
                            }}
                          >
                            <Image size={35} color="white" />
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </Circle1>
                <LockPage>
                  {showpasswordDesign ? (
                    <>
                      <div className={css1 ? "black-back" : "black-back-none"}>
                        {" "}
                      </div>
                      <div
                        className={
                          css ? "lockPage-container" : "lockPage-container-none"
                        }
                      >
                        <div className="left-image">
                          <img
                            src={featuredImage}
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
                            {/* <input
                        type="text"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                      />

                      <button
                        onClick={() => PasswordCheck(password, userPassword)}
                      >
                        clikck
                      </button> */}

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
              </div>
            </div>
          </>
        </div>

        <div className="Settings">
          <div className={classes.root}>
            {/* title */}

            <Accordion
              square
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <div className="bread">
                <Layers
                  color
                  className="align-top"
                  size={25}
                  color="white"
                  style={{ margin: "4px", cursor: "pointer" }}
                  onClick={() => {
                    history.push("/VirtualTour");
                  }}
                />

                <div style={{ display: "inline-block", marginTop: "5px" }}>
                  <ChevronRight
                    className="align-top"
                    size={15}
                    style={{ margin: "4px" }}
                  />
                  <span
                    style={{
                      position: "relative",
                      textTransform: "uppercase",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {title}
                  </span>

                  <button
                    style={{
                      position: "absolute",
                      right: "1.5rem",
                      cursor: "pointer",
                      color: "#0ca8fd",
                      border: "none",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      outline: "none",
                      borderLeft: "2px solid white",
                      paddingLeft: "15px",
                    }}
                    onClick={() =>
                      history.push(`/places/${id}?back=EditTour`, {})
                    }
                  >
                    <UncontrolledTooltip placement="left-start" target="eyebtn">
                      {EyeExplainer}
                    </UncontrolledTooltip>
                    <Eye
                      className="align-top"
                      size={23}
                      color="white"
                      id="eyebtn"
                      style={{ outline: "none" }}
                    />
                  </button>
                  <button
                    style={{
                      position: "absolute",

                      cursor: "pointer",
                      color: "#0ca8fd",
                      border: "none",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      outline: "none",

                      paddingRight: "15px",
                      position: "absolute",
                      right: "5rem",
                      cursor: "pointer",
                      color: "#0ca8fd",
                      paddingLeft: "15px",
                      borderLeft: "2px solid white",
                    }}
                  >
                    <UncontrolledTooltip
                      placement="left-start"
                      target="rotatebtn"
                    >
                      {ReseatEaplainer}
                    </UncontrolledTooltip>
                    <RotateCw
                      style={{ outline: "none" }}
                      color="white"
                      id="rotatebtn"
                      className="align-top"
                      size={23}
                      onClick={resetAll}
                    />
                  </button>

                  <button
                    style={{
                      position: "absolute",

                      cursor: "pointer",
                      color: "#0ca8fd",
                      border: "none",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      outline: "none",

                      paddingRight: "15px",
                      paddingLeft: "15px",

                      position: "absolute",
                      right: "9.5rem",
                      cursor: "pointer",
                      color: "#0ca8fd",
                    }}
                  >
                    <UncontrolledTooltip
                      placement="left-start"
                      target="editbtn"
                    >
                      {EditHotspotExplainer}
                    </UncontrolledTooltip>
                    <Edit
                      style={{ outline: "none" }}
                      color="white"
                      id="editbtn"
                      className="align-top"
                      size={23}
                      onClick={() => {
                        history.push(`/EditPictures/${id}`, {
                          product: {
                            id,
                          },
                        });
                      }}
                    />
                  </button>
                </div>
              </div>

              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Tour Tilte</Typography>
                <Typography className={classes.secondaryHeading}>
                  Change Tour Title
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* <Col>
                  <FormGroup className="has-icon-left form-label-group position-relative">
                    <Input
                      name="title"
                      id="nameFloatingIcons"
                      placeholder="360 tour title"
                      value={title}
                      onChange={(e) => settitle(e.target.value)}
                      // value={formikProps.values.title}
                      // onChange={formikProps.handleChange("title")}
                      // onBlur={formikProps.handleBlur("title")}
                      className="form-control"
                      style={{ border: "1px solid black" }}
                    />
                    <div className="form-control-position">
                      <Type size={20} style={{ color: "#0ca8fd" }} />
                    </div>

                    <Label for="title">Title</Label>
                  </FormGroup>
                </Col> */}
              </AccordionDetails>
            </Accordion>
            {/* description */}
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  Tour Title and Description
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Change Tour Title and Description
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row className="mb-2">
                    <Col>
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Input
                          name="title"
                          id="nameFloatingIcons"
                          placeholder="360 tour title"
                          value={title}
                          maxlength="22"
                          onChange={(e) => settitle(e.target.value)}
                          // value={formikProps.values.title}
                          // onChange={formikProps.handleChange("title")}
                          // onBlur={formikProps.handleBlur("title")}
                          className="form-control"
                          style={{ border: "1px solid black" }}
                        />
                        <div className="form-control-position">
                          <Type size={20} style={{ color: "#0ca8fd" }} />
                        </div>

                        <Label for="title">Tour Title</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Input
                          name="title"
                          type="textarea"
                          rows="3"
                          id="nameFloatingIcons"
                          maxlength="170"
                          placeholder="360 tour title"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          // value={formikProps.values.title}
                          // onChange={formikProps.handleChange("title")}
                          // onBlur={formikProps.handleBlur("title")}
                          className="form-control"
                          style={{ border: "1px solid black" }}
                        />
                        <div className="form-control-position">
                          <Type size={20} style={{ color: "#0ca8fd" }} />
                        </div>

                        <Label for="title">Tour Description</Label>
                      </FormGroup>
                    </Col>
                  </Row>

                  <hr />
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Start description opened
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={openDescription}
                          // onChange={check}
                          onChange={(event) =>
                            setOpenDescription(event.target.checked)
                          }
                          icon={<BookOpen className="vx-icon" size={16} />}
                          label="Start description opened"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          2- Design and settings
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={openDescriptionEdit}
                          // onChange={check}
                          onChange={(event) =>
                            setOpenDescriptionEdit(event.target.checked)
                          }
                          icon={<BookOpen className="vx-icon" size={16} />}
                          label="Show me the description cards and settings "
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* featured image */}
            <Accordion
              expanded={expanded === "panela20"}
              onChange={handleChange("panela20")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                {console.log(mainFeaturedImge)}
                <Typography className={classes.heading}>
                  Tour featured image
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Change Tour featured image
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row className="mb-2">
                    <Col>
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        {/* <div style={{
                            backgroundImage: `url(${
                              mainFeaturedImge != null && mainFeaturedImge
                                ? mainFeaturedImge.uploadInfo.url
                                : imga
                            })`,
                          }}> </div> */}

                        <img
                          src={featuredImage1}
                          style={{
                            height: "450px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        ></img>

                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: "11111111",
                          }}
                        >
                          <Button.Ripple
                            className="mr-1 mb-1 bg-gradient-primary"
                            color="none"
                            size="lg"
                            onClick={openWidget}
                          >
                            <span
                              style={{
                                whiteSpace: "nowrap",
                                textTransform: "uppercase",
                              }}
                            >
                              change featured image{" "}
                              <Upload size={20} className="ml-1" />
                            </span>
                          </Button.Ripple>
                          {/* <img src={featuredImage1} style={{height:'450px',width:"100%", objectFit:'cover'}}></img>  */}
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            opacity: "0.5",
                          }}
                        ></div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* end featured image */}
            {/* map view */}
            <Accordion
              expanded={expanded === "panela23"}
              // onChange={handleChange("panela23")}
              onChange={handleChangeMapView}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  Tour Place location
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Change Tour loaction
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row className="mb-2">
                    <Col>
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <div
                          id="edit-map"
                          style={{ height: "450px", width: "100%" }}
                        >
                          {placeLocation ? (
                            <MyGoogleMap
                              isMarkerShown={true}
                              zoom={10}
                              defaultCenter={placeLocation}
                              getMapInfo={getPlaceLocationFromMap}
                              // setMap={setPlaceMap}
                            ></MyGoogleMap>
                          ) : (
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              }}
                            >
                              <ClassicSpinner color="#888" size={40} />
                            </div>
                          )}
                        </div>

                        {/* <div 
                          style={{
                            position:'absolute', 
                            top:'5px', 
                            left : '50%', 
                            transform:'translate(-50%, 0)', 
                            zIndex:'1'
                          }}
                        >                          
                          <input 
                            style={{whiteSpace:'nowrap'}}
                            placeholder={'change featured image'}
                          >
                           
                          </input>   
                        </div> */}
                        {/* <div style={{width:'100%', height:'100%', backgroundColor:'black', position:'absolute', top:'0px', left:'0px', opacity:'0.5'}}> */}
                        {/* </div> */}
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* end map view */}
            {/* password */}
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                  Tour Password
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Protect your Tour with password
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable password for the virtual tour
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={havePassword}
                          onChange={(event) =>
                            sethavePassword(event.target.checked)
                          }
                          icon={<Lock className="vx-icon" size={16} />}
                          label="Password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {havePassword ? (
                    <>
                      <Row>
                        <Col className="mt-1">
                          <FormGroup className="has-icon-left form-label-group position-relative">
                            <Input
                              name="title"
                              id="nameFloatingIcons"
                              placeholder="360 tour title"
                              value={passwordo}
                              onChange={(e) => setpasswordo(e.target.value)}
                              // value={formikProps.values.title}
                              // onChange={formikProps.handleChange("title")}
                              // onBlur={formikProps.handleBlur("title")}
                              className="form-control"
                              style={{ border: "1px solid black" }}
                            />
                            <div className="form-control-position">
                              <Lock size={20} style={{ color: "#0ca8fd" }} />
                            </div>

                            <Label for="title">Password</Label>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row style={{ display: "inline-block" }}>
                        <Col>
                          <FormGroup>
                            <Label for="customFile" className="mb-1">
                              2- Design and settings
                            </Label>
                            <Checkbox
                              color="primary"
                              type="checkbox"
                              checked={showpasswordDesign}
                              onChange={(event) =>
                                setShowpasswordDesign(event.target.checked)
                              }
                              icon={<Lock className="vx-icon" size={16} />}
                              label="Show me Password card"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    ""
                  )}
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* publish */}
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Tour Publish
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Make my tour publish for extrnal use
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <Label for="customFile" className="mb-1">
                    Make my tour publish for extrnal use
                  </Label>
                  <Checkbox
                    color="primary"
                    type="checkbox"
                    checked={publish}
                    onChange={(event) => setPublish(event.target.checked)}
                    icon={<UploadCloud className="vx-icon" size={16} />}
                    label="Publish"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
            {/* tour rotation */}
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Tour auto rotation
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Enable or disable autorotation
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={rotation}
                          onChange={(event) => {
                            return (
                              setRotation(event.target.checked),
                              setRotatioTest(event.target.checked)
                            );
                          }}
                          icon={<RotateCw className="vx-icon" size={16} />}
                          label="Enable autorotation"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {rotation ? (
                    <>
                      <Row>
                        <Col>
                          <div className={classes.root1}>
                            <Slider
                              className="mt-2"
                              style={{ color: "#0ca8fd", height: "5px" }}
                              track="false"
                              color="secondary"
                              defaultValue={30}
                              getAriaValueText={valuetext}
                              aria-labelledby="discrete-slider"
                              valueLabelDisplay="auto"
                              step={10000}
                              marks
                              min={500}
                              max={70000}
                              valueLabelDisplay="on"
                              value={rotationSpeed}
                              onChange={handleChangeSlider}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Typography id="continuous-slider" gutterBottom>
                              2- Enable loop for your Tour rotation
                            </Typography>
                            <Checkbox
                              color="primary"
                              type="checkbox"
                              checked={loop}
                              onChange={(event) =>
                                setLoop(event.target.checked)
                              }
                              icon={<RotateCw className="vx-icon" size={16} />}
                              label="Enable Loop"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    ""
                  )}
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* tour zoom */}
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Tour zoom</Typography>
                <Typography className={classes.secondaryHeading}>
                  Change the zoom of the Tour
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row>
                    <Col>
                      <div className={classes.root1}>
                        <Label for="customFile" className="mb-3 mt-1">
                          1- Change tour zoom
                        </Label>
                        <Slider
                          className=" mt-2"
                          style={{ color: "#0ca8fd", height: "5px" }}
                          track="false"
                          color="secondary"
                          defaultValue={1}
                          getAriaValueText={valuetext}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={0.1}
                          valueLabelDisplay="on"
                          marks
                          min={0}
                          max={2}
                          value={zoom}
                          onChange={handleChangeZoom}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* start tour with pause and other settings */}
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={
                  <ChevronDown style={{ color: "#0ca8fd" }} size={25} />
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Tour start</Typography>
                <Typography className={classes.secondaryHeading}>
                  Settings for the tour start up
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable start up with Play button
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={pause}
                          // onChange={(event) => setPause(event.target.checked)}
                          onChange={(event) => {
                            return (
                              setPause(event.target.checked),
                              setPauseTest(event.target.checked)
                            );
                          }}
                          icon={<PlayCircle className="vx-icon" size={16} />}
                          label="Enable Play button on start up"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {pause ? (
                    <>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="customFile" className="mb-1">
                              2- Design and settings
                            </Label>
                            <Checkbox
                              color="primary"
                              type="checkbox"
                              checked={pauseTest}
                              onChange={(event) =>
                                setPauseTest(event.target.checked)
                              }
                              icon={
                                <PlayCircle className="vx-icon" size={16} />
                              }
                              label="Show me the design and setting for start up"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {pauseTest ? (
                        <>
                          {" "}
                          <Row>
                            <Col>
                              <div className={classes.opacitySlider}>
                                <Label for="customFile" className="mb-2 mt-2">
                                  3- Change overLay opacity
                                </Label>
                                <Slider
                                  className=" mt-2"
                                  style={{ color: "#0ca8fd", height: "5px" }}
                                  track="normal"
                                  color="secondary"
                                  // defaultValue={pauseOpacity}
                                  getAriaValueText={valuetext}
                                  aria-labelledby="discrete-slider"
                                  valueLabelDisplay="auto"
                                  step={0.1}
                                  marks
                                  min={0}
                                  max={1}
                                  valueLabelDisplay="on"
                                  value={pauseOpacity}
                                  onChange={handleOpacityStart}
                                />
                              </div>
                            </Col>
                          </Row>
                          {/* <Row>
                            <Col>
                              <FormGroup>
                                <Label for="wow" className="mb-2" >
                                  4- Show Featured image in the start
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={showImageFeaturedInPause}
                             
                                  onChange={(event) => {
                                    return (
                                      setShowImageFeaturedInPause(event.target.checked),
                                      setparams({...params, activeSlideKey:"0"})
                                    );
                                  }}
 
                                  icon={<Image className="vx-icon" size={16}  />}
                                  label="Show Featured image in the start" 
                                />
                                
                             
                              </FormGroup>
                            </Col>
                          </Row> */}
                          <Row className="mt-2">
                            <Col>
                              <FormGroup>
                                <FormControl className={classes.formControl2}>
                                  <Label for="customFile" className="mb-2 mt-2">
                                    5 - start button design
                                  </Label>
                                  <Select
                                    className={classes.select}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={playicon}
                                    onChange={handelPlayIcon}
                                  >
                                    <MenuItem value={PlayButton0}>
                                      Design 1
                                    </MenuItem>
                                    <MenuItem value={PlayButton1}>
                                      Design 2
                                    </MenuItem>
                                    <MenuItem value={PlayButton2}>
                                      Design 3
                                    </MenuItem>
                                    {/* <MenuItem value="alternate">Alternate</MenuItem> */}
                                  </Select>
                                </FormControl>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label for="customFile" className="mb-2">
                                  6 - Display Tour title on start up
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={disTourTitle}
                                  onChange={(event) => {
                                    return (
                                      setDisTourTitle(event.target.checked),
                                      setparams({
                                        ...params,
                                        activeSlideKey: "0",
                                      })
                                    );
                                  }}
                                  icon={<Type className="vx-icon" size={16} />}
                                  label="Display tour title"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          {disTourTitle ? (
                            <>
                              <Row>
                                <Col>
                                  <FormGroup>
                                    <FormControl
                                      className={classes.formControl2}
                                    >
                                      <Label for="customFile" className="mb-1">
                                        a - Title shadow design
                                      </Label>

                                      <Select
                                        className={classes.select}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={cssTourTitle}
                                        onChange={handelTourTitle}
                                      >
                                        <MenuItem value={"tourShadow"}>
                                          Style1
                                        </MenuItem>
                                        <MenuItem value={"tour-title"}>
                                          Style2
                                        </MenuItem>
                                        {/* <MenuItem value="alternate">Alternate</MenuItem> */}
                                      </Select>
                                    </FormControl>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </>
                          ) : (
                            ""
                          )}
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label for="customFile" className="mb-2">
                                  7 - Display Tour description
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={DisplayTourDescription}
                                  onChange={(event) => {
                                    return (
                                      setDisplayTourDescription(
                                        event.target.checked
                                      ),
                                      setparams({
                                        ...params,
                                        activeSlideKey: "1",
                                      })
                                    );
                                  }}
                                  icon={<Type className="vx-icon" size={16} />}
                                  label="Display Tour description"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          {/* enable social */}
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label for="customFile" className="mb-2">
                                  8 - Enable Underline Desing
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={EnableLine}
                                  onChange={(event) => {
                                    return (
                                      setEnableLine(event.target.checked),
                                      setparams({
                                        ...params,
                                        activeSlideKey: "1",
                                      })
                                    );
                                  }}
                                  icon={
                                    <Underline className="vx-icon" size={16} />
                                  }
                                  label="Display underline"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          {EnableLine ? (
                            <Row>
                              <Col>
                                <FormGroup>
                                  <FormControl className={classes.formControl2}>
                                    {/* <InputLabel
                                id="demo-simple-select-label"
                                style={{ color: "black" }}
                              >
                                start button design
                              </InputLabel> */}
                                    <Label
                                      for="customFile"
                                      className="mb-2 mt-2"
                                    >
                                      a - Choose underline design
                                    </Label>
                                    <Select
                                      className={classes.select}
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={LineTitle}
                                      onChange={handelLineTitle}
                                    >
                                      <MenuItem value={Line1}>
                                        Design 1
                                      </MenuItem>
                                      <MenuItem value={Line2}>
                                        Design 2
                                      </MenuItem>
                                      {/* <MenuItem value="alternate">Alternate</MenuItem> */}
                                    </Select>
                                  </FormControl>
                                </FormGroup>
                              </Col>
                            </Row>
                          ) : (
                            ""
                          )}
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label for="customFile" className="mb-2">
                                  9 - Display user image on start up of the tour{" "}
                                  <Link
                                    onClick={() => history.push("/myacount#")}
                                    style={{
                                      paddingLeft: "5px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={ShowImageOnstart}
                                  onChange={(event) => {
                                    return (
                                      setShowImageOnstart(event.target.checked),
                                      setparams({
                                        ...params,
                                        activeSlideKey: "2",
                                      })
                                    );
                                  }}
                                  icon={
                                    <Camera className="vx-icon" size={16} />
                                  }
                                  label="Display user image "
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          {/* enable credit */}
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label for="customFile" className="mb-2">
                                  10 - Show Credit of your name in the start of
                                  the tour{" "}
                                  <Link
                                    onClick={() => history.push("/myacount#")}
                                    style={{
                                      paddingLeft: "5px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={EnableCredit}
                                  onChange={(event) => {
                                    return (
                                      setEnableCredit(event.target.checked),
                                      setparams({
                                        ...params,
                                        activeSlideKey: "2",
                                      })
                                    );
                                  }}
                                  icon={
                                    <Share2 className="vx-icon" size={16} />
                                  }
                                  label="Show Credit of your name in the start"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          {/* end enable credit */}
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label for="customFile" className="mb-2">
                                  11 - Display yor Bio, click here to update
                                  your Bio{" "}
                                  <Link
                                    onClick={() => history.push("/myacount#")}
                                    style={{
                                      paddingLeft: "5px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={DisplayBio}
                                  onChange={(event) => {
                                    return (
                                      setDisplayBio(event.target.checked),
                                      setparams({
                                        ...params,
                                        activeSlideKey: "2",
                                      })
                                    );
                                  }}
                                  icon={<Type className="vx-icon" size={16} />}
                                  label="Display Bio"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label for="customFile" className="mb-2">
                                  12 - Show Social buttons on start, click here
                                  to update your social{" "}
                                  <Link
                                    onClick={() => history.push("/myacount#")}
                                    style={{
                                      paddingLeft: "5px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Label>
                                <Checkbox
                                  color="primary"
                                  type="checkbox"
                                  checked={EnableSocial}
                                  onChange={(event) => {
                                    return (
                                      setEnableSocial(event.target.checked),
                                      setparams({
                                        ...params,
                                        activeSlideKey: "2",
                                      })
                                    );
                                  }}
                                  icon={
                                    <Share2 className="vx-icon" size={16} />
                                  }
                                  label="Show Social buttons on start"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          {/* end enable socila */}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </Container>
              </AccordionDetails>
            </Accordion>

            {/* carousel */}
            {image.length > 1 ? (
              <>
                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography className={classes.heading}>
                      Carousel design
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      Change the design of your carousel
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Container>
                      {/* <Row>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Start opend
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={openCarousel}
                          // onChange={(event) => {
                          //   return setopenCarousel(event.target.checked);
                          // }}
                          onChange={(event) => {
                            return setopenCarousel(event.target.checked);
                          }}
                          icon={<ChevronDown className="vx-icon" size={16} />}
                          label="Start the tour with open carousel"
                        />
                      </FormGroup>
                    </Col>
                  </Row> */}

                      <>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="customFile" className="mb-1">
                                1- Design and settings
                              </Label>
                              <Checkbox
                                color="primary"
                                type="checkbox"
                                checked={openCarouselTest}
                                onChange={(event) => {
                                  return setopenCarouselTest(
                                    event.target.checked
                                  );
                                }}
                                icon={
                                  <ChevronDown className="vx-icon" size={16} />
                                }
                                label="Show me carousel design and settings"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <FormGroup>
                              <FormControl className={classes.formControl2}>
                                <Label for="customFile">
                                  2- Carousel color
                                </Label>
                                <Select
                                  className={classes.select}
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={carouselDesing}
                                  onChange={handelCarouselDesign}
                                >
                                  <MenuItem value={"designcarousel1"}>
                                    Light
                                  </MenuItem>
                                  <MenuItem value={"designcarousel2"}>
                                    Dark
                                  </MenuItem>

                                  {/* <MenuItem value="alternate">Alternate</MenuItem> */}
                                </Select>
                              </FormControl>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="customFile" className="mb-1">
                                3- Display title inside the thumb
                              </Label>
                              <Checkbox
                                color="primary"
                                type="checkbox"
                                checked={displayTitleBesideThumb}
                                onChange={(event) => {
                                  return setDisplayTitleBesideThumb(
                                    event.target.checked
                                  );
                                }}
                                icon={<Type className="vx-icon" size={16} />}
                                label="Display title inside the thumb"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </>
                    </Container>
                  </AccordionDetails>
                </Accordion>
              </>
            ) : (
              ""
            )}
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Transition Effects
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Change the trasition effect to jump other panorama 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="detailColume">
                <div className="line-center">
                  <Typography className="label">Panoramn Transition:</Typography>
                  <NativeSelect
                    className="action-select"
                    value={transitionType.name}
                    IconComponent={ChevronDown}
                    onChange={handleChangeTransitionType}
                    inputProps={{
                      style:{
                        paddingLeft: '5px',
                        borderWidth: 1,
                        borderColor: '#565656',
                        borderStyle: 'solid',
                      }
                    }}
                  >
                    {transitionTypes.map((type) =>
                      <option value={type.name}>{type.name}</option>
                    )}
                  </NativeSelect>
                </div>
                <div className="line-center">
                  <Typography className="label">
                    Duration:
                  </Typography>
                  <NativeSelect
                    className="action-select"
                    value={transitionDuration}
                    IconComponent={ChevronDown}
                    onChange={handleChangeTransitionDuaration}
                    inputProps={{
                      style:{
                        paddingLeft: '5px',
                        borderWidth: 1,
                        borderColor: '#565656',
                        borderStyle: 'solid',
                      }
                    }}
                  >
                    {transitionDurations.map((duration) =>
                      <option value={duration}>{duration}</option>
                    )}
                  </NativeSelect>
                </div> 
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "pane20"}
              onChange={handleChange("pane20")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Enable Gyroscope for mobile
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Works only in mobile/touch devices
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable Gyroscope for mobiles
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableGyro}
                          onChange={(event) =>
                            setEnableGyro(event.target.checked)
                          }
                          icon={<Compass className="vx-icon" size={16} />}
                          label="Gyroscope"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* Enable HD */}
            <Accordion
              expanded={expanded === "pane21"}
              onChange={handleChange("pane21")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Enable HD</Typography>
                <Typography className={classes.secondaryHeading}>
                  Enable HD Button, that will show hight quality.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable HD button
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableHd}
                          onChange={(event) =>
                            setEnableHd(event.target.checked)
                          }
                          icon={<Compass className="vx-icon" size={16} />}
                          label="HD"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* Enable Fullscreen  */}
            <Accordion
              expanded={expanded === "pane22"}
              onChange={handleChange("pane22")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Enable Fullscreen
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Enable Fullscreen Button, that will toggle to fullscreen mode,
                  only for desktop
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable Fullscreen button
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableFullscreen}
                          onChange={(event) =>
                            setEnableFullscreen(event.target.checked)
                          }
                          icon={<Maximize className="vx-icon" size={16} />}
                          label="Fullscreen"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* Enable Like button  */}
            <Accordion
              expanded={expanded === "pane23"}
              onChange={handleChange("pane23")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Enable Like button
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Enable Like button, if the user will be loged in , then he can
                  give like
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable Like button
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableLike}
                          onChange={(event) =>
                            setEnableLike(event.target.checked)
                          }
                          icon={<Heart className="vx-icon" size={16} />}
                          label="Like"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* mp3 music background */}
            <Accordion
              expanded={expanded === "pane24"}
              onChange={handleChange("pane24")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Add music to the background
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Add music to the background, the music will play once the tour
                  start, not includes mobiles
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable background music
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableMusicBackGround}
                          onChange={(event) =>
                            setEnableMusicBackGround(event.target.checked)
                          }
                          icon={<Music className="vx-icon" size={16} />}
                          label="Enable background music "
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {EnableMusicBackGround ? (
                    <>
                      {" "}
                      <Row className="mb-2">
                        <Col>
                          <div
                            style={{
                              width: "100%",
                              height: "300px",
                              border: "1px dashed #0ca8fd",
                              position: "relative",
                              top: "0px",
                              left: "0px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)",
                              }}
                            >
                              <Upload
                                onClick={addMusic}
                                size={30}
                                color="#0ca8fd"
                                style={{ cursor: "pointer" }}
                              />
                            </div>
                            <h5
                              style={{
                                position: "absolute",
                                top: "70%",
                                left: "50%",
                                transform: "translate(-50%,-50%)",
                              }}
                            >
                              Click to change the music
                            </h5>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <div>
                            {console.log(BackgroundMusicTest)}
                            {BackgroundMusicTest && (
                              <ReactAudioPlayer
                                src={BackgroundMusicTest}
                                // volume='1'
                                controls
                                style={{ width: "100%", outline: "none" }}
                              />
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row style={{ display: "inline-block" }}>
                        <Col>
                          <FormGroup>
                            <Label for="customFile" className="mb-1">
                              2- Enable loop music
                            </Label>
                            <Checkbox
                              color="primary"
                              type="checkbox"
                              checked={MusicBackgroundLoop}
                              onChange={(event) =>
                                setMusicBackgroundLoop(event.target.checked)
                              }
                              icon={<Repeat className="vx-icon" size={16} />}
                              label="Enable loop"
                            />
                          </FormGroup>
                        </Col>
                      </Row>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* logo */}
            <Accordion
              expanded={expanded === "panela21"}
              onChange={handleChange("panela21")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                {console.log(mainFeaturedImge)}
                <Typography className={classes.heading}>Tour Logo</Typography>
                <Typography className={classes.secondaryHeading}>
                  Change Tour logo
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Show Tour logo
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableTourLogo}
                          onChange={(event) =>
                            setEnableTourLogo(event.target.checked)
                          }
                          icon={<Image className="vx-icon" size={16} />}
                          label="Enable Tour logo"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {EnableTourLogo ? (
                    <>
                      <Row className="mb-2 mt-2">
                        <Col>
                          <FormGroup className="has-icon-left form-label-group position-relative">
                            {/* <div style={{
                            backgroundImage: `url(${
                              mainFeaturedImge != null && mainFeaturedImge
                                ? mainFeaturedImge.uploadInfo.url
                                : imga
                            })`,
                          }}> </div> */}
                            <div
                              style={{
                                height: "200px",
                                width: "100%",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                              }}
                            >
                              <img
                                src={TourLogoTest}
                                style={{
                                  height: "200px",
                                  width: "100%",
                                  objectFit: "fill",
                                  padding: "1rem",
                                  zIndex: "1",
                                  position: "absolute",
                                }}
                              ></img>

                              <div
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  zIndex: "1",
                                }}
                              >
                                <Button.Ripple
                                  className="mr-1 mb-1 bg-gradient-primary"
                                  color="none"
                                  size="lg"
                                  onClick={addLogo}
                                >
                                  <span
                                    style={{
                                      whiteSpace: "nowrap",
                                      textTransform: "uppercase",
                                    }}
                                  >
                                    change tour logo{" "}
                                    <Upload size={20} className="ml-1" />
                                  </span>
                                </Button.Ripple>
                                {/* <img src={featuredImage1} style={{height:'450px',width:"100%", objectFit:'cover'}}></img>  */}
                              </div>
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  backgroundColor: "black",
                                  position: "absolute",
                                  top: "0px",
                                  left: "0px",
                                  opacity: "0.5",
                                }}
                              ></div>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    ""
                  )}
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* end logo */}
            {/* nadir logo */}
            <Accordion
              expanded={expanded === "panela22"}
              onChange={handleChange("panela22")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                {console.log(mainFeaturedImge)}
                <Typography className={classes.heading}>Nadir Logo</Typography>
                <Typography className={classes.secondaryHeading}>
                  Change nadir logo
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable nadir logo
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableNadir}
                          onChange={(event) =>
                            setEnableNadir(event.target.checked)
                          }
                          icon={<Image className="vx-icon" size={16} />}
                          label="Enable nadir logo"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {EnableNadir ? (
                    <>
                      <Row className="mb-2 mt-2">
                        <Col>
                          <Label for="customFile" className="mb-1">
                            2- Upload nadir logo
                          </Label>
                          <FormGroup className="has-icon-left form-label-group position-relative">
                            {/* <div style={{
                            backgroundImage: `url(${
                              mainFeaturedImge != null && mainFeaturedImge
                                ? mainFeaturedImge.uploadInfo.url
                                : imga
                            })`,
                          }}> </div> */}
                            <div
                              style={{
                                height: "200px",
                                width: "100%",
                                position: "relative",
                                top: "0px",
                                left: "0px",
                              }}
                            >
                              <img
                                src={nadirImageTest}
                                style={{
                                  height: "200px",
                                  width: "100%",
                                  objectFit: "fill",
                                  padding: "1rem",
                                  zIndex: "1",
                                  position: "absolute",
                                }}
                              ></img>

                              <div
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  zIndex: "1",
                                  opacity: "1",
                                }}
                              >
                                <Button.Ripple
                                  className="mr-1 mb-1 bg-gradient-primary"
                                  color="none"
                                  size="lg"
                                  onClick={addnadir}
                                >
                                  <span
                                    style={{
                                      whiteSpace: "nowrap",
                                      textTransform: "uppercase",
                                    }}
                                  >
                                    Change nadir{" "}
                                    <Upload size={20} className="ml-1" />
                                  </span>
                                </Button.Ripple>

                                {/* <img src={featuredImage1} style={{height:'450px',width:"100%", objectFit:'cover'}}></img>  */}
                              </div>
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  backgroundColor: "black",
                                  position: "absolute",
                                  top: "0px",
                                  left: "0px",
                                  opacity: "0.5",
                                }}
                              ></div>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label for="customFile" className="mb-1">
                            3- Change nadir opacity
                          </Label>
                          <div className={classes.root1}>
                            <Slider
                              className="mt-2"
                              style={{ color: "#0ca8fd", height: "5px" }}
                              track="false"
                              color="secondary"
                              defaultValue={30}
                              getAriaValueText={valuetext}
                              aria-labelledby="discrete-slider"
                              valueLabelDisplay="auto"
                              step={0.1}
                              marks
                              min={0}
                              max={1}
                              valueLabelDisplay="on"
                              value={nadirOpacity}
                              onChange={handleChangeOpacityNadir}
                            />
                          </div>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    ""
                  )}
                </Container>
              </AccordionDetails>
            </Accordion>
            {/* Enable Share button */}
            <Accordion
              expanded={expanded === "pane25"}
              onChange={handleChange("pane25")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Enable Share button
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Enable Share button, make the unlogged user enable to share
                  the current tour to the social
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable Share button
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={EnableShare}
                          onChange={(event) =>
                            setEnableShare(event.target.checked)
                          }
                          icon={<Share2 className="vx-icon" size={16} />}
                          label="Share"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>

            {/* end nadir logo */}
            {/* spinner design */}
            <Accordion
              expanded={expanded === "pane212"}
              onChange={handleChange("pane212")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Spinner Design
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Choose spinner Design for your tour
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Show spinner design
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={showSpinnerDesign}
                          onChange={(event) =>
                            setShowSpinnerDesign(event.target.checked)
                          }
                          icon={<Target className="vx-icon" size={16} />}
                          label="show spinner"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <FormControl className={classes.formControl2}>
                          {/* <InputLabel
                                id="demo-simple-select-label"
                                style={{ color: "black" }}
                              >
                                start button design
                              </InputLabel> */}
                          <Label for="customFile" className="mb-1">
                            1 - Choose spinner design
                          </Label>
                          <Select
                            className={classes.select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={SpinnerType}
                            onChange={handelSpinner}
                          >
                            {" "}
                            <MenuItem value="ThreeDots">Three-Dots</MenuItem>
                            <MenuItem value="Ball-Triangle">
                              Ball-Triangle
                            </MenuItem>
                            <MenuItem value="Bars">Bars</MenuItem>
                            <MenuItem value="Puff">Puff</MenuItem>
                            <MenuItem value="Hearts">Hearts</MenuItem>
                            <MenuItem value="TailSpin">TailSpin</MenuItem>
                            <MenuItem value="Rings">Rings</MenuItem>
                            <MenuItem value="Oval">Oval</MenuItem>
                            <MenuItem value="Grid">Grid</MenuItem>
                            <MenuItem value="Circles">Circles</MenuItem>
                            <MenuItem value="Audio">Audio</MenuItem>
                            {/* <MenuItem value="alternate">Alternate</MenuItem> */}
                          </Select>
                        </FormControl>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>
                      <Label for="customFile" className="mb-3 mt-3">
                        1 - Change text for spinner
                      </Label>
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Label for="customFile" className="mb-3">
                          2 - Change text for spinner
                        </Label>
                        <Input
                          name="title"
                          id="nameFloatingIcons"
                          placeholder="360 tour title"
                          value={SpinnerText}
                          maxlength="22"
                          onChange={(e) => setSpinnerText(e.target.value)}
                          // value={formikProps.values.title}
                          // onChange={formikProps.handleChange("title")}
                          // onBlur={formikProps.handleBlur("title")}
                          className="form-control"
                          style={{ border: "1px solid black" }}
                        />
                        <div className="form-control-position">
                          <Type size={20} style={{ color: "#0ca8fd" }} />
                        </div>

                        <Label for="title">Text for spinner</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>

            {/* end spinner design */}

            {/* start story */}
            <Accordion
              expanded={expanded === "panela2001"}
              onChange={handleChange("panela2001")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                {console.log(mainFeaturedImge)}
                <Typography className={classes.heading}>
                  Story images with parallax effect
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Build story images for your tour, using Parallax effect
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Use image gallery for your tour
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={enableImageGallery}
                          onChange={(event) =>
                            setEnableImageGallery(event.target.checked)
                          }
                          onChange={(event) => {
                            return (
                              setEnableImageGallery(event.target.checked),
                              setShowmeImageGallery(event.target.checked)
                            );
                          }}
                          icon={<Image className="vx-icon" size={16} />}
                          label="Use image gallery"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {enableImageGallery ? (
                    <>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="customFile" className="mb-1">
                              2- show me image gallery design
                            </Label>
                            <Checkbox
                              color="primary"
                              type="checkbox"
                              checked={showmeImageGallery}
                              onChange={(event) =>
                                setShowmeImageGallery(event.target.checked)
                              }
                              icon={<Image className="vx-icon" size={16} />}
                              label="Show me gallery"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {enableImageGallery ? (
                        <>
                          <Row className="mb-2">
                            <Col>
                              <Label for="customFile" className="mb-3">
                                3 - Add image gallery to your tour
                              </Label>
                              <FormGroup className="has-icon-left form-label-group position-relative">
                                {console.log(storyImages.length)}
                                {storyImages.length > 0 ? (
                                  <>
                                    {
                                      <Swiper {...paramsImageStory}>
                                        {storyImages &&
                                          storyImages.map((item, index) => {
                                            return (
                                              <div>
                                                <img
                                                  src={item.secure_url}
                                                  style={{
                                                    height: "400px",
                                                    objectFit: "cover",
                                                  }}
                                                />
                                                <div
                                                  style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundColor: "black",
                                                    position: "absolute",
                                                    top: "0px",
                                                    left: "0px",
                                                    opacity: "0.6",
                                                  }}
                                                />
                                                <h1 className="indexStory">
                                                  {index + 1}
                                                </h1>
                                                {console.log(storyTitles)}

                                                <div className="x">
                                                  <Col md={6} sm={12}>
                                                    <ButtonGroup className="mb-1">
                                                      <Button
                                                        color="primary"
                                                        onClick={addStoryImages}
                                                      >
                                                        <Upload size={15} />
                                                      </Button>
                                                      <Button
                                                        color="danger"
                                                        onClick={() => {
                                                          storyImages.splice(
                                                            index,
                                                            1
                                                          );
                                                          storyTitles.splice(
                                                            index,
                                                            1
                                                          );
                                                          storyDescription.splice(
                                                            index,
                                                            1
                                                          );

                                                          handelSubmit();
                                                        }}
                                                      >
                                                        <X size={15} />
                                                      </Button>
                                                    </ButtonGroup>
                                                  </Col>
                                                  {/* <X size={30} color="white"onClick={() => {
                                    storyImages.splice(
                                    index,
                                    1
                                  );
                                    storyTitles.splice(
                                      index,
                                      1
                                    );
                                    storyDescription.splice(
                                      index,
                                      1
                                    );
                          
                          handelSubmit();

                        }} /> */}
                                                </div>

                                                <div>
                                                  <div
                                                    style={{
                                                      position: "absolute",
                                                      top: "50%",
                                                      left: "50%",
                                                      transform:
                                                        "translate(-50%,-50%)",
                                                    }}
                                                  >
                                                    <Row className="mt-4">
                                                      <Col>
                                                        <FormGroup className="has-icon-left form-label-group position-relative">
                                                          <Input
                                                            name="title"
                                                            type="text"
                                                            id="imageTitleInput"
                                                            defaultValue={
                                                              storyTitles[index]
                                                            }
                                                            placeholder="Image title"
                                                            onChange={handleChangeStoryTitle(
                                                              index
                                                            )}
                                                            className="form-control"
                                                            style={{
                                                              border:
                                                                "1px solid black",
                                                            }}
                                                            // maxLength={TOOLTIP_MAX_LENGTH}
                                                          />
                                                          <div className="form-control-position">
                                                            <Type
                                                              size={20}
                                                              style={{
                                                                color:
                                                                  "#0ca8fd",
                                                              }}
                                                            />
                                                          </div>

                                                          <Label for="title">
                                                            Image Title
                                                          </Label>
                                                        </FormGroup>
                                                      </Col>
                                                    </Row>
                                                    <Row className="mt-2">
                                                      <Col>
                                                        <FormGroup className="has-icon-left form-label-group position-relative">
                                                          <Input
                                                            name="title"
                                                            type="textarea"
                                                            rows="3"
                                                            id="nameFloatingIcons"
                                                            maxlength="600"
                                                            placeholder="Image Description"
                                                            defaultValue={
                                                              storyDescription[
                                                                index
                                                              ]
                                                            }
                                                            onChange={handleChangeStoryDescription(
                                                              index
                                                            )}
                                                            className="form-control"
                                                            style={{
                                                              border:
                                                                "1px solid black",
                                                            }}
                                                            // maxLength={TOOLTIP_MAX_LENGTH}
                                                          />
                                                          <div className="form-control-position">
                                                            <Type
                                                              size={20}
                                                              style={{
                                                                color:
                                                                  "#0ca8fd",
                                                              }}
                                                            />
                                                          </div>

                                                          <Label for="title">
                                                            Image Description
                                                          </Label>
                                                        </FormGroup>
                                                      </Col>
                                                    </Row>
                                                  </div>
                                                </div>
                                              </div>
                                            );
                                          })}
                                      </Swiper>
                                    }
                                  </>
                                ) : (
                                  <>
                                    <div
                                      style={{
                                        height: "200px",
                                        width: "100%",
                                        position: "relative",
                                        top: "0px",
                                        left: "0px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%, -50%)",
                                          zIndex: "111111111111111111",
                                        }}
                                      >
                                        <Button.Ripple
                                          className="mr-1 mb-1"
                                          color="white"
                                          size="lg"
                                          onClick={addStoryImages}
                                          outline
                                        >
                                          <span
                                            style={{
                                              whiteSpace: "nowrap",
                                              textTransform: "uppercase",
                                            }}
                                          >
                                            UPLOAD IMAGES{" "}
                                            <Upload
                                              size={20}
                                              className="ml-1"
                                            />
                                          </span>
                                        </Button.Ripple>
                                        {/* <img src={featuredImage1} style={{height:'450px',width:"100%", objectFit:'cover'}}></img>  */}
                                      </div>
                                      <div
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          backgroundColor: "#0ca8fd",
                                          position: "absolute",
                                          top: "0px",
                                          left: "0px",
                                          opacity: "1",
                                        }}
                                      ></div>
                                    </div>
                                  </>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </Container>
              </AccordionDetails>
            </Accordion>

            {/* end story image */}
            <Accordion
              expanded={expanded === "pane2115"}
              onChange={handleChange("pane2115")}
            >
              <AccordionSummary
                expandIcon={<ChevronDown style={{ color: "#0ca8fd" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Enable Related Tours
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Enable Related Tours from your tours
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Container>
                  <Row style={{ display: "inline-block" }}>
                    <Col>
                      <FormGroup>
                        <Label for="customFile" className="mb-1">
                          1- Enable related tours
                        </Label>
                        <Checkbox
                          color="primary"
                          type="checkbox"
                          checked={enableRelated}
                          onChange={(event) =>
                            setEnableRelated(event.target.checked)
                          }
                          icon={<Link className="vx-icon" size={16} />}
                          label="Enable related tours"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
              </AccordionDetails>
            </Accordion>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                padding: "40px 20px",
              }}
            >
              <div>
                <button
                  className="mr-1 mb-1 bg-gradient-primary"
                  color="none"
                  style={{
                    width: "90%",
                    border: "none",
                    backgroundColor: "#0ca8fd",
                    color: "white",
                    // position: "sticky",
                    bottom: "0px",
                    padding: "15px 10px",
                    // margin: "20px 0px",
                    zIndex: "4",
                    left: "1rem",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                  onClick={handelSubmit}
                  type="button"
                >
                  SUBMIT
                  {/* <Send size={15} style={{ marginLeft: "10px" }}></Send> */}
                </button>
              </div>
              <div>
                <button
                  className="mr-1 mb-1 bg-gradient-danger"
                  color="none"
                  style={{
                    width: "90%",
                    border: "none",
                    backgroundColor: "#0ca8fd",
                    color: "white",
                    // position: "sticky",
                    bottom: "0px",
                    padding: "15px 10px",
                    // margin: "20px 0px",
                    zIndex: "4",
                    left: "1rem",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                  onClick={resetAll}
                  type="button"
                >
                  Reset
                  {/* <RotateCw size={15} style={{ marginLeft: "10px" }}></RotateCw> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WholePage>
  );
}

const WholePage = styled.div`
  .swiper-pagination-fraction {
    color: white !important;
    font-size: 20px;
    text-align: center;
  }
  .indexStory {
    position: absolute;
    top: 15px;
    left: 15px;
    cursor: pointer;
    z-index: "1111111111111";
    color: white;
    font-size: 14px;
  }
  .x {
    position: absolute;
    top: 18px;
    right: 4px;
    cursor: pointer;
    z-index: "1111111111111";
  }
  .MuiAccordionSummary-root {
    padding: 10px 30px;
  }
  .vx-checkbox-con .vx-checkbox {
    border-color: #0ca8fd;
  }
  .whole-page {
    display: grid;
  }
  .ImageTour {
    height: 100%;
  }
  .Settings {
    padding-top: 0rem;
    /* padding-left: 1.5rem;
    padding-right: 1.5rem; */
    padding-bottom: 0rem;
    position: fixed;
    overflow: scroll;
    /* top: 67px; */
    top: 0px;
    left: 0px;
    height: 100%;
    background-color: #efefef;
    z-index: 5;
  }
  .bread {
    /* -webkit-box-shadow: 1px 12px 5px -7px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 1px 12px 5px -7px rgba(0, 0, 0, 0.05);
    box-shadow: 1px 12px 5px -7px rgba(0, 0, 0, 0.05); */
    position: fixed;

    /* border-radius: 1rem; */
    left: 0px;
    /* top: 10px; */
    top: 0px;
    z-index: 5;
    display: block;
    /* padding: 100px 0px; */

    height: auto;
    /* width: 350px; */
    /* background-color: #ffffff; */
    background-color: #2196f3;
    padding: 1.5rem;
    margin-bottom: 1rem;
    color: white;
    /* border-bottom: 1px solid #d6dce1 !important; */
  }
  .detailColume {
    flex-direction: column;
  }
  .line-center {
    margin: 3px;
    width: 90%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
  }

  ${media.phone`
    .whole-page {
      display: grid;
      grid-template-columns: 1fr;
    }
    .Settings {
      padding-top:80px;
    width:100%;
    }
    .bread {
      width: 100%;

    }
    .ImageTour {
      display:none;

    }
  `}

  ${media.tablet`
    .whole-page {
      display: grid;
      grid-template-columns: 1fr;
    }
    .Settings {
      padding-top:80px;
    width: 100%;
    }
    .bread {
      width: 100%;

    }
    .ImageTour {
      width: 100%;
      display:block;

    }
  `}



  ${media.desktop`
    .whole-page {
      display: grid;
      grid-template-columns: 1fr;
    }
    .Settings {
      padding-top:80px;
      width: 35%;
    }
    .bread {
      width: 35%;

    }
    .ImageTour {
      width:55%;
      display:block;
    }
  `}

  ${media.large`
    .whole-page {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .Settings {
    padding-top:80px;
    width: 35%;
    }
    .bread {
      width: 35%;

    }
    .ImageTour {
      width: 65%;
      display:block;

    }
  `}
`;

const LockPage = styled.div`
  .black-back {
    position: fixed;
    width: 65%;
    right: 0px;
    height: 100%;
    background-color: black;
    z-index: 20;
    opacity: 0.95;
  }
  .black-back-none {
    display: none;
  }
  .lockPage-container {
    background-color: white;
    width: 40%;
    height: 40%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-10%, -50%);
    z-index: 20;
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
const Title = styled.div`
  /* .containers {
    position: fixed;
    padding: 3rem;
    right: 0px;
    top: 52px;
    width: 25%;
    height: 100vh;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
    box-shadow: -5px -3px 5px -4px rgba(0, 0, 0, 0.52);
  } */
  .containers {
    position: absolute;
    display: grid;
    grid-template-columns: 40% 60%;
    /* padding: 3rem; */
    left: 67.5%;
    top: 55%;
    /* top :calc(50% - 60px); */
    transform: translate(-50%, -50%);
    width: 30%;
    height: 40%;
    z-index: 20;
    background-color: white;
    border-radius: 25px;
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
  }

  .descrition {
    color: #787878;
    font-size: 13px;
    position: relative;
    padding: 0rem 5rem;
    text-align: left;
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
    right: 5%;
    top: 5%;
    max-width: 30px;
    max-height: 30px;
    display: block;
    cursor: pointer;
  }

  .title {
    color: #0ca8fd;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    padding: 2rem;
    white-space: nowrap;
    text-transform: uppercase;
  }

  .descrition {
    color: #787878;
    font-size: 13px;
    position: relative;
    padding: 2rem;
    text-align: left;
  }
`;
const Btn = styled.div`
  .tooltip {
    border-bottom: 0px dotted black;
  }
  .container-top-left {
    position: absolute;
    left: 35.5%;
    /* top: 6rem; */
    top: 0.5rem;
    display: grid;
    grid-template-columns: auto auto auto;
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
    margin-left: 8px;
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

  .top-bar {
    position: fixed;
    right: 1rem;
    /* top: 6rem; */
    top: 0.5rem;
    display: grid;
    grid-template-columns: auto auto auto;

    z-index: 1;
    justify-items: end;
  }

  .top-shadow {
    position: fixed;
    /* top: 75px; */
    top: 0px;
    width: 100%;
    height: 60px;
    left: 35%;
    z-index: 4;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,ffffff+100&0.54+0,0+100 */
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+99 */
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0.4+100 */
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0.4+100 */
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#66000000',GradientType=0 ); /* IE6-9 */
  }

  .addImg {
    border: none;
    border-radius: 0px;
    padding: 1rem;
    z-index: 11;
    cursor: pointer;
    background: green;
    font-size: 15px;
    font-weight: bold;
  }
  .sharebtn {
    border: none;
    border-radius: 0px;
    padding: 1rem;
    z-index: 11;
    cursor: pointer;
    background: green;
    font-size: 15px;
    font-weight: bold;
  }
`;

const Tour = styled.div`
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

  .play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    z-index: 10000;
    cursor: pointer;
  }
  .Line {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 30%;

    z-index: 4;
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

    z-index: 1111;
  }

  .tour-title {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
    color: White;
    z-index: 4;
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
    width: 65vw;
    height: 100vh;
    object-fit: cover;
    z-index: 4;
  }
`;

const Circle1 = styled.div`
  .image-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
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
    left: 35%;
    z-index: 2;
    -webkit-box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.05);
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
  .designcarousel1 {
    background-color: rgba(255, 255, 255, 1);
    padding: 0.6rem 0.2rem;
  }
  .designcarousel2 {
    background-color: rgba(0, 0, 0, 1);
    padding: 0.6rem 0.2rem;
  }
  .left-title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 15px;
    transform: translate(-50%, -50%);
    color: white;
    text-transform: uppercase;
  }
  .open-carousel {
    border: none;
    border-radius: 0px;
    padding: 0.3rem;
    z-index: 1;
    cursor: pointer;
    position: fixed;
    bottom: 0px;
    left: 67.5%;
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
    bottom: 115px;
    left: 67.5%;
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
`;
const StartUp = styled.div`
  .swiper-container {
    width: 65%;
    height: 100%;

    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 111;
  }
  .swiper-pagination-bullet {
    background: #0ca8fd !important;
    width: 10px !important;
    height: 10px !important;
  }
`;
