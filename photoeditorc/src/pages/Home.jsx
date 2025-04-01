import React from "react";
import "./home.css";
import "./text_read.css"
import "./CROP.CSS"
import"./flip.css"
import "./tune.css"
import { useRef } from "react";
import { useEffect, useState } from "react";
// import crop from "../assets/508-icon.png";
// import abt from "../assets/abt-us.jpg";
// import backg from "../assets/bg.jpeg";
import textread from "../assets/textread.jpeg";
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
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const collagesectionRef = useRef(null);
  const scrolltocollageection = () => {
    if (collagesectionRef.current) {
      collagesectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. How do I crop an image?",
      answer:
        "To crop an image, open it in an image editing option. Select the crop tool, then drag to create a rectangle around the area you want to keep. Adjust the edges as needed and apply the crop to remove the unwanted parts.",
    },
    {
      question: "2. What is the purpose of blurring an image?",
      answer:
        "Blurring an image can help to soften sharp edges, create a sense of depth, or draw attention to a specific area by reducing detail in the background. It’s commonly used in portrait photography to enhance the subject while minimizing distractions.",
    },
    {
      question: "3. What's the difference between DN-PS and Photoshop?",
      answer: `DN-PS is a user-friendly online photo editor like Photoshop. With a variety of photo editing features, it can help you quickly improve and edit photos. You can resize and crop images, adjust brightness and contrast, beautify portraits, add text and overlays, remove backgrounds, create photo collages, and more using DN-PS.
                Moreover, our photo editor is less complex than Photoshop, making it ideal for amateurs and professionals alike.`,
    },
    {
      question: "4. How can I create a collage of images?",
      answer:
        "To create a collage, use a collage-making tool. Import the images you want to include, then arrange them in your desired layout. You can adjust the size, add borders, and apply effects before saving or exporting the final collage. Finally, save and download your edited picture in the desired format. It’s that easy!",
    },
    {
      question: "5. What is photo editing?",
      answer:
        "Photo editing is the process of digitally enhancing an image to make it look better. Photo editing can range from simple adjustments such as cropping and resizing to more advanced editing techniques like color correction and retouching.",
    },
    {
      question: "6. How do I flip an image?",
      answer:
        "Flipping an image can be done in most image editing programs. Open the image, find the option to flip (often under the 'Edit' menu), and choose either horizontal or vertical flip. This will create a mirrored version of the original image.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
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
                <span href="#tools" className="hero_btn_1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                  <Link
                    to="#"
                    onClick={scrolltocollageection}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Edit Photo Now
                  </Link>
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

      <section
        className="text_raed"
        id="collage"
        ref={collagesectionRef}
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
                    src={textread}
                    data-ll-status="loaded"
                  />
                </span>
              </div>
            </div>
            <div className="res-container-grid res-container-intro-section res-container-fed">
              <div className="introSection">
                <div>
                  <h2 className="introSection-text-h2 introSection-text-h2-bottom">
                  Grammar Check & Text-to-Speech for Better Writing
                  </h2>
                  <div className="introsection-text-part">
                    <p>
                    The Grammar Check and Text-to-Speech (TTS) feature enhances writing and accessibility. It automatically corrects grammar and spelling errors, ensuring clear and polished text.

                    </p>

                    <p>
                    The TTS feature converts written content into speech with male and female voice options and adjustable speed, making it ideal for visually impaired users, auditory learners, and writers proofreading their work.

                    </p>
                  </div>
                  <div className="intro_pagelink_container">
                    <span
                      id="cta_1781570"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="PageLink IntroSection_pagelink text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      let's check
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      className="PageLink IntroSection_pagelink text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
      <section
       className="flip"
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
                  </div>
                  <div className="intro_pagelink_container">
                    <span
                      id="cta_1781570"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="PageLink IntroSection_pagelink text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      <Link to="/flip" style={{ color: "white" }}>
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
      <section className="services">
        <div className="container_serv">
          <div className="services_main">
            <div className="services_htext">
              <h3 align="center">Steps to Edit Images</h3>
              <div className="border"></div>
            </div>
            <div className="services_inner">
              <div className="services_inner_card">
                <div className="services_inner_icon">
                  <i aria-label="icon" className="fa-solid fa-upload"></i>
                </div>
                <div className="services_inner_text">
                  <div className="services_inner_htext">
                    <span href="#">
                      <pre></pre>
                      <strong>1. </strong>Upload Image
                    </span>
                  </div>
                  <p>
                    Upload or Drag and Drop span photo to DN photo editor to
                    start editing.
                  </p>
                  <span>
                    <span href="#tools" style={{ color: "white" }}>
                      <Link
                        to="#"
                        // onClick={scrolltocollageection}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Edit Now
                      </Link>
                    </span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>
                </div>
              </div>
              <div className="services_inner_card">
                <div className="services_inner_icon">
                  <i aria-label="icon" className="fa-solid fa-palette"></i>
                </div>
                <div className="services_inner_text">
                  <div className="services_inner_htext">
                    <span href="#">
                      <pre></pre>
                      <strong>2. </strong>Edit Image
                    </span>
                  </div>
                  <p>
                    Adjust lighting, color and exposure, apply photo effects and
                    customize as you want.
                  </p>
                  <span>
                    <span href="#tools" style={{ color: "white" }}>
                      <Link
                        to="#"
                        // onClick={scrolltocollageection}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Edit Now
                      </Link>
                    </span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>
                </div>
              </div>
              <div className="services_inner_card">
                <div className="services_inner_icon">
                  <i aria-label="icon" className="fa-solid fa-download"></i>
                </div>
                <div className="services_inner_text">
                  <div className="services_inner_htext">
                    <span href="#">
                      <pre></pre>
                      <strong>3. </strong>Download & Share
                    </span>
                  </div>
                  <p>
                    Download your edited photo in high quality JPG, PNG format
                    and share it instantly on Social media.
                  </p>
                  <span>
                    <span href="#tools" style={{ color: "white" }}>
                      <Link
                        to="#"
                        // onClick={scrolltocollageection}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Edit Now
                      </Link>
                    </span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0px" }} className="faqs-section">
        <div className="FaqSectionres FaqSectionres_container">
          <div className="Container_row">
            <div className="Faq_Container_grid Faq_grid">
              <div className="FaqSection_container_into">
                <h2 className="FaqSection_text_h2 FaqSection_text_bottom">
                  Frequently Asked Questions (FAQs)
                </h2>
              </div>
              {faqs.map((faq, index) => (
                <div className="faq-content" key={index}>
                  <div
                    className="faq-title cursor-pointer flex justify-between items-center p-4 border-b"
                    onClick={() => toggleFAQ(index)}
                  > 
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <svg
                      viewBox="0 0 16 16"
                      className={`faq-icon-arrow transition-transform FAQ-arrow ${
                        openIndex === index ? "-rotate-90" : "rotate-90"
                      }`}
                      width="16"
                      height="16"
                    >
                      <path
                        d="M9.586 7.946l-5.297 5.35a1 1 0 101.422 1.408l6-6.062a1 1 0 00-.008-1.414l-6-5.939a1 1 0 10-1.406 1.422l5.289 5.235z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer p-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-button">
            <i class="fa-solid fa-up-long"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
