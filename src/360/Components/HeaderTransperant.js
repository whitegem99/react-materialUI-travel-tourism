import React, { useState, useEffect,useLayoutEffect } from "react";
import {  useHistory } from "react-router-dom";
import LoginLink from "./LoginLink";
import { UserContext } from "../context/user";
import Logo from "../Assets/logo.png";
import LogoBlack from "../Assets/dahsboardLogo.png";
import Jello from 'react-reveal/Jello';
import { bubble	 as Menu } from 'react-burger-menu';
import Hamburger from '../Assets/burgermenu.svg';
import FacebookBtn from '../Assets/facebookblack.svg';
import TwitterBtn from '../Assets/twitterblack.svg';
import LinkedBtn from '../Assets/linkidblack.svg';
import { Button } from "reactstrap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isMobileOnly,
} from "react-device-detect";
import {

  Navbar,
  Nav,

} from "react-bootstrap";
import { Mail,Home, Disc, Paperclip } from "react-feather";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";

export default function Header(props) {
  
  const [lockScroll, setLockScroll] = useState(false)
  const {isOpenMenu} =props
  const [isOpen, setisOpen] = useState(false);
  const {
    user,
    userLogout,

  } = React.useContext(UserContext);
  const history = useHistory();
  const showSettings= (event)=> {
    event.preventDefault();
  }
const handelopen=()=>{
  console.log('opened')
}
  return (
    <>
    {console.log(isMobileOnly)}
    {isMobileOnly ? <>
      <Whole>
 
 <div className="whole">
   <Navbar bg="dark1" variant="dark" collapseOnSelect expand="lg">

     <Navbar.Brand href="/">
     <Jello delay="1000">
       <img
         src={Logo}
         className="brandnew"
         style={{ width: "120px", padding: "4px 4px" }}
       />
           </Jello>
     </Navbar.Brand>
  

     <div >
       
    
         
         <Menu   isOpen={ isOpenMenu } width={ '85% ' } right customBurgerIcon={ <img src={Hamburger}/> }  >
        {/* logo */}
        <div style={{position:'relative', width:'100%',top:'3%',left:'0px', display:'flex',justifyContent:'center',  borderStyle:'none!important',border: 'none!important',outline:'none'}}><img src={LogoBlack} style={{height:'60px'}}></img></div>
         {user.user && (
           // user picture
  <div style={{position:'relative', width:'100%',top:'5%',left:'0px', display:'flex', justifyContent:'center',borderStyle:'none!important',border: 'none!important',outline:'none'}}>
   <img
                 src={user.user.image}
                 alt=""
            
                 style={{
                   width: "60px",
                   height: "60px",
                   borderRadius: "30px",
                   marginLeft: "0px",
                   paddingLeft: "0px",
                   cursor: "pointer",
                   border:'0px solid black',
                 }}
                 onClick={() => history.push("/pages/HomePage")}
               />
           
   </div>)}

   {user.user && (
     // user name h
   <h5 style={{position:'relative', width:'100%',top:'5%',left:'0px', display:'flex', justifyContent:'center',borderStyle:'none!important',border: 'none!important',outline:'none',marginTop:'20px', color:'black'}}>{user.user.username}</h5>)}
       {/* menu */}
                 <div style={{position:'relative', width:'100%',top:'10%',left:'0px',display:'grid',gridTemplateColumns:'1fr', justifyContent:'center',gap:'15px',borderStyle:'none!important',outline:'none'}}>
   <div style={{justifySelf:'center'}}>
   <a id="home" className="menu-item" href="/" > <h5 style={{color:'black'}}>Home</h5> </a>
   </div>
   <div style={{justifySelf:'center'}}>
   <a id="contact" className="menu-item" href="/alltours"><h5 style={{color:'black'}}>Explore</h5></a>
   </div>
   <div style={{justifySelf:'center'}}>
   <a id="contact" className="menu-item" href="/contactus"><h5 style={{color:'black'}}>Contact</h5></a>
   </div>
   <div style={{justifySelf:'center'}}>
   <a id="contact" className="menu-item" href="/contactus"><h5 style={{color:'black'}}>Pricings</h5></a>
   </div>
 

   </div>
   {user.user && user.user.isEditor && <>
     <div style={{position:'fixed', width:'100%',top:'3%',left:'20px', display:'flex',justifyContent:'start'}}>
<a id="contact" className="menu-item" href="/pages/HomePage"> <h6 style={{color:'black',textTransform:'uppercase'}}><Home size={30} style={{marginRight:'15px', }}/>Dashboard</h6></a>
</div>
   </>}
   {user.user ? <>
   
     
   <div onClick={()=>{
      userLogout();
      history.push("/");
   }} style={{position:'fixed', width:'100%',bottom:'12%',left:'0px', display:'flex',justifyContent:'center'}} ><h5 style={{color:'black'}}> LOGOUT </h5></div>
 </> : 
 
 
 <><div style={{position:'fixed', width:'100%',bottom:'12%',left:'0px', display:'flex',justifyContent:'center'}}>
    <a id="about"  href="/login"><h5 style={{color:'black'}}> LOGIN </h5></a>
    </div>
    <div style={{position:'fixed', width:'100%',top:'2%',left:'0px', display:'flex',justifyContent:'center'}}>
  
      </div>  
 </>}

   <div style={{position:'fixed', width:'100%',bottom:'3%',left:'0px', display:'flex',justifyContent:'center'}}>
     <img src={FacebookBtn} style={{ width:'40px', height:'40px' ,marginRight:'10px'}}></img>
     <img src={TwitterBtn} style={{ width:'40px', height:'40px',marginRight:'10px'}}></img>
     <img src={LinkedBtn} style={{ width:'40px', height:'40px',marginRight:'10px'}}></img>
     </div>
   {/* <a onClick={ showSettings } className="menu-item--small" href="">Settings</a> */}

 </Menu>
 
      
   
       </div>

   
  
       

 

   

     
  
 
   </Navbar>
 </div>

</Whole>


     </>  : <> 
     <Whole>
 
 <div className="whole">
   <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">

     <Navbar.Brand href="/">
     <Jello>
       <img
         src={Logo}
         className="brandnew"
         style={{ width: "120px", padding: "4px 4px" }}
       />
           </Jello>
     </Navbar.Brand>

     {/* </Fade> */}
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="mr-auto">
       {/* <Fade left> */}
        
         {/* </Fade> */}
       </Nav>
           {/* <Fade left > */}
       <Nav>
       <div style={{marginRight:'10px', marginTop:'4px'}}>
         <div>
         <Nav.Link
           justify="false"
           href="/alltours"
           style={{
             color: "white",
             fontSize: "14px",
             textTransform: "uppercase",
            
            
           }}
         >
           EXPLORE
         </Nav.Link>
         
         </div>
         </div>
         <div style={{marginRight:'10px', marginTop:'4px'}}>
         <div>
         <Nav.Link
           justify="false"
           href="/"
           style={{
             color: "white",
             fontSize: "14px",
             textTransform: "uppercase",
            
            
           }}
         >
           PRICING
         </Nav.Link>
         
         </div>
         </div>
         {user.user && user.user.isEditor && (
           <Nav.Link
           className="btno"
             style={{
               color: "white",
               fontSize: "13px",
               textTransform: "uppercase",
               marginRight:'5px'
             }}
             href="/pages/HomePage"
             //   style={{ color: headerFontColor, fontFamily: headerFontFamily }}
           >
               <Home/>
           </Nav.Link>
         )}
                   <Nav.Link
           justify="false"
           href="/contactus"
           className="btno"
           style={{
             color: "white",
             fontSize: "13px",
             textTransform: "uppercase",

           }}
         >
           <Mail/>
         </Nav.Link>
      <Nav.Link
className="btno"

          
           // style={{ color: headerFontColor, fontFamily: headerFontFamily }}
         >
           <LoginLink />
         </Nav.Link>

         {user.user && (
           <div>
             <img
               src={user.user.image}
               alt=""
          
               style={{
                 width: "30px",
                 height: "30px",
                 borderRadius: "30px",
                 marginLeft: "0px",
                 paddingLeft: "0px",
                 cursor: "pointer",
                 border: "0px solid white",
                 border:'2px solid white'
               }}
               onClick={() => history.push("/pages/HomePage")}
             />
           </div>
         )}
         {user.user ? <>
          {/* <div style={{marginLeft:'25px'}}> 
<Button.Ripple
                  color="primary"
                  className="mr-1"
                  
                  onClick={() => {
                    history.push("/pages/HomePage");
                  }}
              
                >
                
                 DASHBOARD
                </Button.Ripple>
                </div> */}
         
         
         </> : <>
          <div style={{marginLeft:'25px'}}> 
<Button.Ripple
                  color="primary"
                  className="mr-1"
                  
                  onClick={() => {
                    history.push("/login");
                  }}
              
                >
                
                  SING UP
                </Button.Ripple>
                </div>
         
         
         </>}
        
       </Nav>
  
     </Navbar.Collapse>
   </Navbar>
 </div>

</Whole>
</>
}
    
    </>
  );
}
const Whole = styled.div`
.navbar-dark .navbar-toggler-icon {
 
 background-image: url('https://res.cloudinary.com/dx1zby8rs/image/upload/v1611758669/sgknooerahmwftlrhn59.svg');
}

  .whole {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }
  .bg-dark {
    /* background-color: transparent !important; */
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  .bg-dark1 {
    /* background-color: transparent !important; */
    background-color: rgba(0, 0, 0, 0) !important;
    z-index:111111;
  }
  .navbar{
  padding:1rem 1rem;
}
  .navbar-dark .navbar-toggler {
    border: none !important;
  }
  /* Position and sizing of burger button */
  .bm-burger-button {
  position: relative;
  width: 40px;
  height: 40px;
  right: 0px;
  top: 0px;

}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #000000;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
  top:0px;
  right:0px;
}

/* General sidebar styles */
.bm-menu {
  background:#ffffff;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;

  width:100%!important;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill:#ffffff;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
  overflow:hidden;
}

/* Individual item */
.bm-item {
  display: inline-block;


}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  right:0px;
  top:0px;
}
.menu-item{
  padding-bottom:5px;
}
.bm-cross{
  background:black;

}
`;
