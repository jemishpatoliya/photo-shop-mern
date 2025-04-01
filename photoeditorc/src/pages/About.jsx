import React from 'react'
import "./About.css"
import logo from "../assets/logo_image.png"


export default function About() {
  return (
    <div class="about-container">
        <div class="image-container">
            <img
                               alt=""
                                className="Image_image-c"
                                sizes="(max-width:460px) 100vw,(max-width:750px) 100vw,(max-width:964px) 50vw,(max-width:1192px) 50vw,(max-width:1920px) 50vw,50vw"
                                src={logo}
                                data-ll-status="loaded"
                              />
        </div>

        <div class="text-container">
            <h2>About us</h2>
            <p>Welcome to Image Expert, where creativity meets efficiency! We offer a range of powerful
                tools to help you enhance and modify your images with ease.</p>
                <p>Our features include image cropping, addingand reading text from images, grammar and spell-checking, applying filters and effects, file conversion,
                and even adding animations.</p>
                <p> Whether you're a professional designer or a casual user, our platform
                provides everything you need to bring your images to life.</p>
        </div>
    </div>
  )
}
