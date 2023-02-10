
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    textarea: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-10">
        <label
          htmlFor="subject"
          className=" w-3/6 block text-gray-700 font-medium mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className=" w-3/6 border border-gray-400 p-2"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className=" w-3/6 block text-gray-700 font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className=" w-3/6 border border-gray-400 p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="textarea"
          className=" w-3/6 block text-gray-700 font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="textarea"
          name="textarea"
          value={formData.textarea}
          onChange={handleChange}
          className="border border-gray-400 p-2 w-3/6 h-32"
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;












// import { useState } from "react"


// export default function Contact() {
//     const [message, setMessage] = useState(null)

//     function onChange(e) {
//         setMessage(e.target.value)
//     }
 
//   return (

//   <main>
  
//   <div className="py-10 px-10 mx-0 min-w-full flex flex-col items-center">

//   <h2 
  
//     className="bg-white-600 text-4xl mb-3 animate-text bg-gradient-to-r from-teal-500
// via-purple-500
// to-orange-400 bg-clip-text text-transparent font-black
// transition duration-300 delay-300 ease-in-out cursor-pointer
// hover:from-orange-300 hover:via-purple-300 hover:to-teal-300"
//   >
//     Contact Us 
//   </h2>
//   <p class="text-black">Kickstart your house listing, selling and renting right now</p>
// </div>


// <div>

//   <textarea
//     className="
//       form-control
//       ml-20
//       mb-3
//       px-3
//       py-1.5
//       text-base
//       font-normal
//       text-gray-700
//       bg-white bg-clip-padding
//       border border-solid border-gray-300
//       rounded
//       transition
//       ease-in-out
//       w-5/6
//       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//     "
//     id="message"
//     name="message"
//     rows="4"
//     placeholder="Your message"
//   ></textarea>

// </div>

// <div className="flex justify-center">
// <button class="bg-transparent hover:bg-blue-500 text-blue-700 
// font-semibold hover:text-white py-2 px-4 border border-blue-500 
// hover:border-transparent rounded">
//   Button
// </button>

// </div>

  
//   </main>
    

//   )
// }



















// import { doc, getDoc } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import { db } from '../firebase'

// export default function Contact(userRef, listing) {
//     const [contact, setContact] = useState(null)

//     useEffect(() => {
//         async function getContact() {
//             const docRef = doc (db, "users, userRef")
//             const docSnap = await getDoc (docRef);
//             if (docRef.exists()) {
//                 setContact(docSnap.data())
//                }else{
//                 toast.error("Could not make a contact")
//                }

//         }
//         getContact()
//  }, [userRef]  )
//   return <div>{contact !== null && contact.email}</div>
    
  
// }
