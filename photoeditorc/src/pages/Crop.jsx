import React, { useEffect, useRef } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import collage from "../assets/collage.jpg";
import cropphoto from "../assets/crop-photos.jpg";
import ind1 from "../assets/ind1-bg.jpg";
import index from "../assets/index-1.jpg";
import logo2 from "../assets/logo2.jpg";
import loginic from "../assets/image.png";
import { Link } from "react-router-dom";
import upload from "../assets/upload.jpg";
import "./crop.css"

const Crop = () => {
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const downloadButtonRef = useRef(null);
  const previewButtonRef = useRef(null);
  const previewImageRef = useRef(null);
  const optionsRef = useRef(null);
  const widthInputRef = useRef(null);
  const heightInputRef = useRef(null);

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

  const handleAspectRatioChange = (aspectRatio) => {
    if (cropper) {
      cropper.setAspectRatio(
        aspectRatio === "Free" ? NaN : eval(aspectRatio.replace(":", "/"))
      );
    }
  };

  const handleHeightChange = () => {
    if (cropper) {
      const { height } = cropper.getImageData();
      if (parseInt(heightInputRef.current.value) > Math.round(height)) {
        heightInputRef.current.value = Math.round(height);
      }
      cropper.setCropBoxData({
        height: parseInt(heightInputRef.current.value),
      });
    }
  };

  const handleWidthChange = () => {
    if (cropper) {
      const { width } = cropper.getImageData();
      if (parseInt(widthInputRef.current.value) > Math.round(width)) {
        widthInputRef.current.value = Math.round(width);
      }
      cropper.setCropBoxData({ width: parseInt(widthInputRef.current.value) });
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
  }, []);

  return (
    <div>
     <section
      className="crop"
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
                    Crop Image in one click
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
                      <Link to="/crop" style={{ color: "white" }}>
                        Crop Image
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
                    src={cropphoto}
                    data-ll-status="loaded"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrapper bg-white rounded-lg shadow-lg p-8 mx-auto my-12 border-dotted border-2 border-black w-11/12 md:w-8/12 lg:w-6/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="image-container">
            <img ref={imageRef} alt="" className="block max-w-full" />
          </div>
          <div className="preview-container">
            <img ref={previewImageRef} alt="" className="block max-w-full" />
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
          className="label flex flex-col items-center justify-center bg-blue-600 text-white w-56 h-20 rounded-md mt-8 mx-auto cursor-pointer"
          htmlFor="file-input"
          ref={cropSectionRef}
        >
          <img src={upload} className="upload_img w-10 h-10 mb-2" alt="Upload" />
          Upload Image
        </label>

        <div className="options justify-center gap-4 mt-8 hidden" ref={optionsRef}>
          <div className="flex flex-col items-center">
            <p>Height</p>
            <input
              type="number"
              ref={heightInputRef}
              placeholder="Enter Height"
              className="border-2 border-black rounded-md p-2"
              onChange={handleHeightChange}
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Width</p>
            <input
              type="number"
              ref={widthInputRef}
              placeholder="Enter Width"
              className="border-2 border-black rounded-md p-2"
              onChange={handleWidthChange}
            />
          </div>
        </div>

        <div className="aspect-ratio-buttons mt-8 flex justify-center gap-4">
          {["16:9", "4:3", "1:1", "2:3", "Free"].map((ratio) => (
            <button
              key={ratio}
              className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md"
              onClick={() => handleAspectRatioChange(ratio)}
            >
              {ratio}
            </button>
          ))}
        </div>

        <div className="btns mt-8 flex justify-center gap-4">
          <button
            ref={previewButtonRef}
            className="hidden px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-md"
            onClick={handlePreviewClick}
          >
            Preview
          </button>
          <a
            href=""
            ref={downloadButtonRef}
            className="hidden px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Crop;
