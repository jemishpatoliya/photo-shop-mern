import React, { useEffect, useRef } from "react";
import Cropper from "cropperjs";

import "cropperjs/dist/cropper.css";
import collage from "../assets/collage.jpg";
import flip from "../assets/flip.jpg";
import ind1 from "../assets/ind1-bg.jpg";
import index from "../assets/index-1.jpg";
import logo2 from "../assets/logo2.jpg";
import loginic from "../assets/image.png";
import { Link } from "react-router-dom";
import upload from "../assets/upload.jpg";
import "./flip.css"

const Flip = () => {
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const downloadButtonRef = useRef(null);
  const previewButtonRef = useRef(null);
  const previewImageRef = useRef(null);
  const optionsRef = useRef(null);

  let cropper;
  let fileName = "";

  const handleFileChange = () => {
    const fileInput = fileInputRef.current;
    const reader = new FileReader();

    reader.onload = () => {
      imageRef.current.setAttribute("src", reader.result);
      if (cropper) {
        cropper.destroy();
      }
      cropper = new Cropper(imageRef.current, {
        aspectRatio: NaN,
        viewMode: 1,
      });
      optionsRef.current.classList.remove("hidden");
      previewButtonRef.current.classList.remove("hidden");
    };

    if (fileInput.files[0]) {
      reader.readAsDataURL(fileInput.files[0]);
      fileName = fileInput.files[0].name.split(".")[0];
    }
  };
  const handleFlipVertical = () => {
    if (cropper) {
      cropper.scaleY(-cropper.getData().scaleY || -1);
    }
  };

  const handleFlipHorizontal = () => {
    if (cropper) {
      cropper.scaleX(-cropper.getData().scaleX || -1);
    }
  };

  const handlePreviewClick = (e) => {
    e.preventDefault();
    if (cropper) {
      const imgSrc = cropper.getCroppedCanvas().toDataURL();
      previewImageRef.current.src = imgSrc;
      downloadButtonRef.current.href = imgSrc;
      downloadButtonRef.current.download = `cropped_${fileName}.png`;
      downloadButtonRef.current.classList.remove("hidden");
    }
  };

  useEffect(() => {
    return () => {
      if (cropper) {
        cropper.destroy();
      }
    };
  }, []);

  return (
    <div>
      <section
        className="flips"
        id="collage"
        style={{
          padding: "0px",
        }}
      >
        <div className="index-part2 index-part2-content">
          <div className="res-container res-container-content">
            <div className="res-container-grid-part2 res-container-grid-part2-container res-container-grid-part2-img">
              <div className="IntroSection_container">
                <span
                  style={{ paddingTop: "75%", backgroundColor: "unset" }}
                  className="Image_imageWrapper IntroSection_Image"
                >
                  <img
                    alt="Crop image of the coconut tree with blue sky in perfect size, retouch portrait face with Fotor online photo editor"
                    className="Image_image-c"
                    sizes="(max-width:460px) 100vw,(max-width:750px) 100vw,(max-width:964px) 50vw,(max-width:1192px) 50vw,(max-width:1920px) 50vw,50vw"
                    src={flip}
                    data-ll-status="loaded"
                  />
                </span>
              </div>
            </div>
            <div className="res-container-grid res-container-intro-section res-container-fed">
              <div className="introSection">
                <div>
                  <h2 className="introSection-text-h2 introSection-text-h2-bottom">
                    Flip Image As You Want
                  </h2>
                  <div className="introsection-text-part">
                    <p>
                      <strong>Artistic Expression:</strong> Collages enable
                      artists and designers to express their creativity by
                      blending different elements, styles, and themes, resulting
                      in unique and personalized pieces.
                    </p>

                    <p>
                      <strong>Visual Impact:</strong> By juxtaposing various
                      images, collages can create striking contrasts, highlight
                      relationships between subjects, and evoke emotions, making
                      them powerful tools for communication.
                    </p>
                    <p>
                      <strong>Versatility:</strong> Collages can be used in
                      various contexts, including digital art, scrapbooking,
                      advertising, and social media, adapting to different
                      formats and audiences.
                    </p>
                    <p>
                      <strong>Tools and Techniques:</strong> With the advent of
                      digital tools and software, creating collages has become
                      more accessible, allowing users to experiment with
                      layouts, filters, and effects to enhance their visual
                      compositions.
                    </p>
                  </div>
                  <div className="intro_pagelink_container">
                    <span
                      id="cta_1781570"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="PageLink IntroSection_pagelink text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      <Link to="/" style={{ color: "white" }}>
                        Flip Image
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper bg-white rounded-lg shadow-lg p-8 mx-auto my-12 border-dotted border-2 border-black w-11/12 md:w-8/12 lg:w-6/12">
        <div className="crop_section mt-0">
          <div className="crop_header relative">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
              <div className="image-container w-full">
                <img ref={imageRef} alt="" className="block max-w-full" />
              </div>
              <div className="preview-container w-full">
                <img
                  ref={previewImageRef}
                  alt=""
                  className="block max-w-full"
                />
              </div>
            </div>

            <input
              type="file"
              id="file-input"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              className="label  relative bg-blue-600 text-white text-lg w-[220px] h-[70px] text-center py-2 rounded-md mx-auto cursor-pointer flex flex-col items-center justify-center"
              htmlFor="file-input"
              id="crop_now"
            >
              <img
                src={upload}
                alt="Upload"
                className="upload_img w-10 h-10 mb-2 rounded-md"
              />
              Upload Image
            </label>

            <div
              className="options flex justify-center gap-4 hide mt-6"
              ref={optionsRef}
            >
              <button
                className="aspect-ratio-button button_cr px-4 py-2 border-2 border-blue-600 bg-white text-blue-600 rounded-md"
                onClick={handleFlipHorizontal}
              >
                Flip Horizontal
              </button>
              <pre> ... </pre>
              <button
                className="aspect-ratio-button button_cr px-4 py-2 border-2 border-blue-600 bg-white text-blue-600 rounded-md"
                onClick={handleFlipVertical}
              >
                Flip Vertical
              </button>
            </div>

            <div className="btns flex justify-center gap-4 mt-4">
              <button
                ref={previewButtonRef}
                className="hide button_cr px-4 py-2 border-2 border-blue-600 bg-white text-blue-600 rounded-md"
                onClick={handlePreviewClick}
              >
                Preview
              </button>
              <a
                href=""
                ref={downloadButtonRef}
                className="hide px-4 py-2 border-2 border-blue-600 bg-blue-600 text-white rounded-md"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flip;
