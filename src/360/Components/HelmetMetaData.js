import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function HelmetMetaData(props) {
   let location = useLocation();
   let currentUrl = props.url !== undefined ?  props.url : "https://walkin-prototype.herokuapp.com/" + location.pathname;
   let quote = props.quote !== undefined ? props.quote : "";
   let title = props.title !== undefined ? props.title : "Walkin360 - World is yours to explore";
   let image = props.image !== undefined ? props.image : "https://walkin-prototype.herokuapp.com/banner.png";
   let description = props.description !== undefined ? props.description  : "The description about this link";
   let hashtag = props.hashtag !== undefined ? props.hashtag : "#walkin";
   console.log('hashtag=>', hashtag);
   console.log('title=>', title);
   console.log('description=>', description);
   console.log('image=>', image);
return (
 <Helmet>
   <title>{title}</title>
   <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   {/* <meta name="csrf_token" content="" />
   <meta property="type" content="website" />
   <meta property="url" content={currentUrl} data-react-helmet="true"/>
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
   <meta name="msapplication-TileColor" content="#ffffff" />
   <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
   <meta name="theme-color" content="#ffffff" />
   <meta name="_token" content="" />
   <meta name="robots" content="noodp" />*/}
   <meta property="title" content={title} data-react-helmet="true"/>
   <meta property="quote" content={quote} data-react-helmet="true"/>
   <meta name="description" content={description} data-react-helmet="true"/> 
   <meta property="image" content={image} data-react-helmet="true"/>
   <meta property="og:locale" content="en_US" data-react-helmet="true"/>
   <meta property="og:type" content="website"data-react-helmet="true" />
   <meta property="og:title" content={title} data-react-helmet="true"/>
   <meta property="og:quote" content={quote} data-react-helmet="true"/>
   <meta property="og:hashtag" content={hashtag} data-react-helmet="true"/>
   <meta property="og:image" content={image} data-react-helmet="true" />
   <meta content="image/*" property="og:image:type" data-react-helmet="true"/>
   <meta property="og:url" content={currentUrl} data-react-helmet="true"/>
   <meta property="og:site_name" content="Walkin360" data-react-helmet="true"/>
   <meta property="og:description" content={description} data-react-helmet="true"/>    
</Helmet>
);
}