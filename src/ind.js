import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Navbar() {
  return (
    <div id="navbar">
        <a href="./index.html">Home</a>
        <a href="./user_profile.html">Profile</a>
        <a href="#">Links</a>
    </div>
  );
}

function DoNothingSubsection() {
  return (
    <div class="subsection">
        <div>
            Click the button below to do nothing!
        </div>
    </div>
  )
}
    
function SlideshowContainer() {
  return (
    <div class="slideshow-container">
      <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="img1.jpg" style="width:100%"></img>
        <div class="text">Caption Text</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="img2.jpg" style="width:100%"></img>
        <div class="text">Caption Two</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="img3.jpg" style="width:100%"></img>
        <div class="text">Caption Three</div>
      </div>
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
    
  );

  function SearchSubsection() {
    return (
      <div class="subsection">
        <div>
             <b>Pokedex Search:</b> Input a pokemon name below.
        </div>
        <input id="input-number" placeholder="Enter pokemon name"></input>
        <button class="btn" id="poke-btn">Click to find pokemon</button>
        <div class="fact" id="poke-fact"></div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
