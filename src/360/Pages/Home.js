import React, { useState } from "react";
import Frame from "../Pages/FrameLoginHomePage";
import imaga from "../Assets/360i.jpg";
import styled from "styled-components";
import { media } from "../styled";
import { useHistory } from "react-router-dom";
import style360 from "../style360.css";
import { Button } from "reactstrap";
import { UserContext } from "../context/user";
import mock1 from "../Assets/222.png";
import mock2 from "../Assets/280.png";
import mock3 from "../Assets/164.png";
import mock4 from "../Assets/OT11BK1.png";
import Loading from "../Pages/Loading";
import Carousel from "@brainhubeu/react-carousel";
import img1 from "../Assets/nice.jpg";
import img2 from "../Assets/shutterstock_571310962.jpg";
import img3 from '../Assets/sm.jpg';
import thumb1 from "../Assets/thumb1jpg.jpg";
import thumb2 from "../Assets/thumb2..jpg";
import thumb3 from "../Assets/thumb3..jpg";
import Loading1 from "../../components/@vuexy/spinner/Loading-spinner";
import "@brainhubeu/react-carousel/lib/style.css";
import { ArrowDown} from "react-feather";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Pannellum, PannellumVideo } from "pannellum-react";
import Typewriter from 'typewriter-effect';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isMobileOnly,
} from "react-device-detect";
export default function Home() {
  const history = useHistory();
  const { user } = React.useContext(UserContext);
  const [rotation, setrotation] = useState(true);
  const [imagesCarousel, setimagesCarousel] = useState(img3);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false);
 const [rotatePan, setRotatePan] = useState(5);

  React.useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 500);
  },[]);

  const change1 = (image) => {
    setLoading1(true);
    setInterval(() => {
      setLoading1(false);
    }, 1000);
    setimagesCarousel(image);
  };
  if (loading) {
    return <Loading />;
  }
  return (
   
    <div  id="page-wrap">

      <Slider>
    
        <div className="slider" style={{height:'100vh', maxHeight:'100vh!important'}}>
        {isMobileOnly? <>
          <Pannellum
          image={imagesCarousel}
          hfov={70}
  
          width="100vw!important"
          autoLoad
          showControls={false}
          autoRotate={rotatePan}	
          height="100vh!important">
          </Pannellum>
        </> :
         <>
         <Pannellum
          image={imagesCarousel}
          hfov={140}
  
          width="100vw!important"
          autoLoad
          showControls={false}
          autoRotate={rotatePan}	
          height="100vh!important">
          </Pannellum>
         </>}
        
        </div>
        <div className="cover1" />
        <div className="cover-text">
          <Zoom clear duration={200}>
          <h1 
          className="text-slider"
            style={{
              color: "white",
            }}
          ><Typewriter
          options={{
            strings: ['Walkin, Create & publish your virtual tours Online.', 'Start for Free'],
            autoStart: true,
            loop: true,
          }}
        />
            
          </h1>
          </Zoom>
          <div className="button-row">
            <div className="btnn">
              {user.user ? (
                <Jump delay={100}>
                <Button.Ripple
                  color="primary"
                  className="mr-1 mb-1"
                  size="lg"
                  onClick={() => {
                    history.push("/pages/HomePage");
                  }}
                  onMouseOut={() => {
                    return setRotatePan(5);
                  }}
                  onMouseOver={() => {
                    return setRotatePan(0);
                  }}
                >
                  {" "}
                  DASHBOARD
                </Button.Ripple>
                </Jump>
              ) : (
                <Jump delay={100}>
                <Button.Ripple
                  color="primary"
                  className="mr-1 mb-1"
                  size="lg"
                  onClick={() => {
                    history.push("/login");
                  }}
                  onMouseOut={() => {
                    return setRotatePan(5);
                  }}
                  onMouseOver={() => {
                    return setRotatePan(0);
                  }}
                >
                  {" "}
                  SIGN IN
                </Button.Ripple>
                </Jump>
              )}
            </div>

            <div className="btnn1">
            <Jump delay={100} >
              <Button.Ripple
                color="primary"
                className="mr-1 mb-1"
                size="lg"
                onClick={() => {
                  history.push("/alltours");
                }}
                onMouseOut={() => {
                  return setrotation(true);
                }}
                onMouseOver={() => {
                  return setrotation(false);
                }}
              >
                {" "}
                EXPLORE 360
              </Button.Ripple>
              </Jump>
            </div>
          </div>
        </div>
        {loading1 ? (
          <div
            className="loaderimagescarousel"
            style={{
              zIndex: "11111",
              position: "absolute",
              left: "50%",
              top: "75%",
            }}
          >
            <Loading1 />
          </div>
        ) : (
          ""
        )}

        {/* {
          <div className="carouseldown">
            <Carousel
              arrows
              infinite
              animationSpeed={100}
              offset={10}
              itemWidth={50}
              plugins={["arrows"]}
            >
              <div
                className={`${
                  imagesCarousel === imaga ? "active" : "notactive"
                }`}
              >
                <img
                  className="image1"
                  src={thumb1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                  onMouseOut={() => {
                    return setrotation(true);
                  }}
                  onMouseOver={() => {
                    return setrotation(false);
                  }}
                  onClick={() => change1(imaga)}
                />
              </div>
              <div
                className={`${
                  imagesCarousel === img1 ? "active" : "notactive"
                }`}
              >
                <img
                  className="image1"
                  src={thumb3}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                  onMouseOut={() => {
                    return setrotation(true);
                  }}
                  onMouseOver={() => {
                    return setrotation(false);
                  }}
                  onClick={() => change1(img1)}
                />
              </div>

              <div
                className={`${
                  imagesCarousel === img2 ? "active" : "notactive"
                }`}
              >
                <img
                  className="image1"
                  src={thumb2}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    cursor: "pointer",
                  }}
                  onMouseOut={() => {
                    return setrotation(true);
                  }}
                  onMouseOver={() => {
                    return setrotation(false);
                  }}
                  onClick={() => change1(img2)}
                />
              </div>
            </Carousel>
          </div>
        } */}
      </Slider>
    
      <BigImage>
        {/* walkin section */}
        <Fade right cascade>
      <div className="containerImage">

        
        <div className="aboutLeft" style={{display:'grid', gridTemplateColumns:'1fr'}}>
        <div>
        <h1 className="pb-3" style={{textAlign:'center',textTransform:'uppercase'}}>Walkin360</h1>
        <p style={{textAlign:'center'}} >
            A powerful application for unlimited creativity Walkin builds the
            most powerful and flexible tools for anyone to create and publish a
            360° Virtual Tour. Whether your are a Real Estate Agent, 360°
            photographer, web designer, hotelier or travel agency, Walkin'
            Application with its unmatched functionality, ease of use and
            professional approach helps you create the most beautiful & elegant
            panoramic tours for your users. Thousands of individuals, amateurs &
            professionals, from around the world are more creative and selling
            faster by building their Virtual Tours on Walkin..
          </p>
          </div>
          <div className='pt-4' style={{ justifySelf:'center'}}>

          <div className="btnn">
              {user.user ? (
                <Button.Ripple
                  color="primary"
                  className="mr-1 mb-1"
                  size="lg"
                  onClick={() => {
                    history.push("/pages/HomePage");
                  }}
                  onMouseOut={() => {
                    return setrotation(true);
                  }}
                  onMouseOver={() => {
                    return setrotation(false);
                  }}
                >
                  {" "}
                  DASHBOARD
                </Button.Ripple>
              ) : (
                <Button.Ripple
                  color="primary"
                  className="mr-1 mb-1"
                  size="lg"
                  onClick={() => {
                    history.push("/login");
                  }}
                  onMouseOut={() => {
                    return setrotation(true);
                  }}
                  onMouseOver={() => {
                    return setrotation(false);
                  }}
                >
                  {" "}
                  JOIN TODAY
                </Button.Ripple>
              )}
            </div>
              </div>
        </div>
         
         
          <div className="imageRight">
          <img src={mock1} style={{width:"100%"}} className="mock1" /> 
          </div>
      </div>
        {/* dashboard section */}
        </Fade>
                  {/* dashbaord section */}
        <Fade left cascade>
      <div className="containSecond">
      <div className="imageSecond">
          <img src={mock2} style={{width:"100%"}} className="mock2" /> 
          </div>
      <div className="abouSecond" style={{display:'grid', gridTemplateColumns:'1fr'}}>
      <h1 className="pb-3" style={{textAlign:'center',color:'white',textTransform:'uppercase'}}>Dashboard</h1>
        
        <p style={{textAlign:'center',color:'white'}} >
            A powerful application for unlimited creativity Walkin builds the
            most powerful and flexible tools for anyone to create and publish a
            360° Virtual Tour. Whether your are a Real Estate Agent, 360°
            photographer, web designer, hotelier or travel agency, Walkin'
            Application with its unmatched functionality, ease of use and
            professional approach helps you create the most beautiful & elegant
            panoramic tours for your users. Thousands of individuals, amateurs &
            professionals, from around the world are more creative and selling
            faster by building their Virtual Tours on Walkin..
          </p>
          <Fade top count="2">
    
          <div style={{display:'grid', gridTemplateColumns:'1fr', marginTop:'1rem'}}>
         
          <ArrowDown size={30} color="white" className='mt-2' style={{ justifySelf:'center'}}/>
          </div>
       
          </Fade>
       
        </div> 
      </div>
      </Fade>

              {/* tour settings */}
              <Fade right cascade>
           
      <div className="containThird" >
     
        <div className="aboutThird" style={{display:'grid', gridTemplateColumns:'1fr'}}>
        <h1 className="pb-3" style={{textAlign:'center',color:'white',textTransform:'uppercase'}}>TOUR SETTINGS</h1>
        <p style={{textAlign:'center',color:'white'}} >
            A powerful application for unlimited creativity Walkin builds the
            most powerful and flexible tools for anyone to create and publish a
            360° Virtual Tour. Whether your are a Real Estate Agent, 360°
            photographer, web designer, hotelier or travel agency, Walkin'
            Application with its unmatched functionality, ease of use and
            professional approach helps you create the most beautiful & elegant
            panoramic tours for your users. Thousands of individuals, amateurs &
            professionals, from around the world are more creative and selling
            faster by building their Virtual Tours on Walkin..
          </p>
          <Fade top count="5">
          <div style={{display:'grid', gridTemplateColumns:'1fr', marginTop:'1rem'}}>
            
          <ArrowDown size={30} color="white" className='mt-2' style={{ justifySelf:'center'}}/>
          </div>
          </Fade>
        </div>
        <div className="imageThird" style={{alignSelf:'end'}}>
  
          <img src={mock3} style={{width:"100%"}} className="mock3"/> 
          </div>
      </div>

      </Fade>
                {/* hotspots settings */}
                <Fade bottom cascade>
      <div className="containFour">
      <div className="imageFour" >

       <img src={mock4}  className="mock4" /> 
       </div>
     <div className="aboutFour" style={{display:'grid', gridTemplateColumns:'1fr'}}>
     <h1 className="pb-3" style={{textAlign:'center',color:'white',textTransform:'uppercase'}}>hotspot SETTINGS</h1>
     <p style={{textAlign:'center',color:'white'}} >
         A powerful application for unlimited creativity Walkin builds the
         most powerful and flexible tools for anyone to create and publish a
         360° Virtual Tour. Whether your are a Real Estate Agent, 360°
         photographer, web designer, hotelier or travel agency, Walkin'
         Application with its unmatched functionality, ease of use and
         professional approach helps you create the most beautiful & elegant
         panoramic tours for your users. Thousands of individuals, amateurs &
         professionals, from around the world are more creative and selling
         faster by building their Virtual Tours on Walkin..
       </p>
       {/* <ArrowDown size={30} color="white" className='mt-2' style={{ justifySelf:'center'}}/> */}
     </div>
    
   </div>
      </Fade>
      </BigImage>
     
    </div>

  );
}

const Slider = styled.div`

  .carouseldown {
  }
  .image {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .image1:hover {
    opacity: 0.8;

    transition: all 0.2s;
  }
  .active {
    border: 3px solid white;
    border-radius: 50px;
  }
  .notactive {
  }
  .BrainhubCarousel__container {
    width: 263px;
    position: absolute;
    bottom: 10%;
    left: 50%;

    transform: translate(-53%, 50%);
    /* background-color: rgba(0, 0, 0, 0.6); */

    z-index: 2;

    /* background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.4713235636051295) 100%
    ); */
  }
  .BrainhubCarousel__arrows {
    background-color: transparent !important;
    outline: none;
  }
  .slider {
    width: 100vw;
    height: calc(100vh - 55px);
    height: 100vh;
  }
  .cover1 {
    background: black;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    z-index: 1;
  }
  .cover-text {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    /* height: 30%; */
    transform: translate(-50%, -50%);
    color: white !important;
 
    text-align: center;
    z-index: 10;
  }
  .button-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 3rem;
    justify-items: center;

    gap: 1rem;
  }
  .btnn {
    justify-self: end;
  }
  .btnn1 {
    justify-self: start;
  }
  ${media.phone`
  .button-row {
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 3rem;
    justify-items: center;

    gap: 1rem;
  }
  .btnn {
    justify-self: center;
  }
  .btnn1 {
    justify-self: center;
  }
  `}
  .cover-text h1 {
    font-size: 25px;
    /* font-weight:bold; */
    text-transform: uppercase;
    letter-spacing: 1px
  }
  ${media.tablet`
  .button-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 3rem;
    justify-items: center;

    gap: 1rem;
  }
  .btnn {
    justify-self: end;
  }
  .btnn1 {
    justify-self: start;
  }
  .cover-text h1 {
    font-size: 20px;
  }
  `}

  ${media.desktop`
  .button-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 3rem;
    justify-items: center;

    gap: 1rem;
  }  .btnn {
    justify-self: end;
  }
  .btnn1 {
    justify-self: start;
  }
  .cover-text h1 {
    font-size: 30px;
  }
  `}

  ${media.large`
  .button-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 3rem;
    justify-items: center;

    gap: 1rem;
  }
  .btnn {
    justify-self: end;
  }
  .btnn1 {
    justify-self: start;
  }
  .cover-text h1 {
    font-size: 30px;
  }
  `}
`;

const BigImage= styled.div`

.backgroudBigImage{
  background-image: linear-gradient(to left, rgb(235, 235, 235), rgb(237, 237, 237), rgb(238, 238, 238), rgb(240, 240, 240), rgb(241, 241, 241), rgb(243, 243, 243), rgb(244, 244, 244), rgb(246, 246, 246), rgb(247, 247, 247), rgb(249, 249, 249), rgb(250, 250, 250), rgb(252, 252, 252));
}

.containerImage{
  padding-top:2rem;
  display:grid;
  padding-bottom:3rem;

}
.containSecond{
  padding-top:1rem;
  display:grid;

  background-color:black;

}
.containThird{
  padding-top:1rem;

  display:grid;

  background-color:#0ca8fd;
}

.containFour{


display:grid;

background-color:black; 
}
/* about */
.aboutLeft{

  align-self:center;

}
.abouSecond{
 
  align-self:center;
}
.aboutThird{

  align-self:center;
}
.aboutFour{  

  align-self:center;
  }


/* image */
.imageRight{
  justify-self:center;
  margin:'4rem';
  padding-top:3rem;

}
.imageSecond{
  justify-self:center;
  margin:'4rem'

}
.imageThird{
  justify-self:end;
  margin:'4rem'
}
.imageFour{
  justify-self:center;
  margin:'4rem'
}


  ${media.phone`
  .containerImage{

  grid-template-columns:1fr ;
  height:auto;

}
.containSecond{
  padding-top:2rem;
grid-template-columns:1fr ;
height:auto;
padding-bottom:2rem;

}
.containThird{
  padding-top:2rem;
grid-template-columns:1fr;
height:auto; 
}
.containFour{
  padding-top:2rem;
grid-template-columns:1fr;
height:auto;  
}
.aboutLeft{
  padding:2rem;
}
.abouSecond{
  
  padding:2rem;
}
.aboutThird{
  padding:2rem; 
}

.aboutFour{
  padding:2rem;  
}
.mock1{
  padding:2rem;
  width:100%;
}
.mock2{
  padding:2rem;
  width:100%;
}
.mock3{
  padding:0rem;
  width:100%;
}
.mock4{
  padding:2rem;
  width:100%; 
}
`}



${media.tablet`
.containerImage{

grid-template-columns:1fr ;
height:100%;

}
.containSecond{

grid-template-columns:1fr ;
height:100%;
padding-bottom:2rem;

}
.containThird{
  padding-top:2rem;
grid-template-columns:1fr ;
height:100%;
}
.containFour{
padding-top:1rem;
grid-template-columns:1fr ;
height:100%;
}
.abouSecond{
  padding:2rem;
}
.aboutThird{
  padding:2rem; 
}
.aboutFour{
  padding:2rem;  
}
.mock1{
  padding:1rem;
  width:100%;
}
.mock2{
  padding:1rem;
  width:100%;
}
.mock3{
  padding:0rem;
  width:100%;
}
.mock4{
  padding:1rem;
  width:100%; 
}

`}  
${media.desktop`
.containerImage{

grid-template-columns:1fr ;
height:100%;
padding :0rem 5rem;

}
.containSecond{
  padding-top:1rem;
  grid-template-columns:1fr;
  height:100%;
  padding :0rem 5rem;

}
.containThird{
  padding-top:1rem;
  grid-template-columns:1fr;
  height:100%;

}
.containFour{

  grid-template-columns:1fr;
  height:100%;
  padding :0rem 5rem;
}
.aboutLeft{
  padding:5rem;
}
.abouSecond{
  padding:5rem;
}
.aboutThird{
  padding:5rem; 
}
.aboutFour{
  padding:5rem;  
}
.mock1{
  padding:5rem;
  width:100%;
}
.mock2{
  padding:5rem;
  width:100% ;
}
.mock3{
  padding:0rem;
  width:100%;
}
.mock4{
  padding:5rem;
  width:100% ;
}
`}



${media.large`
.containerImage{

grid-template-columns:1fr 2fr;
height:100vh;

}
.containSecond{
  padding-top:1rem;
grid-template-columns:2fr 1fr;
height:100vh;

}
.containThird{
  padding-top:1rem;
  grid-template-columns:1fr 2fr;
  height:100vh;
}
.containFour{

  grid-template-columns:2fr 1fr;
  height:100vh;
}
.aboutLeft{
  padding:5rem;
}
.abouSecond{
  padding:5rem;
}
.aboutThird{
  padding:5rem; 
}
.aboutFour{
  padding:5rem;
  justify-self:start;  
  
}
.mock1{
  padding:5rem;
  width:100%;
  
}
.mock2{
  padding:8rem 8rem;
  width:80% ;

}
.mock3{
  padding:0rem;
  width:100%;
}
.mock4{
  padding:8rem 5rem;
  width:80% ;


}
`}  
`