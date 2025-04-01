import React from "react";
// import "./home.css";
import "./Features.css";
import collage from "../assets/collage.jpg";
import cropphoto from "../assets/crop-photos.jpg";
import blur from "../assets/Blur.jpg";
import bright from "../assets/brc.jpg";
import flip from "../assets/flip.jpg";
// import img from "../assets/image.jpg";
import ind1 from "../assets/ind1-bg.jpg";
import index from "../assets/index-1.jpg";
import logo2 from "../assets/logo2.jpg";
// import tos from "../assets/tos.png";
import loginic from "../assets/image.png";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div>
      <main class="main-container">
        <section class="top_programs_bg">
          <section class="hero_section hero_leagal">
            <div class="s1_container container-1200">
              <div class="row">
              </div>
            </div>
          </section>
        </section>
      </main>
      <section
        className="index-section"
      >
        <div className="ind-1 ind-1-container">
          <div className="ind-2 ind-2-container">
            <div className="ind-3 ind-3-container">
              <span className="ind-1-content">Unleash Your Creativity with ImageXpert!</span>
              <div className="ind-1-para">
                <span style={{ fontSize: "15px" }}>
                Transform your photos like a pro with ImageXpert – the ultimate online photo editor. Edit, enhance, and perfect your images effortlessly, all for free!
                </span>
              </div>
              <div className="edit-photo">
                <span href="#tools" className="edit-button edit-photo-content text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                  Start Editing Now
                </span>
              </div>
            </div>
            <div className="ind-1-image ind-1-imagecontent">
              <div className="edit-image edit-image-box">
                <div>
                  <span
                    className="span-image image-content"
                    style={{ paddingTop: "75%" }}
                  >
                    <img
                      src={index}
                      alt=""
                      className="image-photo index_img"
                      width="1200"
                      height="900"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="line-row row-content" id="tools">
            Discover Features of This Website
          </div>
          <br />
          <div className="container-row row-content-tool">
            <div className="edit-image-content editing-image">
              <span
                href="crop.html"
                className="jump-container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="jump-container-icon">
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M25 17h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1zm-1 7h-5v-5h5v5zM13.5 6H7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h6.5c.6 0 1-.4 1-1V7c0-.6-.5-1-1-1zM8 24V8h4.5v16H8zM24.6 6h-6.2c-.9 0-1.5.8-1.4 1.6v6.2c.1.7.7 1.2 1.4 1.2h6.2c.8 0 1.4-.6 1.4-1.4V7.4c0-.8-.6-1.4-1.4-1.4zm-.6 7h-5V8h5v5z"
                      className="collageIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <Link to="/crop">Crop Image</Link>
              </span>
            </div>

            <div className="edit-image-content editing-image">
              <span
                href="flip.html"
                className="jump-container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="jump-container-icon">
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M6.8 24.7c-.1.3.2.6.5.5l5-1.3-4.2-4.2-1.3 5zm3.8-9.6l1.4-1.4-3.1-3.1L10.5 9l3.1 3.1 1.4-1.4L11.3 7c-.2-.2-.5-.4-.8-.4s-.6.2-.9.4L6.9 9.7c-.2.2-.4.5-.4.8s.1.6.4.8l3.7 3.8zm14.5-5.5l-2.7-2.7c-.4-.4-1-.4-1.4 0L9.4 18.5l4.1 4.1L25.1 11c.4-.4.4-1 0-1.4zM13.5 19.8l-1.3-1.3L21.7 9l1.3 1.3-9.5 9.5zm7.6-2.9l-1.4 1.4 3.1 3.1-1.6 1.6-3.2-3-1.4 1.4 3.7 3.7c.2.2.5.4.8.4.3 0 .6-.1.8-.4l2.7-2.7c.2-.2.4-.5.4-.8s-.1-.6-.4-.8l-3.5-3.9z"
                      className="designIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <Link to="/flip">Flip Image</Link>
              </span>
            </div>

            <div className="edit-image-content editing-image">
              <span
                href="brightness_contrast.html"
                className="jump-container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="jump-container-icon">
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M12 22.8l-1.2-.5c-.1 0-.1-.1-.1-.1l-.5-1.2c-.1-.2-.4-.2-.5 0l-.5 1.2c0 .1-.1.1-.1.1l-1.2.5c-.2.1-.2.4 0 .5l1.1.5c.1 0 .1.1.1.1l.5 1.2c.1.2.4.2.5 0l.5-1.2c0-.1.1-.1.1-.1l1.2-.5c.3-.1.3-.4.1-.5zm11.8-6.7c.1-.6-.1-1-.5-1.4l-3.1-2.8-.5-4.2c-.1-.6-.3-1-.8-1.2-.5-.3-1-.2-1.5 0l-3.6 2.1-4.2-.8c-.5-.1-1 0-1.4.4-.4.4-.5.9-.4 1.4l.8 4.1-2.1 3.6c-.3.5-.3 1 0 1.5s.7.8 1.2.8l4.2.5 2.8 3.1c.4.4.8.6 1.4.5.6-.1.9-.4 1.2-.9L19 19l3.8-1.7c.6-.2.9-.6 1-1.2zm-5.6 1.3c-.4.2-.6.4-.8.8l-1.6 3.5-2.6-2.8c-.3-.3-.6-.5-1-.5L8.4 18l1.9-3.3c.2-.3.2-.7.2-1.1l-.8-3.9 3.8.8c.4.1.7 0 1.1-.2l3.3-1.9.4 3.8c0 .4.2.7.5 1l2.8 2.6-3.4 1.6zm3.1-7.6l1 .5c.1 0 .1.1.1.1l.5 1c.1.2.4.2.5 0l.5-1c0-.1.1-.1.1-.1l1-.5c.2-.1.2-.4 0-.5l-1-.5c-.1 0-.1-.1-.1-.1l-.5-1c-.1-.2-.4-.2-.5 0l-.5 1c0 .1-.1.1-.1.1l-1 .5c-.2.2-.2.4 0 .5zM25.4 24l-3.9-3.9c-.4-.4-1-.4-1.3 0-.4.4-.4 1 0 1.3l3.9 3.9c.4.4 1 .4 1.3 0 .3-.3.3-.9 0-1.3z"
                      className="enhancePhotoIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <Link to="/tune">Tune Image</Link>
              </span>
            </div>

            <div className="edit-image-content editing-image">
              <span
                href="blur.html"
                className="jump-container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="jump-container-icon">
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M25 8.2c-.4-.4-.9-.6-1.5-.6h-6.6v-.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.6H8.5c-.6.1-1.1.3-1.5.7s-.7.9-.7 1.6v12.5c0 .6.2 1.1.6 1.5s.9.6 1.5.6H15v.6c0 .5.4.9.9.9s.9-.4.9-.9v-.6h6.6c.6 0 1.1-.2 1.5-.6s.6-.9.6-1.5V9.8c.2-.7 0-1.2-.5-1.6zm-9.9 14.4H8.5c-.2 0-.3-.1-.3-.3V9.8c0-.2.1-.3.3-.3h6.6v13.1zm1.8-13.2h2.7l-2.7 2.7V9.4zm6.9 12.9c0 .2-.1.3-.3.3h-2.7l3-3v2.7zm0-5.4l-5.6 5.6h-1.3v-2l6.9-6.9v3.3zm0-5.8L16.9 18v-3.1l5.4-5.4h1.2c.2 0 .3.1.3.3v1.3z"
                      className="removeBackgroundIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <Link to="/blur">Read Text</Link>
              </span>
            </div>

            <div className="edit-image-content editing-image">
              <span
                href="Aboutus.html"
                className="jump-container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="jump-container-icon"></div>
                <span>About Us</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
