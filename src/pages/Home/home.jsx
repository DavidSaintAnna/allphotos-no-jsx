import React from "react";
import PhotoBox from "./photobox.jsx";
import './home.css'

function imgAreaGeneration(imgArray) {
  let tagArea = [];
  imgArray.forEach(element => {
    tagArea.push( React.createElement(PhotoBox, {
      name: element.name,
      imgTag: element.img,
      description: element.description
    }));
    document.getElementById("photos-display").innerHTML += `
    <div class='photo-box'>
    <div class="photo-box-header">
      <img src="/src/assets/imgProfile.jpeg" alt="" /> 
      <p>${element.name}</p>
    </div>
    <div class="photo-box-body">${element.img}</div>
    <div class="photo-box-footer">
        <p class="photo-box-description">${element.description}</p>
    </div>
  </div>`;
  });
  const theReturn = tagArea;
  console.log(theReturn);
  return theReturn;
} 

export const Home = () => {
  return React.createElement("div", {
    id: "homepage"
  }, React.createElement("img", {
    src: "/src/assets/BackgroundImage.png",
    id: "backgroundImg"
  }), React.createElement("div", {
    id: "navbar-home"
  }, React.createElement("div", {
    id: "right-homebar-area"
  }, React.createElement("img", {
    src: "/src/assets/Logo.svg",
    alt: "",
    id: "logo-svg-homebar"
  }), React.createElement("p", null, "AllPhotos")), React.createElement("div", {
    id: "left-homebar-area"
  }, React.createElement("button", {
    id: "photosUpload"
  }, "+"), React.createElement("p", {
    id: "username-navbar"
  }, "Username"), React.createElement("button", {
    id: "btn-profile"
  }, React.createElement("img", {
    src: "/src/assets/imgProfile.jpeg",
    id: "imgProfile"
  })))), React.createElement("div", {
    id: "photos-display"
  }));
};