import React from "react";

// import eye from '../Assets/playicon/eye.png';
import eye from "../Assets/view.svg";
import smart from "../Assets/smartphone.svg";
import email from "../Assets/emailicon.svg";
import down from "../Assets/playicon/chevrons-down.png";
import left from "../Assets/playicon/chevrons-left.png";
import right from "../Assets/playicon/chevrons-right.png";
import up from "../Assets/playicon/chevrons-up.png";
import help from "../Assets/playicon/help-circle.png";
import image from "../Assets/playicon/image.png";
import mapPin from "../Assets/playicon/map-pin.png";
import play from "../Assets/playicon/play-circle.png";
import rotate from "../Assets/playicon/rotate-cw.png";
import typo from "../Assets/playicon/type.png";
import alert from "../Assets/playicon/alert-circle.png";
import User1 from "../Assets/playicon/user.png";
import browser from "../Assets/playicon/mycollection/svg/026-browser.svg";
import lightBulb from "../Assets/playicon/mycollection/svg/017-light-bulb.svg";
import user from "../Assets/playicon/mycollection/svg/001-user.svg";
import compass from "../Assets/playicon/mycollection/svg/023-compass.svg";
import document from "../Assets/playicon/mycollection/svg/010-document.svg";
import attachment from "../Assets/playicon/mycollection/svg/021-attachment.svg";
import pushPin from "../Assets/playicon/mycollection/svg/020-push-pin.svg";
import film from "../Assets/playicon/mycollection/svg/019-film.svg";
import volume from "../Assets/playicon/mycollection/svg/018-volume.svg";
import folder from "../Assets/playicon/mycollection/svg/016-folder.svg";
import link from "../Assets/playicon/mycollection/svg/015-link.svg";
import settings from "../Assets/playicon/mycollection/svg/014-settings.svg";
import earthGlobe from "../Assets/playicon/mycollection/svg/013-earth-globe.svg";
import notification from "../Assets/playicon/mycollection/svg/012-notification.svg";

import heart from "../Assets/playicon/mycollection/svg/009-heart.svg";
import padlock from "../Assets/playicon/mycollection/svg/007-padlock.svg";
import phoneBook from "../Assets/playicon/mycollection/svg/006-phone-book.svg";
import computer from "../Assets/playicon/mycollection/svg/005-computer.svg";
import pencil from "../Assets/playicon/mycollection/svg/004-pencil.svg";
import internet from "../Assets/playicon/mycollection/svg/003-internet.svg";
import placeholder from "../Assets/playicon/mycollection/svg/002-placeholder.svg";

// arrows
import leftArrow from "../Assets/playicon/arrows/svg/024-left-arrow.svg";
import curveArrow from "../Assets/playicon/arrows/svg/023-curve-arrow.svg";
import rightArrow from "../Assets/playicon/arrows/svg/010-right-arrow.svg";
import doubleArrow from "../Assets/playicon/arrows/svg/020-double-arrow.svg";
import doubleArrow1 from "../Assets/playicon/arrows/svg/021-double-arrow-1.svg";
import playArrow from "../Assets/playicon/arrows/svg/019-play.svg";
import sortArrow from "../Assets/playicon/arrows/svg/018-sort.svg";
import splitArrow from "../Assets/playicon/arrows/svg/014-split.svg";
import uploadArrow from "../Assets/playicon/arrows/svg/016-upload.svg";
import roundabout from "../Assets/playicon/arrows/svg/015-roundabout.svg";
import splitArrow1 from "../Assets/playicon/arrows/svg/017-split-1.svg";
import rightChevron from "../Assets/playicon/arrows/svg/013-right-chevron.svg";
import turnRight from "../Assets/playicon/arrows/svg/012-turn-right.svg";
import importArrow from "../Assets/playicon/arrows/svg/011-import.svg";
import rightArrow1 from "../Assets/playicon/arrows/svg/022-right-arrow-1.svg";
import replayArrow from "../Assets/playicon/arrows/svg/009-replay.svg";
import fastForward from "../Assets/playicon/arrows/svg/008-fast-forward.svg";
import turnLeft from "../Assets/playicon/arrows/svg/007-turn-left.svg";
import curvedArrow from "../Assets/playicon/arrows/svg/006-curved-arrow.svg";
import undoArrow from "../Assets/playicon/arrows/svg/005-undo.svg";
import transfer from "../Assets/playicon/arrows/svg/004-transfer.svg";
import repeatArrow from "../Assets/playicon/arrows/svg/003-repeat.svg";
import sendArrow from "../Assets/playicon/arrows/svg/001-send.svg";

// arrows end

import hotSpot from "../Assets/view.png";
import hotSpot1 from "../Assets/elias.jpg";
import hotSpot3 from "../Assets/user1.png";
import hotSpot4 from "../Assets/user2.png";
import hotSpot5 from "../Assets/profile-user.png";
import hotSpot6 from "../Assets/thumb3..jpg";
import { Mail } from "react-feather";

export const HOT_ADD_PLACE = "HOT_ADD_PLACE";
export const HOT_ADD_PLACE_SPOTS = "HOT_ADD_PLACE_SPOTS";
export const HOT_ADD_PANORAMA_SPOT = "HOT_ADD_PANORAMA_SPOT";
export const HOT_REMOVE_PLACE_SPOTS = "HOT_REMOVE_PLACE_SPOTS";
export const HOT_REMOVE_PANORAMA_SPOT = "HOT_REMOVE_PANORAMA_SPOT";
export const HOT_UPDATE_PLACE_SPOTS = "HOT_UPDATE_PLACE_SPOTS";
export const HOT_UPDATE_PANORAMA_SPOT = "HOT_UPDATE_PANORAMA_SPOT";
export const HOT_CLEAR_ALL_SPOTS = "HOT_CLEAR_ALL_SPOTS";
export const ADD_CUSTOM_ICON = "ADD_CUSTOM_ICON";
export const REMOVE_CUSTOM_ICON = "REMOVE_CUSTOM_ICON";
export const CLEAR_CUSTOM_ICONS = "CLEAR_CUSTOM_ICONS";
export const HOT_SET_ACTIVE = "HOT_SET_ACTIVE";
export const HOT_SET_PANORAMA_VIEWPORT = "HOT_SET_PANORAMA_VIEWPORT";
export const HOT_CLEAR_PANORAMA_VIEWPORT = "HOT_CLEAR_PANORAMA_VIEWPORT";

export const TOOLTIP_MAX_LENGTH = 15;
export const INFO_PANEL_MAX_LENGTH = 500;

// tooltips
export const EyeExplainer = "View your tour";
export const ReseatEaplainer = "Reset your tour, to the default values ";
export const EditHotspotExplainer =
  "Add hotspot and different actions to your tour";

// end tooltips

export const icons = [
  { name: "browser", imageUrl: browser },
  { name: "smart", imageUrl: smart },
  { name: "light", imageUrl: lightBulb },
  { name: "user", imageUrl: user },
  { name: "compass", imageUrl: compass },
  { name: "document", imageUrl: document },
  { name: "attachment", imageUrl: attachment },
  { name: "pushPin", imageUrl: pushPin },
  { name: "film", imageUrl: film },
  { name: "volume", imageUrl: volume },
  { name: "folder", imageUrl: folder },
  { name: "link", imageUrl: link },
  { name: "settings", imageUrl: settings },
  { name: "earthGlobe", imageUrl: earthGlobe },
  { name: "notification", imageUrl: notification },
  { name: "heart", imageUrl: heart },
  { name: "phoneBook", imageUrl: phoneBook },
  { name: "computer", imageUrl: computer },
  { name: "pencil", imageUrl: pencil },
  { name: "internet", imageUrl: internet },
  { name: "placeholder", imageUrl: placeholder },
  { name: "Mail", imageUrl: email },
  { name: "rightChevron", imageUrl: rightChevron },
  // arrows
  { name: "leftArrow", imageUrl: leftArrow },
  { name: "curveArrow", imageUrl: curveArrow },
  { name: "rightArrow", imageUrl: rightArrow },
  { name: "doubleArrow", imageUrl: doubleArrow },
  { name: "doubleArrow1", imageUrl: doubleArrow1 },
  { name: "playArrow", imageUrl: playArrow },
  { name: "sortArrow", imageUrl: sortArrow },
  { name: "splitArrow", imageUrl: splitArrow },
  { name: "uploadArrow ", imageUrl: uploadArrow },
  { name: "roundabout", imageUrl: roundabout },
  { name: "splitArrow1", imageUrl: splitArrow1 },
  { name: "rightChevron", imageUrl: rightChevron },
  { name: "turnRight", imageUrl: turnRight },
  { name: "importArrow", imageUrl: importArrow },
  { name: "rightArrow1", imageUrl: rightArrow1 },
  { name: "replayArrow", imageUrl: replayArrow },
  { name: "fastForward", imageUrl: fastForward },
  { name: "turnLeft", imageUrl: turnLeft },
  { name: "curvedArrow", imageUrl: curvedArrow },
  { name: "undoArrow", imageUrl: undoArrow },
  { name: "transfer", imageUrl: transfer },
  { name: "repeatArrow", imageUrl: repeatArrow },
  { name: "sendArrow", imageUrl: sendArrow },

  // arrows end
  // { name: "Eye", imageUrl: eye },
  // { name: "Type", imageUrl: typo },
  // { name: "RotateCw", imageUrl: rotate },
  // { name: "PlayCircle", imageUrl: play },
  // { name: "Image", imageUrl: image },
  // { name: "MapPin", imageUrl: mapPin },
  // { name: "Help", imageUrl: help },
  // { name: "ChevronsRight", imageUrl: right },
  // { name: "ChevronsLeft", imageUrl: left },
  // { name: "ChevronsDown", imageUrl: down },
  // { name: "ChevronsUp", imageUrl: up },
  // { name: "Alert", imageUrl: alert },
];
export const iconsCustom = [
  { name: "eye", imageUrl: hotSpot },
  // { name: "elias", imageUrl: hotSpot1 },
  // { name: "user", imageUrl: user },
  // { name: "user1", imageUrl: hotSpot3 },
  // { name: "user2", imageUrl: hotSpot4 },
  // { name: "profile-user", imageUrl: hotSpot5 },
  // { name: "thumb3", imageUrl: hotSpot6 },
];
export const transitionTypes = [
  {
    // 0
    name: "fade",
    animation: {
      opacity: [0.1, 1],
      // direction: 'alternate',
    },
  },
  {
    // 1
    name: "fadeUp",
    animation: {
      opacity: [0.1, 1],
      scale: [0.5, 1],
      translateY: [+500, 0],
    },
  },
  {
    // 2
    name: "slide",
    animation: {
      translateX: [-1500, 0],
    },
  },
  {
    // 3
    name: "slideUp",
    animation: {
      translateY: [+1500, 0],
    },
  },
  {
    // 4
    name: "rotate",
    animation: {
      scale: [0.5, 1],
      rotate: ["+=1turn"], //
    },
  },
  {
    // 5
    name: "rotateX",
    animation: {
      scale: [0.2, 1],
      rotateX: "+=2turn", //
    },
  },
  {
    // 6
    name: "rotateY",
    animation: {
      scale: [0.2, 1],
      rotateY: "+=2turn", //
    },
  },
  {
    // 7
    name: "zoom",
    animation: {
      scale: [0.1, 1],
      opacity: [0.7, 1],
    },
  },
  {
    // 8
    name: "flash",
    animation: {
      opacity: [0.2, 0.7, 0.3, 1],
    },
  },
  {
    // 9
    name: "plus",
    animation: {
      scale: [0.9, 1.3, 1],
    },
  },
  {
    // 10
    name: "bounce",
    animation: {
      translateY: [-350, 0],
      easing: "spring(1, 80, 10, 0)",
    },
  },
  {
    // 11
    name: "rubber",
    animation: {
      scaleX: [1, 1.2, 0.95, 1],
      scaleY: [1, 0.8, 1.1, 1],
    },
  },
  {
    // 12
    name: "tada",
    animation: {
      scale: [1, 0.9, 1, 1, 1],
      rotate: [
        "+=0turn",
        "+=0.05turn",
        "-=0.1turn",
        "+=0.07turn",
        "-=0.02turn",
      ], //
      // skew: ['0','-20','0'],
    },
  },
  {
    // 13
    name: "skew",
    animation: {
      skewY: ["-40", "+40", 0],
    },
  },
];
export const transitionDurations = [
  // 400,
  800,
  1000,
  1400,
  1800,
  2000,
  3000,
];
export const actionNames = [
  "No Action",
  "Display image or slider",
  "Display Info panel",
  "Link to external link",
  "Link to panoramna",
  "Play sound",
];
export const IconTypes = {
  ICON: "spot",
};

//here you can change cloudinary settings to be yours
// --------------------------------------------------
// const cloudName = "dfjgtalry";
// const uploadPreset = "ahmedImageUpload";

const cloudName = "dx1zby8rs";
const uploadPreset = "uploaded_from_react";
export const widgetOptions = {
  cloudName,
  uploadPreset,
  thumbnailTransformation: [{ width: 600, height: 400, crop: "limit" }],
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
  maxFiles: 59999999,
  maxImageFileSize: 7000000,
  singleUploadAutoClose: false,
  return_delete_token: true,
  text: {
    en: {
      menu: {
        files: "UPLOAD 360 IMAGES",
      },

      queue: {
        done: "",
      },
      local: {
        dd_title_single: "Drag and Drop 360 images here",
        dd_title_multi: "Drag and Drop 360 images here",
        drop_title_single: "Drag and Drop 360 images here",
        drop_title_multiple: "Drag and Drop 360 images here",
      },
    },
  },
};
export const featuredOptions = {
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
};
export const filters = [
  {
    name: "e_red:",
    label: "Red",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_green:",
    label: "Green",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_blue:",
    label: "Blue",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_brightness:",
    label: "Brightness",
    value: 0,
    min: -99,
    max: 100,
    changed: false,
  },
  {
    name: "e_sepia:",
    label: "Sepia",
    value: 50,
    min: 1,
    max: 100,
    changed: false,
  },
  {
    name: "e_saturation:",
    label: "Saturation",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_colorize:",
    label: "Colorize",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_contrast:",
    label: "Contrast",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_auto_contrast:",
    label: "Auto ontrast",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_vibrance:",
    label: "Vibrance",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_auto_color:",
    label: "Auto color",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_improve:",
    label: "Imporve",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_gamma:",
    label: "Gamma",
    value: 0,
    min: -50,
    max: 150,
    changed: false,
  },
  {
    name: "e_oil_paint:",
    label: "Oil paint",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_pixelate_faces:",
    label: "Pixelate faces",
    value: 1,
    min: 1,
    max: 2000,
    changed: false,
  },
  {
    name: "e_blur:",
    label: "Blur",
    value: 1,
    min: 1,
    max: 2000,
    changed: false,
  },
  {
    name: "e_blur_faces:",
    label: "Blur faces",
    value: 1,
    min: 1,
    max: 2000,
    changed: false,
  },
];
export const originalFilters = [
  {
    name: "e_red:",
    label: "Red",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_green:",
    label: "Green",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_blue:",
    label: "Blue",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_brightness:",
    label: "Brightness",
    value: 0,
    min: -99,
    max: 100,
    changed: false,
  },
  {
    name: "e_sepia:",
    label: "Sepia",
    value: 50,
    min: 1,
    max: 100,
    changed: false,
  },
  {
    name: "e_saturation:",
    label: "Saturation",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_colorize:",
    label: "Colorize",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_contrast:",
    label: "Contrast",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_auto_contrast:",
    label: "Auto ontrast",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_vibrance:",
    label: "Vibrance",
    value: 0,
    min: -100,
    max: 100,
    changed: false,
  },
  {
    name: "e_auto_color:",
    label: "Auto color",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_improve:",
    label: "Imporve",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_gamma:",
    label: "Gamma",
    value: 0,
    min: -50,
    max: 150,
    changed: false,
  },
  {
    name: "e_oil_paint:",
    label: "Oil paint",
    value: 0,
    min: 0,
    max: 100,
    changed: false,
  },
  {
    name: "e_pixelate_faces:",
    label: "Pixelate faces",
    value: 1,
    min: 1,
    max: 2000,
    changed: false,
  },
  {
    name: "e_blur:",
    label: "Blur",
    value: 1,
    min: 1,
    max: 2000,
    changed: false,
  },
  {
    name: "e_blur_faces:",
    label: "Blur faces",
    value: 1,
    min: 1,
    max: 2000,
    changed: false,
  },
];

export const sortTypes = [
  {
    name: "All TOURS",
    desc: `Explore our best-in-class 360 multiresolution panoramas and most
          catchy virtual reality tours created by Roundme VR photographers
          daily. Select the checkbox in the Tour card to set it the featured view image`,
  },
  {
    name: "BEST NEW",
    desc: `Explore our best-in-class 360 multiresolution panoramas and most
          catchy virtual reality tours created by Roundme VR photographers
          daily. Use “Search” button or categories icon to quickly find or
          filter panoramic images.`,
  },
  {
    name: "TOP VIEW",
    desc: `Explore our best-in-class 360 multiresolution panoramas and most
          catchy virtual reality tours created by Roundme VR photographers
          daily. Use “Search” button or categories icon to quickly find or
          filter panoramic images.`,
  },
  {
    name: "FEATURED ",
    desc: `Explore our best-in-class 360 multiresolution panoramas and most
          catchy virtual reality tours created by Roundme VR photographers
          daily. Use “Search” button or categories icon to quickly find or
          filter panoramic images.`,
  },
  {
    name: 'MAP VIEW', 
    desc: `Explore our best-in-class 360 multiresolution panoramas and most
          catchy virtual reality tours created by Roundme VR photographers
          daily. Use “Search” button or categories icon to quickly find or
          filter panoramic images.`
  },
]

export const geolocationOption = 
{
  enableHighAccuracy: true,
  timeout: 60000,
  // maximumAge: 60000
}


