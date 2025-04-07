// "use client";
// import Image from "next/image"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



// export default function Footer() {
//   return (
//     <footer className="bg-blue-50">
//   <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm px-6">
//     {/* Logo and Description */}
//     <div className="flex flex-col gap-1.5">
//       <div className="flex items-center space-x-2 mb-4">
//         <Image
//           src="/SkySecureLogo.png"
//           alt="SkySecure Logo"
//           width={150}
//           height={150}
//         />
//       </div>
//       <p className="text-gray-400 text-sm w-[75%]">
//         "With a strong focus on innovation, expertise, and client-centric
//         services, Skysecure stands at the forefront of digital innovation,
//         offering bespoke solutions to businesses globally."
//       </p>
//     </div>

//     {/* Skysecure Links */}
//     <div className="flex flex-col gap-1.5">
//       <h3 className="font-semibold mb-3 text-black text-xl">Skysecure</h3>
//       <ul className="space-y-2">
//         <li><a href="#" className="hover:underline text-gray-400">About Us</a></li>
//         <li><a href="#" className="hover:underline text-gray-400">Contact Us</a></li>
//         <li><a href="#" className="hover:underline text-gray-400">Auto Deployment</a></li>
//       </ul>
//     </div>

//     {/* Quick Links */}
//     <div className="flex flex-col gap-1.5">
//       <h3 className="font-semibold mb-3 text-black text-xl">Quick Links</h3>
//       <ul className="space-y-2">
//         <li><a href="#" className="hover:underline text-gray-400">Reviews</a></li>
//         <li><a href="#" className="hover:underline text-gray-400">Orders</a></li>
//         <li><a href="#" className="hover:underline text-gray-400">Terms & Conditions</a></li>
//         <li><a href="#" className="hover:underline text-gray-400">Privacy Policy</a></li>
//         <li><a href="#" className="hover:underline text-gray-400">Cancel & Refund</a></li>
//       </ul>
//     </div>

//     {/* Contact */}
//     <div className="flex flex-col gap-1.5">
//       <h3 className="font-semibold mb-3 text-black text-xl">Contact Us</h3>
//       <p className="mb-2 text-gray-400">SKYSECURE TECHNOLOGIES PRIVATE LIMITED</p>
//       <p className="flex items-center space-x-2 mb-1 text-gray-400">
//         <FontAwesomeIcon icon={faPhone} />
//         <span className="hover:text-gray-700">+91 73533 55526</span>
//       </p>
//       <p className="flex items-center space-x-2 mb-1 text-gray-400">
//         <FontAwesomeIcon icon={faEnvelope} />
//         <span className="hover:text-gray-700">contact@skysecure.ai</span>
//       </p>
//       <p className="flex items-start space-x-2 mb-4 text-gray-400">
//         <FontAwesomeIcon icon={faLocationDot} />
//         <span>AGR Plaza, 6/1, 3rd floor, Bellandur, Bengaluru, Karnataka - 560103</span>
//       </p>
//       <div className="flex space-x-4 text-gray-400 text-2xl pl-1">
//         <a href="#" className="hover:text-gray-700">
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>
//         <a href="#" className="hover:text-gray-700">
//           <FontAwesomeIcon icon={faLinkedinIn} />
//         </a>
//       </div>
//     </div>
//   </div>

//   {/* Footer Bottom Section */}
//   <div className="border-t border-gray-300 mt-6">
//     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between text-xs text-gray-500">
//       <p>©2025 <span className="font-semibold text-black">Skysecure</span>. All Rights Reserved.</p>
//     </div>
//   </div>
// </footer>

//   );
// }



"use client"

export default function Footer(){
  return(
    <div className="bg-white flex justify-between py-6 px-12 border-t border-gray-300 ">
      <div>
     <p className="text-gray-600 text-sm">© 2025 Realize. All Rights Reserved.</p>
     </div>

     <div className="flex">
      <ul className="flex gap-3">
        <li className="text-sm text-gray-600 hover:underline cursor-pointer">Privacy Policy</li>
        <li className="text-sm text-gray-600 hover:underline cursor-pointer">Terms of Service</li>
        <li className="text-sm text-gray-600 hover:underline cursor-pointer">Contact</li>
      </ul>
     </div>
    </div>
  )
}