//new one
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Video, Transformation, CloudinaryContext } from "cloudinary-react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Badge from "@material-ui/core/Badge";
import { media } from "../styled";
import { FillSpinner } from "react-spinners-kit"; //spiners
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Label,
  Container,
  Alert,
} from "reactstrap";
import {
  Layers,
  ChevronRight,
  Settings,
  Eye,
  Type,
  RotateCw,
  Edit,
  Plus,
  Image,
  MapPin,
  HelpCircle,
  Mail,
} from "react-feather";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SweetAlert from "react-bootstrap-sweetalert";
import * as THREE from "three";

import FrameSpotsEditor from "../../360/Pages/FrameHotspot";
import { UserContext } from "../context/user";
import { ProductContext } from "../context/products";

import Loading from "../Pages/Loading";
import Rotate from "../Assets/rotate.png";
import RotatNo from "../Assets/rotateNo.png";
import viewportImg from "../Assets/visibility.png";

import "./EditHotSpot.css";
import "../../assets/scss/pages/authentication.scss";

import {
  addPlaceAllSpots,
  clearAllHotSpots,
} from "../../redux/actions/hotspots";
import HotSpotPanel from "./HotSpotPanel";
import {
  widgetOptions,
  filters,
  originalFilters,
  TOOLTIP_MAX_LENGTH,
} from "../utils/Constants";
import { registerSpotEditComponent } from "../utils/editSpotComponent";

registerSpotEditComponent();

export default function ThreeSixtyTour() {
  const dispatch = useDispatch();

  const { user } = React.useContext(UserContext); // we will use it
  const { products } = React.useContext(ProductContext);
  const history = useHistory();
  const { id } = useParams();
  const hotSpots = useSelector((state) => state.hotspots.spots);
  const [SpinnerType, setSpinnerType] = useState();
  const [SpinnerText, setSpinnerText] = useState("");
  const product = products.filter((item) => item.id === id);
  const [title, settitle] = useState(product.map((item) => item.title));
  const [description, setdescription] = useState(
    product.map((item) => item.description)
  );
  const [havePassword, sethavePassword] = useState(
    product.map((item) => item.havePassword)
  );
  const [passwordo, setpasswordo] = useState(
    product.map((item) => item.passwordo)
  );
  const [featuredImage, setFeaturedImage] = useState(
    product.map((item) => item.image)
  );
  const [rotationSpeed, setrotationSpeed] = useState(
    product.map((item) => item.rotationSpeed)
  );

  const [rotation, setRotation] = useState(
    product.map((item) => item.rotation)[0]
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
  const [carouselDesing, setCarouselDesing] = useState(
    product.map((item) => item.carouselDesing)
  );
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
  const [openCarousel, setopenCarousel] = useState(
    product.map((item) => item.openCarousel)
  );
  const [css, setCss] = useState(true);
  const [css1, setCss1] = useState(true);
  const [loading, setLoading] = useState(true); // this will show the loading component
  // const [tourPlaces, setTourPlaces] = useState([]); // this will show all the places we added inside the addthreesixty form
  const [image, setImage] = useState([]); // this we be added with getplaces/ the image we added with addThreeSixty form
  const [error, setError] = useState(false); // this will show the error
  // const [place, setPlace] = useState(""); //this will be added from the addthreesixty form, will take the first place.
  const [delay, setdelay] = useState("1"); // define the delay

  const [fov, setFov] = useState("80"); // deifne filed of view, https://aframe.io/docs/1.0.0/components/camera.html#properties_zoom
  const [startaActivePano, setstartaActivePano] = useState("0"); // define with panorama to start on startup

  // define the icon of play on start

  // opcaticy of the overlay start
  const [spinnerColor, setspinnerColor] = useState("#008000"); // spinner color
  const [spinnerSize, setSpinnerSize] = useState("100"); // spinner size
  const [preloaderIcon, setpreloaderIcon] = useState(
    <FillSpinner color={spinnerColor} size={spinnerSize} />
  ); // choose spinner
  const [nadir, setnadir] = useState(true); // define if we will use nadir .

  // define if the carousel will be opened in the start
  const [openCarouselEdit, setOpenCarouselEdit] = useState(true);
  const [isMobile, setisMobile] = useState(""); // define if the user use mobile or dekstop
  const [userId, setUserId] = useState();
  const [publish, setPublish] = useState();
  const [useit, setUseit] = useState();
  const [EnableLine, setEnableLine] = useState();
  const [EnableSocial, setEnableSocial] = useState();
  const [LineTitle, setLineTitle] = useState("Line1");
  const [placeid, setPlaceid] = useState();
  const [deleteImage, setDeleteImage] = useState(false);
  const [effects, setEffect] = useState([]);
  const [imagePar, setImagePar] = useState("upload/c_limit,w_0.69/");
  const [filterdImage, setFilterdImage] = useState(null);
  const [oldFilterdImage, setOldFilterdImage] = useState(null);
  const [noFilterImage, setNoFilterImage] = useState(null);
  const [activeSide, setActiveSide] = useState("setting"); //default: setting
  const [panoramaId, setPanoramaId] = useState(0);
  const [place, setPlace] = useState(null);
  const [activeSpotId, setActiveSpotId] = useState("");
  const [viewport, setViewport] = useState(true);
  const [EnableGyro, setEnableGyro] = useState();
  const [EnableHd, setEnableHd] = useState();
  const [EnableFullscreen, setEnableFullscreen] = useState();
  const [EnableLike, setEnableLike] = useState();
  const [BackgroundMusic, setBackgroundMusic] = useState();
  const [TourLogo, setTourLogo] = useState([]);
  const [EnableTourLogo, setEnableTourLogo] = useState();
  const [MusicVolume, setMusicVolume] = useState();
  const [MusicBackgroundLoop, setMusicBackgroundLoop] = useState();
  const [EnableMusicBackGround, setEnableMusicBackGround] = useState();
  const [displayTitleBesideThumb, setDisplayTitleBesideThumb] = useState();
  const [EnableCredit, setEnableCredit] = useState();
  const [ShowImageOnstart, setShowImageOnstart] = useState();
  const [nadirImage, setNadirImage] = useState([]);
  const [EnableNadir, setEnableNadir] = useState();
  const [nadirScale, setNadirScale] = useState();
  const [nadirOpacity, setNadirOpacity] = useState();
  const [DisplayTourDescription, setDisplayTourDescription] = useState();
  const [DisplayBio, setDisplayBio] = useState();
  // Image story
  const [storyImages, setStoryImages] = useState([]);
  const [enableImageGallery, setEnableImageGallery] = useState();
  const [storyTitles, setStoryTitles] = useState([]);
  const [storyDescription, setStoryDescription] = useState([]);
  const [enableRelated, setEnableRelated] = useState();
  // Image story
  const [EnableShare, setEnableShare] = useState();
  const [oldHotSpotsCount, setOldHotSpotsCount] = useState(0);
  const [isSubmitModaIOpen, setSubmitModalOpen] = useState(false);
  const [panoramaToJump, setPanoramaToJump] = useState(null);
  const [isDeleteModaIOpen, setDeleteModalOpen] = useState(false);
  const [panoramaToDelete, setPanoramaToDelete] = useState(null);
  const [oldImagePar, setOldImagePar] = useState(null);
  const [placeLocation, setLocation] = useState(null);

  useEffect(() => {
    getPlaces(0);
    // setEffect(filters);
    if (image.length == 1) {
      setDeleteImage(true);
    }
    setDefaultViewport();
    addSpotEventHandler();
  }, []);

  useEffect(() => {
    if (image.length == 1) {
      setDeleteImage(true);
    } else if (image.length > 1) {
      setDeleteImage(false);
    }
  });

  useEffect(() => {
    if (panoramaToJump) {
      handleChangeCarousPanorama(panoramaToJump);
    } else {
      setDefaultViewport();
    }
  }, [viewport, hotSpots, panoramaId]);

  const addSpotEventHandler = () => {
    document.addEventListener("spot-clicked", (evt) => {
      setActiveSpotId(evt.detail.id);
    });
  };

  const setDefaultViewport = () => {
    const curPanorama = hotSpots.find((it) => it.panoramaId === panoramaId);
    if (viewport && curPanorama && curPanorama.viewport) {
      let viewportTimer = 0;
      viewportTimer = setInterval(() => {
        console.log("enter default viewport timer......");
        const cameraEl = document.getElementById("spots-editor-camera");
        const cameraDragEl = document.getElementById("spots-origin-camera");
        if (cameraEl && cameraDragEl && cameraEl.components["look-controls"]) {
          if (
            cameraEl.components["look-controls"].pitchObject &&
            cameraEl.components["look-controls"].yawObject
          ) {
            const viewport = curPanorama.viewport;
            cameraEl.components["look-controls"].pitchObject.rotation.x =
              viewport.rotateX;
            cameraEl.components["look-controls"].yawObject.rotation.y =
              viewport.rotateY;
            // to calculate the position of spot on drag-drop spot
            cameraDragEl.components["look-controls"].pitchObject.rotation.x =
              viewport.rotateX;
            cameraDragEl.components["look-controls"].yawObject.rotation.y =
              viewport.rotateY;
            clearInterval(viewportTimer);
            viewportTimer = 0;
            setViewport(false);
            console.log("updated default viewport =>", curPanorama, viewport);
          }
        }
      }, 100);
    }
  };
  const handleChangeCurrParonamaTitle = (e) => {
    setFilterdImage({ ...filterdImage, title: e.target.value });
  };
  const handleChangeCurrParonamaDescription = (e) => {
    setFilterdImage({ ...filterdImage, description: e.target.value });
  };

  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => ++value); // update the state to force render
  }
  //---------------------------------------------------
  const forceUpdate = useForceUpdate();

  const openWidget = () => {
    let featuredWidget = window.cloudinary.createUploadWidget(
      widgetOptions,
      (error, result) => {
        if (!error && result && result.event === "success") {
          image.push(result.info);
          updatePlace(placeid, image.length - 1);
          featuredWidget.close();

          forceUpdate();
        } else if (!error && result && result.event === "queues-end") {
          // featuredWidget.close();
          forceUpdate();
        }
      }
    );
    featuredWidget.open();
  };

  const getPlaces = (indexOfImage) => {
    setLoading(true);
    dispatch(clearAllHotSpots());
    axios
      .get(`/api/places/${id}`)
      .then((res) => {
        setPlace(res.data.place);
        setPlaceid(res.data.place.id);
        setPublish(res.data.place.publish);
        setUserId(res.data.place.userId);
        console.log(res.data.place);
        setImage(JSON.parse(res.data.place.imgsData[0]));
        let img = JSON.parse(res.data.place.imgsData[0])[indexOfImage];
        if (img.filters === null || img.filters === undefined) {
          img.filters = originalFilters;
        }
        setFilterdImage(img);
        setOldFilterdImage(img);

        img.originUrl
          ? setNoFilterImage(img.originUrl)
          : setNoFilterImage(img.secure_url);
        if (img.imagePar) {
          setImagePar(img.imagePar);
          setOldImagePar(img.imagePar);
        } else {
          setImagePar("upload/c_limit,w_0.69/");
          setOldImagePar("upload/c_limit,w_0.69/");
        }
        img.filters ? setEffect(img.filters) : setEffect(filters);
        //res.data.place.tourHd == "true" ? setHd(true) : setHd(false);
        settitle(res.data.place.title);
        setFeaturedImage(JSON.parse(res.data.place.image));
        setRotation(res.data.place.rotation);
        setrotationSpeed(res.data.place.rotationSpeed);
        setdescription(res.data.place.description);
        setopenDescription(res.data.place.openDescription);
        setpasswordo(res.data.place.passwordo);
        sethavePassword(res.data.place.havePassword);
        setdirection(res.data.place.direction);
        setLoop(res.data.place.loop);
        setUseit(res.data.place.useit);
        setZoom(res.data.place.zoom);
        setPause(res.data.place.pause);
        setdisTourTitle(res.data.place.disTourTitle);
        setpauseOpacity(res.data.place.pauseOpacity);
        setCssTourTitle(res.data.place.cssTourTitle);
        setCarouselDesing(res.data.place.carouselDesing);
        setshowImageFeaturedInPause(res.data.place.showImageFeaturedInPause);
        setplayicon(res.data.place.playicon);
        setEnableLine(res.data.place.EnableLine);
        setEnableSocial(res.data.place.EnableSocial);
        setLineTitle(res.data.place.LineTitle);
        setEnableGyro(res.data.place.EnableGyro);
        setEnableHd(res.data.place.EnableHd);
        setEnableFullscreen(res.data.place.EnableFullscreen);
        setEnableLike(res.data.place.EnableLike);
        setBackgroundMusic(JSON.parse(res.data.place.BackgroundMusic[0]));
        setMusicBackgroundLoop(res.data.place.MusicBackgroundLoop);
        setEnableMusicBackGround(res.data.place.EnableMusicBackGround);
        setEnableNadir(res.data.place.EnableNadir);
        setNadirScale(res.data.place.nadirScale);
        setNadirOpacity(res.data.place.nadirOpacity);
        setDisplayTourDescription(res.data.place.DisplayTourDescription);
        setDisplayBio(res.data.place.DisplayBio);
        setSpinnerType(res.data.place.SpinnerType);
        setSpinnerText(res.data.place.SpinnerText);
        setEnableImageGallery(res.data.place.enableImageGallery);
        setEnableShare(res.data.place.EnableShare);
        setEnableRelated(res.data.place.enableRelated);
        // tour logo
        if (res.data.place.TourLogo[0] == []) {
          return;
        }

        if (res.data.place.TourLogo[0].length > 2) {
          setTourLogo(JSON.parse(res.data.place.TourLogo[0]));
        }
        // end tour logo
        // tour nadir
        if (res.data.place.nadirImage[0] == []) {
          return;
        }
        if (res.data.place.nadirImage[0].length > 2) {
          setNadirImage(JSON.parse(res.data.place.nadirImage[0]));
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
        // end tour nadir
        // story images

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
        // end story images

        setEnableTourLogo(res.data.place.EnableTourLogo);
        setMusicVolume(res.data.place.MusicVolume);
        // added new
        setDisplayTitleBesideThumb(res.data.place.displayTitleBesideThumb);
        setEnableCredit(res.data.place.EnableCredit);
        setShowImageOnstart(res.data.place.ShowImageOnstart);
        setopenCarousel(res.data.place.openCarousel);
        if (res.data.place.hotSpots && res.data.place.hotSpots.length > 0) {
          const allSpots = JSON.parse(res.data.place.hotSpots[0]);
          dispatch(addPlaceAllSpots(allSpots));

          const currentHotSpotsIndex = allSpots.findIndex(
            (placeSpots) => placeSpots.panoramaId === indexOfImage
          );
          if (currentHotSpotsIndex > -1) {
            setOldHotSpotsCount(
              allSpots[currentHotSpotsIndex].hotSpotsData.length
            );
            allSpots[currentHotSpotsIndex].hotSpotsData.map((spot) => {
              if (spot) spot.actionEditing = false;
            });
          } else {
            setOldHotSpotsCount(0);
          }
        }

        setPanoramaId(indexOfImage);
        setViewport(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePlace = (pid, indexOfImage, clearSpots = false) => {
    const currentHotSpotsIndex = hotSpots.findIndex(
      (placeSpots) => placeSpots.panoramaId === indexOfImage
    );
    if (currentHotSpotsIndex > -1) {
      hotSpots[currentHotSpotsIndex].hotSpotsData.map((spot) => {
        const el = document.getElementById(
          `hotspot-${indexOfImage}-${spot.id}-edit`
        );
        if (el) {
          const position = el.getAttribute("position");
          console.log(
            `hotspot-${indexOfImage}-${spot.id} position => `,
            position
          );
          spot.position.x = position.x;
          spot.position.y = position.y;
          spot.position.z = position.z;
        }
        spot.actionEditing = false;
      });
    }

    let form = new FormData();
    form.append("title", title); // ok
    form.append("description", description); //ok
    form.append("userId", userId); //ok
    form.append("featuredImage", JSON.stringify(featuredImage));
    form.append("havePassword", havePassword); //ok
    form.append("passwordo", passwordo); //ok
    form.append("publish", publish); //ok
    form.append("rotation", rotation); //ok
    form.append("rotationSpeed", rotationSpeed); //ok
    form.append("openDescription", openDescription); //ok
    form.append("loop", loop); //ok
    form.append("direction", direction); //ok
    form.append("zoom", zoom); //ok
    form.append("pause", pause); //ok
    form.append("showImageFeaturedInPause", showImageFeaturedInPause); //ok
    form.append("carouselDesing", carouselDesing);
    form.append("playicon", playicon); //ok
    form.append("disTourTitle", disTourTitle); //ok
    form.append("pauseOpacity", pauseOpacity); //ok
    form.append("cssTourTitle", cssTourTitle); //ok
    form.append("EnableLine", EnableLine); //ok
    form.append("EnableSocial", EnableSocial);
    form.append("LineTitle", LineTitle); //ok
    form.append("EnableGyro", EnableGyro);
    form.append("EnableHd", EnableHd);
    form.append("EnableFullscreen", EnableFullscreen);
    form.append("EnableLike", EnableLike);
    form.append("displayTitleBesideThumb", displayTitleBesideThumb);
    form.append("EnableCredit", EnableCredit);
    form.append("ShowImageOnstart", ShowImageOnstart);
    form.append("openCarousel", openCarousel);
    form.append("imgsData", JSON.stringify(image));
    form.append("BackgroundMusic", JSON.stringify(BackgroundMusic));
    form.append("EnableShare", EnableShare);
    form.append("location", JSON.stringify(placeLocation));
    // tour logo
    form.append("TourLogo", JSON.stringify(TourLogo));
    form.append("EnableTourLogo", EnableTourLogo);
    form.append("MusicVolume", MusicVolume);
    form.append("MusicBackgroundLoop", MusicBackgroundLoop);
    form.append("EnableMusicBackGround", EnableMusicBackGround);
    // tor logo end
    // nadir logo
    form.append("nadirImage", JSON.stringify(nadirImage));
    form.append("EnableNadir", EnableNadir);
    form.append("nadirScale", nadirScale);
    form.append("nadirOpacity", nadirOpacity);
    // nadir logo end
    form.append("DisplayTourDescription", DisplayTourDescription);
    form.append("DisplayBio", DisplayBio);
    form.append("SpinnerType", SpinnerType);
    form.append("SpinnerText", SpinnerText);
    form.append("enableImageGallery", enableImageGallery);
    form.append("enableRelated", enableRelated);
    form.append(
      "StoryImages",
      JSON.stringify({
        images: storyImages,
        titles: storyTitles,
        description: storyDescription,
      })
    );
    form.append("transitionEffect", place.transitionEffect);
    if (clearSpots) {
      const index = hotSpots.findIndex((it) => it.panoramaId === indexOfImage);
      if (index > -1) {
        hotSpots.splice(index, 1);
        form.append("hotSpots", JSON.stringify(hotSpots));
      }
    } else {
      form.append("hotSpots", JSON.stringify(hotSpots));
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .put(`/api/places/${pid}`, form, config)

      .then((res) => {
        console.log(res);
        getPlaces(indexOfImage);
        forceUpdate();
      })
      .catch((error) => console.log(error));
  };
  const handleSaveRotation = (e) => {
    setRotation(!rotation);
  };
  const handleSaveViewPort = (e) => {
    e.preventDefault();
    const cameraEl = document.getElementById("spots-editor-camera");
    if (cameraEl) {
      const rotateX =
        cameraEl.components["look-controls"].pitchObject.rotation.x;
      const rotateY = cameraEl.components["look-controls"].yawObject.rotation.y;

      const index1 = hotSpots.findIndex((it) => it.panoramaId === panoramaId);
      if (index1 >= 0) {
        const panorama = hotSpots[index1];
        const newPanorama = {
          ...panorama,
          viewport: { rotateX: rotateX, rotateY: rotateY },
        };
        hotSpots.splice(index1, 1, newPanorama); // replace
      } else {
        const newPanorama = {
          panoramaId: panoramaId,
          viewport: { rotateX: rotateX, rotateY: rotateY },
          hotSpotsData: [],
        };
        hotSpots.push(newPanorama);
      }
      handleSubmit();
      setViewport(true);
    }
  };

  const handleSubmit = (e) => {
    const indexOfImage = image.findIndex(
      (f) => f.asset_id == filterdImage.asset_id
    );

    if (indexOfImage > -1) {
      image.splice(indexOfImage, 1, filterdImage); // replace current panorama
      updatePlace(placeid, indexOfImage);
    }
  };

  const checkPanoramaChange = (panorama) => (e) => {
    const currentHotSpotsIndex = hotSpots.findIndex(
      (placeSpots) => placeSpots.panoramaId === panoramaId
    );
    if (currentHotSpotsIndex > -1) {
      if (
        oldHotSpotsCount !== hotSpots[currentHotSpotsIndex].hotSpotsData.length
      ) {
        setPanoramaToJump(panorama);
        setSubmitModalOpen(true);
        return;
      }
    }
    if (JSON.stringify(oldImagePar) !== JSON.stringify(imagePar)) {
      setPanoramaToJump(panorama);
      setSubmitModalOpen(true);
      return;
    }
    if (JSON.stringify(oldFilterdImage) !== JSON.stringify(filterdImage)) {
      setPanoramaToJump(panorama);
      setSubmitModalOpen(true);
      return;
    }
    handleChangeCarousPanorama(panorama);
  };
  const handleChangeCarousPanorama = (panorama) => {
    setPanoramaToJump(null);
    setPanoramaId(image.indexOf(panorama));
    setLoading(true);
    setFilterdImage(panorama);
    panorama.filters ? setEffect(panorama.filters) : setEffect(filters);
    getPlaces(image.indexOf(panorama));
    setViewport(true);
    setInterval(() => {
      setLoading(false);
    }, 500);
  };

  const handleResetPanoramaEffectIn = (effects, fil) => (e) => {
    e.preventDefault();

    let reset = [...effects];
    reset.filter((effect) => effect.name == fil.name)[0].value = filters.filter(
      (filter) => filter.name == fil.name
    )[0].value;

    setEffect(reset);
    const newImagePar = imagePar.includes(fil.name)
      ? imagePar.replace(
          imagePar.substring(
            imagePar.indexOf(fil.name),
            imagePar.indexOf("/", imagePar.indexOf(fil.name)) + 1
          ),
          `${fil.name}${fil.value}/`
        )
      : `${imagePar}${fil.name}${fil.value}/`;
    setImagePar(newImagePar);
  };

  const handleResetPanoramaEffectUp = (fil) => (e) => {
    e.preventDefault();
    let resetImgParOil = imagePar;
    imagePar.includes("e_oil_paint:0") &&
      (resetImgParOil = imagePar.replace("/e_oil_paint:0/", "/"));
    imagePar.includes("e_sepia:50") &&
      (resetImgParOil = imagePar.replace("/e_sepia:50/", "/"));
    fil.changed = false;
    const brandNewImage = {
      ...filterdImage,
    };
    brandNewImage.secure_url = noFilterImage.replace(
      //  "upload/c_limit,w_0.69/",
      "upload/",
      resetImgParOil
    );

    brandNewImage.filters = effects;
    brandNewImage.imagePar = imagePar;
    brandNewImage.originUrl = noFilterImage;
    console.log(brandNewImage);

    setFilterdImage(brandNewImage);

    image[
      image.indexOf(image.filter((f) => f.asset_id == filterdImage.asset_id)[0])
    ] = brandNewImage;
  };

  const handleChangeParonamaEffect = (fil) => (e) => {
    e.preventDefault();
    fil.value = e.target.value;
    fil.changed = true;
    const updatedImagePar = imagePar.includes(fil.name)
      ? imagePar.replace(
          imagePar.substring(
            imagePar.indexOf(fil.name),
            imagePar.indexOf("/", imagePar.indexOf(fil.name)) + 1
          ),
          `${fil.name}${fil.value}/`
        )
      : `${imagePar}${fil.name}${fil.value}/`;

    let resetImgParOilPaint = updatedImagePar;
    updatedImagePar.includes("e_oil_paint:0") &&
      (resetImgParOilPaint = updatedImagePar.replace("/e_oil_paint:0/", "/"));
    updatedImagePar.includes("e_sepia:50") &&
      (resetImgParOilPaint = updatedImagePar.replace("/e_sepia:50/", "/"));

    fil.value == filters.filter((filter) => filter.name == fil.name)[0].value
      ? (fil.changed = false)
      : (fil.changed = true);

    const brandNewImage = { ...filterdImage };
    updatedImagePar.includes("e_oil_paint:0") &&
      updatedImagePar.replace("/e_oil_paint:0/", "/");
    updatedImagePar.includes("e_sepia:50") &&
      updatedImagePar.replace("/e_sepia:50/", "/");

    setImagePar(updatedImagePar);
    if (noFilterImage.includes("upload/c_limit,w_0.69/")) {
      brandNewImage.secure_url = noFilterImage.replace(
        "upload/c_limit,w_0.69/",
        resetImgParOilPaint
      );
    } else {
      brandNewImage.secure_url = noFilterImage.replace(
        "upload/",
        resetImgParOilPaint
      );
    }
    brandNewImage.filters = effects;

    brandNewImage.imagePar = updatedImagePar;
    brandNewImage.originUrl = noFilterImage;
    console.log("brandNewImage=>", brandNewImage);

    setFilterdImage(brandNewImage);
    image.splice(panoramaId, 1, brandNewImage);
    // console.log('filterdImage =>', filterdImage);
    // console.log('noFilterImage =>', noFilterImage);
    // console.log('updatedImagePar =>', updatedImagePar);
  };

  const handleResetAllEffects = (e) => {
    e.preventDefault();
    setLoading(true);
    const brandNewImage = { ...filterdImage, title: "", description: "" };
    brandNewImage.secure_url = noFilterImage;
    brandNewImage.filters = filters;
    brandNewImage.imagePar = "upload/c_limit,w_0.69/";
    brandNewImage.originUrl = noFilterImage;

    setEffect(filters);
    setImagePar("upload/c_limit,w_0.69/");
    const index = image.findIndex(
      (it) => it.asset_id === brandNewImage.asset_id
    );
    if (index > -1) {
      setFilterdImage(brandNewImage);
      image.splice(index, 1, brandNewImage);
      // forceUpdate();
      updatePlace(placeid, index);
    }

    setInterval(() => {
      setLoading(false);
    }, 500);
  };

  const handleResetAll = (e) => {
    if (activeSide == "hotspot") {
      updatePlace(placeid, panoramaId, true);
      return;
    }

    const brandNewImage = {
      ...filterdImage,
    };
    brandNewImage.secure_url = noFilterImage;
    brandNewImage.filters = filters;
    brandNewImage.imagePar = "upload/c_limit,w_0.69/";
    brandNewImage.originUrl = noFilterImage;

    console.log(brandNewImage);
    setEffect(filters);
    setImagePar("upload/c_limit,w_0.69/");
    image[
      image.indexOf(
        image.filter((f) => f.asset_id == brandNewImage.asset_id)[0]
      )
    ] = brandNewImage;
    setFilterdImage(brandNewImage);
    console.log(image);
    forceUpdate();
    updatePlace(placeid, panoramaId);
  };
  const onConfirmSubmit = (e) => {
    handleSubmit();
    setSubmitModalOpen(false);
  };
  const onIgoreHotSpotChange = (e) => {
    setSubmitModalOpen(false);
    if (panoramaToJump) handleChangeCarousPanorama(panoramaToJump);
  };
  const handleDeletePanorama = (panorama) => (e) => {
    setPanoramaToDelete(panorama);
    setDeleteModalOpen(true);
  };
  const confirmDeletePanorama = (e) => {
    setDeleteModalOpen(false);
    if (image.length > 1) {
      image.splice(
        image.findIndex((i) => i.asset_id == panoramaToDelete.asset_id),
        1
      );
      setPanoramaToDelete(null);
      updatePlace(placeid, 0);
    } else {
      setDeleteImage(true);
    }
  };
  const cancelDeletePanorama = (e) => {
    setDeleteModalOpen(false);
    setPanoramaToDelete(null);
  };
  if (loading) {
    return <Loading />;
  }

  const rotationSP = (Number(rotationSpeed) * 3).toString();
  const rotationText = () => {
    if (rotation) {
      const curPanorama = hotSpots.find((it) => it.panoramaId === panoramaId);
      if (curPanorama && curPanorama.viewport) {
        const rotationX = THREE.Math.radToDeg(
          curPanorama.viewport.rotateX
        ).toFixed(0);
        const rotationY = THREE.Math.radToDeg(
          curPanorama.viewport.rotateY
        ).toFixed(0);
        const endY = rotationY - 360;
        return `property: rotation; from: ${rotationX} ${rotationY} 0; to: 0 ${endY} 0; loop: ${loop}; dur: ${rotationSP}; dir:${direction}; easing :easeOutBack;`;
      } else {
        return `property: rotation; from: 0 0 0; to: 0 -360 0; loop: ${loop}; dur: ${rotationSP}; dir:${direction}; easing :easeOutBack;`;
      }
    } else return null;
  };

  // console.log( 'image => ', image)
  console.log("imagePar=>", imagePar);
  console.log("filterdImage =>", filterdImage);
  // console.log( 'noFilterImage => ', noFilterImage)
  // console.log( 'panoramaId => ', panoramaId)
  console.log("hotSpots => ", hotSpots);
  // console.log( 'rotation => ', rotation)

  return (
    <>
      <WholePageContainer>
        <div className="all-page">
          <div>
            <RotationBtn>
              <div className="top-bar">
                <>
                  {/* <IconButton
                    aria-label="delete"
                    style={{
                      outline: "none",
                      backgroundColor: "rgba(255,0,0,0.0)",
                      zIndex: "11111",
                    }}
                    onClick={handleSaveRotation}
                  >
                    <img
                      src={rotation ? Rotate : RotatNo}
                      size={25}
                      style={{
                        color: "white",
                        backgroundColor: "rgba(255,0,0,0.0)",
                        width: "27px",
                        height: "25px",
                      }}
                    />
                  </IconButton> */}
                  <IconButton
                    aria-label="delete"
                    style={{
                      outline: "none",
                      backgroundColor: "rgba(255,0,0,0.0)",
                      zIndex: "11111",
                    }}
                    onClick={handleSaveViewPort}
                  >
                    <img
                      src={viewportImg}
                      size={25}
                      style={{
                        color: "white",
                        backgroundColor: "rgba(255,0,0,0.0)",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </IconButton>
                </>
              </div>
            </RotationBtn>
            <DndProvider backend={HTML5Backend}>
              <div className="page-container">
                <LeftSidBar>
                  <div className="leftSide">
                    <div className="side-container">
                      <div className={`sideBar-side `}>
                        {/* upload image sidebar */}
                        <div className="upload-button" onClick={openWidget}>
                          <Plus></Plus>
                        </div>
                        {/* end upload image sidebar */}

                        {/* image setting */}
                        <div
                          className={`${
                            activeSide == "setting" ? "activeSide" : "notActive"
                          }`}
                          onClick={() => {
                            setActiveSide("setting");
                          }}
                        >
                          <Image style={{ color: "white" }}></Image>
                        </div>

                        {/* end image settings */}

                        {/* empty sider bar */}

                        {/* end empty sider bar */}

                        {/* hotstpor sidbar */}

                        <div
                          className={`${
                            activeSide == "hotspot" ? "activeSide" : "notActive"
                          }`}
                          onClick={() => {
                            setActiveSide("hotspot");
                          }}
                        >
                          <MapPin style={{ color: "white" }}></MapPin>
                        </div>

                        {/* end hotstpor sidbar */}

                        {/* help btn */}

                        <div
                          className="upload-button"
                          onClick={() => {
                            history.push("/faq");
                          }}
                        >
                          <HelpCircle></HelpCircle>
                        </div>
                        {/* end help */}

                        {/* contact us  */}

                        <div
                          className="upload-button"
                          onClick={() => {
                            history.push("/contactus");
                          }}
                        >
                          <Mail></Mail>
                        </div>
                        {/* end contact us */}
                      </div>
                      <div className={`sideBar-container`}>
                        <div>
                          <div className="topBar">
                            <Row>
                              <Col className="pl-0 pr-0 mb-1">
                                {/* layer btn */}
                                <div
                                  style={{
                                    display: "inline-block",
                                    marginTop: "15px",
                                  }}
                                >
                                  <Layers
                                    className="align-top"
                                    size={25}
                                    color="white"
                                    style={{
                                      margin: "4px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      history.push("/VirtualTour");
                                    }}
                                  />
                                  <ChevronRight />
                                  {/* chevron end */}
                                  {/* setting start */}
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
                                      right: "7rem",
                                      cursor: "pointer",
                                      color: "#0ca8fd",
                                    }}
                                  >
                                    <Settings
                                      className="align-top"
                                      color="white"
                                      size={20}
                                      onClick={() => {
                                        history.push("/EditTour", {
                                          product: {
                                            id,
                                            title,
                                            description,
                                            havePassword,
                                            image,
                                            userId,
                                            publish,
                                          },
                                        });
                                      }}
                                    />
                                  </button>
                                  {/* setting start */}
                                  {/* eye start */}
                                  <button
                                    style={{
                                      position: "absolute",
                                      right: "0rem",
                                      cursor: "pointer",
                                      color: "#0ca8fd",
                                      border: "none",
                                      backgroundColor: "rgba(0, 0, 0, 0)",
                                      outline: "none",
                                      borderLeft: "2px solid white",
                                      paddingLeft: "15px",
                                    }}
                                    // onClick={() =>
                                    //   window.open(
                                    //     `/places/${id}?back=edit&id=${id}`,
                                    //     "_blank"
                                    //   )
                                    // }
                                    onClick={() =>
                                      history.push(
                                        `/places/${id}?back=edit&id=${id}`
                                      )
                                    }
                                  >
                                    <Eye
                                      className="align-top"
                                      size={20}
                                      color="white"
                                    />
                                  </button>
                                  {/* reset */}
                                  <button
                                    style={{
                                      position: "absolute",
                                      right: "4rem",
                                      cursor: "pointer",
                                      color: "#0ca8fd",
                                      border: "none",
                                      backgroundColor: "rgba(0, 0, 0, 0)",
                                      outline: "none",
                                      borderLeft: "2px solid white",
                                      paddingLeft: "15px",
                                    }}
                                    onClick={handleResetAll}
                                  >
                                    <RotateCw
                                      className="align-top"
                                      size={20}
                                      color="white"
                                    />
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        {activeSide == "setting" && (
                          <div className="panorama-content">
                            {filterdImage && (
                              <div>
                                <div className="panorama-settings">
                                  <div className="p-right-side">
                                    <Container className="mt-5">
                                      <h5
                                        style={{
                                          color: "#0ca8fd",
                                          textTransform: "uppercase",
                                          textAlign: "center",
                                        }}
                                      >
                                        {title}
                                      </h5>
                                      <Row>
                                        <Col>
                                          <h4
                                            style={{
                                              color: "white",
                                              textAlign: "center",
                                              marginBottom: "3rem",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            PANORAMA SETTINGS
                                          </h4>
                                          <div className="mobileMsg">
                                            <Alert color="danger">
                                              <div
                                                className="alert-heading"
                                                style={{
                                                  fontSize: "15px",
                                                  textAlign: "center",
                                                }}
                                              >
                                                Important for mobile user
                                              </div>
                                              <p
                                                style={{
                                                  fontSize: "12px",
                                                  textAlign: "center",
                                                }}
                                              >
                                                For better performance, to add
                                                hotspots, and differnet actions
                                                to your tour, please use Pc
                                              </p>
                                            </Alert>
                                            <h4
                                              style={{
                                                color: "white",
                                                textAlign: "center",
                                                marginBottom: "3rem",
                                                fontWeight: "bold",
                                                color: "red",
                                              }}
                                            ></h4>
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col className="pl-0 pr-0 mb-1">
                                          <FormGroup>
                                            <div>
                                              <img
                                                src={filterdImage.thumbnail_url}
                                                style={{
                                                  width: "100%",
                                                  height: "200px",
                                                  zIndex: "11111111",
                                                }}
                                                alt=""
                                              ></img>

                                              <h6
                                                style={{
                                                  color: "white",
                                                  textAlign: "center",
                                                  marginTop: "10px",
                                                }}
                                              >
                                                {`The tour have totaly ${image.length} images`}
                                              </h6>
                                            </div>
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                      <Row className="pl-0 pr-0 mb-1">
                                        <Col className="pl-0 pr-0 mb-1">
                                          <h6
                                            style={{
                                              color: "white",
                                              textAlign: "left",
                                              marginBottom: "2rem",
                                            }}
                                          >
                                            360 IMAGE TITLE
                                          </h6>
                                          <FormGroup className="has-icon-left form-label-group position-relative">
                                            <Input
                                              name="title"
                                              type="text"
                                              id="imageTitleInput"
                                              value={
                                                filterdImage.title
                                                  ? filterdImage.title
                                                  : ""
                                              }
                                              placeholder="Title..."
                                              onChange={
                                                handleChangeCurrParonamaTitle
                                              }
                                              className="form-control"
                                              style={{
                                                border: "1px solid black",
                                              }}
                                              maxLength={TOOLTIP_MAX_LENGTH}
                                            />
                                            <div className="form-control-position">
                                              <Type
                                                size={20}
                                                style={{ color: "#0ca8fd" }}
                                              />
                                            </div>

                                            <Label for="title">
                                              360 image title
                                            </Label>
                                          </FormGroup>
                                        </Col>
                                      </Row>

                                      <Row>
                                        <Col className="pl-0 pr-0 mb-1">
                                          <h6
                                            style={{
                                              color: "white",
                                              textAlign: "left",
                                              marginBottom: "2rem",
                                            }}
                                          >
                                            360 IMAGE DESCRIPTION
                                          </h6>
                                          <FormGroup className="has-icon-left form-label-group position-relative">
                                            <Input
                                              type="textarea"
                                              rows="3"
                                              id="imageDescriptionInput"
                                              placeholder="360 tour title"
                                              name="description"
                                              value={
                                                filterdImage.description
                                                  ? filterdImage.description
                                                  : ""
                                              }
                                              placeholder="desctiption..."
                                              onChange={
                                                handleChangeCurrParonamaDescription
                                              }
                                              className="form-control"
                                              style={{
                                                border: "1px solid black",
                                              }}
                                            />
                                            <div className="form-control-position">
                                              <Type
                                                size={20}
                                                style={{ color: "#0ca8fd" }}
                                              />
                                            </div>

                                            <Label for="title">
                                              {" "}
                                              360 image descriptiopn
                                            </Label>
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                    </Container>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="panorama-effetcs">
                              <Row>
                                <Col>
                                  <h4
                                    style={{
                                      color: "white",
                                      textAlign: "center",
                                      marginBottom: "3rem",
                                    }}
                                  >
                                    PANORAMA EFFECTS
                                  </h4>
                                  <h6
                                    style={{
                                      fontSize: "13px",
                                      textAlign: "center",
                                      color: "#8d8d8d",
                                      marginBottom: "3rem",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    You can change the image effect
                                  </h6>
                                </Col>
                              </Row>

                              <form className="setting">
                                {effects.map((fil) => {
                                  return (
                                    <div className="collected">
                                      <label
                                        className={`filterName ${
                                          fil.changed && "reset-active"
                                        }`}
                                      >
                                        <div>{fil.label}</div>
                                        <div>{fil.value}</div>
                                        <input
                                          type="reset"
                                          value="Reset"
                                          onMouseDown={handleResetPanoramaEffectIn(
                                            effects,
                                            fil
                                          )}
                                          onMouseUp={handleResetPanoramaEffectUp(
                                            fil
                                          )}
                                        />
                                      </label>
                                      <input
                                        type="range"
                                        step="1"
                                        min={fil.min}
                                        max={fil.max}
                                        id={fil.name}
                                        onChange={handleChangeParonamaEffect(
                                          fil
                                        )}
                                        value={fil.value}
                                      />
                                    </div>
                                  );
                                })}

                                <div className="form-actions">
                                  {user.user == null ? (
                                    <div></div>
                                  ) : userId == user.user._id ? (
                                    <div
                                      style={{
                                        display: "flex",
                                        width: "100%",
                                        justifyContent: "space-between",
                                        marginTop: "40px",
                                      }}
                                    >
                                      <Button.Ripple
                                        className="bg-gradient-primary"
                                        // type="submit"
                                        type="button"
                                        value="Submit Changes"
                                        onClick={handleSubmit}
                                      >
                                        Submit 
                                      </Button.Ripple>
                                      <Button.Ripple
                                        className="ml-3 bg-gradient-danger"
                                        // type="reset"
                                        type="button"
                                        value="Reset"
                                        onClick={handleResetAllEffects}
                                      >
                                        Reset
                                      </Button.Ripple>
                                    </div>
                                  ) : (
                                    <div></div>
                                  )}
                                </div>
                              </form>
                            </div>
                          </div>
                        )}

                        {activeSide == "empty" && (
                          <div className="empty-content">empty div</div>
                        )}

                        {activeSide == "hotspot" && (
                          <Container className="mt-5">
                            <Row>
                              <Col>
                                <div className="hotspot-content">
                                  <h5
                                    style={{
                                      color: "#0ca8fd",
                                      textTransform: "uppercase",
                                      textAlign: "center",
                                    }}
                                  >
                                    {title}
                                  </h5>
                                  <Row>
                                    <Col>
                                      <h4
                                        style={{
                                          color: "white",
                                          textAlign: "center",
                                          marginBottom: "3rem",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        HOTSPOT SETTINGS
                                      </h4>

                                      {/* <h6 style={{fontSize:'13px', textAlign:'center', color:'#8d8d8d',  marginBottom: "2rem", lineHeight:'20px'}}>to reset and delete all the hotspots you can click <RotateCw size={13} color="#0ca8fd"/> </h6> */}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col className="pl-0 pr-0 mb-1">
                                      <FormGroup>
                                        <div>
                                          <img
                                            src={filterdImage.thumbnail_url}
                                            style={{
                                              width: "100%",
                                              height: "200px",
                                              zIndex: "11111111",
                                            }}
                                            alt=""
                                          ></img>
                                        </div>
                                      </FormGroup>
                                    </Col>
                                  </Row>

                                  <HotSpotPanel
                                    activeSpotId={activeSpotId}
                                    setActiveSpotId={setActiveSpotId}
                                    place={place}
                                    panoramaId={panoramaId}
                                  />

                                  <Row>
                                    <Col className="pl-0 pr-0 mb-1">
                                      <Button.Ripple
                                        className="bg-gradient-primary"
                                        // type="submit"
                                        type="button"
                                        value="Submit Changes"
                                        onClick={handleSubmit}
                                      >
                                        Submit changes
                                      </Button.Ripple>
                                      <Button.Ripple
                                        className="ml-3 bg-gradient-danger"
                                        // type="reset"
                                        type="button"
                                        value="Reset"
                                        onClick={handleResetAll}
                                      >
                                        Reset
                                      </Button.Ripple>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        )}
                      </div>
                    </div>
                  </div>
                </LeftSidBar>

                <RigthSide>
                  <div className="tour-container">
                    {isSubmitModaIOpen && (
                      <SweetAlert
                        warning
                        showCancel
                        title={"Confirm hotspot change"}
                        confirmBtnText="Submit"
                        cancelBtnText="Igore and Jump"
                        confirmBtnBsStyle="primary"
                        cancelBtnBsStyle="light"
                        focusConfirmBtn
                        onConfirm={onConfirmSubmit}
                        onCancel={onIgoreHotSpotChange}
                        reverseButtons={true}
                      >
                        You have the unsaved hotspot(s) in this place.
                      </SweetAlert>
                    )}
                    {isDeleteModaIOpen && (
                      <SweetAlert
                        warning
                        showCancel
                        title={"Confirm Delete Panorama"}
                        confirmBtnText="OK"
                        cancelBtnText="Cancel"
                        confirmBtnBsStyle="primary"
                        cancelBtnBsStyle="light"
                        focusConfirmBtn
                        onConfirm={confirmDeletePanorama}
                        onCancel={cancelDeletePanorama}
                        reverseButtons={true}
                      >
                        Are you sure to delete this place?
                      </SweetAlert>
                    )}
                    <Tour>
                      {/* // if we define to have rotation the 360 , then what will show, we will go for checking the nadir , if we have nadir or not. */}

                      {!loading && nadir ? (
                        <div onMouseDown={(e) => setRotation(false)}>
                          <FrameSpotsEditor
                            activeSide={activeSide}
                            panoramaId={panoramaId}
                            image={
                              filterdImage ? filterdImage.secure_url : null
                            }
                            // animation={rotationText()}
                            zoom={zoom}
                            fov={fov}
                            nadir={nadirImage}
                            nadirScale={nadirScale}
                            nadirOpacity={nadirOpacity}
                            loading={true}
                            activeSpotId={activeSpotId}
                            setActiveSpotId={setActiveSpotId}
                          />
                        </div>
                      ) : (
                        <FrameSpotsEditor
                          image={filterdImage ? filterdImage.secure_url : null}
                          zoom={zoom}
                          fov={fov}
                        />
                      )}
                    </Tour>
                    {/* // here we define if not pause, to show the carousel */}
                    <CarouselContainer>
                      <div>
                        {openCarouselEdit ? ( // here we define if the carousel is start with open or close status
                          <div>
                            <Carousel
                              className={carouselDesing}
                              slidesPerPage={3}
                              offset={10}
                              draggable
                              itemWidth={200}
                            >
                              {image.length > 0
                                ? image.map((panorama, index) => {
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
                                            className="carousel-children"
                                            onDoubleClick={checkPanoramaChange(
                                              panorama
                                            )}
                                          >
                                            <div>
                                              {panorama.thumbnail_url !==
                                                filterdImage.thumbnail_url && (
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
                                              {panorama.thumbnail_url ==
                                                filterdImage.thumbnail_url && (
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
                                              {panorama.thumbnail_url ==
                                                filterdImage.thumbnail_url && (
                                                <Edit
                                                  size={20}
                                                  className="visited"
                                                  style={{
                                                    color: "white",
                                                    position: "absolute",
                                                    left: "10px",
                                                    top: "10px",
                                                    color: "#0ca8fd",
                                                  }}
                                                ></Edit>
                                              )}

                                              <Badge
                                                badgeContent={`${index + 1}`}
                                                color="primary"
                                                size={20}
                                                style={{
                                                  color: "white",
                                                  position: "absolute",
                                                  right: "15px",
                                                  bottom: "15px",
                                                  color: "white",
                                                  opacity: "1",
                                                }}
                                              >
                                                <Image size={20} />
                                              </Badge>

                                              <img
                                                //thumb
                                                className="play-btn"
                                                src={panorama.thumbnail_url}
                                                width="200"
                                                key={panorama.asset_id}
                                              />
                                              {panorama.thumbnail_url !==
                                                filterdImage.thumbnail_url && (
                                                <Edit
                                                  size={40}
                                                  className="onhoverplay"
                                                />
                                              )}
                                              {user.user == null ? (
                                                <div></div>
                                              ) : userId == user.user._id ? (
                                                <>
                                                  {deleteImage == false ? (
                                                    <div
                                                      className="delete-image"
                                                      onClick={handleDeletePanorama(
                                                        panorama
                                                      )}
                                                    >
                                                      <i className="far fa-trash-alt"></i>
                                                    </div>
                                                  ) : (
                                                    <div></div>
                                                  )}
                                                </>
                                              ) : (
                                                <div></div>
                                              )}
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
                                : console.log("no")}
                            </Carousel>
                            {image.length > 1 && (
                              <div
                                className="close-carousel"
                                onClick={() => {
                                  return setOpenCarouselEdit(false);
                                }}
                              >
                                <Image size={35} color="white" />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            className="open-carousel"
                            onClick={() => {
                              return setOpenCarouselEdit(true);
                            }}
                          >
                            <Image size={35} color="white" />
                          </div>
                        )}
                      </div>
                    </CarouselContainer>
                  </div>
                </RigthSide>
              </div>
            </DndProvider>
          </div>
        </div>
      </WholePageContainer>
    </>
  );
}
const WholePageContainer = styled.div`
  .page-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    top: 0px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .all-page {
    height: 100%;
    overflow: hidden;
    display: grid;
  }
  .tour-container {
    width: 75%;
  }
  ${media.phone`
  grid-template-columns: 1fr ;
  .tour-container{
    display:none;
  }
.top-bar{
  display:none;
}
.mobileMsg{
  display:block;
}
  `}

  ${media.tablet`
  grid-template-columns: 1fr ;
  .tour-container{
    display:none;
  }
  .top-bar{
  display:none;
}
.mobileMsg{
  display:block;
}
  `}



  ${media.desktop`
  grid-template-columns: auto auto; 
  .tour-container{
    display:block;
  }
  .top-bar{
  display:block;
}
.top-bar{
  display:block;
}
.mobileMsg{
  display:none;
}
  `}

  ${media.large`
  grid-template-columns: auto auto;
  .tour-container{
    display:block;
  }
  .mobileMsg{
  display:none;
}
  `}
`;
const RotationBtn = styled.div``;
const LeftSidBar = styled.div`
  ${media.phone`
  grid-template-columns: auto auto;
  .side-container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  .side-container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  .sideBar-container {


    width: 93%;
right: 7%;

  }
  .topBar{
   width:93%;
   position:fixed;
   right:7%;
   top:0px;
   height:auto;
   padding:5px 4rem 0rem 4rem;
   background-color:#0ca8fd;
   z-index:1111111;

  }
  `}

  ${media.tablet`
  grid-template-columns: auto auto;
  .side-container {
    width: 24%;
    display: flex;
    flex-direction: row-reverse;
  }
  .side-container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  .sideBar-container {

    width: 93%;
right: 7%;

}
.topBar{
   width:93%;
   position:fixed;
   right:3%;
   top:0px;
   height:auto;
   padding:5px 3rem 0rem 3rem;
   background-color:#0ca8fd;
   z-index:1111111;

  }
  `}


  ${media.desktop`
  grid-template-columns: auto auto;
  .side-container {
    width: 24%;
    display: flex;
    flex-direction: row-reverse;
  }
  .side-container {
    width: 25%;
    display: flex;
    flex-direction: row-reverse;
  }
  .sideBar-container {

width: 25%;
right: 3%;
}
.topBar{
   width:25%;
   position:fixed;
   right:3%;
   top:0px;
   height:auto;
   padding:5px 3rem 0rem 3rem;
   background-color:#0ca8fd;
   z-index:1111111;
   min-width:350px;

  }
  `}



  ${media.large`
  grid-template-columns: auto auto;
  .side-container {
    width: 24%;
    display: flex;
    flex-direction: row-reverse;
  }
  .side-container {
    width: 25%;
    display: flex;
    flex-direction: row-reverse;
  }

  .sideBar-container {
    width: 25%;
    right: 3%;
  }
  .topBar{
    width:25%;
    position:fixed;
    right:3%;
    top:0px;
    height:auto;
    padding:5px 3rem 0rem 3rem;
    background-color:#0ca8fd;
    z-index:1111111;
    color:white;
    min-width:350px;
  }
  `}

  ${media.large`
  grid-template-columns: auto auto;
  .side-container {
    width: 24%;
    display: flex;
    flex-direction: row-reverse;
  }
  .side-container {
    width: 25%;
    display: flex;
    flex-direction: row-reverse;
  }

  .sideBar-container {

width: 25%;
right: 3%;
}
  `}





  .sideBar-container {
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 10000;

    min-width: 350px;
    /* right: 3%; */
    color: white;
    font-size: 19px;
    font-weight: bold;
    padding: 50px 2.5rem 20px 2.5rem;
    /* padding: 90px 2.5rem 20px 2.5rem; */
    background-color: rgb(7 7 7);
    overflow-y: scroll;
    transition: all 1s;
    -webkit-box-shadow: -4px 2px 5px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: -4px 2px 5px 0px rgba(0, 0, 0, 0.15);
    box-shadow: -4px 2px 5px 0px rgba(0, 0, 0, 0.15);
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }
  .panorama-settings {
    /* margin-top: 50px; */
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin-bottom: 20px;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 300px;
    height: 3px;
    background: #dce6e9;
    border: none;
  }
  .form-actions {
    border: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -6px;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ccc;
  }

  input[type="range"]::-moz-range-track {
    width: 300px;
    height: 3px;
    background: #dce6e9;
    border: none;
  }

  input[type="range"]::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #95c6c6;
  }

  input[type="range"]:-moz-focusring {
    outline: 1px solid #dce6e9;
    outline-offset: -1px;
  }

  label.filterName {
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 12px;
    letter-spacing: 0.2em;
    opacity: 1;
  }
  .filterName input[type="reset"] {
    background-color: #4caf4f00;
    border: none;
    color: rgb(247, 77, 77);
    text-decoration: none;
    font-size: 12px;
    outline: none;
    display: none;
    position: absolute;
    right: 43%;
    margin-bottom: 7px;
  }

  .reset-active input[type="reset"] {
    display: block;
  }
  .form-actions input[type="reset"] {
    background-color: #4caf4f00;
    border: none;
    color: rgb(247, 77, 77);
    text-decoration: none;
    outline: none;
  }

  .form-actions input[type="reset"]:hover {
    color: rgb(250, 48, 48);
  }
  .form-actions input[type="submit"] {
    background-color: #4caf4f00;
    border: none;
    color: rgb(97, 247, 77);
    text-decoration: none;
    outline: none;
  }
  .form-actions input[type="submit"]:hover {
    color: rgb(74, 247, 52);
  }
  .sideBar-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0px;
    /* padding-top:92px; */
    padding-top: 17px;
    z-index: 100000;
    right: 0px;
    height: 100vh;
    width: 3%;
    min-width: 50px;
    color: white;
    font-size: 19px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 1);
    transition: all 1s;
  }
  .sideBar-button-i {
    width: 100%;
    border-radius: 0;
  }
  .sideBar-side div {
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sideBar-side div:hover {
    background-color: #171717;
    cursor: pointer;
  }
  .hotspots-header svg:hover {
    background-color: #8888;
    border-radius: 3px;
  }
  .hotspot-name {
    background-color: black;
    width: 50%;
    color: white;
    border: none;
  }
  .hotspot-content {
    ${"" /* align-items: center; */}
    display: flex;
    flex-direction: column;
  }
  .activeSide {
    background: #0ca8fd !important;
    /* border-left: 5px solid white; */
  }
  .panel-body {
    background-color: #000;
  }
  .panel-header {
    background-color: black;
    padding: 0 15px;
    border-bottom: 2px solid white;
  }
  .panel-header:hover {
    background-color: #060606;
  }
  .spot-header {
    background-color: black;
    padding: 0 25px;
    border-right: 4px solid white;
  }

  .spot-body svg {
    width: 20px;
    margin: 0 1px;
    padding: 2px;
    border-radius: 2px;
    align-self: center;
    color: #0ca8fd;
  }
  .spot-body svg:hover {
    background-color: #060606;

    border-radius: 15px;
  }
  .panel-subtitle {
    color: white;
    margin-bottom: 0;
    display: flex;
  }
  .panel-sub-body {
    background-color: #151515;
    color: #fff;
    flex-direction: column;
  }
  .panel-sub-body .Mui-focused {
    background-color: black !important;
  }
  .tab-body {
    background-color: black;
    padding: 10px 0px 10px 10px;

    display: flex;
    flex-wrap: wrap;
  }
  .tab-object {
    width: 80px;
    min-width: 70px;
    padding: 0;
  }
  .tab-object:focus {
  }
  .tab-object-custom {
    width: 120px;
  }
  .add-icon-button:hover {
    cursor: pointer !important;
  }
  .tab-body div,
  img {
    padding: 5px;
    width: 35px;
    background-color: rgba(0, 0, 0, 0);
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  }
  .tab-body div:hover {
    cursor: grab;
    background-color: rgba(110, 110, 110, 70);
  }
  .selected-icon {
    cursor: grab;
    background-color: rgba(210, 110, 110, 100) !important;
  }
  .property-setting {
    display: flex;
    align-items: baseline;
  }
  .property-setting input {
    margin: 0 3px;
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
  }
  .property-setting-label {
    display: flex;
    margin: 3px;
    min-width: 80px;
    width: 100%;
    text-align: center;
  }
  .label {
    display: flex;
    margin: 3px;
  }
  .property-setting-value {
    min-width: 120px;
    margin: 3px;
    text-align: center;
  }
  .action-select {
    color: white;
    background-color: #060606;
    padding: 4px 10px;
  }
  .action-select option {
    color: white;
    background-color: #2d2c2c !important;
  }
  .line-center {
    margin: 3px;
    display: flex;
    justify-content: center;
  }
`;

const Tour = styled.div`
  .menu-context {
    background-color: #333333;
    padding: 3px 0;
    border-radius: 3px;
    color: white;
    font-size: 0.9em;
  }
  .menu-item {
    padding: 5px 7px;
    cursor: context-menu;
  }
  .menu-item:hover {
    background-color: #eeeeee55;
  }
  .menu-item svg {
    width: 1.2em;
  }
  #a-scene-tour .a-canvas {
    // position: relative !important;
    width: 100% !important;
    height: 100vh !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    position: fixed !important;
  }
  .check-loading {
    width: 0px;
    heigh: 0px;
  }
`;
const CarouselContainer = styled.div`
  .visited {
    /* -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75); */
  }
  .image-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 1;
    transition: all 0.4s;
    z-index: "1111111111";
  }

  .none {
    display: none !important;
  }

  .BrainhubCarousel__container {
    position: absolute;
    width: 75%;
    /* height: 20vh; */
    bottom: 0px;
    left: 0px;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;

    z-index: 2;
    -webkit-box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 2px -2px 5px 1px rgba(0, 0, 0, 0.1);
  }
  .designcarousel1 {
    background-color: rgba(255, 255, 255, 1);
  }
  .designcarousel2 {
    background-color: rgba(0, 0, 0, 1);
  }
  .open-carousel {
    border: none;
    border-radius: 0px;
    padding: 0.3rem;
    z-index: 1;
    cursor: pointer;
    position: fixed;
    bottom: 0px;
    left: 37.5%;
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
    bottom: 143px;
    left: 37.5%;
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
  .carousel-children {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.6rem;
    height: 145px;
  }
  .onhoverplay {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0;
  }
  .carousel-children div:hover .onhoverplay {
    opacity: 1;
    transition: opacity 0.3s;
  }
  .carousel-children div:hover .image-overlay {
    opacity: 0.7;
    transition: all 0.4s;
  }
  .carousel-children div:hover .delete-image {
    opacity: 1;
    transition: opacity 0.4s;
  }
  .carousel-children div {
    height: 120px;
    width: 100%;
    background-color: black;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    overflow-wrap: anywhere;
  }
  .carousel-children div img {
    object-fit: cover;
    height: 100%;
  }
  .delete-image {
    font-size: 15px;
    height: 25% !important;
    width: 20% !important;
    color: white;
    /* background-color: rgb(223, 45, 45) !important; */
    position: absolute !important;
    top: 0px;
    right: 0px;
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    z-index: 5;
    transition: opacity 0.4s;
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

  .image-title {
    font-size: 15px;
    margin: 5px;
    position: absolute;
    color: white;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    opacity: 1;
  }
  .index-title {
    font-size: 15px;
    margin: 5px;
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    /* text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5); */
    text-transform: uppercase;
    opacity: 1;
  }

  .carousel-children div:hover .image-title {
    opacity: 0.1;
    transition: opacity 0.5s;
  }
  .activeImage::after {
    /* display: block;
    content: "";
    z-index: 111111;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    border: 4px solid #0ca8fd;
    position: absolute;
    left: 10px;
    top: 7px;
    background-color: black;
    opacity: 0;
    -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 1);
    -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 1);
    box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 1);
    transition: opacity 0.5s; */
  }
`;

const RigthSide = styled.div``;
