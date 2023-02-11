import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import Spinner from '../components/Spinner';
import { db } from '../firebase';
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {EffectFade, Autoplay, Navigation, Pagination} from "swiper"
import "swiper/css/bundle";
import { FaShare, FaMapMarkerAlt, FaBed, FaBath, FaParking } from 'react-icons/fa';
import { MdChair} from 'react-icons/md';
import ContactForm from "../components/ContactForm";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


// to get listing id use param from react router dom and create a const param
// call a const called docRef = doc from the firestore and db from firebase
// after that write the lisiting and lisitingid which is coming for app.js as a parameter
//to get the data, use docSnap and set await to getDoc(docRef)

export default function Listing() {
    const auth = getAuth()  ;
    const params = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [shareLinkCopy, setShareLinkCopy] = useState(false);
    
    // const [contactLandlord, setContactLandlord] = useState(false);
    SwiperCore.use([Autoplay, Navigation, Pagination]);
    useEffect(() => {
      async function fetchListing() {
        const docRef = doc(db, "listings", params.listingId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setListing(docSnap.data());
          setLoading(false);

            }
        }
        fetchListing();
        
}, [params.listingId]);
    if (loading) {
        return <Spinner />
    }

  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative z-10 w-full overflow-hidden h-[300px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="fixed top-[13%] right-[1%] z-10 bg-white cursor-pointer
             border-2 border-red-300 rounded-full w-9 h-12 flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopy(true);
          setTimeout(() => {
            setShareLinkCopy(false);
          }, 2000);
        }}
      >
        <FaShare className="text-lg text-slate-500" />
      </div>

      {shareLinkCopy && (
        <p
          className="fixed top-[23%] right-[5%] font-semibold border-2
       border-gray-300 rounded-md bg-white z-10 p-2"
        >
          Link Copied
        </p>
      )}


      {/* Dashboard for banner description and map location*/}
      <div
        className="m-4 flex flex-col md:flex-row max-w-6xl lg:mx-auto p-4 
        rounded-lg shadow-2xl border-5 bg-white lg:space-x-5 "
      >
        {/* Banner description */}

        <div className="bg-pink-300 w-full h-[220px] lg-[420px] drop-shadow-2xl">
          {/* Heading content */}

          <p className=" text-1xl font-semibold mt-3 mb-1 ml-5 text-blue-600">
            {listing.name} - ${" "}
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" ? " / month" : ""}
          </p>

          {/* Address icon mapping*/}

          <p className="flex items-center text-center font-semibold mt-1 mb-1">
            <FaMapMarkerAlt className="text-green-700 mr-2 ml-5" />
            {listing.address}
          </p>

          {/* Start: Sale/Rent, Discount listings and Description listing*/}

          <div className="flex justify-start items-center space-x-4 w-[75%] ml-5">
            {/* Sale/Rent listing*/}
            <p
              className=" bg-indigo-500 shadow-lg shadow-indigo-500/50 w-full max-w-[200px] 
              p-1 rounded-md text-white text-center font-semibold"
            >
              {listing.type === "rent" ? "Rent" : "Sale"}
            </p>

            {/* Discount listing*/}

            {listing.offer && (
              <p
                className="w-full max-w-[200px] bg-red-800 shadow-lg shadow-red-500/50 rounded-md 
              p-1 text-center text-white font-semibold"
              >
                ${+listing.regularPrice - +listing.discountedPrice} Discount{" "}
              </p>
            )}
          </div>

          {/* Description */}

          <p className="mt-2 mb-2 ml-5">
            <span className="font-semibold">Description - </span>
            {listing.description}
          </p>

          {/* Bedroom and Bathroom Icons/listing*/}

          <ul className="flex items-center ml-5 space-x-3 sm:space-x-10 font-semibold text-sm ">
            {/* Bedroom Icons/listing*/}
            <li className="flex items-center whitespace-nowrap">
              <FaBed className="text-lg text-red-800 mr-1" />

              {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds ` : "1 Bed"}
            </li>

            {/* Bathroom Icons/listing*/}
            <li className="flex items-center whitespace-nowrap">
              <FaBath className="text-lg text-red-800 mr-1" />

              {+listing.bathrooms > 1 ? `${listing.bathrooms} Baths ` : "1 Bed"}
            </li>

            {/* Parking Icons/listing*/}
            <li className="flex items-center whitespace-nowrap">
              <FaParking className="text-lg text-red-800 mr-1" />

              {listing.parking ? "Parking spot" : "No parking spot"}
            </li>

            {/* Furnished Icons/listing*/}
            <li className="flex items-center whitespace-nowrap">
              <MdChair className="text-lg text-red-800 mr-1" />

              {listing.furnished ? "Furnished" : "Not furnished"}
            </li>
          </ul>
        </div>

              {/*Implement mapping using leaflet  */}
        <div
          className="bg-blue-300 w-full h-[220px] lg-[420px] 
        z-10 overflow-x-hidden shadow-2xl  "
        >

    <MapContainer center={[listing.geolocation.lat, listing.geolocation.lng]} 
    zoom={13} scrollWheelZoom={false}
    style= {{height: "100%", width:"100%"}} 
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
      <Popup>
        {listing.address}
      </Popup>
    </Marker>
  </MapContainer>
             
  </div>
  </div>

       
    <ContactForm />
      

    </main>
  );
}

