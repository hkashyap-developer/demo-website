'use client'

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SlickSlider.css'
import Image from 'next/image'
import HeroHomeSlide from "./HeroHomeSlide";
import ApiWork from "./ApiWork";

import { useState } from "react";

export default function SimpleSlider() {

  var settings = {
    dots: false,
    buttons:true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    pauseOnHover: false,
    waitForAnimate: false,
    nextArrow: <ChevronRightIcon />,
    prevArrow: <ChevronLeftIcon />
  };
  return (

    <>

    <Slider 

    {...settings}>


      <HeroHomeSlide
        title="Punjab"
        subTitle="The Land of Timeless Heritage living Forever"
        bgImage="/global/banners/punjab.jpg"
        cardLink="/destinations/punjab"
      />

      <HeroHomeSlide
        title="Uttarakhand"
        subTitle="The Land of Indian Nature & Holy Mountains"
        bgImage="/global/banners/uttarakhand-2.jpg"
        cardLink="/destinations/uttarakhand"
      />





    </Slider>



    </>


  );
}


function ChevronLeftIcon(props:any) {
    return (
        <Image {...props} src="/global/banners/left.png" width="160" height="160" alt="Left Slide Icon"/>
    )
  }
  
  
  function ChevronRightIcon(props:any) {
    return (
        <Image {...props} src="/global/banners/right.png" width="160" height="160" alt="Right Slide Icon"/>
    )
  }