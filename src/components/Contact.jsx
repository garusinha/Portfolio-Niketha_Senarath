// import React from "react";
// import { FaEnvelope } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa";
// import { FaMapMarkedAlt } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="bg-black text-white py-16 md:py-20" id="Contact">
//       <div className="container mx-auto px-6 md:px-16 lg:px-24">
//         <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
//           Contact Me
//         </h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
//               Let's Talk
//             </h3>
//             <p>
//               I'm open to discussing web development projects or partnership
//               oportunities.
//             </p>
//             <div className="mb-4 mt-8">
//               <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
//               <a
//                 href="mailto:nikethasenarath@gmail.com"
//                 className="hover:underline"
//               >
//                 youremail@example.com
//               </a>
//             </div>
//             <div className="mb-4 mt-8">
//               <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
//               <span>+94712905163</span>
//             </div>
//             <div className="mb-4 mt-8">
//               <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
//               <span>strret, city, pronice, country</span>
//             </div>
//           </div>
//           <div className="flex-1 w-full">
//             <form action="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block-mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//                   placeholder="Enter Your Name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block-mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//                   placeholder="Enter Your Name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block-mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//                   placeholder="Enter Your Name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block-mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   type="text"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//                   placeholder="Enter Your Message"
//                 />
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full w-30">
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-16 md:py-20" id="Contact">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Contact Me
        </h2>
        {/* Transparent Box */}
        <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            {/* Contact Info Section */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                Let's Talk
              </h3>
              <p>
                I'm open to discussing web development projects or partnership
                opportunities.
              </p>

              <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <a
                  href="mailto:youremail@example.com"
                  className="hover:underline"
                >
                  youremail@example.com
                </a>
              </div>

              <div className="mb-4 mt-8">
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>+94712905163</span>
              </div>

              <div className="mb-4 mt-8">
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                <span>Street, City, Province, Country</span>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex-1 w-full">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Message"
                  />
                </div>

                <div className="flex justify-center mt-4">
                  <button className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full w-30">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* End of Transparent Box */}
      </div>
    </div>
  );
};

export default Contact;
