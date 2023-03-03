import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  HYBRID,
  ROADMAP,
  SATELLITE,
  TERRAIN,
} from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import publicIp from "public-ip";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import { Eye } from "react-feather";
import Loader from "react-loader-spinner";

// const API_IP_LOCATION_URL = 'http://ip-api.com/json';
// const API_IP_LOCATION_URL = 'https://ipapi.co/json';
const API_IP_LOCATION_URL = "https://api.ipstack.com";
const API_GOOGLE_MAP_GEOLOACATION_URL =
  "https://www.googleapis.com/geolocation/v1/geolocate";
// const GEOLOCATION_ACCESS_KEY = "AIzaSyCGV6X5JfTW8syGXWYWpN9OkCdhjJZbyDY";
const GEOLOCATION_ACCESS_KEY = "AIzaSyCpfGnxa8qajMNxcnXFdGpuE0pjwEHFS0w";
const IP_LOCATION_ACCESS_KEY = "e23d9e238b96dce676398d3a845df0e2";
const API_GOOGLE_MAP_ACCESS_KEY = "AIzaSyBPC-dSv1vp1GBTr9qZD86_uFLPJmdwUj4";
//Places : AIzaSyCpfGnxa8qajMNxcnXFdGpuE0pjwEHFS0w

export const getGeoLocationFromGoogle = async () => {
  try {
    const url = `${API_GOOGLE_MAP_GEOLOACATION_URL}?key=${GEOLOCATION_ACCESS_KEY}`;
    const jsonLocationInfo = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        radioType: "gsm",
        considerIp: "true",
        // "radioType": "lte"
      }),
    }).then((response) => response.json());
    console.log("GeoLocationInfo=>", jsonLocationInfo);
    return jsonLocationInfo;
  } catch (error) {
    console.log(error);
  }
  return null;
};
export const getIpLocation = async () => {
  try {
    const ip = await publicIp.v4();
    const url = `${API_IP_LOCATION_URL}/${ip}?access_key=${IP_LOCATION_ACCESS_KEY}`;
    const jsonLocationInfo = await fetch(url, {
      method: "GET",
    }).then((response) => response.json());
    console.log("ip, LocationInfo=>", ip, jsonLocationInfo);
    return jsonLocationInfo;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "1200px",
    cursor: "pointer",
  },
}));

export const MyGoogleMap = compose(
  withProps({
    googleMapURL:`https://maps.googleapis.com/maps/api/js?key=${API_GOOGLE_MAP_ACCESS_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ width: "100%", height: "100%" }} />,
    mapElement: <div style={{ height: "100%" }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const classes = useStyles();
  const {
    isMarkerShown,
    defaultCenter,
    fixed,
    tip,
    getMapInfo,
    setMap,
    zoom,
    markers,
  } = props;
  const [position, setPosition] = useState(defaultCenter);
  const [refs, setRefs] = useState({});
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedCenter(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    setPosition(defaultCenter);
  }, [defaultCenter]);

  const onMarkerMounted = (ref) => {
    refs.marker = ref;
  };
  const onSearchBoxMounted = (ref) => {
    refs.searchBox = ref;
  };
  const onPositionChanged = () => {
    const pos = refs.marker.getPosition();
    getMapInfo({
      location: { lat: pos.lat(), lng: pos.lng() },
      zoom: mapInstance.getZoom(),
    });
  };

  const onClick = (e) => {
    if (!fixed) {
      setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      getMapInfo({
        location: { lat: e.latLng.lat(), lng: e.latLng.lng() },
        zoom: mapInstance.getZoom(),
      });
    }
  };
  const onMapMounted = (map) => {
    refs.map = map;
    setMapInstance(map);
    // setMap(map);
  };
  const onBoundsChanged = () => {
    setBounds(refs.map.getBounds());
    // setPosition(refs.map.getCenter())
  };
  const onPlacesChanged = () => {
    const places = refs.searchBox.getPlaces();
    const bounds = new window.google.maps.LatLngBounds();

    places.forEach((place) => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map((place) => ({
      position: place.geometry.location,
    }));
    const nextCenter = _.get(nextMarkers, "0.position", position);

    setPosition(nextCenter);
    getMapInfo({
      location: { lat: nextCenter.lat(), lng: nextCenter.lng() },
      zoom: mapInstance.getZoom(),
    });

    refs.map.fitBounds(bounds);
  };
  // console.log('Google defaultCenter=>', defaultCenter)
  // console.log('Google position=>', position)
  console.log("Google markers=>", markers);
  return (
    <Grid className={classes.root} container>
      <GoogleMap
        defaultMapTypeId={ROADMAP}
        defaultZoom={zoom}
        defaultCenter={defaultCenter}
        onClick={onClick}
        ref={onMapMounted}
        onBoundsChanged={onBoundsChanged}
      >
        <SearchBox
          ref={onSearchBoxMounted}
          bounds={props.bounds}
          controlPosition={window.google.maps.ControlPosition.TOP}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Address to search"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </SearchBox>
        {isMarkerShown && (
          <Marker
            position={position}
            draggable={!fixed}
            ref={onMarkerMounted}
            onPositionChanged={onPositionChanged}
            onClick={() => {
              setSelectedCenter(position);
            }}
          />
        )}
        {selectedCenter && tip && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedCenter(null);
            }}
            position={position}
          >
            <div>
              <h4>Title</h4>
              <h5>location</h5>
              <p>Hours of operation:</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </Grid>
  );
});

export const WrappedMap = withScriptjs(
  withGoogleMap((props) => {
    const history = useHistory();
    const { places, counter, likes } = props;
    const getCounter = (index) => {
      const ids = counter.filter((item) => item.uuid1 === places[index].uuid1);
      const idss = ids.map((item) => item._id);
      return ids[0].count;
    };
    const handleGotoTour = (index) => {
      history.push(`/placesUsers/${places[index]._id}`, {
        producto: {
          imgsData: places[index].imgsData,
          SpinnerType: places[index].SpinnerType,
          SpinnerText: places[index].SpinnerText,
        },
      });
    };
    return (
      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={props.defaultZoom}
        defaultCenter={props.defaultCenter}
        onBoundsChanged={props.onBoundsChanged}
        onTilesLoaded={props.onTilesLoaded}
        options={{
          clickableIcons: false,
          controlSize: 24,
        }}
      >
        <MarkerClusterer
          //onClick={props.onMarkerClustererClick}
          averageCenter
          enableRetinaIcons
          gridSize={60}
          imagePath="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
        >
          {props.markers.map((marker, idx) => {
            // const subscription = getSubscription(h.mlsPrice)
            return (
              <Marker
                key={`h_${idx}`}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                onClick={props.getMarkerOnClick(idx)}
                title={marker.title}
                label={{
                  color: "#000000",
                  fontFamily: "arial-narrow",
                  fontSize: "12px",
                  fontWeight: "bold",
                  // text:subscription
                }}
                // options={{
                //   icon: {
                //   url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(HomeMarkerIcon('6250/month')),
                //   size:new google.maps.Size(48, 48),
                //   //scaledSize: new google.maps.Size(48, 96),
                //   anchor: new google.maps.Point(24, 48)
                // }}}
              >
                {props.isMarkerWindowOpened(idx) && (
                  <InfoWindow
                    onCloseClick={props.onMarkerWindowClose}
                    options={{ maxWidth: 200 }}
                  >
                    <div
                      style={{
                        width: 100,
                        height: 110,
                        paddingTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          cursor: "pointer",
                        }}
                        src={JSON.parse(places[idx].image).uploadInfo.url}
                        alt="image"
                        onClick={(e) => handleGotoTour(idx)}
                      />
                      <span>{marker.title}</span>
                      <div>
                        <Eye size={12}></Eye>
                        <span>{getCounter(idx)}</span>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
        </MarkerClusterer>
      </GoogleMap>
    );
  })
);

export const PlacesMap = (props) => {
  const { places, counter, likes, single } = props;
  const [bMapDragging, setMapDragging] = useState(false);
  const [openedMarkerIndex, setMarkerIndex] = useState(-1);
  const [refdict, setRefdict] = useState({});
  const [lastZoomLevel, setZoomLevel] = useState(15);
  const [lastCenter, setCenter] = useState(null);
  const [recenter, setRecenter] = useState(true);
  const [geoSearch, setGeoSearch] = useState();
  const [markers, setPlaceList] = useState([]);
  const autoZoomFlag = useRef(recenter);

  useEffect(() => {
    setPlaceList(props.markers);
    setRecenter(true);
    autoZoomFlag.current = true;
    setTimeout(() => {
      onRecenter();
    }, 100);
  }, [props.markers.length]);

  useEffect(() => {
    if (typeof lastCenter === `undefined`) {
      if (markers && markers.length > 0) {
        setCenter({
          lat: markers[0].latitude,
          lng: markers[0].longitude,
        });
      }
    }
  }, [lastCenter]);

  const onMapMounted = (instance) => {
    refdict.map = instance;
    setTimeout(() => {
      onRecenter();
    }, 10);
  };

  const onDragStart = () => {
    setMapDragging(true);
  };

  const onDragEnd = () => {
    //handleMapBoundsChanged()
    setMapDragging(false);
  };

  const onBoundsChanged = () => {
    handleMapBoundsChanged();
  };
  const onRecenter = () => {
    if (typeof refdict.map === `undefined`) {
      console.log("GOOGLE_MAPS: onRecenter error: map undefined");
      return;
    }
    // if (!recenter){
    if (!autoZoomFlag.current) {
      return;
    }
    const bounds = refdict.map.getBounds();
    if (typeof bounds === `undefined` || bounds === null) {
      console.log("GOOGLE_MAPS: onRecenter error: bounds undefined");
      return;
    }
    // make sure to only fire a single time
    setRecenter(false);
    autoZoomFlag.current = false;
    markers.forEach((place) => {
      const loc = new window.google.maps.LatLng(
        place.latitude,
        place.longitude
      );
      bounds.extend(loc);
    });
    if (!single) {
      refdict.map.fitBounds(bounds); // auto-zoom
      refdict.map.panToBounds(bounds); // auto-center
    }

    setZoomLevel(refdict.map.getZoom());
    const center = refdict.map.getCenter();
    setCenter({ lat: center.lat(), lng: center.lng() });
    console.log(`GOOGLE_MAPS: onRecenter center:${center}`);
    console.log(`GOOGLE_MAPS: onRecenter Zoom:${lastZoomLevel}`);
  };
  // Handle when the map has its bounds changed for any reason (dragging, zooming, address search, etc.) -ELW
  const handleMapBoundsChanged = () => {
    // If the map is still being dragged, just return. -ELW
    if (bMapDragging) {
      return;
    }
    if (typeof refdict.map === `undefined`) {
      console.log("HomeMap error: GoogleMap ref unknown");
      return;
    }
    setZoomLevel(refdict.map.getZoom());
    console.log(`GOOGLE_MAPS: handleMapBoundsChanged Zoom ${lastZoomLevel}`);
    const center = refdict.map.getCenter();
    console.log(`GOOGLE_MAPS: handleMapBoundsChanged center ${center}`);
    if (typeof center !== `undefined`) {
      setCenter({ lat: center.lat(), lng: center.lng() });
    }
    onRecenter();
  };
  const onTilesLoaded = () => {
    console.log(
      `GOOGLE_MAPS: onTilesLoaded ${
        recenter ? "recenter" : "dont recenter"
      } Zoom:${refdict.map.getZoom()}`
    );
    onRecenter();
  };
  const getMarkerOnClick = (idx) => () => {
    setMarkerIndex(idx);
  };

  const onMarkerWindowClose = () => {
    setMarkerIndex(-1);
  };

  const isMarkerWindowOpened = (idx) => {
    return openedMarkerIndex === idx;
  };

  // onMarkerClustererClick = ()=>{
  // }

  const url = `https://maps.googleapis.com/maps/api/js?key=${API_GOOGLE_MAP_ACCESS_KEY}&libraries=geometry,drawing,places`;

  // console.log('markers=>', markers)

  return (
    <WrappedMap
      googleMapURL={url}
      minZoom={2}
      markers={props.markers}
      loadingElement={
        <div
          style={{
            height: "100%",
          }}
        >
          <Loader
            type="ThreeDots"
            color="#0ca8fd"
            height={70}
            width={70}
            // timeout={3000} //3 secs
          />
        </div>
      }
      containerElement={
        <div
          style={{
            height: `100%`,
            width: "100%",
            padding: 0,
          }}
        />
      }
      mapElement={<div style={{ height: `100%` }} />}
      defaultCenter={{
        lat: props.defaultCenter.lat,
        lng: props.defaultCenter.lng,
      }}
      defaultZoom={props.zoom}
      places={places}
      counter={counter}
      likes={likes}
      getMarkerOnClick={getMarkerOnClick}
      onMarkerWindowClose={onMarkerWindowClose}
      isMarkerWindowOpened={isMarkerWindowOpened}
      onMapMounted={onMapMounted}
      onBoundsChanged={onBoundsChanged}
      onTilesLoaded={onTilesLoaded}
      //onMarkerClustererClick={onMarkerClustererClick}
    />
  );
};
// export default MyGoogleMap;
