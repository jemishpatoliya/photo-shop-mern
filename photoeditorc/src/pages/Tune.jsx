import React, { useEffect, useRef, useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import cropphoto from "../assets/flip.jpg";
import logo2 from "../assets/logo2.jpg";
import loginic from "../assets/image.png";
import bright from "../assets/brc.jpg";
import upload from "../assets/upload.jpg";
import { Link } from "react-router-dom";
import "./tune.css";

const Tune = () => {
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const downloadButtonRef = useRef(null);
  const previewButtonRef = useRef(null);
  const previewImageRef = useRef(null);
  const optionsRef = useRef(null);

  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [cropper, setCropper] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = () => {
    const fileInput = fileInputRef.current;
    const reader = new FileReader();

    reader.onload = () => {
      if (imageRef.current) {
        imageRef.current.setAttribute("src", reader.result);
        if (cropper) {
          cropper.destroy();
        }
        const newCropper = new Cropper(imageRef.current, {
          aspectRatio: NaN,
          viewMode: 1,
        });
        setCropper(newCropper);
        if (optionsRef.current) optionsRef.current.classList.remove("hidden");
        if (previewButtonRef.current)
          previewButtonRef.current.classList.remove("hidden");
      }
    };

    if (fileInput && fileInput.files && fileInput.files[0]) {
      reader.readAsDataURL(fileInput.files[0]);
      setFileName(fileInput.files[0].name.split(".")[0]);
    }
  };

  const applyFilters = () => {
    if (cropper) {
      const canvas = cropper.getCroppedCanvas();
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
        ctx.drawImage(canvas, 0, 0);
        ctx.filter = "none";

        const imgSrc = canvas.toDataURL();
        if (previewImageRef.current) previewImageRef.current.src = imgSrc;
        if (downloadButtonRef.current) {
          downloadButtonRef.current.href = imgSrc;
          downloadButtonRef.current.download = `tuned_${fileName}.png`;
          downloadButtonRef.current.classList.remove("hidden");
        }
      }
    }
  };

  const cropSectionRef = useRef(null);

  const scrollToCropSection = () => {
    if (cropSectionRef.current) {
      cropSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    return () => {
      if (cropper) {
        cropper.destroy();
      }
    };
  }, [cropper]);

  return (
    <div>
      {/* Crop Section */}

      <section
      className="tune"
        style={{
          padding: "0px",
        }}
      >
        <div className="index-part2 index-part2-content">
          <div className="res-container res-container-content">
            <div className="res-container-grid res-container-intro-section res-container-fed">
              <div className="introSection">
                <div>
                  <h2 className="introSection-text-h2 introSection-text-h2-bottom">
                    Tune Image in one click
                  </h2>
                  <div className="introsection-text-part">
                    <p>
                      <strong>Purpose:</strong> It helps improve visual appeal
                      by eliminating distractions and emphasizing important
                      elements within the frame.
                    </p>
                    <p>
                      <strong>Aspect Ratio:</strong> Cropping allows for
                      adjustments in aspect ratio, making images suitable for
                      various formats, such as social media posts or print.
                    </p>
                    <p>
                      <strong>Detail Emphasis:</strong> By cropping,
                      photographers and designers can highlight specific details
                      or features that contribute to the image's narrative.
                    </p>
                  </div>
                  <div className="intro_pagelink_container">
                    <span
                      id="cta_1781570"
                      href="crop.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="PageLink IntroSection_pagelink text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      <Link to="/tune" style={{ color: "white" }}>
                        Tune Image
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="res-container-grid-part2 res-container-grid-part2-container res-container-grid-part2-img">
              <div className="IntroSection_container">
                <span
                  style={{ paddingTop: "75%", backgroundColor: "unset" }}
                  className="Image_imageWrapper IntroSection_Image"
                >
                  <img
                    alt=""
                    className="Image_image-c"
                    sizes="(max-width:460px) 100vw,(max-width:750px) 100vw,(max-width:964px) 50vw,(max-width:1192px) 50vw,(max-width:1920px) 50vw,50vw"
                    src={bright}
                    data-ll-status="loaded"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload and Crop Section */}
      <div className="py-12 bg-gray-50 wrapper bg-white rounded-lg shadow-lg p-8 mx-auto my-12 border-dotted border-2 border-black w-11/12 md:w-8/12 lg:w-6/12" ref={cropSectionRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-6">
            <img ref={imageRef} alt="" className="mx-auto mb-6" />
          </div>
          <div className="relative mb-6">
            <img ref={previewImageRef} alt="" className="mx-auto mb-6" />
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
            htmlFor="file-input"
            className="inline-block bg-indigo-500 text-white font-bold px-6 py-3 rounded-lg cursor-pointer hover:bg-indigo-600"
          >
            <img src={upload} className="inline-block w-5 h-5 mr-2" />
            Upload Image
          </label>

          <div ref={optionsRef} className="hidden mt-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="brightness-slider" className="block text-sm">
                  Brightness:
                </label>
                <input
                  type="range"
                  id="brightness-slider"
                  min="0"
                  max="200"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full"
                />
                <span>{brightness}%</span>
              </div>
              <div>
                <label htmlFor="contrast-slider" className="block text-sm">
                  Contrast:
                </label>
                <input
                  type="range"
                  id="contrast-slider"
                  min="0"
                  max="200"
                  value={contrast}
                  onChange={(e) => setContrast(Number(e.target.value))}
                  className="w-full"
                />
                <span>{contrast}%</span>
              </div>
            </div>
            <button
              onClick={applyFilters}
              className="bg-indigo-500 text-white font-bold mt-6 px-6 py-3 rounded-lg cursor-pointer hover:bg-indigo-600"
            >
              Preview
            </button>
          </div>

          <a
            href=""
            ref={downloadButtonRef}
            className="hidden bg-indigo-500 text-white font-bold mt-6 px-6 py-3 rounded-lg cursor-pointer hover:bg-indigo-600"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tune;
