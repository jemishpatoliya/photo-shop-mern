import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="bg-black py-20 text-gray-700 rounded-lg">
        <div>
          
        </div>
        <div className="container mx-auto px-10">
          <div className="text-center">
            <h3 className="text-4xl font-light mb-8 text-white">Contact Us</h3>
            <div className="border-b-2 border-gray-300 w-24 mx-auto mb-8"></div>
          </div>

          <div className="flex flex-wrap justify-between bg-white rounded-lg  shadow-lg p-8">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full lg:w-2/3"
            >
              <input
                type="hidden"
                name="access_key"
                value="ee7e2898-b386-4292-901a-beaf080fa9d4"
              />
              <div className="flex flex-col lg:flex-row mb-6 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full lg:w-1/2 p-4 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full lg:w-1/2 p-4 border border-gray-300 rounded"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full mb-6 p-4 border border-gray-300 rounded"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full mb-6 p-4 border border-gray-300 rounded"
              ></textarea>

              <div className="text-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-blue-500 text-white px-6 py-3 rounded cursor-pointer hover:bg-blue-600"
                />
              </div>
            </form>

            <div className="w-full lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <i className="fa-solid fa-phone mr-4 text-xl"></i>
                  <div>
                    <p className="text-lg">Call:</p>
                    <span className="text-xl">012-345-6789</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <i className="fa-solid fa-envelope mr-4 text-xl"></i>
                  <div>
                    <p className="text-lg">Email:</p>
                    <span className="text-xl">dnphotoeditor@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <i className="fa-solid fa-location-dot mr-4 text-xl"></i>
                  <div>
                    <p className="text-lg">Location:</p>
                    <span className="text-xl">Varachha Road, Surat-395010</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl mb-4">Follow</h3>
              <ul className="flex gap-4">
                <li className="cursor-pointer hover:scale-110">
                  <i className="fa-brands fa-facebook text-xl"></i>
                </li>
                <li className="cursor-pointer hover:scale-110">
                  <i className="fa-brands fa-twitter text-xl"></i>
                </li>
                <li className="cursor-pointer hover:scale-110">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </li>
                <li className="cursor-pointer hover:scale-110">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
