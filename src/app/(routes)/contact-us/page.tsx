"use client";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black py-12 px-6">
      <div className="max-w-5xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 text-lg mb-12">
          Have questions? Reach out to us using the form below or through our contact details.
        </p>
        <p className="text-center text-gray-700 text-lg mb-12">You can write us at <a className="hover:text-blue-700" href="mailto:yrs.aursf@gmail.com">yrs.aursf@gmail.com</a></p>
        <div>
          <h2>Organizing Chairperson/Convenor</h2>
          <p>Prof. Piyush Pandey</p>
          <a href="tel:917896748886">+91 7896 748886</a>
        </div>
        <br />
        <div className="flex justify-between">
          <div>
            <h2>Travel:</h2>
            <p>Bishal Sonar</p>
            <a href="tel:917002919229">+91 70029 19229</a>
            <br />
            <p>Joy Deb</p>
            <a href="tel:917086675570">+91 7086 675570</a>
            <br />
            <br />
            <h2>Payment and Registration:</h2>
            <p>Bhaskar Goswami</p>
            <a href="tel:917002744561">+91 7002 744561</a>
            <br />
            <br />
            <h2>For Sponsorship:</h2>
            <p>Animekh Hazarika</p>
            <a href="tel:919678849485">+91 9678 849485</a>
            <br />
            <p>Amit Kumar Roy</p>
            <a href="tel:919854171541">+91 9854 171541</a>
          </div>
          <div>
            <br />
            <br />
            <h2>Eureka Spectrum:</h2>
            <p>Bhaskar Goswami</p>
            <a href="tel:917002744561">+91 7002 744561</a>
          </div>
        </div>
        {/* Contact Form */}
        {/* <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div> */}

          {/* Contact Details */}
          {/* <div className="space-y-8 text-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-500 text-white rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10l9-9m0 0l9 9M4 11h16m-5 10l-4-4-4 4m9-10l-4 4-4-4"
                  />
                </svg>
              </div>
              <p>
                <strong>Address:</strong> Assam University, Silchar, Assam, India
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 text-white rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.793 4.793a1 1 0 00-1.414 0l-1.086 1.086a1 1 0 000 1.414l7.208 7.207a1 1 0 001.414 0l7.207-7.207a1 1 0 000-1.414l-1.086-1.086a1 1 0 00-1.414 0L9.5 9.5 4.793 4.793z"
                  />
                </svg>
              </div>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:yrs.aursf@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  yrs.aursf@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500 text-white rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.828 9.172a4 4 0 015.657 5.657l-7.071 7.071a4 4 0 01-5.657-5.657l7.071-7.071z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.343 17.657l7.071-7.071"
                  />
                </svg>
              </div>
              <p>
                <strong>Phone:</strong> +91-123-456-7890
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
