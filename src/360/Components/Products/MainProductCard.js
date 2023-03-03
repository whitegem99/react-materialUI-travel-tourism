import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ContentLoader, { Facebook } from "react-content-loader";
import IconButton from "@material-ui/core/IconButton";
import { UncontrolledTooltip } from "reactstrap";
import userImg from "../../Assets/profile-user.png";
import {
  PlayCircle,
  Image,
  Eye,
  Clock,
  CheckSquare,
  Square,
} from "react-feather";
import { Card, CardBody, CardImg, Badge, Col, Button } from "reactstrap";
import * as Icon from "react-feather";
import axios from "axios";
import { ProductContext } from "../../context/products";
import { UserContext } from "../../context/user";
import Playbtn from "../../Assets/play360.svg";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={200}
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

const MyLoader1 = (props) => (
  <ContentLoader
    speed={2}
    width={35}
    height={70}
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

export default function MainProductCard({
  counter,
  title,
  pr,
  id,
  price,
  description,
  category,
  link,
  city,
  tag,
  long,
  className,
  index,
  time,
  havePassword,
  publish,
  imageUser,
  tourCreator,
  email,
  userId,
  // SpinnerType,
  imgsData,
  // SpinnerText,
}) {
  const history = useHistory();
  const [puplish, setpuplish] = React.useState(false);
  const { updateProduct } = React.useContext(ProductContext);
  const { user } = React.useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [uuid1, setUuid1] = useState("");
  const [image, setimage] = useState(null);
  const [panoramaImages, setPanoramaImages] = useState([]);
  const [product, setProduct] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [usersTouse, setUsersTouse] = useState([]);
  const [imageUsero, setImageUsero] = useState([]);
  console.log(uuid1);
  const ids = counter.filter((item) => {
    return item.uuid1 === uuid1;
  });

  const idss = ids.map((item) => {
    return item._id;
  });
  const con = ids.map((item) => {
    return item.count;
  });

  // counter end
  //=================
  const ShowPlaces = () => {
    setLoading(true);
    // axios.get(`/api/places/${id}`).then((res) => {
    //   console.log(res.data);
    //   console.log(JSON.parse(res.data.place.image));
    //   setPanoramaImages(JSON.parse(res.data.place.imgsData[0]));
    //   setProduct(res.data);
    //   setUuid1(res.data.place.uuid1);
    //   setimage(JSON.parse(res.data.place.image));
    //  setInterval(() => {
    //   setLoading(false)
    //  },500);
    // });
    setPanoramaImages(JSON.parse(pr.imgsData[0]));
    setProduct(pr);
    setUuid1(pr.uuid1);
    setimage(JSON.parse(pr.image));
    setInterval(() => {
      setLoading(false);
    }, 500);
  };
  const showUsers = () => {
    axios.get(`/api/users`).then((res) => {
      setAllUsers(res.data);
      // console.log(res.data);
      setImageUsero(
        res.data.filter((item) => {
          return item._id === userId;
        })
      );
    });
  };
  const [usernamo, setUsernamo] = useState(
    imageUsero.filter((item) => {
      return item.username;
    })
  );

  //=================
  React.useEffect(() => {
    showUsers();
    ShowPlaces();
  }, []);

  // ===============
  const click = (id) => {
    history.push(`/placesUsers/${id}`, {
      producto: {
        imgsData,
      },
    });

    axios.put(`/api/counter/${idss}/increment/`).then((res) => {
      console.log(res.data);
    });
  };
  const handleClickFeatured = (checked) => (e) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const placeInfo = { ...pr, featured: checked };
    axios
      .put(`/api/places/${id}`, placeInfo, config)
      .then((res) => {
        console.log('handleClickFeatured=>', res);
        updateProduct(res.data.place);
        setProduct(res.data.place);
        // window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };
  //=================
  return (
    <>
      <Card1>
        <Col lg="12">
          <div className="whole-card">
            <Card>
              <CardBody>
                <div className="image-card">
                  {image ? (
                    <>
                      <CardImg
                        className="img-fluid mb-2"
                        src={image.uploadInfo.thumbnail_url}
                        alt="card image cap"
                      />
                      {user.user && user.user.isAdmin && (
                        <IconButton
                          aria-label="featured"
                          style={{
                            outline: "none",
                            backgroundColor: "rgba(255,0,0,0.0)",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            color: "white",
                            zIndex: "1111111",
                            cursor: "pointer",
                          }}
                        >
                          {product.featured ? (
                            <>
                              <CheckSquare
                                id="featured"
                                size={30}
                                style={{
                                  color: "white",
                                  zIndex: "1111111",
                                  cursor: "pointer",
                                }}
                                onClick={handleClickFeatured(false)}
                              />
                              <UncontrolledTooltip
                                placement="right-start"
                                target="featured"
                              >
                                Unset featured place
                              </UncontrolledTooltip>
                            </>
                          ) : (
                            <>
                              <Square
                                id="unfeatured"
                                size={30}
                                style={{
                                  color: "white",
                                  zIndex: "11",
                                  cursor: "pointer",
                                }}
                                onClick={handleClickFeatured(true)}
                              />
                              <UncontrolledTooltip
                                placement="right-start"
                                target="unfeatured"
                              >
                                Set featured place
                              </UncontrolledTooltip>
                            </>
                          )}
                        </IconButton>
                      )}
                      <div className="playcircle" onClick={() => click(pr._id)}>
                        <img
                          src={Playbtn}
                          style={{
                            // color: "#0ca8fd",
                            position: "absolute",
                            width: "50px",
                            height: "50px",
                            left: "50%",
                            top: "50%",
                            color: "white",
                            // color: "#0ca8fd",
                            zIndex: "1111111",
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                          }}
                        ></img>
                        {/* <PlayCircle
                          size={70}
                          className="visited"
                          style={{
                            // color: "#0ca8fd",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            color: "white",
                            // color: "#0ca8fd",
                            zIndex: "1111111",
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                          }}
                        ></PlayCircle> */}
                        <div
                          style={{
                            // color: "#0ca8fd",
                            position: "absolute",
                            left: "50%",
                            bottom: "20%",
                            color: "white",
                            // color: "#0ca8fd",
                            zIndex: "1111111",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            fontSize: "10px",
                            whiteSpace: "nowrap",
                            textTransform: "capitalize",
                          }}
                        >
                          Credit:{" "}
                          {imageUsero.map((item) => {
                            return item.username;
                          })}
                        </div>

                        <div className="overlay" />
                      </div>
                      {loading ? (
                        <div
                          style={{
                            position: "absolute",
                            padding: "5px",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50px",
                            left: "50%",
                            bottom: "20px",
                            color: "white",
                            backgroundColor: "white",
                            zIndex: "1111111",
                            transform: "translate(-50%, 50%)",
                            cursor: "pointer",
                            border: "4px solid white",
                          }}
                        >
                          {MyLoader1()}
                        </div>
                      ) : (
                        <>
                          {" "}
                          {imageUsero ? (
                            <img
                              src={imageUsero.map((item) => {
                                return item.image;
                              })}
                              style={{
                                position: "absolute",
                                width: "40px",
                                height: "40px",
                                borderRadius: "40px",
                                left: "50%",
                                bottom: "20px",
                                color: "white",

                                zIndex: "11",
                                transform: "translate(-50%, 50%)",
                                cursor: "pointer",
                                // border: "4px solid white",
                              }}
                              onClick={() => {
                                return history.push(`/UserProfileID/${userId}`);
                              }}
                            ></img>
                          ) : (
                            <img
                              src={userImg}
                              style={{
                                // color: "#0ca8fd",
                                position: "absolute",
                                width: "40px",
                                height: "40px",
                                borderRadius: "40px",
                                left: "50%",
                                bottom: "20px",
                                color: "white",
                                // color: "#0ca8fd",
                                zIndex: "1111111",
                                transform: "translate(-50%, 50%)",
                                cursor: "pointer",
                                // border: "4px solid white",
                              }}
                              onClick={() => {
                                return history.push(`/UserProfileID/${userId}`);
                              }}
                            ></img>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    MyLoader()
                  )}
                </div>

                <h4
                  style={{ textAlign: "center", textTransform: "capitalize" }}
                  className="mt-2"
                >
                  {title}
                </h4>

                <h6
                  style={{
                    textAlign: "center",
                    fontSize: "8px",
                  }}
                >
                  <Clock size={15} style={{ marginRight: "5px" }} />
                  {time}
                </h6>

                <div className="divider divider-primary">
                  <hr style={{ backgroundColor: "#d1d1d1" }} />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 100px",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20px",
                    // border: "1px solid red",
                  }}
                  className="mb-2"
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "10% 90%",
                      gap: "25px",
                      alignSelf: "center",
                      justifySelf: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image size={17}></Image>
                    <span>{panoramaImages.length}</span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "10% 90%",
                      gap: "25px",
                      alignSelf: "center",
                      justifySelf: "center",
                      alignItems: "center",
                    }}
                  >
                    <Eye size={17}></Eye>
                    <span>{con}</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Card1>
    </>
  );
}

const Card1 = styled.div`
  .card-img {
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }
  margin: 1rem 0rem;
  .whole-card {
  }
  .card-body {
    padding: 0rem;
    border: 1px solid #dbdbdb;
  }

  .whole-card:hover {
    -webkit-box-shadow: 0px 11px 5px 4px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 11px 5px 4px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 11px 5px 4px rgba(0, 0, 0, 0.07);
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 90.5%;
    top: 0px;
    left: 0px;
    background-color: black;
    border-radius: 0px;
  }

  .image-card {
    position: relative;
  }
  .image-card:hover .overlay {
    opacity: 0.6;
    transition: opacity 1s;
  }
  .playcircle {
    opacity: 0;
    cursor: pointer;
  }
  .image-card:hover .playcircle {
    opacity: 1;

    transition: all 0.8s;
  }
  .description {
    max-height: 0px;
    min-height: 0px;
  }
  .badge-glow {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 7px;
  }
  .setting-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 7px;
  }
  .share-btn {
    position: absolute;
    top: 15px;
    right: 50px;
    padding: 7px;
  }
  .puplish-btn {
    background-color: rgba(40, 199, 111, 1);

    position: absolute;
    top: 15px;
    left: 45px;
    padding: 4px;
    box-shadow: 0px 0px 2px #fff;
    border-radius: 30px;
  }
  .unpuplish-btn {
    background-color: rgba(228, 39, 40, 1);

    position: absolute;
    top: 15px;
    left: 45px;
    padding: 4px;
    box-shadow: 0px 0px 2px #fff;
    border-radius: 30px;
  }
  .index {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 6px 8px;
    border-radius: 30px;
  }
  .have-password {
    /* background-color: rgba(12, 168, 253, 1); */
    background-color: rgba(228, 39, 40, 1);

    position: absolute;
    top: 15px;
    left: 75px;
    padding: 4px;
    box-shadow: 0px 0px 2px #fff;
    border-radius: 30px;
  }
  .do-not-have-password {
    background-color: #28c76f;
    /* background-color: red; */
    position: absolute;
    top: 15px;
    left: 75px;
    padding: 4px;
    box-shadow: 0px 0px 2px #fff;
    border-radius: 30px;
  }
`;
