// // import React, { useState } from "react";
// // import './Contact.css'

// // const ContactSection = () => {

// //   return (
// //    <div>
// //      <div className="contact-section" id="contact">
// //       <h2>Contact Me</h2>
// //       <p className="slogon">
// //         I'm always excited to collaborate on innovative projects. Feel free to
// //         reach out!
// //       </p>

// //       <div className="contact-info">
// //         <p className="mail">

// //           <a href="mailto:smbrasoolbi138@gmail.com">  <strong>Email Me </strong>  <span className="bi bi-envelope-at"></span></a>
// //         </p>

// //         <p className="linkedin">

// //         <a href="https://www.linkedin.com/in/shaik-rasool-bi/" target="_blank" rel="noopener noreferrer">
// //         <strong>Linkedin</strong>
// //           <span className="bi bi-linkedin linkedin-btn"> </span>
// //         </a>
// //         </p>
// //       </div>

// //        <diV>
// //           <p> &copy; All rights Reserved | Rasool Bi</p>
// //         </diV>
// //     </div>

// //    </div>
// //   );
// // };

// // export default ContactSection;

// import { useState } from 'react';
// import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
// import './Contact.css'
// import React from 'react'

// export default function ContactSection() {
//   const [formData, setState] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);
//     setState({ name: '', email: '', message: '' });

//     // Reset submission message after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-header">
//         <h1>Contact Me</h1>
//         <p>I'm always excited to collaborate on innovative projects. Feel free to reach out!</p>
//       </div>

//       <div className="contact-content">
//         <div className="contact-form-section">
//           <h2>Send a Message</h2>

//           <div className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Your Name"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="your.email@example.com"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 placeholder="Write your message here..."
//                 rows={5}
//               />
//             </div>

//             <button onClick={handleSubmit} className="submit-btn">
//               Send Message <Mail size={16} className="icon" />
//             </button>

//             {isSubmitted && (
//               <div className="success-message">
//                 Thank you! Your message has been sent.
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="contact-info-section">
//           <h2>Connect With Me</h2>

//           <div className="social-links">
//             <a href="mailto:smbrasoolbi138@gmail.com"className="social-link email">
//               <Mail size={20} />
//               <span>Email Me</span>
//             </a>

//             <a href="https://www.linkedin.com/in/shaik-rasool-bi/" className="social-link linkedin">
//               <Linkedin size={20} />
//               <span>LinkedIn</span>
//             </a>

//             <a href="https://github.com/Rasoolbi54/" className="social-link github">
//               <Github size={20} />
//               <span>GitHub</span>
//             </a>

//           </div>
//         </div>
//       </div>

//       <footer className="contact-footer">
//         <p>© All rights Reserved | Rasool Bi</p>
//       </footer>

//     </div>
//   );
// }

import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 md:px-24 font-sans">
      <h2 className="text-4xl font-bold mb-12 border-b pb-4 border-white w-fit">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Socials & Resume */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg text-gray-300">
            Feel free to connect with me through the platforms below or send me
            a message through the form.
          </p>
<div className="space-y-4 text-sm">
  <a
    href="mailto:smbrasoolbi138@gmail.com"
    style={{
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Mail size={18} />
    <span>Email: smbrasoolbi138@gmail.com</span>
  </a>

  <a
    href="https://github.com/Rasoolbi54/"
    style={{
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github size={18} />
    <span>GitHub Profile</span>
  </a>

  <a
    href="https://www.linkedin.com/in/shaik-rasool-bi/"
    style={{
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={18} />
    <span>LinkedIn Profile</span>
  </a>
</div>


          {/* Download Resume Button */}
       <a
  href="/Rasoolbi_fullstack.pdf"
  download="Rasoolbi_Shaik_Resume.pdf"
  className="inline-block mt-6 text-sm rounded-full bg-white text-black px-10 py-3 hover:bg-gray-200 transition"
>
  Download Resume ↓
</a>


        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <div className="bg-white/10 backdrop-blur-md backdrop-saturate-150 text-white rounded-2xl p-8 shadow-xl border border-white/10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
